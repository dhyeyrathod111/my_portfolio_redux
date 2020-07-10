import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

export default class Header extends Component {
  render() {
    return (
        <header>
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
  }
}
