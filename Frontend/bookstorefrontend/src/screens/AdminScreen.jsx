import axios from 'axios'
import { useEffect, useState } from 'react'

const AdminScreen = () => {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        const response = axios.get("localhost:3000/api/books");
        if (response != null){
            setBooks(response.data);
            console.log(response.data);
        }
    }, [])

    return (
        <div>

        </div>
    )
}