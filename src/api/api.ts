import Axios from 'axios'

const api = Axios.create({
  baseURL:"https://gateway.marvel.com:443",
  params: {apiKey : process.env.REACT_APP_MARVEL_PUBLIC_KEY}
})

export default api