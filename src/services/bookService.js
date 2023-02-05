import axios from "axios";
const baseUrl = 'http://localhost:3005/books'


function getAll(){
    const config = {
        headers:{Authorization:`bearer ${window.localStorage.getItem('token')}`
    }
    }
   
    return axios.get(baseUrl,config)
}

function create(newBook){
    const config = {
        headers:{Authorization:`bearer ${window.localStorage.getItem('token')}`
    }
    }
    return axios.post(baseUrl,newBook,config)
}

function deleteabook(book_id){
    const config = {
        headers:{Authorization:`bearer ${window.localStorage.getItem('token')}`
    }
    }
    return axios.delete(`${baseUrl}/${book_id}`,config)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll,create,deleteabook}