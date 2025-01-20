import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { editpassword } from '../services/allapi'
import { toast } from 'react-toastify'

function ResetPassword() {
    const navigate=useNavigate()
    const [validatepassword,setValidatepassword]=useState(true)
    const [validatecpassword,setValidatecpassword]=useState(true)
    const [password,setPassword]=useState()
    const [cpassword,setCpassword]=useState()

    const check=async(e)=>{
        if(!cpassword ){
            setValidatecpassword(false)
                
        }
        else if(!password){
            setValidatepassword(false)
        }
        else if(password==cpassword && validatepassword && validatecpassword ){
            const id = sessionStorage.getItem('currentUser');
            console.log(id)
            const sid=JSON.parse(id)
            console.log(sid)
            const result=await editpassword(sid,{password})
            console.log(result)
            if(result.status==200){
                toast.success("password changed successfully")
                navigate("/login")

            }
            else{
                toast.error("something went wrong")
            }

        }

        }
        console.log(password)
        console.log(cpassword)
    
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
                    >Change your Password?!
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
                       Enter new password   <span style={{
                            color: "red"
                        }}> *</span>
                    </FormLabel>
                    <br />
                    <input
                     onChange={(e) => setPassword( e.target.value )}

                 
                        name='ps'
                        id='ps'
                        className='form-control'
                        style={{
                            height: "50px",
                            border: "2px solid "
                        }}
                        

                    />
                    <FormLabel
                        style={{
                            fontWeight: "bold",
                            fontSize: "15px",
                            fontFamily: "FreeMono, monospace"

                        }}
                        className='mt-3'
                    >
                       Confirm new password   <span style={{
                            color: "red"
                        }}> *</span>
                    </FormLabel>
                    <br />
                    <input
                    onChange={(e) => setCpassword( e.target.value )}

                 
                        name=''
                        id='email'
                        className='form-control'
                        style={{
                            height: "50px",
                            border: "2px solid "
                        }}/>
                     {
                    !validatepassword &&
                    <div style={{color:"red"}}>
                        Enter valid  !
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
                        Change password!
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

export default ResetPassword