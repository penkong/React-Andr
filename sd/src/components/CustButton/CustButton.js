import React from 'react'
import './CustButtonStyles.scss';


const CustButton = ({children, ...otherProps}) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  )
}

export default CustButton;
