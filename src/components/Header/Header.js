import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './HeaderStyles';
// import './HeaderStyles.scss';

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
      <HeaderContainer>
        <LogoContainer to='/'>
          <Logo/>
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>Shop</OptionLink>
          <OptionLink to='/shop'>Contact</OptionLink>
          {
            currentUser
            ? <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
            : <OptionLink to='/signin'>SIGN IN</OptionLink>
          }
          <CartIcon/>
        </OptionsContainer>
        { hidden ? null: <CartDropDown/> }
      </HeaderContainer>
    );
  }
}
// destructure nested value ==> this is new refactored ver
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);