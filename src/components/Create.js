import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToastContainer from 'react-bootstrap/ToastContainer';


function Create () {

    
        const [data, setData]= useState({
            title: '',
            author: '',
            textarea: ''
        });
    
    
    const handleInput=(e) =>{
        const {name, value} = e.target;
        setData((prev)=>{
            return {...prev, [name]: value}
        }) 
        
        }
    
    return (
        <div>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" onChange={handleInput} ></Form.Control>

                </Form.Group>

                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control name="author" type="text"onChange={handleInput} ></Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body:</Form.Label>
                    <Form.Control as="textarea" type="text" onChange={handleInput}></Form.Control>

                </Form.Group>

                <Button variant="primary" type="submit">Save Blog</Button>
                <ToastContainer/>




            </Form>

           <p>{data.title}</p>
           <p>{data.author}</p>
           <p>{data.textarea}</p>

            



        </div>
    );
}

export default Create;