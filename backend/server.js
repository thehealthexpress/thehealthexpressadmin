require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/orderRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

app.listen(5000, () => console.log("Server running"));
