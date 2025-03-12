import order from './pizza_order.mjs';

async function main() {
  try {
    const fn = await order('치즈피자');
    fn();
  } catch (err) {
    console.log(err);
  }
}

main();
