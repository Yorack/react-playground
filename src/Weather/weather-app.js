import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';
import SearchBar from './containers/search-bar';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class WeatherApp extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <SearchBar />
            </Provider>
        );
    }
};

