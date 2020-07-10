import React, { Component } from 'react';

export default class AddressInfo extends Component {
    render() {
        return (
            <section className="office-info padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2 className="title">
                            office contact info
                        </h2>
                    </div>
                    <div className="row justify-content-center mb-30-none">
                        
                        <div className="col-md-6 col-sm-10 col-lg-6">
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    {/* <img src="./assets/images/contact/call.png" alt="contact"> */}
                                    <i className="flaticon-call-center" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">phone number</h4>
                                    <ul>
                                        <li><a href="Tel:09967313968">+91 9967313968</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10 col-lg-6">
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    {/* <img src="./assets/images/contact/worldwide.png" alt="contact"> */}
                                    <i className="flaticon-global" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">email address</h4>
                                    <ul>
                                        <li>
                                            <a href="Mailto:dhyeyrathod111@gmail.com">dhyeyrathod111@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
