import React, { Component } from 'react';
import './SignInStyles.scss';
import FormInput from '../FormInput/FormInput';

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
        <h2 className=''>I already have an account</h2>
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
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default SignIn;