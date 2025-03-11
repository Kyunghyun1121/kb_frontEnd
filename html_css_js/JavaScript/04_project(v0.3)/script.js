const quizData = [
  {
    question: 'HTML의 의미로 옳은 것은?',
    options: [
      'HyperText Markup Language',
      'HyperText Makeup Language',
      'HighText Machine Language',
      'HyperTransfer Markup Language',
    ],
    answer: 'HyperText Markup Language', //0
  },
  {
    question: 'CSS의 주요 역할로 가장 적합한 것은?',
    options: [
      '웹페이지의 구조를 설계',
      '웹페이지의 콘텐츠 작성',
      '웹페이지의 스타일 및 레이아웃 설정',
      '데이터베이스 관리',
    ],
    answer: '웹페이지의 스타일 및 레이아웃 설정', //2
  },
  {
    question: '자바스크립트에서 변수를 선언할 때 사용하는 키워드가 아닌 것은?',
    options: ['let', 'const', 'var', 'int'],
    answer: 'int', //3
  },
  {
    question: '다음 중 HTML에서 제목을 나타낼 때 사용하는 태그는?',
    options: ['<p>', '<h1>', '<div>', '<span>'],
    answer: '<h1>', // 1
  },
  {
    question: 'CSS에서 외부 스타일시트를 연결하는 올바른 방법은?',
    options: [
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'></style>",
      "<stylesheet href='style.css'></stylesheet>",
      "<script src='style.css'></script>",
    ],
    answer: "<link rel='stylesheet' href='style.css'>", // 1
  },
  {
    question:
      '자바스크립트에서 엄격한 비교(strict equality)를 수행하는 연산자는 무엇인가?',
    options: ['==', '===', '=', '!=='],
    answer: '===', // 1
  },
  {
    question: '다음 중 HTML에서 링크를 만드는 태그는 무엇인가?',
    options: ['<img>', '<a>', '<link>', '<href>'],
    answer: '<a>', // 1
  },
  {
    question: 'CSS에서 텍스트를 가운데 정렬할 때 사용하는 속성 값은?',
    options: [
      'text-align: center;',
      'vertical-align: center;',
      'align-text: center;',
      'text-style: center;',
    ],
    answer: 'text-align: center;', // 0
  },
  {
    question: '자바스크립트에서 배열(Array)의 길이를 반환하는 속성은?',
    options: ['.size', '.count', '.length', '.index'],
    answer: '.length', // 2
  },
  {
    question: 'HTML에서 순서 없는 목록을 나타내는 태그는?',
    options: ['<ol>', '<ul>', '<li>', '<dl>'],
    answer: '<ul>', // 1
  },
];

let currentQuiz = 0; // 현재 퀴즈 번호
let correctCount = 0; // 맞은 개수
let selectedButton = null;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');

const numButtons = document.querySelectorAll('#bar-main button');

function loadQuiz() {
  const quizQuestion = quizData[currentQuiz]; // 현재 퀴즈 데이터 가져오기
  //quizNum.innerHTML = currentQuiz + 1;

  questionElement.innerHTML = quizData[currentQuiz].question;

  optionsContainer.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    // 선택지 보여줄 div 태그 생성
    // (동적 생성: 계속해서 변경될 것이므로 여기서 생성)
    const optionElements = document.createElement('div');
    optionElements.className = 'option';
    optionElements.textContent = quizData[currentQuiz].options[i];
    optionElements.value = i;
    optionElements.onclick = optionClick();

    optionsContainer.appendChild(optionElements);
  }

  if (currentQuiz === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentQuiz === quizData.length - 1) {
    nextButton.disabled = true;
    //submitButton.style.visibility = 'visible';
  } else {
    nextButton.disabled = false;
    //submitButton.style.visibility = 'hidden';
  }

  numButtons[currentQuiz].style.border = '3px solid black';
  numButtons[currentQuiz].style.fontSize = '23px';
}
loadQuiz();

function prevButtonClick() {
  numButtons[currentQuiz].style.border = '1px solid lightgrey';
  numButtons[currentQuiz].style.fontSize = '20px';
  currentQuiz--;
  //console.log(currentQuiz);
  loadQuiz();
}

function nextButtonClick() {
  numButtons[currentQuiz].style.border = '1px solid lightgrey';
  numButtons[currentQuiz].style.fontSize = '20px';
  currentQuiz++;
  //console.log(currentQuiz);
  loadQuiz();
}

function numButtonClick(n) {
  numButtons[currentQuiz].style.border = '1px solid lightgrey';
  numButtons[currentQuiz].style.fontSize = '20px';

  currentQuiz = n;
  loadQuiz();
}

function optionClick() {
  console.log('2222');
}

// optionsContainer.addEventListener('click', function () {
//   let a = document.getElementById('options');
//   console.log(a[0].value);
// });
