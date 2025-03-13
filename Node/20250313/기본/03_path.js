const path = require('path');

console.log(`파일 이름: ${path.basename(__filename)}`);
console.log(`파일 이름(확장자 제외): ${path.basename(__filename, '.js')}`);
