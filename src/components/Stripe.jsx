import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';

import Payment from './Payment';

const stripePromise = loadStripe('pk_test_51Qh4HwP1dukbOLddrTTM5kGftszrlXdzjlxsBLGommIhzs956QcqomUTW2DbPRt24BHpo6XCVD4OBwS2us8qpPX0004gWrSs6j');

function Stripe() {


    return (

        
        <div className='d-flex justify-content-center align-items-center mt-5' style={{ height: '80vh' }}>
            <Elements stripe={stripePromise}>
                <Payment />
            </Elements>
        </div>
    )
}

export default Stripe