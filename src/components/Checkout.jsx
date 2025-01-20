import React, { useEffect, useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import { TextField } from '@mui/material'
import { sendAddress } from '../services/allapi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Checkout() {
    const [validatearea,setValidatearea]=useState(false)
    const [validatehousenumber,setValidatehousenumber]=useState(false)
    const [validatecity,setValidatecity]=useState(false)
    const [validatestate,setValidatestate]=useState(false)
    const [validatepincode,setValidatepincode]=useState(false)
    const [validatelandmark,setValidatelandmark]=useState(false)
    const [Address,setAddress]=useState({})
    const [uid,setUid]=useState()
    const navigate=useNavigate()


    const address=(e)=>{
        const {name,value}=e.target
        if(name=="housenumber"){
            if(!!value.match(/^[a-z A-Z.,/-]{1,}$/)){
            setAddress({...Address,[name]:value})
            setValidatehousenumber(true)
        }
        else{
            setValidatehousenumber(false)

        }
        }
        else if(name=="area"){
            if(!!value.match(/^[a-z A-Z.,/-]{1,}$/)){
                setAddress({...Address,[name]:value})
                setValidatearea(true)
            }
            else{
                setValidatearea(false)
    
            }
        }
        else if(name=="city"){
            if(!!value.match(/^[a-z A-Z.,/-]{1,}$/)){
                setAddress({...Address,[name]:value})
                setValidatecity(true)
            }
            else{
                setValidatecity(false)
    
            }
        }
        else if(name=="state"){
            if(!!value.match(/^[a-z A-Z.,/-]{1,}$/)){
                setAddress({...Address,[name]:value})
                setValidatestate(true)
            }
            else{
                setValidatestate(false)
    
            }
        }
        else if(name=="landmark"){
            if(!!value.match(/^[a-z A-Z.,/-]{1,}$/)){
                setAddress({...Address,[name]:value})
                setValidatelandmark(true)
            }
            else{
                setValidatelandmark(false)
    
            }
        }
        else{
             if(!!value.match(/^[0-9]{5,}$/)){
                setAddress({...Address,[name]:value})
                setValidatepincode(true)
            }
            else{
                setValidatepincode(false)
    
            }
        }

    }

    const submit=async(e)=>{
        if(validatearea && validatecity && validatehousenumber && validatelandmark && validatepincode && validatestate){
            // e.preventDefault()
            const result=await sendAddress(uid,Address)
            console.log(result)
            if(result.status==200){
                navigate("/stripe")
                
                
            }
            else{
                toast.error("failed")
            }
        }
        else{
            toast.warning("enter validat values")
        }
    }
    console.log(Address)


    useEffect(()=>{
        const id = sessionStorage.getItem("currentUser")
        console.log(id)
        const sid=JSON.parse(id)
        console.log(sid)
        setUid(sid)

    },[])


    return (
        <>
            <div
                className='container'
                style={{
                    minHeight: "800px"
                }}
            >
                <div
                    className='container mt-3 d-flex justify-content-center'
                    style={{
                        height: "40px",
                        border: "2px solid black",
                        backgroundColor:"#AD3AD7",
                        borderRadius:"5px",
                        color:"black",
                        paddingTop:"5px",
                         fontFamily: "FreeMono, monospace"

                    }}>
                    ADDRESS DETAILS
                </div>
                {/* <FormLabel
                   style={{
                    fontWeight:"bold",
                    fontSize:"15px",
                    fontFamily:"FreeMono, monospace"

                   }}
                   >                       
                    FIRST NAME   <span style={{
                        color:"red"
                    }}> *</span>
                    </FormLabel> */}
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <TextField
                            name='housenumber'
                            onChange={(e)=>{address(e)}}
                            className='my-3'
                            style={{
                                width: "100%"
                            }}
                            label="House No,Building Name*" color="secondary" focused />
                       
                        
                        <TextField
                            name='area'
                            onChange={(e)=>{address(e)}}
                            className='my-3'
                            style={{
                                width: "100%"
                            }}
                            label="Road Name,Area,Colony*" color="secondary" focused />
                           

                        <TextField
                            name='city'
                            onChange={(e)=>{address(e)}}
                            className='my-3'
                            style={{
                                width: "100%"
                            }}
                            label="City*" color="secondary" focused />

                    </div>
                    <div className="col">

                        <TextField
                            name='state'
                            onChange={(e)=>{address(e)}}
                            className='my-3'
                            style={{
                                width: "100%"
                            }}
                            label="State*" color="secondary" focused />
                       
                        <TextField
                            name='landmark'
                            onChange={(e)=>{address(e)}}
                            className='my-3'
                            style={{
                                width: "100%"
                            }}
                            label="Landmark" color="secondary" focused />
                           
                        <TextField
                            name='pincode'
                            onChange={(e)=>{address(e)}}
                            className='my-3'
                            style={{
                                width: "100%"
                            }}
                            label="Pincode*" color="secondary" focused />
                    </div>
                </div>


                <button
                    onClick={()=>{submit()}}
                    type='submit'
                    className='btn mt-3'
                    style={{
                        width: "100%",
                        backgroundColor: "#AD3AD7",
                        color: "black",
                        border: "2px solid",
                        fontFamily: "FreeMono, monospace"
                    }}
                >
                    Submit!
                </button>
            </div>
        </>
    )
}

export default Checkout