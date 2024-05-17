import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Create () {

    
        const [data, setData]= useState({
            title: '',
            author: '',
            body: ''
        });

        const [error, setError] = useState('');
    
    
    const handleInput=(e) =>{
        const {name, value} = e.target;
        setData((prev)=>{
            return {...prev, [name]: value}
        }) 
        
        }

        const isValidInput = (input) => {
            return typeof input === 'string' && input.trim() !== '';
        }

        const handleSubmit = (e)=>{


            
                e.preventDefault();

                if (!isValidInput(data.title) || !isValidInput(data.author) || !isValidInput(data.body)) {
                    setError('Please enter valid input in all fields');
                    return;
                }

                axios.post('http://localhost:4000/blogs', data)
                .then(res =>{
                toast.success('New blog added successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
                setData({title:'', author:'', body:''});
                
            })


            .catch(err => {
                toast.error('An error Occurred while adding the blog', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            })

        }
    
        



    return (
        <div onSubmit={handleSubmit}>

            <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" onChange={handleInput} ></Form.Control>

                </Form.Group>

                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control name="author" type="text"onChange={handleInput} ></Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Body:</Form.Label>
                    <Form.Control as="textarea" name='body' type="text" onChange={handleInput}></Form.Control>

                </Form.Group>

                <Button variant="primary" type="submit">Save Blog</Button>
                <ToastContainer/>




            </Form>

            <ToastContainer/>
                {error && <p style={{color: 'red'}}>{error}</p>}

           <p>{data.title}</p>
           <p>{data.author}</p>
           <p>{data.textarea}</p>

            



        </div>
    );
};

export default Create;