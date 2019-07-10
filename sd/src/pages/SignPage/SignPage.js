import React, { Component } from 'react';
import './SignPageStyles.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';


class SignPage extends Component {

  render() {
    return (
      <div className='sign-page'>
        <SignIn/>
        <SignUp/>
      </div>
    );
  }
}

export default SignPage;