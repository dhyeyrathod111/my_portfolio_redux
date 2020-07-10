import React, { Component } from 'react';

export default class BulkSms extends Component {
    render() {
        return (
            <section className="bulk-sms padding-top">
                <div className="container">
                <h2 className="title">test your SMS delivery</h2>
                    <div className="row flex-wrap-reverse align-items-center">
                        <div className="col-lg-6">
                            <div className="bulk-content text-center text-sm-left wow fadeIn" data-wow-delay=".3s">
                                <span>wellcome to bulk sms</span>
                                <h2 className="title">global Bulk SMS Service company</h2>
                                <p>Mauris iaculis pede, tellus commodo justo. Ligula in tortmris libero lectus libero aliquet, vestibulum aut nullloret ac sictus, id pede quis quisque lacinia consectetuer. uere eros velit eu nec arcu, repellat urna ad odio nunc. Doletiarcu eginrdum tiunt morbi, aenean dui amet at mapro Sed quis nunc est justo, in in, elit lorem vulputate, suspendisse  pellentesque pede tpluptatem ut mattis, eros diam litora nullam. Ac cras, mollis quis maecenas urna ullamper eros.</p>
                                <a href="#0" className="custom-button active">sign-up &amp; start</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bulk-thumb wow slideInRight">
                                <img src="/assets/images/bulk/bulk01.png" alt="bulk" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
