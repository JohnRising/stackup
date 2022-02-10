import amplitude from 'amplitude-js';
import { App } from '../config';
import { isClient } from './environment';

const analyticsURL = new URL(`${App.stackup.backendUrl}/proxy/analytics`);
isClient() &&
  amplitude.getInstance().init(App.amplitude.apiKey, null, {
    apiEndpoint: `${analyticsURL.host}${analyticsURL.pathname}`,
    forceHttps: process.env.NODE_ENV === 'production',
  });

export const EVENTS = {
  LOGIN: 'LOGIN',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_FINISH: 'SIGN_UP_FINISH',
  ENTER_FROM_WELCOME: 'ENTER_FROM_WELCOME',
  ONBOARD_OPEN_SKIP: 'ONBOARD_OPEN_SKIP',
  ONBOARD_CONFIRM_SKIP: 'ONBOARD_CONFIRM_SKIP',
  ONBOARD_ADD_EMAIL: 'ONBOARD_ADD_EMAIL',
  ONBOARD_SEND_CODE: 'ONBOARD_SEND_CODE',
  ONBOARD_VERIFY_EMAIL: 'ONBOARD_VERIFY_EMAIL',
  ONBOARD_CONFIRM_SETUP: 'ONBOARD_CONFIRM_SETUP',
  RECOVER_ACCOUNT_START: 'RECOVER_ACCOUNT_START',
  RECOVER_ACCOUNT_LOOKUP: 'RECOVER_ACCOUNT_LOOKUP',
  RECOVER_ACCOUNT_CREATE_NEW_PASSWORD: 'RECOVER_ACCOUNT_CREATE_NEW_PASSWORD',
  RECOVER_ACCOUNT_SEND_CODE: 'RECOVER_ACCOUNT_SEND_CODE',
  RECOVER_ACCOUNT_VERIFY_EMAIL: 'RECOVER_ACCOUNT_VERIFY_EMAIL',
  RECOVER_ACCOUNT_NOTIFY_GUARDIANS: 'RECOVER_ACCOUNT_NOTIFY_GUARDIANS',
  RECOVER_ACCOUNT_GUARDIAN_GO_TO_APPROVE: 'RECOVER_ACCOUNT_GUARDIAN_GO_TO_APPROVE',
  RECOVER_ACCOUNT_GUARDIAN_DEPLOY_WALLET: 'RECOVER_ACCOUNT_GUARDIAN_DEPLOY_WALLET',
  RECOVER_ACCOUNT_GUARDIAN_SIGN_OP: 'RECOVER_ACCOUNT_GUARDIAN_SIGN_OP',
  RECOVER_ACCOUNT_CONFIRM: 'RECOVER_ACCOUNT_CONFIRM',
  RECOVER_ACCOUNT_CONFIRM_SUCCESS: 'RECOVER_ACCOUNT_CONFIRM_SUCCESS',
  RECOVER_ACCOUNT_NOT_POSSIBLE: 'RECOVER_ACCOUNT_NOT_POSSIBLE',
  UPDATE_GUARDIANS_CHANGED: 'UPDATE_GUARDIANS_CHANGED',
  UPDATE_GUARDIANS_ADD_EMAIL: 'UPDATE_GUARDIANS_ADD_EMAIL',
  UPDATE_GUARDIANS_SEND_CODE: 'UPDATE_GUARDIANS_SEND_CODE',
  UPDATE_GUARDIANS_VERIFY_EMAIL: 'UPDATE_GUARDIANS_VERIFY_EMAIL',
  UPDATE_GUARDIANS_CONFIRM: 'UPDATE_GUARDIANS_CONFIRM',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  LOGOUT: 'LOGOUT',
  SEARCH_START: 'SEARCH_START',
  SEARCH_CLEAR: 'SEARCH_CLEAR',
  GO_TO_SEARCH_RESULT: 'GO_TO_SEARCH_RESULT',
  GOT_TO_ACTIVITY_ITEM: 'GOT_TO_ACTIVITY_ITEM',
  OPEN_PAY: 'OPEN_PAY',
  SEND_PAY: 'SEND_PAY',
  CONFIRM_PAY: 'CONFIRM_PAY',
  WALLET_CONNECT_START: 'WALLET_CONNECT_START',
  WALLET_CONNECT_CANCEL: 'WALLET_CONNECT_CANCEL',
  WALLET_CONNECT_WITH_QR: 'WALLET_CONNECT_WITH_QR',
  WALLET_CONNECT_WITH_TEXT: 'WALLET_CONNECT_WITH_TEXT',
  WALLET_CONNECT_DISCONNECT: 'WALLET_CONNECT_DISCONNECT',
  WALLET_CONNECT_REJECT_CALL_REQUEST: 'WALLET_CONNECT_REJECT_CALL_REQUEST',
  WALLET_CONNECT_APPROVE_PERSONAL_SIGN: 'WALLET_CONNECT_APPROVE_PERSONAL_SIGN',
  WALLET_CONNECT_APPROVE_ETH_SEND_TRANSACTION: 'WALLET_CONNECT_APPROVE_ETH_SEND_TRANSACTION',
  WALLET_CONNECT_UNSUPPORTED_CALL_REQUEST: 'WALLET_CONNECT_UNSUPPORTED_CALL_REQUEST',
};

export const logEvent = (event) => {
  amplitude.getInstance().logEvent(event);
};
