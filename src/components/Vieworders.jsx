import React, { useEffect, useState } from 'react'
import { vieworders } from '../services/allapi'
import Admindash from './Admindash'
import { toast } from 'react-toastify'

function Vieworders() {

    const [order,setOrder]=useState({})

    const fetch=async()=>{
        const result=await vieworders()
        console.log(result)
        if(result.status==200){
            setOrder(result.data)

        }
        else{
            toast.success("something went wrong")
        }

    }

    useEffect(()=>{
        fetch()

    },[])


  return (
   <>
   <Admindash/>
    <h2 
          className='mt-5'
          style={{

            
           
          }}
          > Orders</h2>
          <div
           className='mt-1 d-flex justify-content-center'>
          <div
          className='mb-5'
         
          style={
            {   width:"50px",
                alignSelf:"center",
                border:"2px  solid black"
            }
          }
          >

          </div>
          </div>
          <table class="table table-dark table-striped container">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">user ID</th>
                        <th scope="col">Payemnt ID</th>
                        <th scope="col">Amount</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    order?.map((item)=>(
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.paymentId}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))
                   }
                </tbody>

            </table>
   
   </>
  )
}

export default Vieworders