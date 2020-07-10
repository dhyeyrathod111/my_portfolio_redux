import React, { Component } from 'react';

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import ResumeComponent from '../components/ResumeComponent';
import Footer from '../components/Footer';

export default class ResumePage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={'MY RESUME'} />
                <Breadcrumb pageName={'RESUME'} />
                <ResumeComponent />
                <Footer />
            </React.Fragment>
        );
    }
}
