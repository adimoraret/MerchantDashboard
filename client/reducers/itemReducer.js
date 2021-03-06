/* eslint-disable indent */
import * as actionTypes from '../actions/actionTypes'; //eslint-disable-line no-unused-vars
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS_SUCCESS:
      {
        return action.items.reduce((items, item) => {
          return [...items, {
            ...item,
            checked: false,
            disabled: false
          }];
        }, []);
      }
    case actionTypes.ITEM_CREATED_OR_UPDATED:
    case actionTypes.ITEM_PREVIEW_UPDATED:
      {
        const items = [...state];
        const currentItemIndex = items.findIndex(item => item.itemID === action.item.itemID);

        if (currentItemIndex === -1) {
          return [...state, action.item];
        } else { //eslint-disable-line no-else-return
          items.splice(currentItemIndex, 1, action.item);
          return [...items];
        }
      }
    case actionTypes.ITEM_DEACTIVATED_SUCCESS:
      {
        const items = [...state];
        const reducedItemList = items.filter(item => item.itemID !== action.item.itemID);
        return [...reducedItemList];
      }
    case actionTypes.ITEM_DEACTIVATED:
    case actionTypes.ITEM_CHECKED:
      {
        const items = [...state];
        const selectedItemIndex = items.findIndex(item => item.itemID === action.item.itemID);
        items.splice(selectedItemIndex, 1, action.item);
        return [...items];
      }
    default:
      {
        return state;
      }
  }
}
