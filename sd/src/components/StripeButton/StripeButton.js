import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_z7R9U3Y9W69jetrpKAvPwa3p00RnNHBNTG';
  const onToken = token => {
    // token obj have diff props
    console.log(token);
    alert('Payment Success');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='E-Commerce'
      billingAddress
      shippingAddress
      image='../../assets/4.1 favicon.ico.ico'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      // 
      token={onToken}
      stripeKey={publishKey}
    />
  )
}

export default StripeButton
