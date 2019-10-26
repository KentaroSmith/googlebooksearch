import axios from "axios";

export default {
    searchBooks: (title) => { returnaxios.get("/api/search_books/" + title) },
    saveBook: (newBook) => { return axios.post("/api/save_book", newBook) },
    getBooks: () => { return axios.get("/api/get_books") },
    deleteBooks: (ID) => { return axios.post("/api/delete_book/" + ID) }
}