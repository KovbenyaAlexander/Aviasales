import { SET_DATA } from "./actionsTypes";

export function set_data(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}
