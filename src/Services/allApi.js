import { BASE_URL } from "./base_url";
import { commonRequest } from "./CommonRequest";




//register api
export const empRegister = async (body,header)=>{
 return await commonRequest('POST',`${BASE_URL}/users/register`,body,header)
}


export const getallusers = async(search)=>{
    return await commonRequest('GET',`${BASE_URL}/get-all-employees?search=${search}`,"")
}

//Get a particular user
 export const viewUser = async(id)=>{
     return await commonRequest('GET',`${BASE_URL}/employee/view/${id}`,"")
 }

 //Edit user 
 export const editUser = async(id,body,header)=>{
    return await commonRequest('PUT',`${BASE_URL}/employee/edit/${id}`,body,header)
 }

 //delete user
 export const deleteuser = async (id)=>{
      return await commonRequest('DELETE',`${BASE_URL}/employee/delete/${id}`,{})
 }