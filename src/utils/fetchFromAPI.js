import axios from "axios";

const startUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: startUrl,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${startUrl}/${url}`,options);
    return data;
  }
