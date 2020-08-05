import axios from 'axios';
const KEY = 'AIzaSyANuM48Q5v1L6Gtm0dZhg-qNZ9SwPypp40';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})