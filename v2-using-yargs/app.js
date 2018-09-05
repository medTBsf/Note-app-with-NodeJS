const yarg = require("yargs");
const fs = require("fs");
const isExists = require("./isExist");

let jsonTab = JSON.parse(fs.readFileSync("saveData.json"));

yarg
  .command(
    "add",
    "Add a note",
    {
      title: {
        alias: "t",
        desc: "Title of note",
        demandOption: true
      },
      body: {
        alias: "b",
        desc: "Body of note",
        demandOption: true
      }
    },
    argv => {
      jsonTab.push({
        title: argv.title,
        body: argv.body
      });
      fs.writeFileSync("saveData.json", JSON.stringify(jsonTab));
      console.log(`Note created
--
Title: ${argv.title}
Body: ${argv.body}`);
    }
  )
  .command(
    "read",
    "Read existing note(s).",
    {
      title: {
        alias: "t",
        desc: "Title of note",
        demandOption: true
      }
    },
    argv => {
      if (!argv.title || !isExists(argv.title, jsonTab)) {
        console.log(`Verify the title you typed !!!`);
      } else {
        let find = jsonTab.filter(element => {
          return element.title === argv.title;
        });
        console.log(`Note found
--
Title: ${find[0].title}
Body: ${find[0].body}`);
      }
    }
  )
  .command(
    "remove",
    "Delete a note",
    {
      title: {
        alias: "t",
        desc: "Title of note",
        demandOption: true
      }
    },
    argv => {
      if (!argv.title || !isExists(argv.title, jsonTab)) {
        console.log(`Title not typed or not found !!!`);
      } else {
        jsonTab = jsonTab.filter(elt => {
          return elt.title !== argv.title;
        });
        fs.writeFileSync("saveData.json", JSON.stringify(jsonTab));
        console.log("Note was removed");
      }
    }
  )
  .command("list", "List saved note(s).", {}, () => {
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
  })
  .version(false)
  .help()
  .alias("help", "h").argv;
