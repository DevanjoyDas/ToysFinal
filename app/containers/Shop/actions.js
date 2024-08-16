/*
 *
 * Shop actions
 *
 */

import { DEFAULT_ACTION, TOGGLE_MENU } from './constants';

export const defaultAction = () => {
  return {
    type: DEFAULT_ACTION
  };
};

export const toogleMenu = () => {
  return {
    type: TOGGLE_MENU
  };
};
