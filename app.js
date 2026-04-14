const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My App</title>
        <style>
          body {
            font-family: Arial;
            text-align: center;
            margin-top: 50px;
          }
          button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <h1>🚀 My Professional App</h1>
        <button onclick="alert('It works! 🎉')">Click me</button>
      </body>
    </html>
  `);
});

app.listen(PORT, () => console.log("Running on port 3000"));