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
  displayedData: null,
  filter_all_checked: true,
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
      const dataFromApi = action.payload;
      const sortedDataFromApi = dataFromApi.sort((a, b) => {
        return a.price - b.price;
      });

      return {
        ...state,
        data: sortedDataFromApi,
        displayedData: sortedDataFromApi,
      };

    case FILTER_ALL:
      const all_data = listFilter(
        state.data,
        !state.filter_all_checked,
        state.filter_without_transfer_checked,
        state.filter_one_transfer_checked,
        state.filter_two_transfer_checked,
        state.filter_three_transfer_checked
      );

      return {
        ...state,
        displayedData: all_data,
        filter_all_checked: !state.filter_all_checked,
      };

    case FILTER_WITHOUT_TRANSFER:
      const without_transfer_data = listFilter(
        state.data,
        state.filter_all_checked,
        !state.filter_without_transfer_checked,
        state.filter_one_transfer_checked,
        state.filter_two_transfer_checked,
        state.filter_three_transfer_checked
      );
      return {
        ...state,
        displayedData: without_transfer_data,
        filter_without_transfer_checked: !state.filter_without_transfer_checked,
      };

    case FILTER_ONE_TRANSFER:
      const one_transfer_data = listFilter(
        state.data,
        state.filter_all_checked,
        state.filter_without_transfer_checked,
        !state.filter_one_transfer_checked,
        state.filter_two_transfer_checked,
        state.filter_three_transfer_checked
      );

      return {
        ...state,
        displayedData: one_transfer_data,
        filter_one_transfer_checked: !state.filter_one_transfer_checked,
      };

    case FILTER_TWO_TRANSFER:
      const two_transfer_data = listFilter(
        state.data,
        state.filter_all_checked,
        state.filter_without_transfer_checked,
        state.filter_one_transfer_checked,
        !state.filter_two_transfer_checked,
        state.filter_three_transfer_checked
      );
      return {
        ...state,
        displayedData: two_transfer_data,
        filter_two_transfer_checked: !state.filter_two_transfer_checked,
      };

    case FILTER_THREE_TRANSFER:
      const three_transfer_data = listFilter(
        state.data,
        state.filter_all_checked,
        state.filter_without_transfer_checked,
        state.filter_one_transfer_checked,
        state.filter_two_transfer_checked,
        !state.filter_three_transfer_checked
      );

      return {
        ...state,
        displayedData: three_transfer_data,
        filter_three_transfer_checked: !state.filter_three_transfer_checked,
      };

    case SWITCH_SORT:
      const newArr = [...state.displayedData];
      const is_sort_by_cheapest = !state.is_sort_by_cheapest;

      let sortedArr = [];
      console.log(state);

      if (!is_sort_by_cheapest) {
        sortedArr = newArr.sort((a, b) => {
          return a.segments[0].duration - b.segments[0].duration;
        });
      } else {
        sortedArr = newArr.sort((a, b) => {
          return a.price - b.price;
        });
      }

      let sortedAlldata = [];
      const newDataArr = state.data;
      if (!is_sort_by_cheapest) {
        sortedAlldata = newDataArr.sort((a, b) => {
          return a.segments[0].duration - b.segments[0].duration;
        });
      } else {
        sortedAlldata = newDataArr.sort((a, b) => {
          return a.price - b.price;
        });
      }

      return {
        ...state,
        data: sortedAlldata,
        is_sort_by_cheapest: is_sort_by_cheapest,
        displayedData: sortedArr,
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

const listFilter = (
  data,
  all_checked,
  without_transfer_checked,
  one_transfer_checked,
  two_transfer_checked,
  three_transfer_checked
) => {
  const res = [];

  if (all_checked) {
    return [...data];
  }

  if (without_transfer_checked) {
    data.forEach((item) => {
      if (!item.segments[0].stops.length || !item.segments[1].stops.length) {
        res.push(item);
      }
    });
  }

  if (one_transfer_checked) {
    data.forEach((item) => {
      if (
        item.segments[0].stops.length === 1 ||
        item.segments[1].stops.length === 1
      ) {
        res.push(item);
      }
    });
  }

  if (two_transfer_checked) {
    data.forEach((item) => {
      if (
        item.segments[0].stops.length === 2 ||
        item.segments[1].stops.length === 2
      ) {
        res.push(item);
      }
    });
  }

  if (three_transfer_checked) {
    data.forEach((item) => {
      if (
        item.segments[0].stops.length === 3 ||
        item.segments[1].stops.length === 3
      ) {
        res.push(item);
        console.log(res);
      }
    });
  }

  return res;
};
