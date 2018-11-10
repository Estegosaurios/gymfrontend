import { normalize } from 'normalizr';
import axios from '@/api/axios';
import { toEntity } from '@/models/mapper';
import workoutSchema from '@/models/workouts';

const getWorkouts = () => {
  return get('/workouts/', [workoutSchema]);
};

const get = (url, schema) => {
  const request = axios({
    method: 'get',
    headers: headers(),
    url,
    transformResponse: [
      response => {
        let data = JSON.parse(response)
        data = Array.isArray(data)
          ? data.map(d => toEntity(d))
          : toEntity(data)

        return normalize(data, schema);
      }
    ]
  });
  return request;
};

// const post = (url, data) => {
//   return axios({
//     method: 'post',
//     headers: headers(),
//     url,
//     data,
//   })
// };

const headers = () => {
  return {
    'Authorization': 'Token 4751a172f03621836db5bdf042fdc9cd0cb2ee8a'
  };
};

export default {
  getWorkouts
};