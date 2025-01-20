import React, { useEffect, useState } from 'react'
import Admindash from './Admindash'
import { fetchproduct } from '../services/allapi'
import { Card,Button } from 'react-bootstrap'
import { base_url } from '../services/baseurl'
import { useNavigate } from 'react-router-dom'

function Viewproduct() {

    const [products,setProducts]=useState()
    const [productid,setProductid]=useState()

    const navigate=useNavigate()


    const fetch=async()=>{
        const result=await fetchproduct()
        console.log(result)
        setProducts(result.data)
    }
    const linkto=async(id)=>{
      // console.log(id)
        setProductid(id)
        navigate('/editproduct',{state:{id:id}})
        
    }
    useEffect(()=>{
        fetch()
    },[])

    console.log(productid)
  return (
    <>
    <Admindash/>
    <div
    className='d-flex flex-column justify-content-center align-items-center'
    
    >
        <h2
        style={{
            
                textAlign: "center",
                fontFamily: "Impact, fantasy"
            
        }}
        className='mt-5'

        >
            PRODUCTS
        </h2>
        <div
        
        style={
            {
                border:"2px solid black",
                width:"200px",
                alignSelf:"center",
                height:"2px"
            }
        }>

        </div>
    </div>
    
    <div 
    className='d-flex row justify-content-center mt-4'
    >
        {

            products?.map((item)=>(
                
           <div className='col-lg-3 col-sm-12 col-md-4 d-flex justify-content-center '>
                <Card style={{
                  width: '16rem',
                  
                  borderRadius: '0px 0px 15px 15px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                }}
                  className="hover-shadow mx-2 my-2 ">
                  <Card.Img style={{
                    height: '200px',
                    objectFit: 'contain',
                  }} variant="top" src={`${base_url}/upload/${item.cover}`} alt=" book,s cover" />
                  <Card.Body>
                    <Card.Title style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#343a40',
                      textAlign: 'center',
                      marginBottom: '0.75rem',
                    }}>{item.title}</Card.Title>
                    <Card.Text style={{ fontSize: '1rem', textAlign: 'center', color: '#6c757d' }}>
                      <strong>quantity:</strong>{item.quantity}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '1rem', textAlign: 'center', color: '#6c757d' }}>
                      <strong>Category:</strong>{item.category}
                    </Card.Text>
                    <Card.Text
                      style={{
                        fontSize: '0.95rem',
                        color: '#495057',
                        textAlign: 'center',
                        maxHeight: '100px',
                        overflowY: 'auto',
                      }}>
                      <strong>Description:</strong>{item.description}
                    </Card.Text>
                    <Card.Text >
                      <div style={{ textAlign: "center" }}>

                        
                        <Button 
                       onClick={(e)=>linkto(item._id)}
                        style={{
                          padding: '0.5rem 1.5rem',
                          fontSize: '1rem',
                          textAlign: 'center',
                          borderRadius: '20px',
                        }} variant='primary' >
                            Edit details
                        </Button>
                        
                      </div>
                    </Card.Text>


                  </Card.Body>


                </Card>

        </div>
            ))

        
        }
    </div>
    </>
  )
}

export default Viewproduct