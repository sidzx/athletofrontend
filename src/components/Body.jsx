import React, { use, useEffect, useState } from 'react'
import eof from '../assets/eof.png'
import eofxs from '../assets/eofxs.png'
import cricklg from '../assets/crciket lg.jpg'
import cricksm from '../assets/crcket sm.jpg'
import { fetchfive } from '../services/allapi'
import "./Body.css"
import { base_url } from '../services/baseurl'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Body() {

    const navigate=useNavigate()

    const [products, setProducts] = useState([])

    const hello=()=>{
        if(sessionStorage.getItem("currentUser")){
            navigate("/addtocart")
        }
        else{
            toast.warning("please login")
            navigate("/login")
        }
    }

    const five_producuts = async () => {

        const result = await fetchfive()
        console.log(result)
        setProducts(result.data)


    }
    const pro=()=>{
        if(sessionStorage.getItem("currentUser")){
            navigate("/products")

        }
        else{
            toast.warn("Please login  to  explore all products")
            navigate("/login")
        }
       
    }
    console.log(products)

    useEffect(() => {
        five_producuts()

    }, [])

    return (
        <>
            <div
                style={{
                    backgroundColor: "#4a4a4a",
                    height: "90px",
                    textAlign: "center",
                    color: "white",
                    letterSpacing: "2px",
                    fontSize: "16px",
                    padding: "10px"
                    // width:"100%"
                }}
                className=' hi d-flex flex-column justify-content-center align-items-center'
            >
                <strong>
                    FREE DELIVERY,RETURN & EXCHANGE
                </strong>
                   <button
                
                className='btn'
                style={{
                backgroundColor:"#3DDDA7",
                
                }}
                onClick={()=>{pro()}}
                >
                Explore All products
                </button>


            </div>
            <div 
            className='d-flex justify-content-center'
            >
             
            </div>

            {/* //only on large screen */}
            <div
                style={{ width: "99vw" }}
                className='d-none d-lg-block'
            >
                <img
                    src={eof}
                    style={{ objectFit: "contain", width: "99vw" }}
                    alt="" />

            </div>

            {/* //not in large screen */}
            <div
                style={{ width: "100vw" }}
                className='d-block  d-lg-none'
            >
                <img
                    src={eofxs}
                    style={{ objectFit: "contain", width: "98vw" }}
                    alt="" />

            </div>
            <div
            className='container mt-5'
            style={{
                border:"3px solid black"
            }}
            ></div>

            <div
                className='d-flex justify-content-center d-none d-lg-block '
                style={{
                    fontSize: "70px",
                    fontFamily: "Impact, fantasy",
                    letterSpacing: "10px",
                    textAlign: "center"
                }}
            >

                <strong>UNWRAP THE BEST DEALS</strong>
            </div>
            <div
                className='d-flex justify-content-center d-block  d-lg-none '
                style={{
                    fontSize: "40px",
                    fontFamily: "Impact, fantasy",

                    textAlign: "center"
                }}
            >
                UNWRAP THE BEST DEALS
            </div>
            <div
                className='d-flex justify-content-center mt-3'
            >
                <div
                    className='d-flex justify-content-around'
                    style={{
                        width: "450px",
                        height: "100px"
                    }}
                >
                    <div
                        style={{
                            width: "60px",
                            height: '60px',
                            backgroundColor: "red",
                            borderRadius: "60px",
                            padding: '10px',
                            border: "2px solid rgb(214, 22, 22)",
                            color: "yellow",
                            fontSize: "10px",
                            boxShadow: "0 0 0 8px white,0 0 0 10px rgba(242, 104, 104, 0.77)",
                            fontWeight: "bold"
                        }}
                        className=" d-flex  flex-column justify-content-center align-items-center"
                    >

                        SNEAKERS
                        <i className="fa-solid fa-star fa-2xs m-1" style={{ color: "#ecdb18" }}></i>

                    </div>
                    <div
                        style={{
                            width: "60px",
                            height: '60px',
                            backgroundColor: "red",
                            borderRadius: "60px",
                            padding: '10px',
                            border: "2px solid rgb(214, 22, 22)",
                            color: "yellow",
                            fontSize: "10px",
                            boxShadow: "0 0 0 8px white,0 0 0 10px rgba(242, 104, 104, 0.77)",
                            fontWeight: "bold"
                        }}
                        className=" d-flex flex-column justify-content-center align-items-center"
                    >
                        <i className="fa-solid fa-star fa-2xs m-1" style={{ color: "#ecdb18" }}></i>
                        JERSEYS

                    </div>
                    <div
                        style={{
                            width: "60px",
                            height: '60px',
                            backgroundColor: "red",
                            borderRadius: "60px",
                            padding: '1px',
                            // border: "2px solid rgb(10, 4, 4)",
                            color: "yellow",
                            fontSize: "10px",
                            boxShadow: "0 0 0 8px white,0 0 0 10px rgba(242, 104, 104, 0.77)",
                            fontWeight: "bold"
                        }}
                        className=" d-flex flex-column justify-content-center align-items-center hi"
                    >
                        T-SHIRTS
                        <i className="fa-solid fa-star fa-2xs m-1 " style={{ color: "#ecdb18" }}></i>
                    </div>
                    <div
                        style={{
                            width: "60px",
                            height: '60px',
                            backgroundColor: "red",
                            borderRadius: "60px",
                            padding: '10px',
                            border: "2px solid rgb(214, 22, 22)",
                            color: "yellow",
                            fontSize: "10px",
                            boxShadow: "0 0 0 8px white,0 0 0 10px rgba(242, 104, 104, 0.77)",
                            fontWeight: "bold"
                        }}
                        className=" d-flex flex-column justify-content-center align-items-center"
                    >
                        <i className="fa-solid fa-star fa-2xs m-2" style={{ color: "#ecdb18" }}></i>
                        SHOES

                    </div>
                    <div
                        style={{
                            width: "60px",
                            height: '60px',
                            backgroundColor: "red",
                            borderRadius: "60px",
                            padding: '10px',
                            border: "2px solid rgb(214, 22, 22)",
                            color: "yellow",
                            fontSize: "10px",
                            boxShadow: "0 0 0 8px white,0 0 0 10px rgba(242, 104, 104, 0.77)",
                            fontWeight: "bold"
                        }}
                        className=" d-flex flex-column justify-content-center align-items-center"
                    >
                        SHORTS
                        <i className="fa-solid fa-star fa-2xs m-1" style={{ color: "#ecdb18" }}></i>

                    </div>



                </div>




            </div>
            <div
            className='container'
            style={{
                border:"3px solid black"
            }}
            ></div>
            <h1
                className='mt-5 ms-5  mb-5'
                style={{
                    fontWeight: "bold",
                    fontFamily: "Impact, fantasy",
                    letterSpacing: "2px"
                }}

            > STEALS OF THE SEASON</h1>

            <div className='row d-flex justify-content-evenly mb-5'>

                {products?.map((item) => (

                    <div className="product-card col-lg-2 col-sm-12">
                        <img
                            src={`${base_url}/upload/${item.cover}`}
                            alt=""
                            className="product-image" />
                        <h3
                            className="product-name">{item.title}</h3>
                        <p className="product-price">${item.price}</p>
                        {/* <button
                            className="add-to-cart-btn" onClick={()=>{hello()}}>Add to Cart</button> */}
                    </div>
                ))}
            </div>


            {/* //only on large screen */}
            <div
                style={{ width: "99vw" }}
                className='d-none d-lg-block'
            >
                <img
                    src={cricklg}
                    style={{ objectFit: "contain", width: "99vw" }}
                    alt="" />

            </div>

            {/* //not in large screen */}
            <div
                style={{ width: "100vw" }}
                className='d-block  d-lg-none'

            >
                <img
                    src={cricksm}
                    style={{ objectFit: "contain", width: "98vw" }}
                    alt="" />

            </div>








        </>
    )
}

export default Body