import React, { use, useEffect, useState } from 'react'
import { addtocart, fetchwishlist, removefromwish } from '../services/allapi'
import { base_url } from '../services/baseurl'
import "./products.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Wishlist() {

  const [list,setList]=useState([])
  const navigate=useNavigate()
  
  const fetch=async()=>{
    const id=sessionStorage.getItem("currentUser")
    console.log(id)
    const sid=JSON.parse(id)
    console.log(sid)

    const result =await fetchwishlist(sid)
    console.log(result)
    if(result.status==200){
      setList(result.data)
    }
    else{
      console.log("wishlist not fetched")
    }
  }

  const del=async(id)=>{
    // const sid= JSON.stringify(id)
    console.log(id)
    const result=await removefromwish(id)
    console.log(result)
    if(result.status==200){
      toast.error("removed from wishlist")
      
     
    }
  }

  const navcart=async(e)=>{
    const data={
      title:e.title,
      cover:e.cover,
      userId:JSON.parse(sessionStorage.getItem("currentUser")),
      productId:e.productId,
      price:e.price
    }
    console.log(data)
    const result=await addtocart(data)
    console.log(result)
    if(result.status==200){
      toast.success("added to cart")
    }
    else{
      toast.success("already added Or something went wrong")
    }
  }
  useEffect(()=>{
    
    fetch()
    

  },[])
  console.log(list)

  return (

<>
    <h2
    className='my-5'
    style={{
      textAlign:"center"
    }}
    >Wishlist<i class="fa-solid fa-heart"></i></h2>

     <div className='row d-flex justify-content-around flex-wrap mb-5'>
    
                        {list?.map((item) => (
    
                            <div className="product-card col-sm-2 mt-2 mx-2 col-lg-3 ">
                                <img
                                    src={`${base_url}/upload/${item.cover}`}
                                    alt=""
                                    className="product-image" />
                                <h3
                                style={{
                                    color:"black"
                                }}
                                    className="product-name">{item.title}</h3>
                                    <p className="product-price">{item.category}</p>
                                <p className="product-price">${item.price}</p>
                                <button
                                    className="add-to-cart-btn mx-2" onClick={()=>navcart(item)}>Add to Cart</button>
                                    
                                    <button
                                    onClick={
                                        ()=>del(item._id)}
                                    className=""
                                    style={{
                                        color:"red",
                                        backgroundColor:"black",
                                        border:" none",
                                        padding:" 8px 16px",
                                        borderRadius:"4px"
                                    }}
                                    
                                    > <i class="fa-solid fa-heart-circle-xmark"></i></button>
                            </div>
                        ))}
                    </div>
                    </>
  )
}

export default Wishlist