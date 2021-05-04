import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  // console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
