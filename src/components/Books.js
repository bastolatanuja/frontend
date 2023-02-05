//book
import { useEffect, useState } from "react"

import bookService from "../services/bookService"
import {Form,FormGroup,FormFeedback,Button,Input,Label,ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from "reactstrap";



function Book( {books, setBooks}){


const [title, setTitle] = useState('')
const [author, setAuthor] = useState('')


useEffect(() => {

    bookService.getAll()
    .then(res => {
        console.log(res.data)
        setBooks(res.data)
    }).catch(err => console.log(err))

},[])

const handleAdd =(e) =>{
    e.preventDefault()
    console.log(author,title)
    bookService.create({title,author})
    .then((res)=> {
        setBooks(books.concat(res.data))
        setAuthor('')
        setTitle('')
    })
    .catch(err => console.log(err))
}

const handledelete =(bookId) =>{
  if(window.confirm(`Do you really want to delete the book ${bookId}`))
   // e.preventDefault()
    //console.log(author,title)
    bookService.deleteabook(bookId)
    .then((res)=> {
      setBooks(books.filter(b => b._id !==bookId))
    })
    .catch(err => console.log(err))
}
    return(
        <div>
             <h2> List of books</h2>
        <ListGroup >
            {books.map(book =>{
                return(
              <ListGroupItem key={book._id}>
     
                <ListGroupItemHeading>
                  {book.title}
                </ListGroupItemHeading>
                <ListGroupItemText>
     
                    {book.author}
                 
                </ListGroupItemText>
                <Button color="primary"  onClick={()=>handledelete(book._id)}>
    delete book
  </Button>
              </ListGroupItem>
                )
            })}
        </ListGroup>
        
        <Form onSubmit={handleAdd}>
        <FormGroup>
    <Label for="title">
      Title
    </Label>
    <Input 
      id="title"
      name="title"
      placeholder="enter "
      type="text"
      value={title}
      onChange={(event)=> setTitle(event.target.value)}
    />
    <FormFeedback>
        "username must be greater than 3 characters"
    </FormFeedback>
  </FormGroup>

  <FormGroup>
    <Label for=" author">
      author
    </Label>
    <Input 
      id="author"
      name=" Password"
      placeholder="enter author  "
      type="author"
      value={author}
      onChange={(event)=> setAuthor(event.target.value)}
      
    />
    <FormFeedback>
        "password doesn't match"
    </FormFeedback>
  </FormGroup>

  <Button color="primary">
    Add Books
  </Button>

        </Form>
        </div>
       
    )
}

export default Book