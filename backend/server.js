const { Mistral } = require("@mistralai/mistralai");
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mistral = new Mistral({
  apiKey: "T8D5aol0CQg09eRibOHvguaDIPiSvhkL",
});

app.get("/activities", async (req, res) => {
  const date = req.query.date;
  console.log("Got request")
  const url = `https://www.whatsonglasgow.co.uk/events/all-events/${date}/`;
  // try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    console.log()

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

    return_object = []
    for (let i = 0; i < cleanNames.length; i++) {
      return_object.push({
        name: cleanNames[i],
        location: cleanLocations[i],
        description: cleanDescs[i],
        image: images[i],
        mood: ""
      })
    }
    const lala = return_object.length;

    for (let i = 0; i < lala - 10; i+=10){
      const result = await mistral.chat.complete({
        model: "mistral-small-latest",
        messages: [
          {
              content: "You are a text classification assistant. Your task is to read a short event or activity description and decide which one of the following three moods best fits it: chill, party, or physical activity. Choose exactly one mood — the one that best fits the overall vibe of the description. If the description could fit multiple, pick the one that feels most dominant. Return only the mood as single lowercase phrase: 'chill', 'party', or 'physical activity', with nothing else before or after it. Here is the desciption: " + return_object.slice(i, i + 10).map((obj) => obj.description),
              role: "user",
            },
          ],
        });
        console.log(result.choices[0].message.content);
      //return_object[i].mood = result.choices[0].message.content;

    }

    res.json(return_object);
  // } catch (error) {
  //   res.status(500).json({ message: "Error accessing the URL" + error.toString()});
  // }
  


});