import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../pages/Loading';
import config from 'react-global-configuration';
import { connect } from "react-redux";

const mapStateToProps = (state,ownProps) => {
    if(ownProps.pageSource === 'homePage'){
        return {
            ...state,
            homePageSkills:state.skillsReducer.allskills.slice(0, 3)
        }
    } else if(ownProps.pageSource === 'servicePage'){
        return {
            ...state,
            homePageSkills:state.skillsReducer.allskills
        }
    }
}
const image_style = {width: "350px",height: "235px" };
class WhatWeDo extends Component {
    render() {
        return (
            <section className="service-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <h2 className="title">My Technical Expertise</h2>
                    </div>
                    <div className="row justify-content-center mb-30-none">
                        <Loading loading_status={this.props.skillsReducer.loader} />
                        {this.props.homePageSkills.map((skills_data, index) => (
                            <SingelSkillComponent key={index} oneSkill={skills_data}/>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
export default connect(mapStateToProps)(WhatWeDo);
const SingelSkillComponent = props => {
    return (
        <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="case-item">
                <div className="case-thumb">
                    <NavLink to={`${props.oneSkill.skills_name}/skills_details/${btoa(props.oneSkill.id)}`}>
                        <img style={image_style} src={config.get('api_image_url') + props.oneSkill.image} alt="case" />
                    </NavLink>
                </div>
                <div className="case-content">
                    <h4 className="title">
                        <NavLink to={`${props.oneSkill.skills_name}/skills_details/${btoa(props.oneSkill.id)}`}> {props.oneSkill.skills_name} </NavLink>
                    </h4>
                    <p> {props.oneSkill.descriptions.substr(0, 100)} </p>
                </div>
            </div>
        </div>
    )
}