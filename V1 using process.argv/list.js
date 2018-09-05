const fs = require("fs");

let jsonTab = JSON.parse(fs.readFileSync("saveData.json"));

listing = tab => {
  if (tab.length === 0) {
    if (jsonTab.length === 0) {
      console.log("Printing 0 note(s).");
    } else {
      console.log(`Printing ${jsonTab.length} note(s).
--`);
      jsonTab.map(elt => {
        console.log(`Title: ${elt["title"]}
Body: ${elt["body"]}
--`);
      });
    }
  } else {
    console.log("Error of list Sythaxe");
  }
};

module.exports.listJson = listing;
