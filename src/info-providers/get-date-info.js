function getDateInfo(value) {
  const numValue = +value;

  return {
    date: new Date(numValue || value).valueOf()
  };
}

module.exports = getDateInfo;
