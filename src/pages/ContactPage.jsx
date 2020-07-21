import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import ContactUsForm from '../components/ContactUsForm';
import AddressInfo from '../components/AddressInfo';
import Footer from '../components/Footer';

export default class ContactPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Helmet>
                    <title>Website Developer Dhyey Rathod contact us | Dhyey Rathod</title>
                    <meta name="description" content="Rated the best developer in Mumbai, India. dhyeyrathod has worked with a range of renowned clients across multiple industries." />
                </Helmet>
                <PageHead headValue={'Contact us'} />
                <Breadcrumb pageName={'Contact us'} />
                <ContactUsForm />
                <AddressInfo />
                <Footer />
            </React.Fragment>
        );
    }
}
