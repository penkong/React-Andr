import React, { Component } from 'react';
import './SignUpStyles.scss';
import FormInput from '../FormInput/FormInput';
import CustButton from '../CustButton/CustButton';
import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends Component {
  state = { 
    displayName : '', 
    email: '', 
    password: '', 
    confirmPassword: ''
  };

  handleSubmit = async e => {
    const { displayName, email, password, confirmPassword } = this.state;
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Password match wrong")
      return;
    }
    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({ 
        displayName : '', 
        email: '', 
        password: '', 
        confirmPassword: ''
      });

    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            required
            type='text'
            name='displayName'
            label='Display Name'
            value={displayName}
            onChange={this.handleChange}
          />
          <FormInput 
            required
            type='email'
            name='email'
            label='Email'
            value={email}
            onChange={this.handleChange}
          />
          <FormInput 
            required
            type='password'
            name='password'
            label='Password'
            value={password}
            onChange={this.handleChange}
          />
          <FormInput 
            required
            type='password'
            name='password'
            label='Confirm Password'
            value={confirmPassword}
            onChange={this.handleChange}
          />

          <CustButton type='submit'> Sign Up </CustButton>

        </form>
      </div>
    );
  }
}

export default SignUp;