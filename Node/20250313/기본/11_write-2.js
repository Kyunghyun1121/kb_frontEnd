const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

fs.readFile(filePath, (err, data) => {
  const filePath2 = path.join(__dirname, 'text-1.txt');
  fs.writeFile(filePath2, data, (err) => {
    if (err) console.log(err);
  });
});
