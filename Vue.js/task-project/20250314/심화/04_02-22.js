let p = new Promise((resolve, reject) => {
  resolve('first!');
});

p.then((msg) => {
  console.log(msg);
  return 'Second';
})
  .then((msg) => {
    console.log(msg);
    return 'Third';
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log('오류 발생 ==> ' + error);
  });
