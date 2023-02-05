//import logo from './logo.svg';
import Register  from "./components/Register";
import Login from "./components/Login";
import Book from "./components/Books";
import Home from "./components/Home";
import {BrowserRouter as Router,Link, Route,Routes} from "react-router-dom";
import { useState } from "react";



function App() {

  const [books,setBooks] = useState([])
  const padding = {
    padding:5

  
  }
  return(
    <div className="container">
        {/* <h1> hello tanuja!please fill the form</h1> */}
        
        <Router>
          <div>
          <Link style={padding} to={'/login'}>login</Link>
          <Link style={padding} to={'/register'}>register</Link>
          <Link style={padding} to={'/books'}>book</Link>
          <Link style={padding} to={'/'}>home</Link>
          </div>

          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/books" element={<Book books={books} setBooks={setBooks}/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      
     

    </div>
    
  )
  
}

export default App;
