import React, { Component } from 'react';
import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import ProjectSection from '../components/ProjectSection';
import CounterUp from '../components/CounterUp';
import Footer from '../components/Footer';

export default class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={'My projects'} />
                <Breadcrumb pageName={'service'} />
                <ProjectSection />  
                <CounterUp />
                {/* <Blog /> */}
                <Footer />
            </React.Fragment>
        );
    }
}
