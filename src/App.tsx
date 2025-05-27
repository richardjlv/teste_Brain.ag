import React from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes";
import GlobalStyles from "./assets/styles/global";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
