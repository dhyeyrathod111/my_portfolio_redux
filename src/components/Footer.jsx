import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import config from 'react-global-configuration';
const mapStateToProps = state => {
    return {
        projectList: state.projectReducer.allProjects.slice(0, 6),
    }
}
const OneProject = props => {
    return (
        <li>
            <a target="_blank" href={props.projectDetails.website_url}>{props.projectDetails.title}</a>
        </li>
    )
}
const Footer = props => {
    return (
        <footer>
            <div className="footer-top padding-top padding-bottom">
                <div className="container">
                    <div className="row mb-50-none">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-widget footer-link">
                                <h5 className="title">Project</h5>
                                <ul>
                                    {props.projectList.map( ( item , index ) => (
                                        <OneProject projectDetails={item} key={index} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-widget footer-link">
                                <h5 className="title">Pages</h5>
                                <ul>
                                    <li>
                                        <Link to={'/'}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={'/about'}>about</Link>
                                    </li>
                                    <li>
                                        <Link to={'/projects'}>Projects</Link>
                                    </li>
                                    <li>
                                        <Link to={'/service'}>service</Link>
                                    </li>
                                    <li>
                                        <Link to={'/resume'}>resume</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact'}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-widget footer-about">
                                <h5 className="title">Social</h5>
                                <ul className="footer-social">
                                    <li>
                                        <a target="_blank" href={config.get('facebook_url')}><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href={config.get('instagram_url')}><i className="fab fa-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-3 py-sm-4 text-center">
                <div className="container">
                    <p className="m-0"><Link to={'/'}>Dhyey Rathod</Link> All Rights reserved</p>
                </div>
            </div>
        </footer>
    )
}
export default connect(mapStateToProps)(Footer);
