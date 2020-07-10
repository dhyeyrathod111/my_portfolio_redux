import React, { Component } from 'react';

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import Projectinfo from '../components/Projectinfo';
import CounterUp from '../components/CounterUp';
import Footer from '../components/Footer';

export default class ProjectDetails extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={this.props.match.params.project_name} />  
                <Breadcrumb pageName={'Projects'} pageNameTwo={this.props.match.params.project_name} />
                <Projectinfo project_id={this.props.match.params.project_id} />
                <CounterUp />
                <Footer />
            </React.Fragment>
        );
    }
}
