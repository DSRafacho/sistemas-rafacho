import axios from "axios";

export const fetchBackend = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  timeout: 2000,
  // headers: {'X-Custom-Header': 'foobar'}
});