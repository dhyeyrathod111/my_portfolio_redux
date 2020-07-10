import React, { Component } from 'react';

export default class CounterUp extends Component {
    render() {
        return (
            <section className="counter-up-section">
                <div className="container">
                    <div className="counter-wrapper">

                        <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                            <div className="counter-header">
                                <i className="flaticon-call-center" />
                                <h2 className="title">
                                    <span className="counter">5</span>
                                </h2>
                            </div>
                            <p>Total projects</p>
                        </div>

                        <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                            <div className="counter-header">
                                <i className="flaticon-happiness" />
                                <h2 className="title">
                                    <span className="counter">6</span>
                                </h2>
                            </div>
                            <p>Total skills</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}
