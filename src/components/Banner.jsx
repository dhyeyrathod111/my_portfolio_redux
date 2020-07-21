import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <section className="banner-section banner_edit">
                <div className="container">
                    <div className="banner-content  wow fadeInUp text-center" data-wow-delay=".3s">
                        <h1 className="title">Dhyey Rathod Website Designer And Developer.</h1>
                        <h1 className="title">My Excellent Services that will help to grow your Bussiness.</h1>
                        <div className="video-button-group">
                            <Link to="/contact" className="custom-button active">Contact me</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
