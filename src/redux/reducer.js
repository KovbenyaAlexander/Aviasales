import { SET_DATA } from "./actions/actionsTypes";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      break;
  }

  return state;
}
