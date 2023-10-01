import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello there");
});

app.listen(3001, () => {
  console.log("Server running at localhost:3001");
});