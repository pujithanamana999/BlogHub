const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", blogRoutes);

app.get("/", (req, res) => {
    res.send("BlogHub Backend Server is Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});