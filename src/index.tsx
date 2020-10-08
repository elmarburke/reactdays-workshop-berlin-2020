import React from "react";
import ReactDOM from "react-dom";
// $ yarn add @types/react-redux
// $ npm install @types/react-redux
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

import configureStore from "./configureStore";
import { addMessage } from "./redux/messages/actions";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

// @ts-ignore
window.store = store;

// store.dispatch(
//   addMessage({
//     id: `${Date.now()}-1`,
//     author: "Christian",
//     message: "Hallo Welt",
//     date: Date.now(),
//   })
// );

// store.dispatch(
//   addMessage({
//     id: `${Date.now()}-2`,
//     author: "Elmar",
//     message: "Hallo Welt",
//     date: Date.now(),
//   })
// );

const element = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(element, document.getElementById("root"));
