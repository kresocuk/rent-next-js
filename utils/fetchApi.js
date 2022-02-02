import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

  
export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e1fcab19f8msh7f15d7ecd2e3288p1a702cjsnd1d443f178c8'
          }
    })

return data;
}