
import { common } from "@mui/material/colors";
import { base_url } from "./baseurl";
import { commonRequest } from "./commomapi";

export const sign=async(body)=>{
    return await commonRequest('POST',`${base_url}/signup`,body,"")
}
export const logUser=async(body)=>{
    return await commonRequest('POST',`${base_url}/login`,body,'')
}
export const Userview=async()=>{
    return await commonRequest("GET",`${base_url}/viewusers`,"","")
}
export const checkmail=async(body)=>{
    return await commonRequest("POST",`${base_url}/checkmail`,body,"")
}
export const editpassword=async(id,body)=>{
    return await commonRequest("PUT",`${base_url}/reset/${id}`,body,"")
}
export const getdetails=async(id)=>{
    return await commonRequest('GET',`${base_url}/details/${id}`,"","")
}
export const editAdmin=async(id,body)=>{
    return await commonRequest('PUT',`${base_url}/updateAdmin/${id}`,body,"")
}
export const Adding=async(body,header)=>{
    return await commonRequest('POST',`${base_url}/addproduct`,body,header)
}

export const fetchproduct=async()=>{
    return await commonRequest("GET",`${base_url}/viewproduct`,'','')
}

export const getproduct_to_be_edited=async(id)=>{
    return await commonRequest("GET",`${base_url}/getproduct/${id}`,"","")
}
export const editing=async(id,body,header)=>{
    return await commonRequest("PUT",`${base_url}/editproduct/${id}`,body,header)
}

export const fetchfive=async()=>{
    return await commonRequest("GET",`${base_url}/fetchfive`,"","")
}

export const fetchallproducts=async(search)=>{
    return await commonRequest("GET",`${base_url}/fetchproducts?search=${search}`,"","")

}
export const fetchthings=async(id)=>{
    return await commonRequest("GET",`${base_url}/fetch/${id}`,"","")
}
export const addtowishlist=async(body)=>{
    return await commonRequest("POST",`${base_url}/addwish`,body,"")
}

export const fetchwishlist=async(id)=>{
    return await commonRequest("GET",`${base_url}/get/${id}`,"","")
}


export const removefromwish=async(id)=>{
    return await commonRequest("DELETE",`${base_url}/remove/${id}`,{},"")
}

export const addtocart=async(body)=>{
    return await commonRequest("POST",`${base_url}/addcart`,body,"")
}

export const fetchcart=async()=>{
    return await commonRequest("GET",`${base_url}/fetchcart`,"","")
}

export const removefromcart=async(id)=>{
    return await commonRequest("DELETE",`${base_url}/deletefromcart/${id}`,{},"")
}

export const incrementQuantity=async(id,body)=>{
    return await commonRequest("PUT",`${base_url}/increment/${id}`,body,"")
}
export const decrementQuantity=async(id,body)=>{
    return await commonRequest("PUT",`${base_url}/decrement/${id}`,body,"")
}
export const quantitycount=async()=>{
    return await commonRequest("GET",`${base_url}/quantity`,"","")
}
export const pricecount=async()=>{
    return await commonRequest("GET",`${base_url}/price`,"","")
}
export const sendAddress=async(id,body)=>{
    return await commonRequest("PUT",`${base_url}/address/${id}`,body,"")
}
export const home=async(id)=>{
    return await commonRequest("DELETE",`${base_url}/clearcart/${id}`,{},"")
}
export const order=async(body)=>{
    return await commonRequest("POST",`${base_url}/addorder`,body,"")
}
export const vieworders=async()=>{
    return await commonRequest("GET",`${base_url}/vieworder`,"","")
}