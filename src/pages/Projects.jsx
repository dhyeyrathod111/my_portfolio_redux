import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

export default class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Helmet>
                    <title>Website Developer In Mumbai Work Portfolio | Dhyey Rathod</title>
                    <meta name="description" content="View Dhyey Rathod&#039; latest work including web development, mobile apps, digital marketing &amp; SEO projects.Contact Me today for your business growth opportunities." />
                </Helmet>
                <PageHead headValue={'My projects'} />
                <Breadcrumb pageName={'service'} />
                <ProjectSection />
                <Footer />
            </React.Fragment>
        );
    }
}
