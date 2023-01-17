
import React from 'react'
import Routers from './app/Routes';
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <Routers />
        </Provider>
    )
}

export default App