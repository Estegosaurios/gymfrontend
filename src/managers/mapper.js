const mappable = (state) => ({
  toEntity: (data = {}) => {
    Object.keys(data).forEach(key => {
      const attribute = key.replace(/(_\w)/g, m => { return m[1].toUpperCase(); });
      state[attribute] = data[key];
    });
  },
  toMapper: () => {
    const mapper = {};
    Object.keys(state).forEach(key => {
      const attribute = key
        .replace(/\.?([A-Z]+)/g, (_, y) => { return `_${y.toLowerCase()}` })
        .replace(/^_/, '');
      mapper[attribute] = state[key];
    });
    return mapper;
  }
});

export default mappable;
