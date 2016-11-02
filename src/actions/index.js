import { CHANGE_AUTH } from './types';

export function authenticate(isLoggedIn) {
  return {
    action: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
