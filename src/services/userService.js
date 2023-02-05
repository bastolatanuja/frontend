import axios from "axios";
const baseUrl = 'http://localhost:3005/users'

const registerUser=(username,password)=>{
    return axios.post(`${baseUrl}/register`,{username,password})
}

const loginUser=(username,password)=>{
    return axios.post(`${baseUrl}/login`,{username,password})
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {registerUser,loginUser }