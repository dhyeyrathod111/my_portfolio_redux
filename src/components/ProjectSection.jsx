import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Loading from '../pages/Loading';
import config from 'react-global-configuration';
import { connect } from "react-redux";

const mapDispatchToProps = state => {
    return state;
}

class ProjectSection extends Component {
    render() {
        return (
            <section className="case-section padding-bottom padding-top">
                <div className="container">
                    <div className="row mb-30-none justify-content-center">
                        <Loading loading_status={this.props.projectReducer.loader} />
                        {this.props.projectReducer.allProjects.map((oneProject, index) => (
                            <OneProjectComp projectData={oneProject} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
export default connect(mapDispatchToProps)(ProjectSection);

const OneProjectComp = props => {
    return (
        <div className="col-sm-10 col-md-6 col-lg-4" >
            <div className="case-item">
                <div className="case-thumb">
                    <NavLink to={`${props.projectData.title}/details/${btoa(props.projectData.id)}`}>
                        <img src={config.get('api_image_url') + props.projectData.file_name} alt={props.projectData.title} />
                    </NavLink>
                </div>
                <div className="case-content">
                    <h4 className="title">
                        <NavLink to={`${props.projectData.title}/details/${btoa(props.projectData.id)}`}>
                            {props.projectData.title}
                        </NavLink>
                    </h4>
                </div>
            </div>
        </div>
    )
}