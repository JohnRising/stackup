import {Platform} from 'react-native';
import create from 'zustand';
import {persist, devtools} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';

interface MasterPassword {
  password: string;
  salt: string;
}

interface FingerprintState {
  loading: boolean;
  isSupported: boolean;
  isEnabled: boolean;

  checkDevice: () => Promise<void>;
  setMasterPassword: (password: string, salt: string) => Promise<void>;
  getMasterPassword: () => Promise<MasterPassword | undefined>;
  resetMasterPassword: () => Promise<void>;

  hasHydrated: boolean;
  setHasHydrated: (flag: boolean) => void;
}

const STORE_NAME = 'stackup-fingerprint-store';
const useFingerprintStore = create<FingerprintState>()(
  devtools(
    persist(
      set => ({
        loading: false,
        isSupported: false,
        isEnabled: false,

        checkDevice: async () => {
          set({loading: true});

          const biometryType = await Keychain.getSupportedBiometryType();
          const isSupported =
            (Platform.OS === 'ios' &&
              biometryType === Keychain.BIOMETRY_TYPE.TOUCH_ID) ||
            (Platform.OS === 'android' &&
              biometryType === Keychain.BIOMETRY_TYPE.FINGERPRINT);

          set({loading: false, isSupported});
        },

        setMasterPassword: async (password, salt) => {
          set({loading: true});

          await Keychain.setGenericPassword(salt, password, {
            accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
          });

          set({loading: false, isEnabled: true});
        },

        getMasterPassword: async () => {
          set({loading: true});

          const credentials = await Keychain.getGenericPassword();

          set({loading: false});
          return credentials
            ? {password: credentials.password, salt: credentials.username}
            : undefined;
        },

        resetMasterPassword: async () => {
          set({loading: true});

          await Keychain.resetGenericPassword();

          set({loading: false, isEnabled: false});
        },

        hasHydrated: false,
        setHasHydrated: flag => {
          set({hasHydrated: flag});
        },
      }),
      {
        name: STORE_NAME,
        getStorage: () => AsyncStorage,
        partialize: state => {
          const {loading, hasHydrated, ...persisted} = state;
          return persisted;
        },
        onRehydrateStorage: () => state => {
          state?.setHasHydrated(true);
        },
      },
    ),
    {name: STORE_NAME},
  ),
);

export const useFingerprintStoreRemoveWalletSelector = () =>
  useFingerprintStore(state => ({
    resetMasterPassword: state.resetMasterPassword,
  }));

export const useFingerprintStoreAuthSelector = () =>
  useFingerprintStore(state => ({
    isEnabled: state.isEnabled,
    checkDevice: state.checkDevice,
    getMasterPassword: state.getMasterPassword,
    hasHydrated: state.hasHydrated,
  }));

export const useFingerprintStoreCreateWalletSelector = () =>
  useFingerprintStore(state => ({
    loading: state.loading,
    isSupported: state.isSupported,
    setMasterPassword: state.setMasterPassword,
  }));