import express, { json } from "express";
const app = express();

app.get("/", function (req, res) {
  return res.status(200).json({ msg: "Hello world" });
});

app.listen(3000, () => console.log("Server running"));
