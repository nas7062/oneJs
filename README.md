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


