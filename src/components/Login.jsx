import React, { useState } from 'react'
import "./Login.css"
import { FormLabel } from 'react-bootstrap'
import { logUser } from '../services/allapi'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {


    const [validateemail,setValidateemail]=useState(true)
    const [validatepassword,setValidatepassword]=useState(true)

    const navigate=useNavigate()


    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const login=async(e)=>{
        e.preventDefault()
        if(!user.email || !user.password){
                if(!user.email){
                    setValidateemail(false)
                }
                else if(!user.password){
                    setValidatepassword(false)
                }


        }
        else{
            const result =await logUser(user)
            console.log(result)
            if(result.status==200){
                toast.success("logged in")
                sessionStorage.setItem("currentUser",JSON.stringify(result.data.existingUser._id))
                sessionStorage.setItem("role",result.data.role)
                sessionStorage.setItem("token",result.data.token)
                navigate(sessionStorage.getItem('role')==="Admin"?'/dashboard':'/user')
                setUser({
                    email:'',
                    password:''})
                
            }
            else{
                toast.error("invalid")
            }

        }
    }
    console.log(user)
 


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
                    >Login
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
                        Email   <span style={{
                            color: "red"
                        }}> *</span>
                    </FormLabel>
                    <br />
                    <input
                    onChange={(e) => setUser({ ...user, email: e.target.value })}

                 
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
                        Enter valid email !
                    </div>
                   }
                    <FormLabel
                        className='mt-3'
                        style={{
                            fontWeight: "bold",
                            fontSize: "15px",
                            fontFamily: "FreeMono, monospace"

                        }}
                    >
                        Password  <span style={{
                            color: "red"
                        }}> *</span>
                    </FormLabel>
                    <br />
                    <input
                    onChange={(e) => setUser({ ...user, password: e.target.value })}

                      
                        name='password'
                        id='password'
                        className='form-control'
                        style={{
                            height: "50px",
                            border: "2px solid "
                        }}
                        type='password'

                    />
                    {
                    !validatepassword &&
                    <div style={{color:"red"}}>
                        Enter your Password !
                    </div>
                   }
                    <button
                        onClick={(e)=>{login(e)}}
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
                        LOGIN!
                    </button>
                    <div
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

                   </div>


                </div>

            </div>
        </>
    )
}

export default Login