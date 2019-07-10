import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import './HeaderStyles.scss';

// for svg import like this.
import { ReactComponent as Logo } from '../../assets/ourLogo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';


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
          <CartIcon/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);