module.exports = (data) => {
  return data.weak.map(topic => ({
    topic,
    priority: Math.floor(Math.random() * 10) + 1
  }));
};
