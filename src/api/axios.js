import axios from "axios";

export default axios.create({
  method: "get",
  baseURL: "https://api.themoviedb.org/3",
});
