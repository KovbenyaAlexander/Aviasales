import { connect } from "react-redux";
import asyncGetData from "./redux/actions/thunk/asyncGetData";

function App({ getData }) {
  const URL = "https://front-test.beta.aviasales.ru/tickets?searchId=vhg6";
  getData(URL);
  return <div className="App"></div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => {
      dispatch(asyncGetData(url));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
