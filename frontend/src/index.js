import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Store/store";
import { Provider } from "react-redux";
import { disbleReactDevTools } from "@fvilers/disable-react-devtools"; 

if(process.env.NODE_ENV === "production") '@fvilers/disble-react-devTools';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
