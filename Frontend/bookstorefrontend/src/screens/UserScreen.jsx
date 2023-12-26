import { useEffect, useState } from "react";
import axios from 'axios';

const UserScreen = (props) => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false); // Added state for animation

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

    const addToCart = (id, title, author, publicationYear, qty, price) => {
        const book = { id, title, author, publicationYear, qty, price };
        console.log(book);
        if (localStorage.getItem("book") == null) {
            localStorage.setItem("book", JSON.stringify([]));
            const books = JSON.parse(localStorage.getItem("book"));
            books.push(book);
            localStorage.setItem("book", JSON.stringify(books));
        } else {
            const books = JSON.parse(localStorage.getItem("book"));
            books.push(book);
            localStorage.setItem("book", JSON.stringify(books));
        }
        alert("Book added to cart");
        window.location.reload();
    };

    const checkout = () => {
        console.log("checkout");
        const books = JSON.parse(localStorage.getItem("book"));
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            const quantity = book.qty;
            const id = book.id;
            if (quantity > 0) {
                async function buyBook(id) {
                    const response = await axios.post(`http://localhost:3000/api/books/${id}/buy`);
                    if (response) {
                        console.log(response);
                    }

                }
                buyBook(id);
            }
        }
        console.log(books);
        localStorage.removeItem("book"); window.location.reload();
    };
    const showCart = () => {
        const books = JSON.parse(localStorage.getItem("book"));
        if (books == null) {
            return (
                <div>
                    <h2 style={{ textAlign: 'center' }}>Cart is empty</h2>
                </div>
            );
        }
        let total_price = 0.0;
        for (let i = 0; i < books.length; i++) {
            total_price += parseFloat(books[i].price);
            console.log(books[i].price)

        }
        console.log(books);
        if (books != null) {
            return (
                <div style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)', borderRadius: 10, marginLeft: 20, padding: 20 }}>
                    <div className="row" style={{ marginLeft: 1 }}>
                        {books.map((book) => (
                            <div className="" key={book.id}>
                                <div className="card" style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)', borderRadius: 10 }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Title: {book.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Author: {book.author}</h6>
                                        <p className="card-text">Genre: {book.genre}</p>
                                        <p className="card-text">Publication Year: {book.publicationYear}</p>
                                        <p className="card-text">Price: {book.price}</p>
                                        <p className="card-text">Quantity: {book.qty}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="p-2">
                        <h1 style={{ textAlign: 'center' }}>Total Price: {total_price}</h1>
                        <button className="btn btn-primary" onClick={() => { checkout() }}>Checkout</button> &nbsp;
                        <button className="btn btn-primary" onClick={() => { localStorage.removeItem("book"); window.location.reload(); }}>Clear Cart</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Cart is empty</h1>
                </div>
            );
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setIsSearching(true); // Start animation
        setTimeout(() => {
            setIsSearching(false); // Stop animation after 1 second
        }, 1000);
    };

    const filteredBooks = books.filter((book) => {
        return (
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>User Screen</h1>


            <div style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)', padding: 20, borderRadius: 10, marginLeft: 20, width: '100%' }}> 
            <div className="mb-3 row"  >
                <input
                    className="form-control w-50 mx-auto"
                    type="text"
                    placeholder="Search by author, genre, or title"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {isSearching && <div style={{justifyContent: 'center', alignSelf: 'center'}} className="spinner-border text-primary" role="status"></div>} {/* Display animation while searching */}
            </div>

                <div className="row" >
                    {filteredBooks.map((book) => (
                        <div className="m-2" key={book._id} style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.6)', borderRadius: 10 }}>
                            <div className="card h-100 w-20">
                                <div className="card-body">
                                    <h5 className="card-title">Title: {book.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Author: {book.author}</h6>
                                    <p className="card-text">Genre: {book.genre}</p>
                                    <p className="card-text">Publication Year: {book.publicationYear}</p>
                                    <p className="card-text">Price: {book.price}</p>
                                    <p className="card-text">Quantity: {book.qty}</p>
                                    <button className="btn btn-primary" onClick={() => addToCart(book._id, book.title, book.author, book.publicationYear, book.qty, book.price)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h1 style={{ textAlign: 'center' }}>Shopping Cart</h1>
            {showCart()}
        </div>
    );
};

export default UserScreen;