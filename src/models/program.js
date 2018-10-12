import mappable from '@/models/mapper';

const Program = (data = {}) => {
  let state = {};
  mappable(state).toEntity(data);

  return Object.assign(
    { state },
    mappable(state)
  );
};

export default Program;
