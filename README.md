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

array.findIndex(el)  객체의 값이 몇번째 index에 있는지 사용

array.find(el) 특정값의 index가 아니라 그 값을 반환해줌 

array.filter()  조건이 만족하는 것만 다시 반환해줌 

array.slice(start,end) end-1까지만 잘라줌.

