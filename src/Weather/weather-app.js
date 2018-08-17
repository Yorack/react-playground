import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise'
import {Provider} from 'react-redux';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import reducers from './reducers';
import SearchBar from './containers/search-bar';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#d50000',
        },
    },
});

class WeatherApp extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <SearchBar/>
                </Provider>
            </MuiThemeProvider>
        );
    }
};

export default WeatherApp;
