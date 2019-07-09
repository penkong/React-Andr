import React, { Component } from 'react';
import './SignPageStyles.scss';
import SignIn from '../../components/SignIn/SignIn';


class SignPage extends Component {

  render() {
    return (
      <div className='sign-page'>
        <SignIn/>
      </div>
    );
  }
}

export default SignPage;