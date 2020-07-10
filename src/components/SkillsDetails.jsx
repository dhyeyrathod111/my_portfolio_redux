import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import config from 'react-global-configuration';

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    let skill_id = atob(ownProps.skills_data.skill_id); let oneSkillObj = '';
    state.skillsReducer.allskills.map(item => {
        return (item.id === skill_id) ? oneSkillObj = item : '';
    })
    return { oneSkillObj }
}

class SkillsDetails extends Component {
    render() {
        const image_style = { width: 684, height: 494 };
        return (
            <React.Fragment>
                <section>
                    <div className="section-header padding-top">
                        <h4 className="title"> My expertise in this skill </h4>
                        <ProgressBar variant="success" now={this.props.oneSkillObj.lavel} label={`${this.props.oneSkillObj.lavel}%`} />
                    </div>
                </section>
                <section className="overview-four-section padding-bottom padding-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="overview-thumb text-right">
                                    <img style={image_style} src={config.get('api_image_url') + this.props.oneSkillObj.image} alt="overview-thumb" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="overview-four-content sp-align ml-lg-15-xl text-justify">
                                    <h2 className="title">{this.props.oneSkillObj.skills_name}</h2>
                                    <p>{this.props.oneSkillObj.descriptions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps)(SkillsDetails);