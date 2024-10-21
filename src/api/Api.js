import axios from "axios";

const API = axios.create({
    baseURL: "http://192.168.0.106:3000",
    timeout: 20000,
    header: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_TOKEN",
    },
});

export default API;