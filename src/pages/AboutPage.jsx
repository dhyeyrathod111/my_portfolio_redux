import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import WhatWeOffer from '../components/WhatWeOffer';
import Breadcrumb from '../components/Breadcrumb';
import SmsTesting from '../components/SmsTesting';
import Problems_solving from "../components/Problems_solving";
import Footer from '../components/Footer';

export default class AboutPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Website Developer In Mumbai About us | Dhyey Rathod</title>
                    <meta name="description" content="Rated the best developer in Mumbai, India. dhyeyrathod has worked with a range of renowned clients across multiple industries." />
                </Helmet>
                <Header />
                <PageHead headValue={'About Me'} />
                <Breadcrumb pageName={'About'} />
                <WhatWeOffer />
                <SmsTesting />   
                <Problems_solving />
                <Footer />
            </React.Fragment>
        );
    }
}
