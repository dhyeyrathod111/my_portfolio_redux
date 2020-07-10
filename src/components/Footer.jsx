import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                {/* <div className="footer-top padding-top padding-bottom">
                    <div className="container">
                        <div className="row mb-50-none">
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-widget footer-link">
                                    <h5 className="title">bulk SMS</h5>
                                    <ul>
                                        <li>
                                            <a href="#0">masking SMS</a>
                                        </li>
                                        <li>
                                            <a href="#0">Non-Masking SMS</a>
                                        </li>
                                        <li>
                                            <a href="#0">location based SMS</a>
                                        </li>
                                        <li>
                                            <a href="#0">Voice message</a>
                                        </li>
                                        <li>
                                            <a href="#0">promo SMS</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-widget footer-link">
                                    <h5 className="title">company</h5>
                                    <ul>
                                        <li>
                                            <a href="#0">about</a>
                                        </li>
                                        <li>
                                            <a href="#0">pricing plan</a>
                                        </li>
                                        <li>
                                            <a href="#0">faq</a>
                                        </li>
                                        <li>
                                            <a href="#0">testiminial</a>
                                        </li>
                                        <li>
                                            <a href="#0">promotion</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-widget footer-link">
                                    <h5 className="title">Partners</h5>
                                    <ul>
                                        <li>
                                            <a href="#0">kingstar</a>
                                        </li>
                                        <li>
                                            <a href="#0">laravala click</a>
                                        </li>
                                        <li>
                                            <a href="#0">yago</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-widget footer-about">
                                    <h5 className="title">about us</h5>
                                    <p>Tellus fermentum a aenean laoreet libero in, at convallis varius morbi.</p>
                                    <ul className="footer-social">
                                        <li>
                                            <a href="#0"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li>
                                            <a href="#0"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#0"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="#0"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-bottom py-3 py-sm-4 text-center">
                    <div className="container">
                        <p className="m-0"><Link to={'/'}>Dhyey Rathod</Link> All Rights reserved</p>
                    </div>
                </div>
            </footer>
        );
    }
}
