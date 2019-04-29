const Model = {
  data: {
    current: {},
    target: {}
  },
  changeCallbacks: [],
  onChange(fn) {
    this.changeCallbacks.push(fn);
  },
  getSection(section) {
    return this.data[section];
  },
  getLevel({ module, section }) {
    return this.data[section][module];
  },
  setData(newData) {
    newData.forEach(({ module, level, section }) => {
      this.data[section][module] = level;
    });
    this.emitCallbacks(newData);
    console.log(this.data);
  },
  reset(section = `current`) {
    const emptyData = Object.keys(this.data[section]).map(moduleName => {
      return {
        module: moduleName,
        level: 0,
        section
      };
    });

    this.setData(emptyData);
  },
  emitCallbacks(newData) {
    console.log({ newData });
    this.changeCallbacks.forEach(callback => {
      callback(newData, this.data);
    });
  }
};

export default Model;
