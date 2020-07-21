import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';
import MainService from "../components/MainService";
import CounterUp from "../components/CounterUp";

export default class Services extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Helmet>
                    <title>Website Developer In Mumbai Services | Dhyey Rathod</title>
                    <meta name="description" content={`My Excellent Services That Will Help To Grow Your Bussiness | Dhyey Rathod`} />
                </Helmet>
                <PageHead headValue={'My Technical Expertise'} />
                <Breadcrumb pageName={'Technical Expertise'} />
                <WhatWeDo pageSource={'servicePage'}/>
                <CounterUp />
                <MainService />
                <Footer />
            </React.Fragment>
        );
    }
}