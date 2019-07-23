import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { signOutStart } from '../../redux/user/user.actions';
// import './header.styles.scss';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer as={Link} to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionDiv as={Link} to='/shop'>
        SHOP
      </OptionDiv>
      <OptionDiv as={Link} to='/contact'>
        CONTACT
      </OptionDiv>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
      ) : (
        <OptionDiv as={Link} to='/signin'>
          SIGN IN
        </OptionDiv>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
