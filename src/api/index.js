import axios from "axios";

// URL pointing to back-end route
const url = "http://localhost:5000/posts";

// Make a axios get call so we can retrieve all posts from our posts route
export const fetchPosts = () => axios.get(url);
