import React, { Component } from 'react';

export default class PricingTable extends Component {
    render() {
        return (
            <section className="price-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <span className="cate">pricing plan</span>
                        <h2 className="title">bulk SMS price plan</h2>
                    </div>
                    <div className="row mb-30-none justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="price-item wow fadeInUp" data-wow-delay=".3s">
                                <div className="price-header">
                                    <span className="category">BASIC</span>
                                    <h3 className="sub-title">0.33$<span>sms</span></h3>
                                </div>
                                <ul>
                                    <li>
                                        <span>validity</span>06 Month
                                    </li>
                                    <li>
                                        <span>quantity</span>600 SMS
                                    </li>
                                    <li>
                                        <span>discount</span>05%
                                    </li>
                                    <li>
                                        <span>24/7</span>yes
                                    </li>
                                    <li>
                                        <span>worldwide access</span>yes
                                    </li>
                                    <li>
                                        <a href="#0" className="custom-button">try now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="price-item wow fadeInUp" data-wow-delay=".3s">
                                <div className="price-header">
                                    <span className="category">STANDARD</span>
                                    <h3 className="sub-title">0.23$<span>sms</span></h3>
                                </div>
                                <ul>
                                    <li>
                                        <span>validity</span>06 Month
                                    </li>
                                    <li>
                                        <span>quantity</span>600 SMS
                                    </li>
                                    <li>
                                        <span>discount</span>05%
                                    </li>
                                    <li>
                                        <span>24/7</span>yes
                                    </li>
                                    <li>
                                        <span>worldwide access</span>yes
                                    </li>
                                    <li>
                                        <a href="#0" className="custom-button">try now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="price-item wow fadeInUp" data-wow-delay=".3s">
                                <div className="price-header">
                                    <span className="category">PREMIUM</span>
                                    <h3 className="sub-title">0.40$<span>sms</span></h3>
                                </div>
                                <ul>
                                    <li>
                                        <span>validity</span>06 Month
                                    </li>
                                    <li>
                                        <span>quantity</span>600 SMS
                                    </li>
                                    <li>
                                        <span>discount</span>05%
                                    </li>
                                    <li>
                                        <span>24/7</span>yes
                                    </li>
                                    <li>
                                        <span>worldwide access</span>yes
                                    </li>
                                    <li>
                                        <a href="#0" className="custom-button">try now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
