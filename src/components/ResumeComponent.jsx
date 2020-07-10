import React from 'react';
import config from 'react-global-configuration';
import { Accordion, Card } from 'react-bootstrap';

const ResumeComponent = (props) => {
    return (
        <section className="faq-section padding-top padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="faq-area">
                            <h3 className="main-title">EDUCATION</h3>
                            <div className="faq-wrapper">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Toggle variant="link" eventKey="0">
                                        <div className="faq-title">
                                            <h6 className="title">SSC - 2009 - 2010</h6>
                                            <span className="right-icon" />
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <div className="faq-content">
                                            <p> <b> Studied at Mumbai University </b> </p>
                                            <p> <b> Certified SSC from Mumbai University </b> </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>


                                <Accordion defaultActiveKey="2">
                                    <Accordion.Toggle variant="link" eventKey="0">
                                        <div className="faq-title">
                                            <h6 className="title">HSC - 2012 - 2013</h6>
                                            <span className="right-icon" />
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <div className="faq-content">
                                            <p> <b> Studied at Mumbai University </b> </p>
                                            <p> <b> Certified SSC from Mumbai University </b> </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>

                                <Accordion defaultActiveKey="3">
                                    <Accordion.Toggle variant="link" eventKey="0">
                                        <div className="faq-title">
                                            <h6 className="title">BCA(Bachelor in Computer Application) - 2016 - 2017</h6>
                                            <span className="right-icon" />
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <div className="faq-content">
                                            <p> <b> Studied at Atharva Institute of Information Technology (AIIT) </b> </p>
                                            <p> <b> Certified SSC from Mumbai AIIT </b> </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>

                            </div>
                            <h3 className="main-title">EXPERIENCE</h3>
                            <div className="faq-wrapper">
                                <Accordion defaultActiveKey="4">
                                    <Accordion.Toggle variant="link" eventKey="0">
                                        <div className="faq-title">
                                            <h6 className="title"> Webinfotech - 1.5 year experience (2017-2018) </h6>
                                            <span className="right-icon" />
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <div className="faq-content">
                                            <p> <b> Senior PHP Developer </b> </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>
                                <Accordion defaultActiveKey="4">
                                    <Accordion.Toggle variant="link" eventKey="0">
                                        <div className="faq-title">
                                            <h6 className="title"> WDIPL - 1 year experience (2019-2020) </h6>
                                            <span className="right-icon" />
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">   
                                        <div className="faq-content">
                                            <p><b> Junior PHP Developer </b></p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <aside className="sidebar">
                            <div className="widget widget-category">
                                <div className="widget-header">
                                    <h5 className="title">Download Resume</h5>
                                </div>
                                <ul>
                                    <li>
                                        <a href={config.get('api_image_url') + '/dhyey_resume.docx'}>
                                            <button className="btn btn-block btn-success"> Download </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ResumeComponent;
