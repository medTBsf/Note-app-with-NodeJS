const fs = require("fs");
const isExists = require("./isExist");

let jsonTab = JSON.parse(fs.readFileSync("saveData.json"));

removing = tab => {
  if (tab.length === 0) {
    console.log(`app.js remove
  
  Option:
    --help         Show help                                   [boolean]
    --title, -t    Title of note                              [required]`);
  } else {
    let reg = /^--title$|^-t$/;
    if (!reg.test(tab[0])) {
      console.log(`app.js remove
  
  Option:
    --help         Show help                                   [boolean]
    --title, -t    Title of note                              [required]`);
    } else {
      if (jsonTab.length === 0) {
        console.log("There are no note(s) to remove.");
      } else {
        if (!isExists(process.argv[4], jsonTab)) {
          console.log(
            `There are no notes with title : ${process.argv[4]} to remove`
          );
        } else {
          jsonTab = jsonTab.filter(elt => {
            return elt.title !== process.argv[4];
          });
          fs.writeFileSync("saveData.json", JSON.stringify(jsonTab));
          console.log("Note was removed");
        }
      }
    }
  }
};

module.exports.removeJson = removing;
