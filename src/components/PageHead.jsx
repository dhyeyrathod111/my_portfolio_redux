import React, { Component } from 'react';

export default class PageHead extends Component {
    render() {
        return (
            <section className="hero-area bg_img" data-background="/assets/images/page-header.jpg">
                <div className="container">
                    <h1 className="title m-0">{this.props.headValue}</h1>
                </div>
            </section>
        );
    }
}
