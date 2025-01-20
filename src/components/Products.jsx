import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, InputGroup, Dropdown } from 'react-bootstrap'
import logo from '../assets/logo.png'
import shoe from "../assets/runningshoe.jpg"
import sneaker from "../assets/sneaker.jpg"
import tshirt from "../assets/tshirt.jpg"
import jersy from "../assets/jersy.jpg"
import shorts from "../assets/SHORTS.jpg"
import { useState,useEffect } from 'react'
import { base_url } from '../services/baseurl'
import { addtocart, addtowishlist, fetchallproducts, fetchthings } from '../services/allapi'
import "./products.css"
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Products() {

    const [search,setSearch]=useState("")

    const navigate=useNavigate()
    const logout=()=>{
        sessionStorage.clear()
        navigate("/login")
    }
    const [product, setProduct] = useState([])

    const [token,setToken]=useState("")
    

    const fetchproducts = async (e) => {
        console.log(e)

        const result = await fetchallproducts(e)
        console.log(result)
        setProduct(result.data)


    }



   

    const wish=async(e)=>{
        console.log(e)
        if(!sessionStorage.getItem("currentUser")){
            toast.warn("login first ")
            navigate("/login")
        }
        else{
            const data={

                title:e.title,
                cover:e.cover,
                price:e.price,
                userId:JSON.parse(sessionStorage.getItem("currentUser")),
                productId:e._id
    
            }
            console.log(data)
            console.log(e.userId)
    
                const result= await addtowishlist(data)
                console.log(result)
                if(result.status==200){
                    toast.success("added to wishlist")
                }
                else{
                    toast.error("soemthing went wrong")
                }

        }
       
        }

    const navcart=async(e)=>{
        const data={
              title:e.title,
              cover:e.cover,
              userId:JSON.parse(sessionStorage.getItem("currentUser")),
              productId:e._id,
              price:e.price
            }
            console.log(data)
            const result=await addtocart(data)
            console.log(result)
            if(result.status==200){
              toast.success("added to cart")
            }
            else{
              toast.error("already added Or something went wrong")
            }

    }    
    const fetch=async(e)=>{
        setProduct([])
        const result =await fetchthings(e)
        console.log(result)
        if(result.status==200){
            setProduct(result.data)
            
        }
        else{
            console.log("something went wrong")
        }
        console.log(e)
    }

    console.log(product)

    useEffect(() => {
    //    fetchproducts()
       if (sessionStorage.getItem('token')) {
        setToken(sessionStorage.getItem('token'))
    }


    }, [])

    useEffect(()=>{
        fetchproducts(search)

    },[search])

    console.log(search)



    return (
        <>

            <Navbar expand="lg"
                style={{
                    backgroundColor: "#000000",
                    height: "70px",
                    // width:"100vw"
                }}
            >
                <Container className='gx-0'>
                    <Navbar.Brand href="#home" className='me-5 ms-3'>
                        <Nav.Link>
                            <img
                                src={logo}
                                width="60"
                                height="50"
                                className="d-inline-block align-top  "
                                style={{
                                    objectFit: "contain"
                                }}

                                alt="Athleto logo"
                            />
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle
                        className='me-2'
                        style={{
                            backgroundColor: "white"// Background color of the toggle button
                            // borderColor: "white"   // Border color of the toggle button
                        }}
                        aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='' id="basic-navbar-nav " style={{ backgroundColor: "black", width: "100vw" }}>
                        <Nav className="me-auto justify-content-between w-100 " id='navhover'  >
                            {/* <Nav.Link id='men'
                                className='d-flex justify-content-center nav-link1'
                                style={{
                                    color: "white"
                                }}
                                href="#home"
                            >MEN</Nav.Link>
                            <Nav.Link
                                style={{
                                    color: "white"
                                }}
                                className='d-flex justify-content-center nav-link1'
                                href="#home"
                            >WOMEN</Nav.Link>
                            <Nav.Link
                                style={{
                                    color: "white"
                                }}
                                className='d-flex justify-content-center nav-link1'
                                href="#home"
                            >KIDS</Nav.Link>
                            <Nav.Link
                                style={{
                                    color: "#00FFFF"

                                }}
                                className='d-flex justify-content-center nav-link1'
                                href="#home"
                            >SPORTS</Nav.Link>
                            <Nav.Link
                                style={{
                                    color: "#00FFFF"
                                }}
                                className='d-flex justify-content-center nav-link1'
                                href="#home"
                            >LIFESTYLE</Nav.Link>
                            <Nav.Link
                                style={{
                                    color: "white"
                                }}
                                className='d-flex justify-content-center nav-link1'
                                href="#home"
                            >OUTLET</Nav.Link> */}

                            <Form inline className='container'
                                style={{
                                    color: "white"
                                }}>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="basic-addon1"
                                        style={{ border: "0px" }}
                                        onChange={(e)=>{setSearch(e.target.value)}}
                                    />
                                    <InputGroup.Text
                                     style={{ border: "0px" }} id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                                </InputGroup>
                            </Form>
                            {/* <Nav.Link
                            className='d-flex justify-content-center'
                                style={{
                                    color: "white"
                                }}
                                href="#home"
                            ><i className="fa-solid fa-user" style={{color:" #f0f2f4"}}></i></Nav.Link> */}
                            <Dropdown
                                className="d-flex flex-column justify-content-center"

                            >
                                <Dropdown.Toggle

                                    variant="none"
                                    id="dropdown-basic"
                                    className="d-flex justify-content-center"
                                    style={{
                                        color: "white",
                                    }}
                                >
                                    <i className="fa-solid fa-user" style={{ color: "#f0f2f4" }}></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu
                                    className='d-flex flex-column justify-content-center'
                                    style={{
                                        width: "180px",
                                        backgroundColor: "white",
                                        textAlign: "center"
                                    }}
                                >
                                    <Dropdown.Item className='dropdown-item-custom' href="/signup">Signup</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className='dropdown-item-custom' href="/login">Login</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className='dropdown-item-custom' href="/wishlist">Wishlist</Dropdown.Item>
                                    <Dropdown.Divider />
                                    {
                                    (sessionStorage.getItem("currentUser")&&
                                        <Dropdown.Item  className='dropdown-item-custom'href="/editAdmin"> Edit Profile</Dropdown.Item>
                                        
                                    )
                                }
                                    <Dropdown.Divider />
                                    <Dropdown.Item className='dropdown-item-custom' onClick={()=>{logout()}}>Logout</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link
                                className='d-flex justify-content-center nav-link1'
                                style={{
                                    color: "white",
                                    alignSelf: "center"
                                }}
                                href="/wishlist"
                            ><i class="fa-solid fa-heart" style={{ color: " #e6e7ea" }}></i></Nav.Link>
                            <Nav.Link
                                className='d-flex justify-content-center nav-link1'
                                style={{
                                    color: "white",
                                    alignSelf: "center"
                                }}
                                href="/addtocart"
                            ><i class="fa-solid fa-bag-shopping" style={{ color: "#ffffff" }}></i></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div className='d-flex justify-content-center '>
                <div
                onClick={
                    ()=>{fetch("SHOE")}

                }
                    className='mx-2 my-hover my-5 shadow-lg  mb-5 bg-body'
                    style={{
                        border: "1px solid black",
                        width: "200px",
                        height: "150px",
                        textAlign: "center",
                        cursor:"pointer"
                    }}
                >
                    <img
                        className='img-fluid mb-3 '
                        src={shoe}
                        style={{
                            objectFit: "fill"
                        }}
                        alt="" />
                    <a href=""
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontFamily: "Impact, fantasy"

                        }}
                    >
                        SHOES
                    </a>




                </div>
               
                <div
                onClick={
                    ()=>{fetch("TSHIRT")}

                }
                
                    className='mx-2 my-5 my-hover shadow-lg  mb-5 bg-body'
                    style={{
                        border: "1px solid black",
                        width: "200px",
                        height: "150px",
                        textAlign: "center"
                    }}
                >
                    <img
                        className='img-fluid mb-3'
                        src={tshirt}
                        style={{
                            objectFit: "contain"
                        }}
                        alt="" />
                    <a href=""
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontFamily: "Impact, fantasy"

                        }}
                    >
                        TSHIRTS
                    </a>
                </div>
                <div
                    onClick={
                        ()=>{fetch("JERSY")}
    
                    }
                    className='mx-2 my-5 my-hover shadow-lg  mb-5 bg-body'
                    style={{
                        border: "1px solid black",
                        width: "200px",
                        height: "150px",
                        textAlign: "center"
                    }}
                >
                    <img
                        className='img-fluid mb-2'
                        src={jersy}
                        style={{
                            objectFit: "contain"
                        }}
                        alt="" />
                    <a href=""
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontFamily: "Impact, fantasy"

                        }}
                    >
                        JERSEYS
                    </a>
                </div>
                <div
                onClick={
                    ()=>{fetch("SHORTS")}

                }
                    className='mx-2 my-5 my-hover shadow-lg  mb-5 bg-body'
                    style={{
                        border: "1px solid black",
                        width: "200px",
                        height: "150px",
                        textAlign: "center"
                    }}
                >
                    <img
                        className='img-fluid mb-3'
                        src={shorts}
                        style={{
                            objectFit: "contain"
                        }}
                        alt="" />
                    <a href=""
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontFamily: "Impact, fantasy"


                        }}
                    >
                        SHORTS
                    </a>
                </div>
                <div
                    onClick={
                        ()=>{fetch("SNEAKER")}

                    }
                    className='mx-2 my-hover my-5 shadow-lg  mb-5 bg-body'
                    style={{
                        border: "1px solid black",
                        width: "200px",
                        height: "150px",
                        textAlign: "center"
                    }}
                >
                    <img
                        className='img-fluid mb-3 mb-3'
                        src={sneaker}
                        style={{
                            objectFit: "contain"
                        }}
                        alt="" />
                    <a href=""
                    className=''
                        style={{
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Impact, fantasy"

                        }}
                    >
                        SNEAKER
                    </a>




                </div>




            </div>

            <div>
                <div 
                className='mb-5'
                style={{
                    border: "2px solid black"
                }}></div>
                {/* <h2
                    className=' mb-3'
                    style={{
                        textAlign: "center",
                        fontFamily: "Impact, fantasy"
                    }}>PRODUCTS
                    <div style={{
                        border: "2px solid black"
                    }}></div>
                </h2> */}


                <div className='row d-flex justify-content-evenly mb-5'>

                    {product?.map((item) => (

                        <div className="product-card col-sm-2 mt-2  mx-2 col-lg-3 ">
                            <img
                                src={`${base_url}/upload/${item.cover}`}
                                alt=""
                                className="product-image" />
                            <h3
                            style={{
                                color:"black"
                            }}
                                className="product-name mt-5">{item.title}</h3>
                                <p className="product-price">{item.category}</p>
                            <p className="product-price">${item.price}</p>
                            <button
                            onClick={()=>navcart(item)}
                                className="add-to-cart-btn mx-2">Add to Cart</button>
                                {/* <Button><i class="fa-solid fa-heart-circle-plus"></i></Button> */}
                                <button
                                onClick={
                                    ()=>wish(item)}
                                className=""
                                style={{
                                    color:"red",
                                    backgroundColor:"black",
                                    border:" none",
                                    padding:" 8px 16px",
                                    borderRadius:"4px"
                                }}
                                
                                > <i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    ))}


                </div>
            </div>






        </>
    )
}

export default Products