import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getproduct_to_be_edited } from '../services/allapi'
import Admindash from './Admindash'
import { FormLabel } from 'react-bootstrap'
import { base_url } from '../services/baseurl'
import { editing } from '../services/allapi'
import { toast } from 'react-toastify'
function Editproduct() {


    const [preview, setPreview] = useState("")

    const [product, setProduct] = useState({})
    const d = useLocation()
    const id = d.state.id
    console.log(id)

    const navigate = useNavigate()

    const [token, setToken] = useState()

    const [productdetails, setProductdetails] = useState({})

    const [validateid, setValidateid] = useState(true)
    const [validatetitle, setValidatetitle] = useState(true)
    const [validatecover, setValidatecover] = useState(true)
    const [validatecategory, setValidatecategory] = useState(true)
    const [validatequantity, setValidatequantity] = useState(true)
    const [validatedescription, setValidatedescription] = useState(true)
    const [validateprice, setValidateprice] = useState(true)


    const getproduct = async () => {
        const result = await getproduct_to_be_edited(id)
        console.log(result)
        if (result.status == 200) {
            setProductdetails(result.data)
            setProduct(result.data)

        }
    }

    const edit = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        if (name == "id") {
            if (!!value.match(/^[0-9]{1,}$/)) {
                setProduct({ ...product, [name]: value })
                setValidateid(true)
            }
            else {
                setValidateid(false)
            }
        }
        else if (name == "title") {
            if (!!value.match(/^[0-9A-Za-z,. ]{1,}$/)) {
                setProduct({ ...product, [name]: value })
                setValidatetitle(true)
            }
            else {
                setValidatetitle(false)
            }

        }
        else if (name == "category") {
            if (!!value.match(/^[a-z A-Z]{1,}$/)) {
                setProduct({ ...product, [name]: value })
                setValidatecategory(true)
            }
            else {
                setValidatecategory(false)
            }
        }
        else if (name == "quantity") {

            if (!!value.match(/^[0-9]{1,}$/)) {
                setProduct({ ...product, [name]: value })
                setValidatequantity(true)
            }
            else {
                setValidatequantity(false)
            }

        }
        else if (name == "description") {
            if (!!value.match(/^[0-9a-zA-Z .,]/)) {
                setProduct({ ...product, [name]: value })
                setValidatedescription(true)

            }
            else {
                setValidatedescription(false)
            }
        }


        else {
            if (!!value.match(/^[0-9]/)) {
                setProduct({ ...product, [name]: value })
                setValidateprice(true)

            }
            else {
                setValidateprice(false)
            }



            console.log("hi")
        }

    }

    const editproduct = async (e) => {
        e.preventDefault()
        if (!validateid || !validatetitle || !validatecategory || !validatedescription || !validatequantity) {
            toast.warning("insert all values")
        }
        else {
            if (validateid && validatetitle && validatecategory && validatedescription && validatequantity) {
                const productedit = new FormData()
                productedit.append("id", product.id)
                productedit.append("title", product.title)
                productedit.append("cover", product.cover)
                productedit.append("category", product.category)
                productedit.append("userId", product.userId)
                productedit.append("description", product.description)
                productedit.append("price",product.price)
                productedit.append("quantity", product.quantity)
                const Header = {
                    'content-type': 'multipart/form-data', "Authorization": `Bearer ${token}`
                }
                const result = await editing(id, productedit, Header)
                console.log(result)
                if (result.status == 200) {
                    toast.success("Edited successfully")
                    // setProduct({
                    //     id: "",
                    //     title: "",
                    //     userId: "",
                    //     category: "",
                    //     cover: "",
                    //     description: "",
                    //     quantity: ""

                    // })
                    navigate("/viewproduct")

                }
                else{
                    toast.error("editing failed")
                }

            }


        }

    }


    console.log(product)


    useEffect(() => {
        getproduct()
        // console.log(id)
        if (sessionStorage.getItem('token')) {
            setToken(sessionStorage.getItem('token'))
        }

    }, [])

    console.log(productdetails)
    console.log(token)

    useEffect(() => {
        if (productdetails.cover != product.cover) {
            setPreview(URL.createObjectURL(product.cover))
        }
    }, [product.cover])

    return (
        <>
            <Admindash />
            <div className='d-flex justify-content-center container'>
                <div style={{ width: "75vw" }}>
                    <h2
                        className='mt-3 mb-3'
                        style={{
                            textAlign: "center",
                            fontFamily: "Impact, fantasy"
                        }}>EDIT PRODUCT</h2>
                    <div
                        style={{
                            height: "5px",
                            backgroundColor: "black",
                            width: "100%",
                        }}
                    ></div>
                    <form action="" className="row" >
                        <div className='col-lg-6 col-sm-12 mt-3'>
                            <FormLabel
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace",


                                }}
                            >
                                PRODUCT IMAGE<span style={{
                                    color: "red"
                                }}> *</span>
                                <input
                                    onChange={(e) => { setProduct({ ...product, cover: e.target.files[0] }) }}
                                    style={{
                                        display: "none"
                                    }}
                                    className='form-control'
                                    type='file'
                                    name='cover'
                                    id='cover'
                                />
                                <br />
                                <img
                                    className='img-fluid mt-2'
                                    src={preview ? preview : `${base_url}/upload/${productdetails.cover}`}
                                    style={{
                                        width: "400px",
                                        height: "300px"
                                    }}
                                />
                            </FormLabel>
                            {
                                !validatecover &&
                                <div style={{ color: "red" }}>
                                    upload product image !
                                </div>
                            }
                            <FormLabel
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                            >
                                PRODUCT DESCRIPTION<span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <textarea
                                defaultValue={productdetails.description}
                                className='form-control'
                                style={{
                                    height: "100px",
                                    border: "2px solid "
                                }}
                                onChange={(e) => { edit(e) }}

                                name="description"
                                id="description">

                            </textarea>
                            {
                                !validatedescription &&
                                <div style={{ color: "red" }}>
                                    Enter Product description !
                                </div>
                            }
                            {/* <FormLabel
                                className='mt-2'
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                            >
                                QUANTITY <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <input
                                defaultValue={productdetails.quantity}
                                type="number"
                                onChange={(e) => { edit(e) }}
                                name='quantity'
                                id='quantity'
                                className='form-control mt-2'
                                style={{
                                    height: "50px",
                                    border: "2px solid "

                                }}

                            />
                            {
                                !validatequantity &&
                                <div style={{ color: "red" }}>
                                    Enter quantity !
                                </div>
                            } */}






                        </div>
                        <div className='col-lg-6 col-sm-12 mt-2'>
                            <FormLabel
                                className='mt-2'
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                            >
                                PRODUCT ID <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <input
                                defaultValue={productdetails.id}

                                onChange={(e) => edit(e)}
                                name='id'
                                id='id'
                                className='form-control mt-2'
                                style={{
                                    height: "50px",
                                    border: "2px solid "

                                }}

                            />
                            {
                                !validateid &&
                                <div style={{ color: "red" }}>
                                    Enter Product id !
                                </div>
                            }
                            <FormLabel
                                className='mt-2'
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                            >
                                PRODUCT TITLE  <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <input
                                defaultValue={productdetails.title}
                                placeholder='Enter Product Name!!'
                                onChange={(e) => { edit(e) }}
                                name='title'
                                id='title'
                                className='form-control mt-2'
                                style={{
                                    height: "50px",
                                    border: "2px solid "
                                }}

                            />
                            {
                                !validatetitle &&
                                <div style={{ color: "red" }}>
                                    Enter Product title !
                                </div>
                            }
                            <FormLabel
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                                className='mt-2'
                            >
                                PRODUCT CATEGORY   <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />

                            <select
                               value={product.category?product.category:productdetails.category}
                               
                                style={{
                                    height: "50px",
                                    border: "2px solid "
                                }}
                                className='form-control mt-2'
                                name="category"
                                id="category"
                                onChange={(e) => { edit(e) }}
                            >
                                <option
                                    
                                    disabled
                                    value=""
                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    Select Category
                                </option>
                                
                                <option
                                    value="JERSY"
                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    JERSY
                                </option>
                                <option
                                    value="SHOE"
                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    SHOE
                                </option>
                                <option
                                    value="SNEAKER"

                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    SNEAKER
                                </option>
                                <option
                                    value="TSHIRT"
                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    T-SHIRTS
                                </option>
                                <option
                                    value="SHORTS"
                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    SHORTS
                                </option>




                            </select>
                            {
                                !validatecategory &&
                                <div style={{ color: "red" }}>
                                    Enter Product category !
                                </div>
                            }





                            <FormLabel
                                className='mt-2'
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                            >
                                QUANTITY <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <input
                                defaultValue={productdetails.quantity}
                                type="number"
                                onChange={(e) => { edit(e) }}
                                name='quantity'
                                id='quantity'
                                className='form-control mt-2'
                                style={{
                                    height: "50px",
                                    border: "2px solid "

                                }}

                            />
                            {
                                !validatequantity &&
                                <div style={{ color: "red" }}>
                                    Enter quantity !
                                </div>
                            }
                            <FormLabel
                                className='mt-1'
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                            >
                                PRICE <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <input
                                defaultValue={productdetails.price}
                                type="number"
                                onChange={(e) => { edit(e) }}
                                name='price'
                                id='price'
                                className='form-control mt-2'
                                style={{
                                    height: "50px",
                                    border: "2px solid "

                                }}

                            />
                            {
                                !validateprice &&
                                <div style={{ color: "red" }}>
                                    Enter price !
                                </div>
                            }
                            <button
                                onClick={(e) => { editproduct(e) }}
                                type='submit'
                                className='btn mt-5'
                                style={{
                                    width: "100%",
                                    backgroundColor: "grey",
                                    color: "black",
                                    border: "2px solid",
                                    fontFamily: "FreeMono, monospace"
                                }}
                            >
                                Edit!
                            </button>



                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Editproduct