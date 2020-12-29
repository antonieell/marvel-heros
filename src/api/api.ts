import Axios from 'axios'

const api = Axios.create({
  baseURL: "https://gateway.marvel.com",
  params: {
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
  },
});

export default api
