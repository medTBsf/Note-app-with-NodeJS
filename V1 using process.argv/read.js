const fs = require("fs");
const isExists = require("./isExist");

let jsonTab = JSON.parse(fs.readFileSync("saveData.json"));

reading = tab => {
  if (tab.length === 0) {
    console.log(`app.js read

Option:
  --help         Show help                                   [boolean]
  --title, -t    Title of note                              [required]`);
  } else {
    let reg = /^--title$|^-t$/;
    if (!reg.test(tab[0])) {
      console.log(`app.js read

Option:
  --help         Show help                                   [boolean]
  --title, -t    Title of note                              [required]`);
    } else {
      if (jsonTab.length === 0) {
        console.log("There are no note(s).");
      } else {
        if (!isExists(process.argv[4], jsonTab)) {
          console.log(`There are no notes with title : ${process.argv[4]}`);
        } else {
          let find = jsonTab.filter(element => {
            return element["title"] === process.argv[4];
          });
          console.log(`Note found
--
Title: ${find[0].title}
Body: ${find[0].body}`);
        }
      }
    }
  }
};

module.exports.readJson = reading;
