import axios from "axios"
import { FAIL_REQUEST, MAKE_REQUEST, GET_USER, DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ } from "./ActionType"

export const makeRequest = ()=>{
    return {
        type:MAKE_REQUEST
    }
}

export const failRequest = (err)=>{
    return {
        type:FAIL_REQUEST,
        payload:err
    }
}

export const getUser = (data)=>{
    return {
        type:GET_USER,
        payload:data
    }
}

export const deleteUser = ()=>{
    return {
        type:DELETE_USER

    }
}
export const addUser = ()=>{
    return{
        type:ADD_USER
    }
}

export const updateUser = ()=>{
    return{
        type:UPDATE_USER
    }
}

export const getUserObj = (data) =>{
    return {
        type:GET_USER_OBJ,
        payload:data
    }
}

export const userList =()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get("http://localhost:3000/user").then((res)=>{const users = res.data; dispatch(getUser(users));}).catch((err)=>dispatch(failRequest(err.message)))

    }
}

export const removeUser = (code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.delete("http://localhost:3000/user/"+code).then((res)=>{dispatch(deleteUser());}).catch((err)=>dispatch(failRequest(err.message)))
    }
}

export const funcAddUser = (data)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.post("http://localhost:3000/user/",data).then(res=>dispatch(addUser())).catch(err=>dispatch(failRequest(err.message)));
    }
}

export const funcUpdateUser = (data,code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.put("http://localhost:3000/user/"+code,data).then(res=>dispatch(updateUser())).catch(err=>dispatch(failRequest(err.message)));
    }
}

export const fetchUserObj = (code) =>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get("http://localhost:3000/user/"+code).then(res=>{
        const userlist = res.data; 
        dispatch(getUserObj(userlist))}
        ).catch(err=>dispatch(failRequest(err.message)));
    }

}

