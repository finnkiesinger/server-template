import http from "http";
import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.json({
    data: "It Works!",
  });
});

export const server = app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
