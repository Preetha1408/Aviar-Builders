import axios from "axios";

// const API_URL = "http://localhost:5000/";
const API_URL = "https://alumni-api-390113.el.r.appspot.com/";

const ALMapi = axios.create({
  baseURL: API_URL,
  // header,
});

export default ALMapi;
