import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IgDm5Cl2yaSMYkR15WgypWL0IM273dJ7aDpIVUQsLzNsZZOyN62t5MBZf8pPhzy53Wmdn9Hzn6Kry5NiJRuzECC00KQwoHSLd'

// Since I am not actually accepting payments now, using this for token
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="Shopping Site"
            billingAddress
            shippingAddress
            description={`Your Total Is $${price}`}
            amout={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;