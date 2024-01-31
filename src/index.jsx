import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StatProvider";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
