import {  useState } from "react";
import userService from "../services/userService" ; 
import {Form, FormGroup,Label,Input, Button, FormFeedback} from "reactstrap";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  


  const handleLogin = (event)=>{
    event.preventDefault()
    console.log(username, password)
    userService.loginUser(username, password)
    .then(res =>{
      console.log(res.data)
      window.localStorage.setItem('token',res.data.token)
      window.alert(res.data.status)
      navigate('/books')
      //Redirect the user 
    }).catch(err => {window.alert(err.response.data.err)})
  }
    return (
        <div className="container">
        <h2>loginhere</h2>

    <Form onSubmit={handleLogin}>
     <FormGroup>
    <Label for="username">
      Username
    </Label>
    <Input 
      id="username"
      name="Username"
      placeholder="enter username"
      type="text"
      value={username}
      onChange={(event)=> setUsername(event.target.value)}
    />
    <FormFeedback>
        "username must be greater than 3 characters"
    </FormFeedback>
  </FormGroup>

  <FormGroup>
    <Label for=" password">
      Password
    </Label>
    <Input 
      id="password"
      name=" Password"
      placeholder="enter password  "
      type="password"
      value={password}
      onChange={(event)=> setPassword(event.target.value)}
      
    />
    <FormFeedback>
        "password doesn't match"
    </FormFeedback>
  </FormGroup>

  <Button color="primary">
    Login
  </Button>
  </Form>
</div>
   )
   } 


export default Login