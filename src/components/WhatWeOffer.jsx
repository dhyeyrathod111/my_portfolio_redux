import React, { Component } from 'react';

export default class WhatWeOffer extends Component {
    render() {
        return (
            <section className="offer-section bg-ash padding-top padding-bottom">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <h2 className="title">About Me</h2>
                    </div>
                </div>
                <div className="container mw-lg-100">
                    <div className="row align-items-center flex-wrap-reverse">
                        <div className="col-lg-6">
                            <div className="left-side-offer text-left wow fadeInUp" data-wow-delay=".3s">
                                <h4 className="title">Who I Am ? Why Work With Me ? </h4>
                                <p>My name's Dhyey Rathod. I'm a web designer and developer based in Mumbai, India.</p>
                                <br />
                                <p>During the day I’m the lead developer at a local agency. During the evenings I spend my time working on new technologies and building my own products.</p>
                                <br />
                                <p>There’s nothing I enjoy more than designing and developing good websites for nice people. It really is that simple.</p>
                                <br />
                                <p>I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-side-offer wow slideInRight" data-wow-delay=".3s">
                                <img src="/assets/images/offer/offer01.png" alt="offer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
