/*
 *
 * Products reducer
 *
 */

import { DEFAULT_ACTION, TOGGLE_MENU } from './constants';

const initialState = {
  isMenuOpen: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return {
        ...state
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};

export default productsReducer;
