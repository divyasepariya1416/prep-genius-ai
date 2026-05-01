module.exports = (hours) => {
  if (hours > 8) return "⚠️ Burnout Risk";
  if (hours < 2) return "⚠️ Low Preparation";
  return "✅ Balanced";
};
