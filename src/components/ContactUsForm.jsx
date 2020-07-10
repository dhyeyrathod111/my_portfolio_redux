import React, { Component } from 'react';
import ReactFormInputValidation from "react-form-input-validation";
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import Loading from '../pages/Loading';
import Alert from '../components/Alert';

export default class ContactUsForm extends Component {
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
            Axios.post('http://localhost/dhyey_rathod/company/admin/api/contact', this.state)
                .then((response) => {
                    this.setState({ loading_status: false });
                    if (response.data.status === 'T') {
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
                <section className="account-section padding-top padding-bottom bg_img bg_bottom_center bg_contain" data-background="assets/images/contact/contact-bg.png">
                    <div className="container">
                        <div className="account-wrapper">
                            <div className="account-area">
                                <h3 className="account-title">send us a message</h3>
                                {this.state.alert_display ? <Alert alert_type={this.state.response_status} alert_message={this.state.response_message} /> : ''}
                                <form className="contact-form" onSubmit={this.form.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" onBlur={this.form.handleBlurEvent} value={this.state.name} onChange={this.handleChangeEvent} name="name" placeholder="Name" />
                                        <span className="validation_error">{this.state.errors.name ? this.state.errors.name : ""}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onBlur={this.form.handleBlurEvent} value={this.state.email} onChange={this.handleChangeEvent} name="email" placeholder="Email" />
                                        <span className="validation_error">{this.state.errors.email ? this.state.errors.email : ""}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onBlur={this.form.handleBlurEvent} value={this.state.contact} onChange={this.handleChangeEvent} name="contact" placeholder="Contact number" />
                                        <span className="validation_error">{this.state.errors.contact ? this.state.errors.contact : ""}</span>
                                    </div>
                                    <div className="form-group">
                                        <textarea onBlur={this.form.handleBlurEvent} value={this.state.user_message} onChange={this.handleChangeEvent} placeholder="SMS text write in here" name="user_message" />
                                        <span className="validation_error">{this.state.errors.user_message ? this.state.errors.user_message : ""}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Submit Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
