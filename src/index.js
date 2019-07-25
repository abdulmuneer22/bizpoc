import React, { Component } from 'react'
import configureStore from './redux/store'
import { Provider } from "react-redux";

import Navigator from './navigation'
const {store} = configureStore()

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>

            
        )
    }
}

export default App
