const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(__filename), 'test');
if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath);
} else {
  console.log('디렉토리가 존재합니다.');
}
