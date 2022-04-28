import axios from 'axios';

const apiKey = '04b862dce36c19174e87aa1eb9cc62eb';

export default async (text) => {
  if (!text) return ({ data: null });
  if (text.substr(1, text.length - 2)) text.replace(' ', '+');
  const fetchURL = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${text}`;
  const response = await axios.get(fetchURL);
  return response;
};
