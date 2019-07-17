import React from 'react'
import { CustButtonContainer } from "./CustButtonStyles";
import './CustButtonStyles.scss';

// {children, isGoogleSignIn, inverted, ...otherProps}
const CustButton = props => {
  return (
    <CustButtonContainer {...props}>
      {props.children}
    </CustButtonContainer>
  )
}

export default CustButton;
