import axios from "axios";
import { set_data } from "../actions";

const asyncGetData = (url) => {
  const KEY_URL = "https://front-test.beta.aviasales.ru/search";
  const DATA_URL = "https://front-test.beta.aviasales.ru/tickets?searchId=";

  return (dispatch) => {
    axios.get(KEY_URL).then((resp) => {
      const search_id = resp.data.searchId;
      axios.get(`${DATA_URL}${search_id}`).then((resp) => {
        dispatch(set_data(resp.data.tickets));
      });
    });
  };
};

export default asyncGetData;
