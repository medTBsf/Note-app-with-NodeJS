helpAdd = () => {
  console.log(`app.js add

Options:
  --help       Show help                                      [boolean]
  --title, -t  Title of note                                 [required]
  --body, -b   Body of note                                  [required]

Missing required arguments: title, body
    `);
};

module.exports.helpAdd = helpAdd;
