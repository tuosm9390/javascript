// id로 태그 선택하기
// const myTag = document.getElementById('myNumber');
// console.log(myTag);
// 값이 없을 때 null 출력

// class로 태그 선택하기
// const myTags = document.getElementsByClassName('color-btn');
// console.log(myTags);
// console.log(myTags[1]);
// console.log(myTags.length);

// for(let tag of myTags) {
//   console.log(tag);
// }

// 값이 없을 때 undefined 출력

// css 선택자로 태그 선택하기
const myTag = document.querySelector('.color-btn');
console.log(myTag);
const myTags = document.querySelectorAll('.color-btn');
console.log(myTags);
const myTags2 = document.getElementsByClassName('.color-btn');
console.log(myTags2);

// 이벤트[Event]와 버튼 클릭
const btn = document.querySelector('#myBtn');
// 이벤트 핸들링(Event Handling)
btn.onclick = function () {  // 이벤트 핸들러(Event Handler)
  console.log('Hello Codeit!');
}

// 형제 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 노드
console.log(myTag.parentElement);

// 자식 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);


// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름');
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.append(prev, '문자열');  // 파라미터 순서대로 추가

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.append(next);


// 노드 삭제와 이동
const today = document.querySelector('#today');

// 노드 삭제하기: Node.remove()
tomorrow.remove();
today.children[2].remove();

// 노드 이동하기: prepend, append, after, before
today.append(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);
tomorrow.lastElementChild.before(today.children[1]);


// HTML 속성
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
console.log(link.href);

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'httpls://www.codeit.kr'); // 숮ㅇ

// elem.removeAttribe('속성'): 속성 제거하기, 속성이름에 대문자가 섞여도 소문자로 변환되어 동작
tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class');

// 스타일 다루기
// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';

// .css 파일에 스타일 적용 후
// elem.className
today.children[1].className = 'done'; // 클래스 프로퍼티 적용하기

// elem.classList: add, remove, toggle
console.log(today.classList);
console.log(today.children[0].classList);

// add
const item = tomorrow.children[1];
item.classList.add('done'); // 클래스가 바뀜
item.classList.add('done', 'other'); // 여러개의 클래스 적용

// remove
item.classList.remove('done', 'other'); // 여러개 클래스 삭제 가능

// toggle: 클래스 추가
item.classList.toggle('done'); // 여러개의 클래스를 다루지 않음
item.classList.toggle('done', false); // done이라는 클래스를 추가하지 않음

// 이벤트 핸들러 등록하기
let btn = document.querySelector('#myBtn');

function event1() {
  console.log('Hi Codeit!');
}

function event2() {
  console.log('Hi again!');
}

// elem.addEventListener(event, handler)
btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// elem.removeEventListener(event, handler)
btn.removeEventListener('click', event2);

// 주의할 점: 두번째 인자에 함수를 바로 작성하면 삭제 메소드가 동작하지 않는다
btn.addEventListener('click', function () {
  console.log('event3!');
});

btn.removeEventListener('click', function () {
  console.log('event3!');
});


// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

// 이벤트 핸들러가 되는 함수의 첫번째 파라미터(event)는 자동으로 이벤트 객체가 전달된다.
function printEvent(event) {
  console.log(event);
}

// 둘다 printEvent 함수가 실행된다.
myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);


// 이벤트 위임(Event Delegation)
// 자식요소의 이벤트를 부모요소로 위임했다.
const list = document.querySelector('#list');

for (let item of list.children) {
  item.addEventListener('click', function (e) {
    e.target.classList.toggle('done');
  })
}

// 아이템을 추가하면 추가된 아이템은 이벤트 핸들러가 동작하지 않음
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);

// 버블링을 통해 해결할 수 있음
// 부모요소에서 이벤트핸들러를 감지
list.addEventListener('click', function (e) {
  e.target.classList.toggle('done');
})
// 하지만 자식요소가 아닌 온전히 부모요소의 영역에서도 이벤트 핸들러가 동작
// 이벤트를 동작시키고자 하는 자식요소로 특정해주면 해결이 가능하다.
list.addEventListener('click', function (e) {
  // if (e.target.tagName === 'LI')
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('done');
  }
})


// 브라우저 기본동작 막기 event.preventDefault
// 클릭 이벤트 막기
link.addEventListener('click', function (e) {
  e.preventDefault();
  alert('지금은 이동할 수 없습니다.');
})

// 키입력 막기
InputEvent.addEventListener('keydown', function(e) {
  if (!checkbox.cheked) {
    e.preventDefault();
    alert('체크박스를 먼저 클릭해 주세요.');
  }
})

// 해당 객체에 마우스 우클릭 막기
text.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
})
// 문서 전체 마우스 우클릭 막기 document
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
})


// [마우스 버튼 이벤트]
// > MouseEvent.button
// 0: 마우스 왼쪽 버튼
// 1: 마우스 휠
// 2: 마우스 오른쪽 버튼

// > MouseEvent.type
// click: 마우스 왼쪽 버튼을 눌렀을 때
// contextmenu: 마우스 오른쪽 버튼을 눌렀을 때
// dblclick: 동일한 위치에서 빠르게 두번 click할 때
// mousedown: 마우스 버튼을 누른 순간
// mouseup: 마우스 버튼을 눌렀다 뗀 순간


// [마우스 이동 이벤트]
// 
// > MouseEvent.type
// mousemove: 마우스 포인터가 이동할 때
// mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
// mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때 
// 
// > MouseEvent.clientX, clientY
// : 화면에 표시되는 창 기준 마우스 포인터 위치   
// 
// > MouseEvent.pageX, pageY
// : 웹 문서 전체 기준 마우스 포인터 위치
// 
// > MouseEvent.offsetX, offsetY
// : 이벤트가 발생한 요소 기준 마우스 포인터 위치

const box1 = document.querySelector('#box1');

function onMouseMove(e) {
  console.log(`client: (${e.clientX}, ${e.clientY})`);
  console.log(`page: (${e.pageX}, ${e.pageY})`);
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);

/** 
 * [마우스 이동 이벤트]
 * 
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 움직일 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 움직일 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 움직일 때 
 * 
 * > MouseEvent.target
 * : 이벤트가 발생한 요소
 * 
 * > MouseEvent.relatedTarget
 * : 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소
 */

 const box2 = document.querySelector('#box2');

 function printEventData(e) {
   console.log('event:', e.type);
   console.log('target:', e.target);
   console.log('relatedTarget:', e.relatedTarget);
   console.log('------------------------------------');
   if (e.target.classList.contains('cell')) {
     e.target.classList.toggle('on');
   }
 }
 
 box2.addEventListener('mouseover', printEventData);
 box2.addEventListener('mouseout', printEventData);

/** 
 * [키보드 이벤트]
 * 
 * > KeyboardEvent.type
 * keydown: 키보드 버튼을 누른 순간
 * keypress: 키보드 버튼을 누른 순간, 출력값이 변하는 키에서만 동작하고 esc,shift같은 기능역할을 하는 키는 동작하지 않음
 * keyup: 키보드 버튼을 눌렀다 뗀 순간
 * 
 * 하나의 키를 반복하면 keydown만 반복해서 동작하고, keypress는 한번만 동작한다.
 * 
 * > KeyboardEvent.key
 * : 이벤트가 발생한 버튼의 값
 * 
 * > KeyboardEvent.code
 * : 이벤트가 발생한 버튼의 키보드에서 물리적인 위치
 */


/**
 * [input 태그 다루기]
 *  
 * > 포커스 이벤트
 * focusin: 요소에 포커스가 되었을 때
 * focusout: 요소에 포커스가 빠져나갈 때
 * focus: 요소에 포커스가 되었을 때 (버블링 x)
 * blur: 요소에 포커스가 빠져나갈 때 (버블링 x)
 * 
 * > 입력 이벤트
 * input: 사용자가 입력을 할 때
 * change: 요소의 값이 변했을 때
 */

 const el = document.querySelector('#form');

 function printEventType(e) {
   console.log('type:', e.type);
   console.log('target:', e.target);
   console.log('---------');
 }
 
 el.addEventListener('focusin', printEventType);
 el.addEventListener('focusout', printEventType);
 el.addEventListener('input', printEventType);
 el.addEventListener('change', printEventType);


// Scroll 이벤트
let lastScrollY = 0;

function onSroll() {
  const nav = document.querySelector('#nav');
  const toTop = document.querySelector('#to-top');
  const STANDARD = 30;
  
  if (window.scrollY > STANDARD) { // 스크롤이 30px을 넘었을 때
    nav.classList.add('shadow');
    toTop.classList.add('show');
  } else { // 스크롤이 30px을 넘지 않을 때
    nav.classList.remove('shadow');
    toTop.classList.remove('show');
  } 

	if (window.scrollY > lastScrollY) { // 스크롤 방향이 아랫쪽 일 때
    nav.classList.add('lift-up');
  } else { // 스크롤 방향이 윗쪽 일 때
    nav.classList.remove('lift-up');
  }

  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', onSroll);

