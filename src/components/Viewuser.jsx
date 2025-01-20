import React, { useEffect, useState } from 'react'
import Admindash from './Admindash'
import { Userview } from '../services/allapi'

function Viewuser() {

    const [users,setUsers]=useState()

    const viewusers=async()=>{
        const result=await Userview()
        console.log(result)
        setUsers(result.data)
        
    }
    useEffect(()=>{
        viewusers()

    },[])
    console.log(users)
   
  return (
    <>
          <Admindash/>
          <h2 
          className='mt-5'
          style={{

            
           
          }}
          > Users</h2>
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
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    users?.map((item)=>(
                        <tr>
                            <td>{item.fname}</td>
                            <td>{item.sname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))
                   }
                </tbody>

            </table>


        </>
  )
}

export default Viewuser