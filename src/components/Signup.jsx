import React, { useRef } from 'react'
import { FormLabel,Button } from 'react-bootstrap'
import { useState } from 'react'
import { sign } from '../services/allapi'
import { toast } from 'react-toastify'

function Signup() {

    const [validatefname,setValidatefname]=useState(true)
    const [validatesname,setValidatesname]=useState(true)
    const [validatephone,setValidatephone]=useState(true)
    const [validateemail,setValidateemail]=useState(true)
    const [validatepassword,setValidatepassword]=useState(true)

    const [user,setUser]=useState({
        fname:"",
        sname:"",
        phone:"",
        email:"",
        password:""

    })

    const formRef=useRef()

    const signup=(e)=>{
        const {name,value}=e.target
        if(name=="fname"){
            if(!!value.match(/^[a-z A-Z.]{1,}$/)){
                setUser({...user,[name]:value})
                setValidatefname(true)
            }
            else{
                setValidatefname(false)
            }
        }
        else if(name=="sname"){
            if(!!value.match(/^[a-z A-Z.]{1,}$/)){
                setUser({...user,[name]:value})
                setValidatesname(true)
            }
            else{
                setValidatesname(false)
            }

        }
        else if(name=="phone"){
            if(!!value.match(/^[0-9+]{10,}$/)){
                setUser({...user,[name]:value})
                setValidatephone(true)
            }
            else{
                setValidatephone(false)
            }
        }
        else if(name=="email"){
            if(!!value.match(/^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,}$/)){
                setUser({...user,[name]:value})
                setValidateemail(true)
            }
            else{
                setValidateemail(false)
            }
        }
        else {
            if(!!value.match(/^[a-zA-z0-9@$#.]{5,}$/)){
                setUser({...user,[name]:value})
                setValidatepassword(true)
            }
            else{
                setValidatepassword(false)
            }
        }
    
    }

    const register=async(e)=>{
        if(validateemail && validatefname && validatephone && validatesname&& validatepassword){
            e.preventDefault()
            const result =await sign(user)
            console.log(result)
            if(result.status===200){
                toast.success("Sign up successfull!")
                setUser({
                    fname:"",
                    sname:"",
                    phone:"",
                    email:"",
                    password:""

                })
                formRef.current.reset()
            }
            else{
                toast.error(result.response.data)
            }
        }
        else{
            toast.warning("enter  valid values")
        }
       
    }
    console.log(user)

    return (
        <>
            <h1 className=' me-5 mt-3'
                style={{
                    marginLeft: "10vw",
                    fontFamily: "Impact, fantasy",
                    textDecoration:"underline"
                }}>My Account</h1>
            <div className='d-flex justify-content-center'>
                <div style={{ width: "450px" }}>
                    <h2
                        className='mt-3 mb-3'
                        style={{
                            textAlign: "center",
                            fontFamily: "Impact, fantasy"
                        }}>REGISTER</h2>
                    <div
                        style={{
                            height: "5px",
                            backgroundColor: "black",
                            width: "100%", 
                        }}
                    ></div>
                   <form action="" ref={formRef}>
                   <div className='mt-2'>
                   <FormLabel
                   style={{
                    fontWeight:"bold",
                    fontSize:"15px",
                    fontFamily:"FreeMono, monospace"

                   }}
                   >                       
                    FIRST NAME   <span style={{
                        color:"red"
                    }}> *</span>
                    </FormLabel>
                    <br />
                   <input 
                   defaultValue={user.fname}
                   onChange={(e)=>{signup(e)}}
                   name='fname'
                   id='fname'
                   className='form-control'
                   style={{
                    height:"50px",
                    border:"2px solid "
                   }}
                   
                   />
                   {
                    !validatefname &&
                    <div style={{color:"red"}}>
                        Enter your First name !
                    </div>
                   }
                    <FormLabel
                   style={{
                    fontWeight:"bold",
                    fontSize:"15px",
                    fontFamily:"FreeMono, monospace"

                   }}
                   >                       
                    LAST NAME   <span style={{
                        color:"red"
                    }}> *</span>
                    </FormLabel>
                    <br />
                   <input 
                   onChange={(e)=>{signup(e)}}
                   name='sname'
                   id='sname'
                   className='form-control'
                   style={{
                    height:"50px",
                    border:"2px solid "
                   }}
                   
                   />
                   {
                    !validatesname &&
                    <div style={{color:"red"}}>
                        Enter your Second name !
                    </div>
                   }
                    <FormLabel
                   style={{
                    fontWeight:"bold",
                    fontSize:"15px",
                    fontFamily:"FreeMono, monospace"

                   }}
                   >                       
                    PHONE NO <span style={{
                        color:"red"
                    }}> *</span>
                    </FormLabel>
                    <br />
                   <input 
                   placeholder='+91'
                   onChange={(e)=>{signup(e)}}
                   name='phone'
                   id='phone'
                   
                   className='form-control'
                   style={{
                    height:"50px",
                    border:"2px solid "
                   }}
                   
                   />
                    {
                    !validatephone &&
                    <div style={{color:"red"}}>
                        Enter your phone number !
                    </div>
                   }
                    <FormLabel
                   style={{
                    fontWeight:"bold",
                    fontSize:"15px",
                    fontFamily:"FreeMono, monospace"

                   }}
                   >                       
                    EMAIL <span style={{
                        color:"red"
                    }}> *</span>
                    </FormLabel>
                    <br />
                   <input 
                   onChange={(e)=>{signup(e)}}
                   name='email'
                   id='email'
                   className='form-control'
                   style={{
                    height:"50px",
                    border:"2px solid "
                   }}
                   
                   />
                    {
                    !validateemail &&
                    <div style={{color:"red"}}>
                        Enter a Valid email !
                    </div>
                   }
                    <FormLabel
                   style={{
                    fontWeight:"bold",
                    fontSize:"15px",
                    fontFamily:"FreeMono, monospace"

                   }}
                   >                       
                    PASSWORD <span style={{
                        color:"red"
                    }}> *</span>
                    </FormLabel>
                    <br />
                   <input 
                   type='password'
                   onChange={(e)=>{signup(e)}}
                   name='password'
                   id='password'
                   className='form-control'
                   style={{
                    height:"50px",
                    border:"2px solid "
                   }}
                   
                   />
                    {
                    !validatesname &&
                    <div style={{color:"red"}}>
                        Enter password, minimum of 5 characters!
                    </div>
                   }
                   <button 
                    onClick={(e)=>{register(e)}}
                   type='submit'
                   className='btn mt-3'
                   style={{
                    width:"100%",
                    backgroundColor:"grey",
                    color:"black",
                    border:"2px solid",
                    fontFamily:"FreeMono, monospace"
                   }}
                   >
                    Sign Up!
                   </button>
                   <div
                   className='d-flex justify-content-center align-items-center'>
                   <a 
                    
                    className="custom-link mt-2"
                    href="/login">Already an User! Click here Login.
                    </a>

                   </div>

                   
                   </div>
                   </form>
                </div>
            </div>
        </>
    )
}

export default Signup