import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.scss';

// for svg import like this.
import { ReactComponent as Logo } from '../../assets/ourLogo.svg';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>Shop</Link>
          <Link className='option' to='/shop'>Contact</Link>
        </div>
      </div>
    );
  }
}

export default Header;