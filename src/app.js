import React, { Component } from 'react';

import Home from './home';
import VideoApp from './Youtube/video-app';
import BookApp from './Library/book-app';
import WeatherApp from './Weather/weather-app';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/video">Video</Link>
                        </li>
                        <li>
                            <Link to="/book">Book</Link>
                        </li>
                        <li>
                            <Link to="/weather">Weather</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/video" component={VideoApp} />
                    <Route path="/book" component={BookApp} />
                    <Route path="/weather" component={WeatherApp} />
                </div>
            </Router>
        );
    }
}