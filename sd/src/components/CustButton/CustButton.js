import React from 'react'
import './CustButtonStyles.scss';


const CustButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  return (
    <button 
      className={
        `${inverted ? 'inverted' : ''
        } 
        custom-button`} 
        {...otherProps}

        >
      {children}
    </button>
  )
}

export default CustButton;
