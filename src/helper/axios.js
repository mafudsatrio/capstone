import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'https://tracycle-api.vercel.app/',
  timeout: 10000,
});

export default axios;
