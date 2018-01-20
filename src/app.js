import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/createStore";
import App from "./containers/App";

const render = App => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById("app")
    );
};
render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
    const NextApp = require("./containers/App").default;
    render(NextApp);
}
