import React, { Component } from 'react';


export default class CounterUp extends Component { 
    render() {
        const style = {color:'white'}
        return (
            <section className="counter-up-section">
                <div className="container">
                    <div className="counter-wrapper">
                        <div className="counter-item wow fadeInUp text-center" data-wow-delay=".3s">
                            <h1 style={style}>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
