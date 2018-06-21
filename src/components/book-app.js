import React, { Component } from 'react';
import BookList from '../containers/book-list';


export default class BookApp extends Component {
    render() {
        return (
            <div>
                <BookList />
            </div>
        );
    }
};

