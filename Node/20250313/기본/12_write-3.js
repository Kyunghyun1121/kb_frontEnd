const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

const data = fs.readFileSync(filePath);
const filePath2 = path.join(__dirname, 'text-1.txt');

if (fs.existsSync(filePath2)) {
  console.log('파일이 존재합니다.');
} else {
  fs.writeFileSync(filePath2, data);
}
