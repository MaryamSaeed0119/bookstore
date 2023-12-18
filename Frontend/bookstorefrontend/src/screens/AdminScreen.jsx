import axios from 'axios'
import { useEffect, useState } from 'react'

const AdminScreen = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            const response = await axios.get("https://fluffy-guide-v6v7w9qj7579hxwwp-3000.app.github.dev/api/books");
            if (response != null) {
                setBooks(response.data);
                console.log(response.data);
            }
        }
        getBooks();

    }, [])

    return (
        <div>

        </div>
    )
}

export default AdminScreen;