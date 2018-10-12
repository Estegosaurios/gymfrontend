import { normalize, schema } from 'normalizr';
import api from '@/api/client';
import Program from '@/models/program';

const program = new schema.Entity(
  'programs',
  {},
  {
    processStrategy: (entity) => Program(entity).state
  }
);

const fetchPrograms = () => {
  return new Promise((res, rej) => {
    api.getPrograms().then(({ data }) => {
      const programs = normalize(data, [program]);
      res(programs)
    }).catch(() => { rej() });
  });
};

export default {
  fetchPrograms
};
