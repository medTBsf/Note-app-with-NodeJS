const help = require("./helpAdd");
const fs = require("fs");

adding = tab => {
  let valTyped = [],
    jsonTab = JSON.parse(fs.readFileSync("saveData.json"));
  let reg = /^--title$|^-t$/;
  let reg2 = /^--body$|^-b$/;
  command = ["--title", "-t", "--body", "-b"];

  if (tab.length === 0) {
    help.helpAdd();
  } else {
    if (!reg.test(tab[0]) || !reg2.test(tab[2])) {
      help.helpAdd();
    } else {
      tab.forEach((elt, i, tab) => {
        if (
          tab.indexOf(elt) % 2 === 0 &&
          i < tab.length - 1 &&
          command.includes(elt)
        ) {
          valTyped.push(tab[tab.indexOf(elt) + 1]);
        }
      });
      console.log(`Note created
--
Title: ${valTyped[0]}
Body: ${valTyped[1]}`);
      jsonTab.push({
        title: valTyped[0],
        body: valTyped[1]
      });
      fs.writeFileSync("saveData.json", JSON.stringify(jsonTab));
    }
  }
  return valTyped;
};

module.exports.addJson = adding;
