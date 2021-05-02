import axios from "axios";
import { set_data } from "../actions";

const asyncGetData = (url) => {
  return (dispatch) => {
    axios.get(url).then((resp) => {
      dispatch(set_data(resp.data));
    });
  };
};

export default asyncGetData;
