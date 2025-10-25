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
    
    // $("div.col-12.col-sm-6").each((index, element) => {
    //   $(element.)
    // })

    let cleanLocations = []
    let cleanNames = []
    let cleanDescs = []
    let images = []
    $("div.col-12.col-sm-6 div.border-bottom-light-grey.small.py-1").not(".border-top-light-grey").each((index, element) => {
      cleanLocations.push($(element).text().trim());
    });
    $("div.col-12.col-sm-6 h4:not(.mb-4) a").each((index, element) => {
      cleanNames.push($(element).text().trim());
    });
    $("div.col-12.col-sm-6 p.card-text.mt-3").each((index, element) => {
      cleanDescs.push($(element).text().trim());
    })
    $("div.col-12.col-sm-6 img").each((index, element) => {
      images.push($(element).attr("data-src").trim());
    })
    return_object = {
      names: cleanNames,
      locations: cleanLocations,
      descs: cleanDescs,
      images: images
    }
    res.json(return_object);
  } catch (error) {
    res.status(500).json({ message: "Error accessing the URL" + error.toString()});
  }
});