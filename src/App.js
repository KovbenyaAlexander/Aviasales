import { connect } from "react-redux";
import asyncGetData from "./redux/actions/thunk/asyncGetData";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";

function App({ getData }) {
  const URL = "https://front-test.beta.aviasales.ru/tickets?searchId=4s6hd";
  getData(URL);

  return (
    <div className="App">
      <Filter />
      <Sort />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => {
      dispatch(asyncGetData(url));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
