import { useEffect, useState } from "react";
import userService from "../services/userService" ; 
import {Form, FormGroup,Label,Input, Button, FormFeedback} from "reactstrap";
const Register =() =>{

    const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const[status, setStatus] = useState(false)
  const [nameStatus,setnameStatus] = useState(false)

  useEffect(() =>
    setStatus(password !==confirmPassword
        ? true:false)
    // if(password !== confirmPassword){
    //     setStatus(true)
    //     return
    // }
    // setStatus(false)
  ,[confirmPassword,password])

  useEffect(() => setnameStatus(username.length <3 ? true :false),[username])

  const handleRegister = (event)=>{
    event.preventDefault()
    console.log(username, password)
    userService.registerUser(username, password)
    .then(response =>{
      console.log(response.data)
    }).catch(err => console.log(err))
  }
  return (
    <div className="container">
   

     <Form onSubmit={handleRegister}>
     <FormGroup>
    <Label for="username">
      Username
    </Label>
    <Input invalid={nameStatus}
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
    <Label for="confirm password">
      Confirm Password
    </Label>
    <Input invalid={status}
      id="confirmpassword"
      name="Confirm Password"
      placeholder="enter password again "
      type="password"
      value={confirmPassword}
      onChange={(event)=> 
        setconfirmPassword(event.target.value)
        }
    />
    <FormFeedback>
        "password doesn't match"
    </FormFeedback>
  </FormGroup>


  <FormGroup>
    <Label for="password">
      Password
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="enter password "
      type="password"
      value={password}
      onChange={(event)=> setPassword(event.target.value)}
    />
  </FormGroup>
  <Button color="primary">
    Register
  </Button>

     </Form>
    
    </div>
  );

}


export default Register