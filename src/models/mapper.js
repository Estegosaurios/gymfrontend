export function toEntity(data = {}) {
  const model = {};

  Object.keys(data).forEach(key => {
    const attribute = key.replace(/(_\w)/g, m => { return m[1].toUpperCase(); });
    model[attribute] = data[key];
  });

  return model;
}

export function toMapper(model) {
  const mapper = {};

  Object.keys(model).forEach(key => {
    const attribute = key
      .replace(/\.?([A-Z]+)/g, (_, y) => { return `_${y.toLowerCase()}` })
      .replace(/^_/, '');
    mapper[attribute] = model[key];
  });

  return mapper;
}
