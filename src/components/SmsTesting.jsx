import React, { Component } from 'react';
import ReactFormInputValidation from "react-form-input-validation";
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import Loading from '../pages/Loading';
import Alert from '../components/Alert';

export default class SmsTesting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', email: '', contact: '', user_message: '',
            errors: {},
            loading_status: false,
            response_status: '', response_message: '', alert_display: false,
            redirect: false,
        }
        

        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            contact: "required",
            user_message: "required",
        });
        this.form.onformsubmit = (event) => {
            
            this.setState({ loading_status: true });

            Axios.post('http://dhyeyrathod.rf.gd/api_project/API/contactus', this.state)
                .then((response) => {
                    this.setState({ loading_status: false });
                    if (response.data.status == 'T') {
                        this.setState({
                            alert_display: true,
                            response_status: 'alert alert-success',
                            response_message: response.data.message
                        });
                        setTimeout(() => {
                            this.setState({ redirect: true });
                        }, 2000);
                    } else {
                        this.setState({
                            alert_display: true,
                            response_status: 'alert alert-danger',
                            response_message: response.data.message
                        });
                    }
                }, (error) => {
                    this.setState({ loading_status: false });
                    this.setState({
                        alert_display: true,
                        response_status: 'alert alert-danger',
                        response_message: 'Sorry, we have to face some technical issues please try again later.'
                    });
                });
        }
    }
    handleChangeEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.redirect ? <Redirect to='/thankyou' /> : ''}
                <Loading loading_status={this.state.loading_status} />
                <section className="sms-testing padding-bottom padding-top bg-ash">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="testing-item wow fadeInUp" data-wow-delay=".3s">
                                    <h4 className="title">How can I help you contact me?</h4>
                                    {this.state.alert_display ? <Alert alert_type={this.state.response_status} alert_message={this.state.response_message} /> : ''}
                                    <form className="testing-form" onSubmit={this.form.handleSubmit}>
                                        <div className="form-group w-100">
                                            <input type="text" onBlur={this.form.handleBlurEvent} value={this.state.name} onChange={this.handleChangeEvent} name="name" placeholder="Name" />
                                            <span className="validation_error">{this.state.errors.name ? this.state.errors.name : ""}</span>
                                        </div>
                                        <div className="form-group w-100">
                                            <input type="text" onBlur={this.form.handleBlurEvent} value={this.state.email} onChange={this.handleChangeEvent} name="email" placeholder="Email" />
                                            <span className="validation_error">{this.state.errors.email ? this.state.errors.email : ""}</span>
                                        </div>
                                        <div className="form-group w-100">
                                            <input type="text" onBlur={this.form.handleBlurEvent} value={this.state.contact} onChange={this.handleChangeEvent} name="contact" placeholder="Contact number" />
                                            <span className="validation_error">{this.state.errors.contact ? this.state.errors.contact : ""}</span>
                                        </div>
                                        <div className="form-group w-100">
                                            <textarea onBlur={this.form.handleBlurEvent} value={this.state.user_message} onChange={this.handleChangeEvent} placeholder="SMS text write in here" name="user_message" />
                                            <span className="validation_error">{this.state.errors.user_message ? this.state.errors.user_message : ""}</span>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Submit Now" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="testing-item wow fadeInUp" data-wow-delay=".3s">
                                    <h4 className="title">about our privacy</h4>
                                    <p>A developer's role is to combine design and business logic to achieve a user-facing product. To do this successfully, a wide skill set is necessary to produce a quality user experience that leads to meeting business goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
