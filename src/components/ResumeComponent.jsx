import React, { useState } from 'react';
import config from 'react-global-configuration';

const Education = props => {
    return (
        <div className="container">
            <div className="section-header">
                <h2 className="title">Education</h2>
            </div>
            <div className="row mb-30-none justify-content-center">
                <div className="col-md-12">
                    <div className="reseller-item reseller-item-two text-center">
                        <div className="reseller-content">
                            <h5 className="title">SSC(2009 - 2010)</h5>
                            <p>Studied at Mumbai University</p>
                            <p>Certified SSC from Mumbai University</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="reseller-item reseller-item-two text-center">
                        <div className="reseller-content">
                            <h5 className="title">HSC(2012 - 2013)</h5>
                            <p>Studied at Mumbai University</p>
                            <p>Certified SSC from Mumbai University</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="reseller-item reseller-item-two text-center">
                        <div className="reseller-content">
                            <h5 className="title">BCA(2016 - 2017)</h5>
                            <p>Studied at Atharva Institute of Information Technology (AIIT)</p>
                            <p>Certified SSC from Mumbai AIIT</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const WorkExperience = props => {
    return (
        <div className="container">
            <div className="section-header">
                <h2 className="title">Work experience</h2>
            </div>

            <div className="row mb-30-none justify-content-center">
                <div className="col-md-12">
                    <div className="reseller-item reseller-item-two text-center">
                        <div className="reseller-content">
                            <h5 className="title"> Webinfotech - 1.5 year experience (2017-2018) </h5>
                            <p>Senior PHP Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-30-none justify-content-center">
                <div className="col-md-12">
                    <div className="reseller-item reseller-item-two text-center">
                        <div className="reseller-content">
                            <h5 className="title">WDIPL - 1 year experience (2019-2020)</h5>
                            <p>Junior PHP Developer</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

const ResumeComponent = (props) => {

    const [active, setActive] = useState('work');
    const pointMark = {cursor:"pointer"}

    return (
        <section className="faq-section padding-top padding-bottom">
            <div className="container">
                <div className="row">
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
                            <div className="widget widget-category">
                                <div className="widget-header">
                                    <h5 className="title">Life Line</h5>
                                </div>
                                <ul>
                                    <li style={pointMark}><a onClick={() => setActive('work')}>Work Experience</a></li>
                                    <li style={pointMark}><a onClick={() => setActive('education')}>Education</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div className="col-md-8">
                        {active === 'work' ? <WorkExperience /> : <Education />}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ResumeComponent;
