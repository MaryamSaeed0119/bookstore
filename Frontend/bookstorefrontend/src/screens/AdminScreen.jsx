import axios from 'axios'
import { useEffect, useState } from 'react'
import UpdateScreen from './UpdateScreen';


const AdminScreen = () => {
    const [books, setBooks] = useState([]);

    const [id, setId] = useState('')
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState();


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

    const handleUpdate = (id, title, author, publicationYear, qty, price) => {

        async function updateQuantity(quantity) {
            try {
                qty = quantity;
                console.log(quantity)
                const response = await axios.put("http://localhost:3000/api/books/" + id, { title, author, publicationYear, qty, price });
                console.log(response);
                if (response){
                    window.location.reload();
                }
            } catch (error) {
                console.error(error);
                // Handle the error here
            }
        }
        const quantity = prompt("Please enter the updated qty");
        
        if (quantity != null)
        {
            updateQuantity(quantity);
        }

    };

    const handleDelete = async (bookId) => {
        try {
            const response = await axios.delete("http://localhost:3000/api/books/" + bookId);
            if (response) {
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
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
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={() => handleUpdate(book._id, book.title, book.author, book.publicationYear, book.qty, book.price)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <br>
            
            </br>
            <br/>
            <br/>
            <br/>

            {/* <UpdateScreen  title={tile}>

            </UpdateScreen> */}
        </div>
    );
};

export default AdminScreen;