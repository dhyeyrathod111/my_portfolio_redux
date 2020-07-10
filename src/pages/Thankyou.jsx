import React, { Component } from 'react';

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import CounterUp from '../components/CounterUp';
import Footer from '../components/Footer';
import ThankyouComp from '../components/Thankyou';

export default class Thankyou extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={'Thank you'} />
                <Breadcrumb pageName={'Thankyou'} />
                <ThankyouComp />
                <CounterUp />
                <Footer />
            </React.Fragment>
        );
    }
}
