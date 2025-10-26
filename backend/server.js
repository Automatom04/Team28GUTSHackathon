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
  apiKey: "T8D5aol0CQg09eRibOHvguaDIPiSvhkL",//Oops
});


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

app.get("/activities", async (req, res) => {
  const date = req.query.date;
  const mood = req.query.mood.toLowerCase();
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
    let counter = 0;
    console.log(lala);
    console.log(mood);
    for (let i = 0; i < lala; i+=5){
      console.log(return_object.slice(i, i + 5).map((obj) => obj.description));
      const result = await mistral.chat.complete({
        model: "mistral-small-latest",
        messages: [
          {
              content: "You are a text classification assistant. Your task is to read a few short event or activity descriptions which are separated by commas, and decide which one of the following four moods best fits it: 'party', 'active', 'creative' or 'chill'. Choose exactly one mood for each description— the one that best fits the overall vibe of the description. If the description could fit multiple, pick the one that feels most dominant. Return only a list of comma separated moods as single lowercase phrase: 'party', 'active', 'creative' or 'chill', with nothing else before or after it. Here are the desciptions. Only give a maximum of 5 moods: " + return_object.slice(i, i + 5).map((obj) => obj.description),
              role: "user",
            },
          ],
        });
        console.log(result.choices[0].message.content);
        temp = result.choices[0].message.content.split(",");
        if (temp.length > 5){
          temp.slice(0, 5);
        }
        for(let i = 0; i<temp.length; i++){
          
          console.log(counter);
          return_object[counter].mood = temp[i];
          counter++;
        }

        sleep(500);
    }
    
    const moodfilter = return_object.filter(item => item.mood == mood)

    res.json(moodfilter);
  // } catch (error) {
  //   res.status(500).json({ message: "Error accessing the URL" + error.toString()});
  // }
  


});