const fetch = require("node-fetch");

module.exports = async (input) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Create a 5-day study plan for ${input.exam} with ${input.hours} hours daily focusing on ${input.weak}`
          }
        ]
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (err) {
    return "Fallback Plan: Study basics + practice daily.";
  }
};
