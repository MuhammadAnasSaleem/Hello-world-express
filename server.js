import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`${port} Pai app khul gai hai
    `);
});
