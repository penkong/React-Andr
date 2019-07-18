import React from 'react'
// import { SpinnerOverlay, SpinnerContainer } from "./WithSpinnerStyles";
import Spinner from '../Spinner/Spinner';



const WithSpinner = WrappedComponent => ({isLoading , ...otherProps}) => {
  return isLoading 
    ? (
      <Spinner/>
    ) 
    : (
      <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner
