import { connect } from "react-redux";
import asyncGetData from "./redux/actions/thunk/asyncGetData";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";
import List from "./components/List/List";

function App({ getData }) {
  const URL = "https://front-test.beta.aviasales.ru/tickets?searchId=3blei";
  getData(URL);

  return (
    <div className="App">
      <Filter />
      <Sort />
      <List />
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
