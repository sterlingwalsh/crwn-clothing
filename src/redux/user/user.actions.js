import { User } from '../action-types';

export const setCurrentUser = user => ({
  type: User.SET_CURRENT_USER,
  payload: user
});
