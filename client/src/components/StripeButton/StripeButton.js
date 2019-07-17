import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_z7R9U3Y9W69jetrpKAvPwa3p00RnNHBNTG';
  const onToken = token => {
    // token obj have diff props
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment success');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('issue here, Please provide correct info.');
    })
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='E-Commerce'
      billingAddress
      shippingAddress
      // image = ''
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
