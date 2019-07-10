import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './HeaderStyles.scss';

// for svg import like this.
import { ReactComponent as Logo } from '../../assets/ourLogo.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';


class Header extends Component {
  render() {
    const { currentUser, hidden } = this.props;
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
        {
          hidden 
            ? null
            : <CartDropDown/>
        }
      </div>
    );
  }
}
// destructure nested value ==> this is new refactored ver
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);