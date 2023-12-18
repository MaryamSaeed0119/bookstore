import axios from 'axios'
import { useEffect, useState } from 'react'


const AdminScreen = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            const response = await axios.get("http://localhost:3000/api/books");
            if (response != null) {
                setBooks(response.data);
                console.log(response);
            }
        }
        getBooks();

    }, []);

    const handleUpdate = (bookId) => {
        // Handle update logic here
    };

    const handleDelete = (bookId) => {
        // Handle delete logic here
    };

    return (
        <div className="container">
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-6" key={book._id}>
                        <div className="card mb-3" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <div className="card-body">
                                <h3 className="card-title">{book.title}</h3>
                                <p className="card-text">Author: {book.author}</p>
                                <p className="card-text">Publication Year: {book.publicationYear}</p>
                                <p className="card-text">Quantity: {book.qty}</p>
                                <p className="card-text">Price: {book.price}</p>
                                <button className="btn btn-primary" onClick={() => handleUpdate(book.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminScreen;