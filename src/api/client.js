import axios from '@/api/axios';

const getPrograms = () => {
  return get('/programs/')
};

const postProgram = (program) => {
  return post('/programs/', program);
};

const get = (url) => {
  return axios({
    method: 'get',
    headers: headers(),
    url
  });
};

const post = (url, data) => {
  return axios({
    method: 'post',
    headers: headers(),
    url,
    data,
  })
};

const headers = () => {
  return {
    'Authorization': 'Token 4751a172f03621836db5bdf042fdc9cd0cb2ee8a'
  };
};

export default {
  getPrograms,
  postProgram
};