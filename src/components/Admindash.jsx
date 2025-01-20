import React from 'react'

import { useState } from 'react';
import { Offcanvas, Nav, Navbar, Dropdown, Form, InputGroup, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Admindash() {
    const navigate=useNavigate()

     const [show, setShow] = useState(false);
  
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    const logout=()=>{
        sessionStorage.clear()
        navigate("/")

    }
  return (
    <>
    <Navbar
                style={{
                    backgroundColor: "#000",
                    height: "70px",
                }}
                className="d-flex justify-content-between align-items-center px-3"
            >
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="60"
                        height="50"
                        alt="Athleto logo"
                        style={{ objectFit: "contain" }}
                    />
                    <span
                    className='ms-5'
                    style={{color:"white",
                        fontFamily: "Impact",
                        letterSpacing:"2px",
                        fontSize:"30px",
                        alignSelf:"center"
                    }}
                    >ADMIN DASHBOARD</span>
                </Navbar.Brand>
                <i
                    className="fa-solid fa-bars"
                    style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
                    onClick={handleShow}
                ></i>
            </Navbar>
           
            {/* Sidebar */}
            <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "#000" }}>
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title
                    className="d-flex justify-content-center align-items-center">
                        <img
                            src={logo}
                            width="60"
                            height="50"
                            alt="Athleto logo"
                            style={{ objectFit: "contain" }}
                        />
                        <span
                    className='ms-3'
                    style={{color:"white",
                        fontFamily: "Impact",
                        letterSpacing:"2px",
                        fontSize:"30px"
                    }}
                    >ADMIN DASHBOARD</span>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column text-white">
                    <Form className="my-3">
                            <InputGroup>
                                <Form.Control
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                    style={{
                                        backgroundColor: "#333",
                                        color: "white",
                                        border: "none",
                                    }}
                                />
                                <InputGroup.Text
                                    id="basic-addon1"
                                    style={{
                                        backgroundColor: "#333",
                                        color: "white",
                                        border: "none",
                                    }}
                                >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form>
                        <Nav.Link href="/dashboard" className="text-white item">DASHBOARD</Nav.Link>
                        <Nav.Link href="/addproduct" className="text-white item">ADD PRODUCTS</Nav.Link>
                        <Nav.Link href="/viewproduct" className="text-white item ">VIEW PRODUCTS</Nav.Link>
                        <Nav.Link href="/viewusers" className="text-info item ">VIEW USERS</Nav.Link>
                        <Nav.Link href="/vieworder" className="text-info item">VIEW ORDERS</Nav.Link>
                        <Nav.Link href="/editAdmin" className="text-white item">EDIT PROFILE</Nav.Link>
                        <Nav.Link  onClick={()=>{logout()}} className="text-white item">LOG OUT</Nav.Link>
                        {/* <Button
                        className='logout'
                        style={{width:"200px"}}>LOG OUT</Button> */}

                       
                       

                        {/* Dropdown Menu */}
                        {/* <Dropdown>
                            <Dropdown.Toggle
                                variant="none"
                                id="dropdown-basic"
                                className="text-white"
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                }}
                            >
                                <i className="fa-solid fa-user"></i> Account
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                                <Dropdown.Item href="/login">Login</Dropdown.Item>
                                <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
                                <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Nav.Link href="#wishlist" className="text-white">
                            <i className="fa-solid fa-heart"></i> Wishlist
                        </Nav.Link>
                        <Nav.Link href="#cart" className="text-white">
                            <i className="fa-solid fa-bag-shopping"></i> Cart
                        </Nav.Link> */}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <div
            style={{
                minHeight:"500px",
                backgroundColor:"#FFFFF0"
            }}
            ></div> */}

    
    </>
  )
}

export default Admindash