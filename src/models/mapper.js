const mappable = (state) => ({
  toEntity: (data) => {
    Object.keys(data).forEach(key => {
      const attribute = key.replace(/(_\w)/g, m => { return m[1].toUpperCase(); });
      state[attribute] = data[key];
    });
  },
  toMapper: () => { return state }
});

export default mappable;
