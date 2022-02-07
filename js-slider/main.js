const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

const btns = document.querySelectorAll('button');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentNum = 1;

// 해당 이미지로 이동
btn1.addEventListener('click', function () {
  currentNum = 1;
  document.querySelector('.container').style.transform = 'translate(0vw)';
  console.log(currentNum);
})

btn2.addEventListener('click', function () {
  currentNum = 2;
  document.querySelector('.container').style.transform = 'translate(-100vw)';
  console.log(currentNum);
})

btn3.addEventListener('click', function () {
  currentNum = 3;
  document.querySelector('.container').style.transform = 'translate(-200vw)';
  console.log(currentNum);
});

// 이전 버튼
prev.addEventListener('click', function () {
  if (currentNum != 1) {
    document.querySelector('.container').style.transform = 'translate(' + (200 - currentNum*100) + 'vw)';
    currentNum--;
  } else {
    alert('첫 페이지입니다.')
  };
});

// 다음 버튼
next.addEventListener('click', function() {
  if (currentNum != ( btns.length - 2)) {
    document.querySelector('.container').style.transform = 'translate(' + ( - currentNum*100) + 'vw)';
    currentNum++;
  } else {
    alert('마지막 페이지입니다.')
  };
})
