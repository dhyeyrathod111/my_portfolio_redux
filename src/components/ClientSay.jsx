import React, { Component } from 'react';

export default class ClientSay extends Component {
    render() {
        return (
            <section className="client-say padding-bottom">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <span className="cate">client feedback</span>
                        <h2 className="title">client what say about</h2>
                    </div>
                    <div className="client-say-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="client-item">
                                    <div className="client-thumb">
                                        <a href="#0"><img src="/assets/images/client/client02.jpg" alt="client" /></a>
                                    </div>
                                    <div className="client-content">
                                        <h4 className="title"><a href="#0">fahad bin foyej</a></h4>
                                        <span>Business Man</span>
                                        <blockquote>
                                            Dhyey Rathod is an excellent web designer and faultless technician. He’s a pleasure to work with, great value for money and will always go the extra mile when necessary.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client-pagination" />
                    </div>
                </div>
            </section>
        );
    }
}
