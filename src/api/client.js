import axios from '@/api/axios';

const getPrograms = () => {
  return get('/programs/')
};

const get = (url) => {
  return axios({
    method: 'get',
    url
  });
};

export default {
  getPrograms
};