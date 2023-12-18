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

    }, [])

    return (
        <div>
            {
                books.map((book) => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.publicationYear}</p>
                        <p>{book.qty}</p>
                        <p>{book.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AdminScreen;