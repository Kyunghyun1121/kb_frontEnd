const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
fs.readFile(filePath, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
