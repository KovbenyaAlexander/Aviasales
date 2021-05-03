import { connect } from "react-redux";
import asyncGetData from "./redux/actions/thunk/asyncGetData";
import Filter from "./components/Filter/Filter";

function App({ getData }) {
  const URL = "https://front-test.beta.aviasales.ru/tickets?searchId=4ncwl";
  getData(URL);
  return (
    <div className="App">
      <Filter />
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
