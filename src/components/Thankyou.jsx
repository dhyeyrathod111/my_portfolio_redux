import React from 'react';
import { NavLink } from 'react-router-dom';

const Thankyou = (props) => {
    return (
        <section className="four-0-four-section padding-top padding-bottom">
            <div className="container">
                <div className="four-0-wrapper">
                    <div className="four-0-content">
                        <h2 className="title">Thank you ! for contact with us.</h2>
                        <p>maecenas amet mollis, tincidunt vestibulum suscipit nostra, ac gravida a nndum. Aquam id blandit sapien sollicitudinultrices pulvinar, magna tependisse convallis aenean, 
                            amet <br />
                              <NavLink to={'/'}> back to home </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Thankyou;
