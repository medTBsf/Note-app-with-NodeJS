const addNote = require("./add");
const listNote = require("./list");
const readNote = require("./read");
const removeNote = require("./remove");

let noteJson = [];

const mainCommand = arg => {
  let index = process.argv.indexOf(arg);
  return index !== -1 ? process.argv.slice(index + 1) : null;
};

let list = mainCommand("list");
let add = mainCommand("add");
let read = mainCommand("read");
let remove = mainCommand("remove");

switch (process.argv[2]) {
  case "list":
    listNote.listJson(list);
    break;
  case "add":
    let a = addNote.addJson(add);
    noteJson.push({
      title: a[0],
      body: a[1]
    });
    break;
  case "read":
    readNote.readJson(read);
    break;
  case "remove":
    removeNote.removeJson(remove);
    break;
  default:
    console.log(`Documentation :
    
the main commands are :

list:   to list notes
add:    to add note
read:   to read a specific note
remove: to remove a note from a list`);
}
