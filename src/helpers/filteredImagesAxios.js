import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '38311066-df12cc60e023e61528f3463e4';

export const filteredImagesAxios = filter => {
  return axios.get(`/?${API_KEY}&q=${filter}&per_page=12`);
};
