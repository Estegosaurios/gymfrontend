import { normalize, schema } from 'normalizr';
import api from '@/api/client';
import mappable from '@/managers/mapper';

// Entity

const Program = (data = {}) => {
  let state = {
    name: undefined,
    workoutsInProgram: []
  };

  mappable(state).toEntity(data);

  return Object.assign(
    { state },
    mappable(state)
  );
};

// Schemas

const program = new schema.Entity(
  'programs',
  {},
  {
    processStrategy: (entity) => Program(entity).state
  }
);

// Methods

const createProgram = () => {
  return Program()
};

// API Methods

const fetchPrograms = () => {
  return new Promise((res, rej) => {
    api.getPrograms().then(({ data }) => {
      const programs = normalize(data, [program]);
      res(programs)
    }).catch(() => { rej() });
  });
};

const saveProgram = (data) => {
  return new Promise((res, rej) => {
    const programData = Program(data).toMapper();
    api.postProgram(programData).then(({ data }) => {
      res(normalize(data, program))
    }).catch(() => { rej() });
  });
};

export default {
  createProgram,
  fetchPrograms,
  saveProgram
};
