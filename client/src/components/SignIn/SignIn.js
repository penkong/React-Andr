import React, {  useState } from 'react';
import { connect } from 'react-redux'

import './SignInStyles.scss';
import FormInput from '../FormInput/FormInput';
import CustButton from '../CustButton/CustButton';

// import { auth } from '../../firebase/firebase.utils';
import { googleSingInStart, emailSingInStart } from '../../redux/user/userAction';

const SignIn = ({ emailSingInStart, googleSingInStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({ email: '', password: ''});
  const { email, password } = userCredentials;
  const handleSubmit = async e => {
    e.preventDefault();
    emailSingInStart(email, password);
  }
  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name] : value });
  }
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sing in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          required 
          name='email' 
          type='email' 
          label='email'
          value={email} 
          handleChange={handleChange}
          />
        <FormInput 
          required 
          label='password'
          name='password' 
          type='password' 
          value={password} 
          handleChange={handleChange}
        />
        <div className='buttons'>
          <CustButton type="submit"> Sign in </CustButton>
          <CustButton type="button" Click={googleSingInStart} isGoogleSignIn> 
            SIGN IN WITH GOOGLE 
          </CustButton>
        </div>
      </form>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  googleSingInStart: () => dispatch(googleSingInStart()),
  emailSingInStart: (email, password) => 
    dispatch(emailSingInStart({ email, password })),
})
export default connect(null, mapDispatchToProps)(SignIn);
// class SignIn extends Component {
//   state = { email: '', password: '' };

//   handleSubmit = async e => {
//     const { email, password } = this.state;
//     const { emailSingInStart } = this.props;
//     e.preventDefault();
//     emailSingInStart(email, password);
//     // try {
//     //   await auth.signInWithEmailAndPassword(email, password);
//     //   this.setState({email:'', password: ''});
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   }

//   handleChange = e => {
//     const { value, name } = e.target;
//     this.setState({ [name] : value });
//   }

//   render() {
//     const { googleSingInStart } = this.props;
//     return (
//       <div className='sign-in'>
//         <h2>I already have an account</h2>
//         <span>Sing in with your email and password.</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput 
//             required 
//             name='email' 
//             type='email' 
//             label='email'
//             value={this.state.email} 
//             handleChange={this.handleChange}
//             />
//           <FormInput 
//             required 
//             label='password'
//             name='password' 
//             type='password' 
//             value={this.state.password} 
//             handleChange={this.handleChange}
//           />
//           <div className='buttons'>
//             <CustButton type="submit"> Sign in </CustButton>
//             <CustButton type="button" Click={googleSingInStart} isGoogleSignIn> 
//               SIGN IN WITH GOOGLE 
//             </CustButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
