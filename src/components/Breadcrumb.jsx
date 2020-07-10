import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Breadcrumb extends Component {

    render() {
        return (
            <div className="breadcrumb-section">
                <div className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to={'#'}>{this.props.pageName}</Link>
                        </li>
                        <li>
                            {this.props.pageNameTwo}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
