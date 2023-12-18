import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const UpdateScreen = (props) => {
    const [title, setTitle] = useState(props.title);
    const [author, setAuthor] = useState(props.author);
    const [genre, setGenre] = useState(props.genre);
    const [publishYear, setPublishYear] = useState(props.publishYear);
    const [price, setPrice] = useState(props.price);
    const [qty, setQty] = useState(props.qty);

    const handleUpdateBook = () => {
        // Logic to add the book with the entered details
        // You can use the state variables (title, author, genre, publishYear, price, qty) to access the entered values
        async function updateBook(){
            try {
                const response = await axios.post("http://localhost:3000/api/books", {title, author, genre, publishYear, price, qty});
                window.location.replace("http://localhost:5173/admin");
            } catch (error) {
                console.log(error)
            }
        }
        
        addBook();
    };

    return (
        <div style={{'paddingLeft':'100%'}}>
            <h1>Update Book</h1>
            <Card style={{ width: '35rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGenre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter genre"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPublishYear">
                            <Form.Label>Publish Year</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter publish year"
                                value={publishYear}
                                onChange={(e) => setPublishYear(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formQty">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter quantity"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Button variant="primary" onClick={handleUpdateBook}>
                            Update Book
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UpdateScreen;
