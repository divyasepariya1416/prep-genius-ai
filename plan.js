const express = require("express");
const router = express.Router();

const inputAgent = require("../agents/inputAgent");
const analysisAgent = require("../agents/analysisAgent");
const planningAgent = require("../agents/planningAgent");
const riskAgent = require("../agents/riskAgent");
const optimizationAgent = require("../agents/optimizationAgent");

router.post("/", async (req, res) => {
  const input = inputAgent(req.body);
  const analysis = analysisAgent(input);
  const plan = await planningAgent(input);
  const optimized = optimizationAgent(plan);
  const risk = riskAgent(input.hours);

  res.json({
    plan: optimized,
    risk
  });
});

module.exports = router;
