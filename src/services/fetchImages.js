import axios from 'axios';

const API_KEY = '38311066-df12cc60e023e61528f3463e4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (page, filter) => {
  const resp = await axios.get(
    `?q=${filter}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return resp.data;
};
