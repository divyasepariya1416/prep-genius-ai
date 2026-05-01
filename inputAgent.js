module.exports = (data) => {
  return {
    exam: data.exam,
    hours: Number(data.hours),
    weak: data.weak || []
  };
};
