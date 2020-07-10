import React, { Component } from 'react';

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';

export default class Services extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={'Our Services'} />
                <Breadcrumb pageName={'Services'} />
                <WhatWeDo pageSource={'servicePage'}/>
                <Footer />
            </React.Fragment>
        );
    }
}