import React, { Component } from 'react';

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import WhatWeOffer from '../components/WhatWeOffer';
import Breadcrumb from '../components/Breadcrumb';
import SmsTesting from '../components/SmsTesting';
import ClientSay from '../components/ClientSay';
// import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default class AboutPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={'About Me'} />
                <Breadcrumb pageName={'About'} />
                <WhatWeOffer />
                <ClientSay />
                <SmsTesting />   
                <Footer />
            </React.Fragment>
        );
    }
}
