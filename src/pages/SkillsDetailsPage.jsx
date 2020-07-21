import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import SkillsDetails from '../components/SkillsDetails';
import CounterUp from '../components/CounterUp';
import Footer from '../components/Footer';

export default class SkillsDetailsPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Helmet>
                    <title>{this.props.match.params.skill_name} Developer in Mumbai | Dhyey Rathod</title>
                    <meta name="description" content={`Professional ${this.props.match.params.skill_name} developer in mumbai, India. ${this.props.match.params.skill_name} development services for web apps, portal, mobile API, eCommerce.`} />
                </Helmet>
                <PageHead headValue={this.props.match.params.skill_name} />  
                <Breadcrumb pageName={'Services'} pageNameTwo={this.props.match.params.skill_name} />
                <SkillsDetails skills_data={this.props.match.params}/>
                <CounterUp />
                <Footer />
            </React.Fragment>
        );
    }
}
