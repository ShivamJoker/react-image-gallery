import axios from 'axios'

export default axios.create({
    baseURL: "https://api.pexels.com",
    headers: {
        Authorization:
          "563492ad6f91700001000001c6dea1ac68b3439d8b712b1a17fd584c"
      }
})

