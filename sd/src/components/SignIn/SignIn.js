import React, { Component } from 'react';
import './SignInStyles.scss';
import FormInput from '../FormInput/FormInput';
import CustButton from '../CustButton/CustButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
  state = { email: '', password: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({email:'', password: ''});
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  render() {
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

          <CustButton type="submit"> Sign in </CustButton>
          <CustButton onClick={signInWithGoogle}> SIGN IN WITH GOOGLE </CustButton>
        </form>
      </div>
    );
  }
}

export default SignIn;