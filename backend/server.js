const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

urls = 


app.get("/activities", async (req, res) => {
  const url = "https://www.whatsonglasgow.co.uk/events/all-events/2025/10/23/";
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const data = [];
    console.log()
    const names = $("h4 a").text();
    let cleanLocations = []
    $("div.border-bottom-light-grey.small.py-1").not(".border-top-light-grey").toArray().forEach((location) => {
      cleanLocations.push(location.trim())
    });
    return_object = {
      names: names,
      locations: cleanLocations
    }
    res.json(return_object);
  } catch (error) {
    res.status(500).json({ message: "Error accessing the URL" });
  }
});