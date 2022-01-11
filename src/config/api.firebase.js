import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL:
    "https://cinemovie-36add-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default apiFirebase;
