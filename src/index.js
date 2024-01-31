const express = require("express");
const cors = require("cors");
const acr = require("anime-character-random");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000 

app.use(cors());

app.get('/', (req, res) => {
  res.send('Send a GET request to /random to fetch a random character');
});

app.get("/random", async (req, res) => {
  try {
    const char = await acr.GetChar();
    await res.send(char);
  } catch (e) {
    console.error(`Error occured while fetching random character: ${e}`);
    await res.send(`An error occured while fetching random character, if you are hosting it please check your console`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to PORT ${PORT}`);
});
