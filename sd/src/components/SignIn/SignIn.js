import React, { Component } from 'react';
import './SignInStyles.scss';

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
          <input name='email' type='email' value={this.state.email} required 
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input name='password' type='password' value={this.state.password} required 
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default SignIn;