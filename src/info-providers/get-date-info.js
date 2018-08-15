function getDateInfo(value) {
  const date = value === true ? new Date() : new Date(+value || value);

  return {
    date: date.toISOString()
  };
}

module.exports = getDateInfo;
