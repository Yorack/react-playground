import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookActions} from '../actions'

class SearchBar extends Component {
    render() {
        return (
            <form className="input-group">
                <input type="text" name="search" id="search"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-scondary" >Submit</button>
                </span>
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = dispatch => ({
    bookActions: bindActionCreators(bookActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);