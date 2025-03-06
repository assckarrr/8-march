const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => res.render("index"));
app.get("/gallery", (req, res) => res.render("gallery"));
app.get("/letter", (req, res) => res.render("letter"));
app.get("/surprise", (req, res) => res.render("surprise"));
app.get("/contact", (req, res) => res.render("contact"));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
