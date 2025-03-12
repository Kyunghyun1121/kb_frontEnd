async function init() {
  //fetch 외부로부터 응답을 가져옴
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  console.log(response.ok);

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }

  console.log('프로그램 종료');
}

init();
