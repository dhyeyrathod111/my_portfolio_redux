import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import config from 'react-global-configuration';

import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Projetcs from './pages/Projects';
import Services from './pages/Services';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import ProjectDetails from './pages/ProjectDetails';
import SkillsDetailsPage from './pages/SkillsDetailsPage';
import Thankyou from './pages/Thankyou';
import ResumePage from './pages/ResumePage';

config.set({
    api_url: 'http://localhost/dhyey_rathod/React/my_portfolio/apistacksetup/API/',
    api_image_url: 'http://localhost/dhyey_rathod/React/my_portfolio/apistacksetup/',
    facebook_url: 'https://www.facebook.com/dhyey.rathod.98',
    instagram_url:'https://www.instagram.com/prince.rathod111/'
});

// config.set({ 
//     api_url:'http://dhyeyrathod.rf.gd/apistacksetup/API/',
//     api_image_url:'http://dhyeyrathod.rf.gd/apistacksetup/',
//     facebook_url: 'https://www.facebook.com/dhyey.rathod.98',
//     instagram_url:'https://www.instagram.com/prince.rathod111/'
// });



export default class App extends Component {
    render() {
        return (
            <section>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/projects" component={Projetcs} />
                        <Route exact path="/service" component={Services} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/thankyou" component={Thankyou} />
                        <Route exact path="/resume" component={ResumePage} />
                        <Route path="/:project_name/details/:project_id" component={ProjectDetails} />
                        <Route path="/:skill_name/skills_details/:skill_id" component={SkillsDetailsPage} />
                    </Switch>
                </BrowserRouter>
            </section>
        );
    }
}
