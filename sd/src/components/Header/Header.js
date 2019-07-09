import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.scss';

// for svg import like this.
import { ReactComponent as Logo } from '../../assets/ourLogo.svg';
import { auth } from '../../firebase/firebase.utils';


class Header extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>Shop</Link>
          <Link className='option' to='/shop'>Contact</Link>
          {
            currentUser
            ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
            : <Link className='option' to='/signin'>SIGN IN</Link>
          }
        </div>
      </div>
    );
  }
}

export default Header;