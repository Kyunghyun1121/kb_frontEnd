const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'readMe.txt');

const rs = fs.createReadStream(filePath);

rs.on('data', (chunk) => {
  console.log(`데이터 준비 ${chunk}`);
})
  .on('end', () => {
    console.log(`읽기 완`);
  })
  .on('error', (err) => {
    console.log(err);
  });
