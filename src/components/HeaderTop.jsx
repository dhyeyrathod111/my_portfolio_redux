import React, { Component } from 'react';
import config from 'react-global-configuration';

export default class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top d-none d-md-block bg-theme">
                <div className="container">
                    <div className="header-top-wrapper">
                        <div className="row">
                            <div className="col-md-8">
                                <ul>
                                    <li className="mr-3">
                                        <a href="Tel:+91 9967313968"><i className="fas fa-phone-square" />+91 9967313968</a>
                                    </li>
                                    <li>
                                        <a href="Mailto:dhyeyrathod111@gmail.com"><i className="fas fa-envelope" />dhyeyrathod111@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 d-flex flex-wrap align-items-center justify-content-end">
                                <ul className="social">
                                    <li>
                                        <a target="_blank" href={config.get('facebook_url')}>
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href={config.get('instagram_url')}>
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
