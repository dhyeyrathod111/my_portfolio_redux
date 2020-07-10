import React, { Component } from 'react';

// header-bar d-lg-none

import Header from '../components/Header';
import SearchForm from '../components/SearchFrom';
import Banner from '../components/Banner';
import WhatWeDo from '../components/WhatWeDo';
import WhatWeOffer from '../components/WhatWeOffer';
import ClientSay from '../components/ClientSay';
import CounterUp from '../components/CounterUp';
import Footer from '../components/Footer';

export default class Homepage extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchForm />
                <Banner />
                <WhatWeOffer />
                <WhatWeDo pageSource={'homePage'}/>
                <ClientSay />
                <CounterUp />
                <Footer />
            </React.Fragment>
        );
    }
}
