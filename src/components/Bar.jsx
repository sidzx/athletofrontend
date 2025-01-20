import React, { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, InputGroup, Dropdown, FormLabel } from 'react-bootstrap'
import logo from '../assets/logo.png'
import eof from "../assets/eof.png"
import eofxs from "../assets/eofxs.png"
import './Bar.css'
import { useNavigate } from 'react-router-dom'

function Bar() {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    const cart = () => {
        const result = sessionStorage.getItem("currentUser")
        if (result) {
            navigate("/addtocart")
        }
        else {
            navigate("/login")
        }

    }
    const logout=()=>{
        sessionStorage.clear()
        navigate("/login")
    }

    const wish = () => {
        const result = sessionStorage.getItem("currentUser")
        if (result) {
            navigate("/wishlist")
        }
        else {
            navigate("/login")
        }

    }




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
                            >TRENDING</Nav.Link>
                            <Nav.Link
                                style={{
                                    color: "white"
                                }}
                                 className='d-flex justify-content-center nav-link1'
                                href="#home"
                            >LOGIN</Nav.Link>
                            <Nav.Link
                                style={{
                                    color: "white"
                                }}
                                 className='d-flex justify-content-center nav-link1'
                                href="#home"
                            ></Nav.Link>
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
                                    color: "white",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}>
                                <FormLabel
                                    style={{
                                        fontSize: "22px"
                                    }}
                                    className='hh'
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
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}

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

                                {
                                    isOpen && (
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
                                            {/* <Dropdown.Divider />
                                            <Dropdown.Item className='dropdown-item-custom' href="/wishlist">Wishlist</Dropdown.Item> */}
                                            <Dropdown.Divider />
                                            <Dropdown.Item className='dropdown-item-custom' href="/contact">Contact Us</Dropdown.Item>
                                            {
                                                (sessionStorage.getItem("currentUser") &&
                                                <Dropdown.Item className='dropdown-item-custom' href="/editAdmin"> Edit Profile</Dropdown.Item>

                                                )
                                            }
                                            {
                                                (sessionStorage.getItem("currentUser") &&
                                                <Dropdown.Item className='dropdown-item-custom' onClick={()=>{logout()}}> Logout</Dropdown.Item>

                                                )
                                            }
                                            

                                        </Dropdown.Menu>
                                    )
                                }
                            </Dropdown>



                            <Nav.Link
                                className='d-flex justify-content-center nav-link1'
                                style={{
                                    color: "white",
                                    alignSelf: "center"
                                }}
                                onClick={() => { wish() }}
                            ><i class="fa-solid fa-heart" style={{ color: " #e6e7ea" }}></i></Nav.Link>
                            <Nav.Link
                                className='d-flex justify-content-center nav-link1'
                                style={{
                                    color: "white",
                                    alignSelf: "center"
                                }}
                                onClick={() => { cart() }}
                            ><i class="fa-solid fa-bag-shopping" style={{ color: "#ffffff" }}></i></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div
                                className="dropdown"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="dropdown-button">Hover Me</button>
                                {isOpen && (
                                    <div className="dropdown-menu">
                                        <a href="#option1" className="dropdown-item">Option 1</a>
                                        <a href="#option2" className="dropdown-item">Option 2</a>
                                        <a href="#option3" className="dropdown-item">Option 3</a>
                                    </div>
                                )}
                            </div> */}

        </>
    )
}

export default Bar