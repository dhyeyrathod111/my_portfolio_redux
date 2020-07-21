import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// header-bar d-lg-none

import Header from '../components/Header';
import SearchForm from '../components/SearchFrom';
import Banner from '../components/Banner';
import WhatWeDo from '../components/WhatWeDo';
import WhatWeOffer from '../components/WhatWeOffer';
import Footer from '../components/Footer';
import Problems_solving from "../components/Problems_solving";
import MainService from "../components/MainService";


export default class Homepage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />

                <Helmet>
                    <title>Website Developer and Designer  in Mumbai | Dhyey Rathod</title>
                    <meta name="description" content="Rated the best developer in Mumbai, India. dhyeyrathod has worked with a range of renowned clients across multiple industries." />
                </Helmet>

                <SearchForm />
                <Banner />
                <WhatWeOffer />
                <WhatWeDo pageSource={'homePage'} />
                <Problems_solving />
                <MainService />
                <Footer />
            </React.Fragment>
        );
    }
}
