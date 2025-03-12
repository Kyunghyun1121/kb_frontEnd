async function init() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    (err) => console.log(err);
  }
}

init();
