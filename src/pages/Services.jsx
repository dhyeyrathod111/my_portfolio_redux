import React, { Component } from 'react';

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