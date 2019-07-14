import React, { Component } from 'react';
import { connect } from 'react-redux'

import './SignInStyles.scss';
import FormInput from '../FormInput/FormInput';
import CustButton from '../CustButton/CustButton';

import { auth } from '../../firebase/firebase.utils';
import { googleSingInStart } from '../../redux/user/userAction';


class SignIn extends Component {
  state = { email: '', password: '' };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password: ''});
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  render() {
    const { googleSingInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sing in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            required 
            name='email' 
            type='email' 
            label='email'
            value={this.state.email} 
            handleChange={this.handleChange}
            />
          <FormInput 
            required 
            label='password'
            name='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustButton type="submit"> Sign in </CustButton>
            <CustButton type="button" Click={googleSingInStart} isGoogleSignIn> 
              SIGN IN WITH GOOGLE 
            </CustButton>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  googleSingInStart: () => dispatch(googleSingInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);