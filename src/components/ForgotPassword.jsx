import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import { checkmail } from '../services/allapi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function ForgotPassword() {

    const navigate=useNavigate()

    const [mail,setMail]=useState({
        email:""
    })

    const [validateemail,setValidateemail]=useState(true)

    const check=async(e)=>{

        if(!mail){
            setValidateemail(false)
        }
        else{
            const result=await checkmail(mail)
            if(result.status==200){

                toast.success("email verified successflly")
                sessionStorage.setItem("currentUser",JSON.stringify(result.data._id))
                navigate('/reset')
            }
            else{
                toast.error("email verification failed")
            }
        }

    }

    console.log(mail)
  return (
    <>
     <div
            className='d-flex justify-content-center align-items-center'
            >
                <div
                
                    style={{
                        width: "450px"
                    }}
                >
                    <h2
                        className='mt-5'
                    >Forgot your Password?!
                    </h2>
                    <div
                        style={{
                            height: "5px",
                            backgroundColor: "black",
                            width: "100%",
                        }}
                    ></div>
                    <FormLabel
                        style={{
                            fontWeight: "bold",
                            fontSize: "15px",
                            fontFamily: "FreeMono, monospace"

                        }}
                        className='mt-3'
                    >
                       Enter your Email   <span style={{
                            color: "red"
                        }}> *</span>
                    </FormLabel>
                    <br />
                    <input
                    onChange={(e) => setMail({ ...mail, email: e.target.value })}

                 
                        name='email'
                        id='email'
                        className='form-control'
                        style={{
                            height: "50px",
                            border: "2px solid "
                        }}

                    />
                    {
                    !validateemail &&
                    <div style={{color:"red"}}>
                        Enter a valid email !
                    </div>
                   }
                    
                    <button
                        onClick={(e)=>{check(e)}}
                        type='submit'
                        className='btn mt-5'
                        style={{
                            width: "100%",
                            backgroundColor: "grey",
                            color: "black",
                            border: "2px solid",
                            fontFamily: "FreeMono, monospace"
                        }}
                    >
                        Continue!
                    </button>
                    {/* <div
                    className='d-flex justify-content-end'
                    style={{
                        margin:"0"
                    }}
                    ><a id="fg" href="/forgotpassword">Forgot password ?</a></div>
                   <div
                   className='d-flex justify-content-center align-items-center'>
                   <a 
                    
                    className="custom-link mt-5"
                    href="/signup">New User! Click here SIGN UP
                    </a>

                   </div> */}


                </div>

            </div>
    
    </>
  )
}

export default ForgotPassword