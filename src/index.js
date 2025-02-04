import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import catsReducer from "./features/cats/catsSlice"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.min.css";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(catsReducer, composedEnhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
