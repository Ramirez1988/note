const yargs = require("yargs");
const notes = require("./notes");

let title = yargs.argv.title;
let body = yargs.argv.body;
let command = yargs.argv._[0];

if (command === "add") {
  notes.addingNote(title, body);
} else if (command === "remove") {
  notes.removeNote(title);
} else if (command === "read") {
  notes.readNote(title);
} else if (command === "list") {
  notes.listNote();
} else {
  console.log("--help: show help");  
  console.log("--title: Title of note");
  console.log("--body: Body of note");
}
