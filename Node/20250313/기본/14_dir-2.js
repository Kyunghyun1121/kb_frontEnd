const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(__filename), 'test2/test3/test4');
if (!fs.existsSync(filePath)) {
  fs.mkdir(filePath, { recursive: true }, (err) => {
    if (err) console.log('오류');
  });
}
