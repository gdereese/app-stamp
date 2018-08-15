function getDateInfo(value) {
  return {
    date: value === true ? Date.now() : new Date(+value || value).valueOf()
  };
}

module.exports = getDateInfo;
