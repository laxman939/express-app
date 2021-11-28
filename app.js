import express from "express";
import path, { join, resolve } from "path";
const __dirname = path.resolve(); //To work __dirname with ES6 modules
await import("dotenv").then((dotenv) => dotenv.config());
const { PORT, HOST } = process.env; //imported using destructing

//Created app server
const app = express();

app.use(express.urlencoded({ extended: true })); //To grab data from form

//middleware
app.use(express.static(__dirname + "public")); //To work css file or external links

//ejs template engine
app.set("view engine", "ejs");
app.set("views", "public");

//get request
app.get("/", (req, res) => {
  res.render("index", { newUser: " " });
});

//post response
app.post("/login", (req, res) => {
  let newUser = req.body.username;
  res.render("login", { newUser });
});

app.listen(PORT, () => {
  console.log("server is running");
});
