import {
  SET_DATA,
  FILTER_ALL,
  FILTER_WITHOUT_TRANSFER,
  FILTER_ONE_TRANSFER,
  FILTER_TWO_TRANSFER,
  FILTER_THREE_TRANSFER,
} from "./actionsTypes";

export function set_data(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}
export function filter_all() {
  return {
    type: FILTER_ALL,
  };
}
export function filter_without_transfer() {
  return {
    type: FILTER_WITHOUT_TRANSFER,
  };
}
export function filter_one_transfer() {
  return {
    type: FILTER_ONE_TRANSFER,
  };
}
export function filter_two_transfer() {
  return {
    type: FILTER_TWO_TRANSFER,
  };
}
export function filter_three_transfer() {
  return {
    type: FILTER_THREE_TRANSFER,
  };
}
