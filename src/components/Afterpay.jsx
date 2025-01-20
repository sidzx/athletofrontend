import React, { useEffect, useState } from 'react'
import success from "../assets/success.webp"
import { useNavigate } from 'react-router-dom'
import { home, order } from '../services/allapi'
import { toast } from 'react-toastify'

function Afterpay() {
  const navigate=useNavigate()


  const [details,setDetails]=useState({})
 
  const clearcart=async()=>{
    const id =JSON.parse(sessionStorage.getItem("currentUser"))
    console.log(id)
     const result=await home(id)
     console.log(result)
     if(result.status==200){
      navigate("/products")

     }
     else{
      toast.error("something wrong")
     }
  }

    const sendorder=async(details)=>{
      const data={
        userId:JSON.parse(sessionStorage.getItem("currentUser")),
        paymentId:details.id,
        status:details.status,
        amount:details.amount
      }
      console.log(data)
      const result= await order(data)
      console.log(result)
      if(result.status==200){
        console.log("order added")
      }
      else{
        console.log("something went wrong")
      }
    }

  useEffect(()=>{
    const de =JSON.parse(sessionStorage.getItem("details"))
    console.log(de)
    setDetails(de)
    
  },[])

  useEffect(()=>{
    sendorder(details)
  },[details])
  console.log(details.id)
  return (
   <>
   <div
   style={{
    minHeight:"500px"

   }}
   className='d-flex flex-column justify-content-center align-items-center'
   >
    <div
    className='card mt-5'
    style={{
      alignSelf:"center",
      border:"2px solid green",
      height:"150px",
      borderRadius:"10px",
      width:"350px",
      borderBottom:"0px"
    }}>
      <img className='img-thumbnail mt-1'
      
      style={
        {
          alignSelf:"center",
          width:"110px",
          height:"90px",
          border:"0px"
        }
      }
      src={success}/>
      <h2
      style={{
        alignSelf:"center",
        color:"#59C52F"
      }}
      
      >Payment Successful!</h2>
  

    </div>
    <div
    className='card '
    style={{
      alignSelf:"center",
      border:"2px solid green",
      height:"150px",
      borderRadius:"10px",
      width:"350px",
      borderTop:"0px"
    }}>
     <div
     
     style={{
      alignItems:"center"
     }}
     className='mt-5 d-flex flex-column justify-content-center'>
     <span><strong>Payment ID:</strong>
     "{details.id}"
     </span>
     <span><strong>Amount Paid:</strong> 
     ₹{details.amount}
     </span>
     <span><strong>Status:</strong> "{details.status}"
     
     </span>

     </div>
    </div>


   </div>
   <div
   
   className='d-flex justify-content-center'
   >
   <button
   onClick={()=>clearcart()}
   className='btn btn-success' 
   style={{
    alignSelf:"center",
    position:"absolute"

   }}
   >⇐ Home</button>
   
   </div>
   </>
  )
}

export default Afterpay