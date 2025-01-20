import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button, FormLabel } from 'react-bootstrap'
import { useEffect } from 'react'
import { pricecount } from '../services/allapi'
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { toast } from 'react-toastify'
const stripePromise = loadStripe('pk_test_51Qh4HwP1dukbOLddrTTM5kGftszrlXdzjlxsBLGommIhzs956QcqomUTW2DbPRt24BHpo6XCVD4OBwS2us8qpPX0004gWrSs6j');


function Payment() {

    const [amount, setAmount] = useState(""); // Amount in cents
    const [delaying, setDelaying] = useState(false)


    const [paymentDetails, setPaymentDetails] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    const cardElementOptions = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "29px",
                "::placeholder": {
                    color: "#aab7c4",

                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        },
    };

    const [price, setPrice] = useState()

    const navigate = useNavigate()


    // const hi=()=>{
    //     const delivery = 40
    // const discount = 200
    // const shipping = 100
    // const charge = price
    // console.log("hi")
    // const pay =   charge - discount + shipping
    // setAmount(pay)

    // }
    
    // const [discount, setDiscount] = useState()
    // const [Shipping, setShipping] = useState()
    // const [delivery, setDelivery] = useState()


    const totalprice = async () => {
        const result = await pricecount()
        console.log(result)
        setPrice(result.data)
        
    
    }




    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({amount})

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            console.error('CardElement not found or not initialized.');
            return;
        }
        try {
            
            const response = await fetch('http://localhost:4000/create-payment-intent', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ amount }),
            });
      
            const { clientSecret } = await response.json();
      
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
              payment_method: { card: cardElement },
            });
      
            if (error) {
              console.error('Payment Error:', error.message);
            } else if (paymentIntent.status === 'succeeded') {
              setPaymentDetails(paymentIntent);
              console.log(paymentIntent)
              sessionStorage.setItem("details", JSON.stringify(paymentIntent));
              toast.success('Payment successful!');
              navigate('/afterpay');
            }
            else{
              toast.error("Payment failed!!")
            }
          } catch (error) {
            console.error('Error during payment process:', error);
          }
        

        // Call your backend to create a PaymentIntent
       
    }
    // useEffect(() => {
    //     if (sessionStorage.getItem("amount")) {
    //         const amt = JSON.parse(sessionStorage.getItem("amount"))
    //         console.log(uu)



    // }, [])

    useEffect(() => {
        if (paymentDetails) {
            sessionStorage.setItem("details", JSON.stringify(paymentDetails))
        }
    }, [paymentDetails])

    useEffect(() => {
        totalprice()

    }, [])

    useEffect(()=>{
        const delivery = 40
        const discount = 200
        const shipping = 100
        const pay =   price - discount + shipping
        setAmount(pay)

    },[price])
    // console.log(charge,discount,shipping)
    console.log(amount,price)



   



    return (
        <>
            <div
                className='container'
                style={{
                    minHeight: "700px"
                }}>

                <div className='mt-5 bg-primary container'
                    style={{
                        color: "white",
                        height: "50px",
                        border: "1px solid black",
                        alignContent: "center",
                        fontWeight: "10px",
                        fontSize: "20px",
                        fontFamily: "monospace"
                    }}>
                    Payment
                </div>
                {/* <TextField
                    style={{
                        width: "400px"
                    }}
                    className='mt-5'
                    label="Card Number*" color="primary" focused ></TextField> */}
                {/* <TextField
    style={{
        width:"70px"
    }}
    className='mt-5 mx-5'
     label="cvv*" color="primary" focused ></TextField>
     <Button className='btn btn-primary mt-5'>Pay</Button>  */}
                
                

                    <div className='d-flex  justify-content-center'>
                        <div
                            className='card'
                            style={{
                                alignSelf: "center",
                                width: "400px",
                                height: "auto",
                                border: "none"
                            }}
                        >
                            <h3
                                className='mt-5'
                                style={{
                                    fontFamily: "fantasy",
                                    letterSpacing: "2px",
                                    
                                    marginRight: "auto",
                                    marginLeft: "auto"

                                }}
                            >Enter Card Details</h3>
                            
                            <div
                            style={{
                                border:"1px solid black",
                                padding:"10px",
                                borderRadius:"5px"
                            }} 
                             className='mt-2 mb-3'>
                    <CardElement
                    className="card-input" options={cardElementOptions}/>
                </div>

                            <div
                                className='mb-3'
                                style={{
                                    color: "",
                                    border: "1px solid #607B7E"
                                }}
                            >

                            </div>
                            <div>

                                <span
                                    className='mt-4 ms-3'
                                    style={{
                                        fontFamily: "fantasy",
                                        color: "black",
                                        fontSize: "40px"


                                    }}>Total</span>

                                <span
                                    className='mt-4  '

                                    style={{
                                        fontSize: "35px",
                                        marginLeft: "180px",
                                        fontWeight: "bold"
                                    }}
                                >₹{amount}</span>


                                <br />
                                <div
                                    className='my-3'
                                    style={{
                                        border: "1px solid grey"
                                    }}>

                                </div>

                                <span
                                    className='mt-5 ms-3'
                                    style={{
                                        fontFamily: "fantasy",
                                        color: "black",
                                        fontSize: "25px",
                                        letterSpacing: "1px"

                                    }}
                                >
                                    Delivery
                                </span>
                                <span
                                    className='mt-2 '
                                    style={{
                                        fontSize: "20px",
                                        marginLeft: "250px",
                                        textDecoration: "line-through"

                                    }}>₹40</span>
                                <br />



                                <span
                                    className='mt-5 ms-3'
                                    style={{
                                        fontFamily: "fantasy",
                                        color: "black",
                                        fontSize: "25px",
                                        letterSpacing: "1px"

                                    }}>Shipping </span>

                                <span
                                    className='mt-5 '

                                    style={{
                                        fontSize: "20px",
                                        marginLeft: "230px",

                                    }}
                                >₹100</span>
                                <br />



                                <span
                                    className='mt-5 ms-3'
                                    style={{
                                        fontFamily: "fantasy",
                                        color: "black",
                                        fontSize: "25px",
                                        letterSpacing: "1px"



                                    }}>Discount</span>

                                <span
                                    className='mt-4 '

                                    style={{
                                        fontSize: "20px",
                                        marginLeft: "222px",

                                        color: "red"

                                    }}
                                >-₹200</span>



                            </div>
                            <div
                                className='mt-3'
                                style={{
                                    color: "",
                                    border: "1px solid  #607B7E"
                                }}
                            >

                            </div>
                            <button
                                onClick={(e)=>{handleSubmit(e)}}
                                disabled={!stripe}


                                className='my-3'
                                style={{
                                    alignSelf: "center",
                                    backgroundColor: "#007BFF", // Primary blue color
                                    color: "#fff", // White text
                                    border: "none", // Remove border
                                    borderRadius: "8px", // Rounded corners
                                    padding: "12px 24px", // Padding for a comfortable size
                                    fontSize: "35px", // Font size
                                    fontWeight: "bold", // Bold text
                                    cursor: "pointer", // Pointer cursor on hover
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                                    transition: "all 0.3s ease", // Smooth transition
                                    width: "100%"
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = "#0056b3"; // Darker blue on hover
                                    e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)"; // Enhance shadow on hover
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = "#007BFF"; // Revert to original blue
                                    e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Revert shadow
                                }}
                            >
                                PAY ₹{amount}
                            </button>
                        </div>

                    </div>
                
               

            </div>

        </>
    )
}

export default Payment