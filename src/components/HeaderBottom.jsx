import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class HeaderBottom extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu_active:false,
        }
    }
    handelOnclick = () => {
        if(this.state.menu_active){
            this.setState({
                menu_active:false,
            });
        } else {
            this.setState({
                menu_active:true,
            });
        }
    }
    render() {
        return (
            <div className="header-bottom">
                <div className="container">
                    <div className="header-area">
                        <div className="logo">
                            <NavLink to={'/'}>
                                <h2>Dhyey</h2>
                            </NavLink>
                        </div>
                        <ul className={this.state.menu_active ? 'menu active' : 'menu' }>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/projects'}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/service'}>Services</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to={'/blog'}>Blog</NavLink>
                            </li> */}
                            <li>
                                <NavLink to={'/resume'}>Resume</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none" onClick={this.handelOnclick}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
