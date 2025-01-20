import React from 'react'
import Admindash from './Admindash'

function Dashboard() {
  return (
   <>
   <Admindash/>

   <div
   className='d-flex justify-content-center align-items-center'
   style={{
    minHeight:"500px"
   }}
   >

    <div
    className='mt-5 d-flex flex-column justify-content-center align-items-center'
    style={{
        height:"200px",
        width:"300px",
        backgroundColor:"rgb(213, 130, 109)",
        borderRadius:"10px",
        
    }}>
        <h6
        className='mx-5'
        style={{
            fontFamily:"fantasy",
           
        }}>TOTAL EARNINGS:$34567</h6>
        <h6
        className='mx-5'
        style={{
            fontFamily:"fantasy",
           
        }}>TOTAL ORDERS:10</h6>
        
    </div>
    {/* <div
    className='mt-5 mx-5 d-flex align-items-center'
    style={{
        height:"200px",
        width:"300px",
        backgroundColor:"rgb(163, 213, 109)",
        borderRadius:"10px",
        alignContent:"center"
    }}>
        <h6
        className='mx-5'
        style={{
            fontFamily:"fantasy",
           
        }}>TOTAL ORDERS:10</h6>
        
    </div> */}

   </div>
   
   
   </>
  )
}

export default Dashboard