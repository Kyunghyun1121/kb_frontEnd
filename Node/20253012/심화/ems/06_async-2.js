let like = false;
function pizzaOrder() {
  return new Promise((resolve, reject) => {
    if (like) {
      resolve('피자를 주문합니다.');
    } else {
      reject('피자를 주문하지 않습니다.');
    }
  });
}

pizzaOrder()
  .then((fn) => console.log(fn))
  .catch((err) => console.log(err));
