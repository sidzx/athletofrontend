import React, { useEffect, useRef } from 'react'
import { FormLabel } from 'react-bootstrap'
import { useState } from 'react'
import Admindash from './Admindash'
import upload from '../assets/imgupload.jpg'
import "./addproduct.css"
import { Adding } from '../services/allapi'
import { toast } from 'react-toastify'


function Addproduct() {


    const [product, setProduct] = useState({
        

    })


    const [preview,setPreview]=useState()

    const [token, setToken] = useState("")

    const [validateid, setValidateid] = useState(true)
    const [validatetitle, setValidatetitle] = useState(true)
    const [validatecover, setValidatecover] = useState(true)
    const [validatecategory, setValidatecategory] = useState(true)
    const [validatequantity, setValidatequantity] = useState(true)
    const [validatedescription, setValidatedescription] = useState(true)
    const [validateprice,setValidateprice]=useState(true)

    const add = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        if (name == "id") {
            if (!!value.match(/^[0-9]{1,}$/)) {
              setProduct({...product,[name]:value})
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
        
        
        else  {
            if (!!value.match(/^[0-9]/)) {
                setProduct({ ...product, [name]: value })
                setValidateprice(true)

            }
            else {
                setValidateprice(false)
            }
            
           
           console.log("hi")
        }
    //    setProduct({ ...product, userId: id })
     }

     const addproduct=async(e)=>{
        e.preventDefault()
        if(!validateid || !validatetitle || !validatecategory || !validatedescription || !validatequantity){
            toast.warning("insert all values")
        }
        else{
            if(validateid && validatetitle  && validatecategory && validatedescription && validatequantity)
            {
                    const productadd=new FormData()
                    productadd.append("id",product.id)
                    productadd.append("title",product.title)
                    productadd.append("cover",product.cover)
                    productadd.append("category",product.category)
                    productadd.append("userId",product.userId)
                    productadd.append("description",product.description)
                    productadd.append("price",product.price)
                    productadd.append("quantity",product.quantity)
                    
                    const Header={
                        'content-type':'multipart/form-data',"Authorization":`Bearer ${token}`
                    }
                    const result= await Adding(productadd,Header)
                    console.log(result)
                    if(result.status==200){
                        toast.success("Added successfully")
                        setProduct({
                            id: "",
                            title: "",
                            userId: "",
                            category: "",
                            cover: "",
                            description: "",
                            quantity: "",
                            price:""

                        })
                        formRef.current.reset()
                        setPreview(upload)
                    }
                    else{
                        toast.error("failed")
                    }

            }


        }

     }
    const formRef = useRef()

    useEffect(() => {
        const sid = sessionStorage.getItem("currentUser")
        const userid=JSON.parse(sid)
        if (sessionStorage.getItem('token')) {
            setToken(sessionStorage.getItem('token'))
        }

       
        setProduct({ ...product, userId:userid })
    }, [])

    useEffect(()=>{
        if(product.cover){
            setPreview(URL.createObjectURL(product.cover))
        }

    },[product.cover])



    console.log(preview)
    console.log(product)
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
                        }}>ADD NEW PRODUCTS</h2>
                    <div
                        style={{
                            height: "5px",
                            backgroundColor: "black",
                            width: "100%",
                        }}
                    ></div>
                    <form action="" className="row" ref={formRef}>
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
                                    onChange={(e) =>{setProduct({...product,cover:e.target.files[0]})}}
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
                                    src={preview ? preview : upload}
                                    style={{
                                        width: "400px",
                                        height: "300px"
                                    }}
                                />
                            </FormLabel>
                            {
                    !validatecover &&
                    <div style={{color:"red"}}>
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
                                className='form-control'
                                style={{
                                    height: "100px",
                                    border: "2px solid "
                                }}
                                onChange={(e) => { add(e) }}

                                name="description"
                                id="description">

                            </textarea>
                            {
                    !validatedescription &&
                    <div style={{color:"red"}}>
                        Enter Product title !
                    </div>
                   }






                        </div>
                        <div className='col-lg-6 col-sm-12 mt-2'>
                            <FormLabel
                            className='mt-1'
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
                                
                                onChange={(e) =>  add(e) }
                                name='id'
                                id='id'
                                className='form-control mt-1'
                                style={{
                                    height: "50px",
                                    border: "2px solid "

                                }}

                            />
                             {
                    !validateid &&
                    <div style={{color:"red"}}>
                        Enter Product id !
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
                                PRODUCT TITLE  <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <input
                                placeholder='Enter Product Name!!'
                                onChange={(e) => { add(e) }}
                                name='title'
                                id='title'
                                className='form-control mt-1'
                                style={{
                                    height: "50px",
                                    border: "2px solid "
                                }}

                            />
                            {
                    !validatetitle &&
                    <div style={{color:"red"}}>
                        Enter Product title !
                    </div>
                   }
                            <FormLabel
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                    fontFamily: "FreeMono, monospace"

                                }}
                                 className='mt-1'
                            >
                                PRODUCT CATEGORY   <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />

                            <select
                           
                                style={{
                                    height: "50px",
                                    border: "2px solid "
                                }}
                                className='form-control mt-1'
                                name="category"
                                id="category"
                                 defaultValue="select category"
                                onChange={(e)=>{add(e)}}>
                                    <option
                                    disabled
                               
                                
                                value="select category"
                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    Select Category
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
                                value="JERSY"
                                    style={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    className='form-control'>
                                    JERSY
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
                    <div style={{color:"red"}}>
                        Enter Product category !
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
                                QUANTITY <span style={{
                                    color: "red"
                                }}> *</span>
                            </FormLabel>
                            <br />
                            <input
                                type="number"
                                onChange={(e) => { add(e) }}
                                name='quantity'
                                id='quantity'
                                className='form-control mt-1'
                                style={{
                                    height: "50px",
                                    border: "2px solid "

                                }}

                            />
                            {
                    !validatequantity &&
                    <div style={{color:"red"}}>
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
                                type="number"
                                onChange={(e) => { add(e) }}
                                name='price'
                                id='price'
                                className='form-control mt-1'
                                style={{
                                    height: "50px",
                                    border: "2px solid "

                                }}

                            />
                            {
                    !validateprice &&
                    <div style={{color:"red"}}>
                        Enter quantity !
                    </div>
                   }
                            <button
                                onClick={(e)=>{addproduct(e)}}
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
                                ADD!
                            </button>



                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Addproduct