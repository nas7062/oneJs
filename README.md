## 공부 내용

### null 병합 연산자

```
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
```

height || 100은 height에 0을 할당했지만 0을 falsy한 값으로 취급했기 때문에 null이나 undefined를 할당한 것과 동일하게 처리한다. 따라서 height || 100 의 평과 결과는 100이 된다.

반면 height ?? 100의 평과 결과는 height가 정확하게 null이나 undefined일 경우에만 100이 된다.
예시에선 height에 0이라는 값을 할당했기 때문에 얼럿창엔 0이 출력된다.

이런 특징 때문에 높이처럼 0이 할당될 수 있는 변수를 사용해 기능을 개발할 땐 || 보다 ??가 적합하다.

### 호이스팅

선언문이 최상단으로 끌어올려진 듯한 현상
let 과 const 는 호이스팅 되지 않는 것이 아니라
초기화 전까지 TDZ에 있어서 그런 것. => 초기화 전까지 메모리 공간 확보 X

### 객체

여러가지의 값을 내보낼 수 있음.
크게 Person => name ,age 등 내보낼 수 있음.
프로퍼티에는 함수도 가능 어떠한 값도 가능.
.표기법, 괄호 표기법 두가지
괄효 표기법은 키값이 계속 변경되는 상황에서 자주 사용

### 생성자 함수

동일한 구조의 객체 쉽게 생성
코드의 재사용성 높아짐
반복되는 코드 작성 감소

### 반복문

for , for..in ,for...of
Object.keys(),Object.values(),Object.entries()

### 배열 메서드

#### 추가 및 삭제

push,unshift 추가
pop,shift 삭제

#### 배열 순회

array.forEach(el,index,arr)
array.map(el,index,arr) 새로운 배열 반환

#### 배열 요소 찾기

array.at() index 요소로 찾음
at의 특이점은 마이너스도 가능하다. -1이면 마지막 index 가져옴

array.includes() 포함하는지 안하는지 false / true

array.indexOf() 포함하면 index를 반환해줌 포함하지 않으면 -1

array.findIndex(el) 객체의 값이 몇번째 index에 있는지 사용

array.find(el) 특정값의 index가 아니라 그 값을 반환해줌

#### 배열 반환

array.filter() 조건이 만족하는 것만 다시 반환해줌

array.slice(start,end) end-1까지만 잘라줌.

#### 배열 합치기

arr2.concat(arr1)

#### 배열을 문자열로

arr2.join("")

#### 배열 정렬

arr.sort()

```
const compare = (a,b) =>  {
  if(a>b) return -1;
  else if(a<b) return 1;
  else return 0;
}
```

arr.sort((a,b)=>a-b) 오름차순
arr.sort((a,b)=>b-a) 내림차순

#### 하나의 값

```
arr.reduce((acc,cur,idx) => {
  return acc+cur;
},0)
```

0은 초기값 최후는 acc값을 반환하는데 cur을 다 더한 값이 나온다.

#### isArray

배열인지 아닌지 알려줌 true/false;

### 구조분해 할당

요소 및 프로퍼티 분해하여 변수에 할당하는 것

```
let nums = [1,2,3];
let c1,c2,c3;
[c1,c2,c3] = nums;

```

#### 구조분해 할당으로 값 바꾸기

```
let a=10;
let b=5;
[a,b] =[b,a];
```

### 비동기

기다리지 않고 병렬적으로 처리
자바스크립트는 싱글 스레드
그러므로 비동기로 처리해야 원할하게 웹페이지 돌아감(?)

### callback 지옥

callback 지옥 해결하기 위해 Promise 사용
프로미스 체이닝 .then 사용
직관적이고 깔끔한 코드

### async await

async : 비동기 작업 처리
awiat : 함수의 실행 기다리게함
promise 보다 가독성이 좋음
실행순서 예측 가능
async 사용한 함수에서만 await 사용가능
비동기 처리 함수에서는 try..catch 사용하자

### 클라이언트 서버 DB

데이터 요청 및 응답
클라 => 서버 => DB
클라 <= 서버 <= DB

### DOM

DOM API를 활용해 DOM을 조작한다.
id는 1개의 html에 하나
class 는 여러개 가능

### DOM API

#### 요소 불러오기

getElementById : id를 가진 요소 가져옴
querySelectorAll : 모든 요소 가져옴 class나 그냥 요소
quereySelector : 1개의 요소 가져옴 id class 사용가능 id (#) class(.)
getElementByClassName class 가진 모든 요소 가져옴
getElementByTagName : Tag를 가진 모든 요소 가져옴

#### 요소 조작

className = "dog" dog로 class 변경 가능
id = "animal" animal 로 id 변경 가능
classList.add("dog") dog class 추가 가능
classList.remove("dog) dog class 삭제 가능
textContent = "age" 요소의 안에 content 변경 가능
style.color = "red" 요소 color red로 변경가능
createElement('div') div요소 생성
createTextNode("말티즈") 말티즈라는 텍스트 생성
appendChild() 해당 요소의 마지막 자식 요소로 추가
innerHTML 요소 자체를 모두 반환
i

### 이벤트

addEventListener("click",()=>{})

### 폼

label for === input,select id

### this

자신이 속한 객체(?)
전역에서 this는 window를 가르킴
일반 함수는 window가르킴
객체의 메서드에서 this는 객체를 가르킴
호출된 방법에 따라 달라짐 호출 된 위치에서 부모(?)
생성자 함수안에서 this는 생성할 객체를 가르킴
callback 함수에서는 전역객체 가르킴
화살표 함수에서는 선언된 위치에 따라
그 상위요소 호출 (렉시컬 스코프 응용)

### 컴포넌트

웹 에서 기능별로 나눈 독립적인 부분
동일한 부분 중복X => 재사용 가능
유지보수 좋음
사용자와 상호작용 하는 부분 (UI) 을 컴포넌트로 분리

### 모듈

특정 기능을 한아ㅢ 단위로 묶어 관리
script에 type ="module" mjs 파일로 관리하기
export로 다른 js 파일에서 사용가능
다른 파일에서는 import로 불러옴
가독성 증가

### 상태관리

데이터의 흐름을 편리하게 관리
불필요한 리렌더링 X
사용자 경험 굿
변화한 부분만 리렌더링

### 연산자

조건 ? TRUE : FALSE
조건(참) ?? 출력

### SPA

하나의 HTML 단일 페이지 어플리케이션
js에 파일에 작성된 컴포넌트를 직접 렌더링
CSR 클라이언트 사이드 렌더링
서버의 부하가 적고 사용자에게 좋은 경험
검색엔진 최적화 어렵고 초기로딩 시간 길다.
변화가 필요한 요소만 렌더링 깜빢임 X
