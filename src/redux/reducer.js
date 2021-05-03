import {
  SET_DATA,
  FILTER_ALL,
  FILTER_WITHOUT_TRANSFER,
  FILTER_ONE_TRANSFER,
  FILTER_TWO_TRANSFER,
  FILTER_THREE_TRANSFER,
  SWITCH_SORT,
  SHOW_ADDITIONAL_CARDS,
} from "./actions/actionsTypes";

const initialState = {
  data: null,
  filter_all_checked: false,
  filter_without_transfer_checked: false,
  filter_one_transfer_checked: false,
  filter_two_transfer_checked: false,
  filter_three_transfer_checked: false,
  is_sort_by_cheapest: true,
  countOfListItems: 5,
};

export default function reducer(state = initialState, action) {
  // console.log(action);

  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case FILTER_ALL:
      return {
        ...state,
        filter_all_checked: !state.filter_all_checked,
      };
    case FILTER_WITHOUT_TRANSFER:
      return {
        ...state,
        filter_without_transfer_checked: !state.filter_without_transfer_checked,
      };
    case FILTER_ONE_TRANSFER:
      return {
        ...state,
        filter_one_transfer_checked: !state.filter_one_transfer_checked,
      };
    case FILTER_TWO_TRANSFER:
      return {
        ...state,
        filter_two_transfer_checked: !state.filter_two_transfer_checked,
      };
    case FILTER_THREE_TRANSFER:
      return {
        ...state,
        filter_three_transfer_checked: !state.filter_three_transfer_checked,
      };
    case SWITCH_SORT:
      return {
        ...state,
        is_sort_by_cheapest: !state.is_sort_by_cheapest,
      };
    case SHOW_ADDITIONAL_CARDS:
      return {
        ...state,
        countOfListItems: state.countOfListItems + 5,
      };
    default:
      break;
  }

  return state;
}
