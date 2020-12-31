import Axios from 'axios'

const api = Axios.create({
  baseURL: "https://gateway.marvel.com",
  params: {
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY
  },
});

export default api
