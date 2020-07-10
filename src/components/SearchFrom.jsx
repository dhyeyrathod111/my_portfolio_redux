import React, { Component } from 'react';

export default class SearchForm extends Component {
    render() {
        return (
            <div className="search-form-area">
                <span className="hide-form">
                    <i className="fas fa-times" />
                </span>
                <form className="search-form">
                    <input type="text" placeholder="Search Here" />
                    <button type="submit"><i className="flaticon-search" /></button>
                </form>
            </div>
        );
    }
}
