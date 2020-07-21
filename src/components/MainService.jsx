import React from "react";
const serviceItemStyle = {height: '250px'}

const MainService = props => {
    return (
        <section className="service-section padding-bottom padding-top">
            <div className="container">
                <div className="row justify-content-center mb-30-none">

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center">
                            <div className="service-content">
                                <h4 className="title"><a href="#0">Blog Design</a></h4>
                                <p>Attract more clients to your existing business and get more loyal customers through your Blogs</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Website Redesign</h4>
                                <p>I transform your current website into a SEO friendly website with a responsive web design to provide a better user engagement and capture more leads.</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Web Speed Optimization</h4>
                                <p>We analyze overall page speed of your website and make it fast to load and provide a good user experience.</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Responsive Websites</h4>
                                <p>All the websites we create are responsive websites which are compatible across all devices from a large desktop screen to a tablet or smartphone.</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-12">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Landing Page Design</h4>
                                <p>The landing page designs we create are responsive and optimized for search engines. I place the call to action buttons in the right place for the visitors to keep the visitors engaged and encourage them to take the necessary action and ultimately increase sales.</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Website Maintenance</h4>
                                <p>I make sure your website evolves with changing demands with excellent, fast and reliable service with our affordable website maintenance plans.</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Ecommerce Websites</h4>
                                <p>I use a number of platforms to give you a website exactly as your business requirement using Magento, Prestashop, x-cart, Woocommerce to create Ecommerce websites.</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Dynamic Website Designing</h4>
                                <p>All our dynamic websites are designed with focus on conversions. We strive to achieve a flawless user experience with my cutting-edge and custom website solutions.</p>
                                {/* <a href="#0">Find Out More <i className="fas fa-caret-right" /></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div style={serviceItemStyle} className="service-item text-center" >
                            <div className="service-content">
                                <h4 className="title">Custom PHP Development</h4>
                                <p>I provide web applications development which have a dynamic user interface and are customized for the specific industries and businesses.</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}
export default MainService;