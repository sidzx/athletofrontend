import React from 'react'
import Body from './Body'
import eof from '../assets/eof.png'
import eofxs from '../assets/eofxs.png'
import cricklg from '../assets/crciket lg.jpg'
import cricksm from '../assets/crcket sm.jpg'
import { fetchfive } from '../services/allapi'
import "./Body.css"
import { Navbar, Nav, Container, NavDropdown, Form, InputGroup, Dropdown, FormLabel } from 'react-bootstrap'
import logo from '../assets/logo.png'

import './Bar.css'
import { base_url } from '../services/baseurl'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function User() {

    const logout = () => {
        sessionStorage.clear()
        navigate("/login")
    }


    const [products, setProducts] = useState([])

    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
        setIsOpen(true)
        console.log(isOpen)
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
        console.log(isOpen)


    };

   

    const five_producuts = async () => {

        const result = await fetchfive()
        console.log(result)
        setProducts(result.data)


    }
    const navigate = useNavigate()
    const pro = () => {
        navigate("/products")
    }


    console.log(products)

    useEffect(() => {
        five_producuts()

    }, [])

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

                            <Form inline className='container mx-lg-5'
                                style={{
                                    color: "white"
                                }}>
                                <FormLabel
                                    style={{
                                        fontFamily:"fantasy",
                                        fontSize: "20px"
                                    }}
                                >
                                    "Athleto: Fuel Your Passion, Elevate Your Performance, Conquer Every Goal."
                                </FormLabel>

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
                                    <Dropdown.Item className='dropdown-item-custom' href="/editAdmin"> EditProfile</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className='dropdown-item-custom' onClick={() => { logout() }}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link
                                href="/wishlist"
                                className='d-flex justify-content-center nav-link1'
                                style={{
                                    color: "white",
                                    alignSelf: "center"
                                }}

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
                        backgroundColor: "#3DDDA7",

                    }}
                    onClick={() => { pro() }}
                >
                    Explore All products
                </button>
                {/* <div
                                className="dropdown"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="dropdown-button">Hover Me</button>
                                {isOpen && 
                                    
                                        <div className=''>
                                            <a href="#option1" className="dropdown-item">Option 1</a>
        <a href="#option2" className="dropdown-item">Option 2</a>
        <a href="#option3" className="dropdown-item">Option 3</a>
                                        </div>
                                    
                                }
                            </div> */}


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
                    border: "3px solid black"
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
                    border: "3px solid black"
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
                        <h4
                            className="product-name"
                            style={{
                                color:"black"
                            }}>{item.title}</h4>
                        <p className="product-price">${item.price}</p>
                        <button
                        style={{
                            marginTop:"auto",
                            marginBottom:"5px",
                            position:"relative"
                        }}
                       onClick={()=>{
                        pro()
                       }}
                            className="add-to-cart-btn">Add to Cart</button>
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

export default User