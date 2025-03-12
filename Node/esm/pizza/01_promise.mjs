import order from './pizza_order.mjs';

order('바질피자')
  .then((fn) => {
    fn();
  })
  .catch((err) => {
    console.log(err);
  });
order('치즈피자')
  .then((fn) => {
    fn();
  })
  .catch((err) => {
    console.log(err);
  });
