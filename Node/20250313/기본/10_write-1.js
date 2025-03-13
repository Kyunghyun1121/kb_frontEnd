const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

const data = fs.readFileSync(filePath);
const filePath2 = path.join(__dirname, 'text-1.txt');
fs.writeFileSync(filePath2, data);
