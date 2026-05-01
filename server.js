const express = require("express");
const cors = require("cors");
require("dotenv").config();

const planRoute = require("./routes/plan");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/plan", planRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
