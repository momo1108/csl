# Javascript

웹 브라우저에서 사용하기 위하여 만들어진 프로그래밍 언어

90년대부터 주로 웹 브라우저 상에서 UI 를 동적으로 보여주기 위하여 사용

이제는 단순히 웹페이지에서만 국한되지 않고 Node.js 런타임을 통하여 서버 쪽에서도 사용을 할 수 있게 됐다.

### 코드 작성 결과 확인

- [https://codesandbox.io](https://codesandbox.io/)
- Vanilla - 다른 라이브러리 없이 자바 스크립트만 사용



### 변수

#### let

- 바뀔 수 있는 값

- 한번 값을 선언하고 나서 바꿀 수 있다.

  ```js
  let value = 1;
  console.log(value);
  value = 2;
  console.log(value);
  ```

#### var

- 옛날 방식
- 똑같은 이름으로 여러 번 선언 가능
- var 과 let 은 사용 할 수 있는 범위가 다름
- IE9, IE10 같은 구형 브라우저에서는 let 과 const 를 사용 할 수 없다. 하지만, 보통 개발을 하게 될 때는 Babel 과 같은 도구를 사용하여 코드가 구형 브라우저에서도 돌아갈 수 있게 끔 변환 작업을 함

### 상수

- 한번 선언하고 값이 바뀌지 않는 값

  ```js
  const a = 1;
  a = 2; // 불가능 "Error: "a" is read-only"
  
  const a = 1;
  const a = 2; // 불가능 이미 선언됨
  
  ```

  

### 데이터 타입

1. 숫자(Number)

   ```js
   let value = 1;
   ```

2. 문자열(String)

   ```js
   let text = 'hello';
   let name = '좌봐스크립트';
   ```

3. 참/거짓 (Boolean)

   참 혹은 거짓 두 가지 종류의 값 만을 나타낼 수 있다

   ```js
   let good = true;
   let loading = false;
   ```

4. null 과 undefined - "없음"을 의미

   차이점

   - null 은 주로 이 값이 없다 라고 선언을 할 때 사용

   - 없다고 고의적으로 설정하는 값

     ```js
     const friend = null;
     ```

   - undefined 는 아직 값이 설정되지 않은 것을 의미

   - 설정을 하지 않았기 때문에 없는 값

     ```js
     let criminal;
     console.log(criminal);
     ```



## 연산자

#### 산술 연산자

사칙 연산과 같은 작업을 하는 연산자를 의미

- `-`: 뺄셈

- `*`: 곱셈

- `/`: 나눗셈

  ```js
  let a = 1 + 2 - (3 * 4) / 4;
  console.log(a);
  
  let a = 1;
  a++;
  ++a;
  console.log(a);
  // console.log(a++); 를 할 때에는 1을 더하기 직전 값을 보여주고 console.log(++a); 를 할 때에는 1을 더한 다음의 값을 보여줌
  a--;
  console.log(a);
  ```

#### 대입 연산자

특정 값에 연산을 한 값을 바로 설정 할 때 사용 할 수 있는 연산자

```js
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);
```

#### 논리 연산자

Boolean 타입(true 혹은 false)을 위한 연산자

총 3 가지가 있다.

- `!`: NOT
- `&&`: AND
- `||`: OR

1. NOT

   true 는 false 로, false 는 true 로 바꿔줌

   ```js
   const a = !true;
   console.log(a); // false
   const b = !false;
   console.log(b); // true
   ```

2. AND

   양쪽의 값이 둘 다 true 일 때만 결과물이 true

   ```js
   const a = true && true;
   console.log(a); // true
   ```

3. OR

   양쪽의 값 중 하나라도 true 라면 결과물이 true

   ```js
   let t = true || false;
   t = false || true;
   t = true || true;
   // true
   ```

#### 연산 순서

순서는 NOT -> AND -> OR

```js
const value = !((true && false) || (true && false) || !false);
```

#### 비교 연산자

비교 연산자는 두 값을 비교 할 때 사용 할 수 있다

#### 두 값이 일치하는지 확인

`===` 는 두 값이 일치하는지 확인해줌 

일치한다면 true, 일치하지 않는다면 false

`=` 문자 2개로도 비교를 할 수는 있다.

```javascript
const a = 1;
const b = 1;
const equals = a == b;
console.log(equals);
```

2개 있을 때에는 타입 검사까지는 하지 않는다는 것입니다.

예를 들어서 `==` 를 사용하면 숫자 1과 문자 '1' 이 동일한 값으로 간주

```javascript
const a = 1;
const b = '1';
const equals = a == b;
console.log(equals); // true
```

그리고, 0 과 false 도 같은 값으로 간주

```javascript
const a = 0;
const b = false;
const equals = a == b;
console.log(equals); // true
```

그리고 undefined 와 null 도 같은 값으로 간주

`==` 를 사용하다보면 실수를 할 확률이 높아짐

#### 두 값이 일치하지 않는지 확인

두 값이 일치하지 않는지 확인 할 때에는 `!==` 를 사용

```javascript
const value = 'a' !== 'b'; // true
```

`!=` 를 사용하게 되면 타입 검사를 하지 않음

```javascript
console.log(1 != '1'); // false
console.log(1 !== '1'); // true
```

 !== 를 사용 할 것을 권장

#### 크고 작음

두 값 중에서 무엇이 더 크고 작은지 비교하기 위해서는 다음 연산자를 사용

```js
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false
```

#### 문자열 붙이기

두 문자열을 붙일 때에는 `+` 로

```javascript
const a = '안녕';
const b = '하세요';
console.log(a + b); // 안녕하세요
```



## 조건문

특정 조건이 만족됐을 때 특정 코드를 실행

### if 문

가장 기본적  "~~하다면 ~~를 해라"

```js
const a = 1;
if (a + 1 === 2) {
  console.log('a + 1 이 2 입니다.');
}
```

### if-else 문

if-else문은 "~~하다면 ~~하고, 그렇지 않다면 ~~해라."

```js
const a = 10;
if (a > 15) {
  console.log('a 가 15 큽니다.');
} else {
  console.log('a 가 15보다 크지 않습니다.');
}
```

### if-else if 문

if-else if 문은 여러 조건에 따라 다른 작업을 해야 할 때 사용

```js
const a = 10;
if (a === 5) {
  console.log('5입니다!');
} else if (a === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}
```

### switch/case 문

switch/case 문은 특정 값이 무엇이냐 에 따라 다른 작업을 하고 싶을 때 사용

```js
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}
```

## 함수 ★

함수는, 특정 코드를 하나의 명령으로 실행

![](./image/1.jpg)

함수를 만들 때는 `function` 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해 주는데 이를 파라미터(매개변수)라고 부름

함수 내부에서 `return` 키워드를 사용하여 함수의 결과물을 지정 할 수 있다

`return` 을 하게 되면 함수가 끝난다. 만약 다음과 같이 코드가 작성된다면, return 아래의 코드는 호출이 안됨

```js
function add(a, b) {
  return a + b;
  console.log('호출이 되지 않는 코드!');
}

const sum = add(1, 2);
console.log(sum); // 3

function hello(name) {
  console.log('Hello, ' + name + '!');
}
hello('velopert'); // "Hello, velopert!"
```

문자열 조합을 더욱 편하게 하는 방법이 - ES6 의 템플릿 리터럴 (Template Literal)이라는 문법을 사용

> **ES6 가 뭔가요?**
>
> ES6 는 ECMAScript6 를 의미하며, 자바스크립트의 버전을 가리킵니다. ES6는 2015년에 도입이 되었습니다. ES6 는 ES2015 라고 불리기도 합니다. 그리고 2015년 이후에 계속해서 새로운 자바스크립트 버전이 나오고 있습니다. ES7(ES2016) ES8(ES2017) ES9(ES2018) ES10(ES2019).. 새로운 자바스크립트 버전이 나올때마다 새로운 문법이 소개됩니다.
>
> 브라우저 버전에 따라 지원되는 자바스크립트 버전이 다릅니다. 하지만, 보통 웹 개발을 할 때에는 Babel 이라는 도구를 사용하여 최신 버전의 자바스크립트가 구버전의 브라우저에서도 실행되도록 할 수 있습니다. (정확히는, 최신버전 자바스크립트를 구버전 형태로 변환하는 작업을 거칩니다.)

```js
function hello(name) {
  console.log(`Hello, ${name}!`);
}
hello('velopert');
```

### 화살표 함수

함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법을 사용 하는 것

```js
// 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

// 코드 블록 내부에서 바로 return 을 하는 경우는 다음과 같이 줄여서 쓸 수도 있다
const add = (a, b) => a + b;
console.log(add(1, 2));
```

### 화살표 함수와 일반 function 으로 만든 함수와의 주요 차이점

- 화살표 함수에서 가리키는 this 와 function 에서 가리키는 this 가 서로 다르다



## 객체

변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줌

```js
const dog = {
  name: '멍멍이',
  age: 2
};

console.log(dog.name);
console.log(dog.age);
```

객체를 선언 할 때에는 이렇게 `{ }` 문자 안에 원하는 값들을 넣어주면 된다. 값을 집어 넣을 때에는

```
키: 원하는 값
```

형태로 넣으며, 키에 해당하는 부분은 공백이 없어야 한다. 만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주면 됨

```javascript
const sample = {
  'key with space': true
};
```

### 함수에서 객체를 파라미터로 받기

```js
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
    hero.actor
  } 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
// 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
// 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.
```

### 객체 비 구조화 할당

print 함수를 보시면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 `hero.` 를 입력하고 있는데, 객체 비 구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있다

>  이 문법은 "객체 구조 분해" 라고 불리기도 함

```js
function print(hero) {
  const { alias, name, actor } = hero; // 객체에서 값들을 추출해서 새로운 상수로 선언
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
```

여기서 더 나아가면, 파라미터 단계에서 객체 비구조화 할당을 할 수도 있다

```js
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```

### 객체 안에 함수 넣기

객체 안에 함수를 넣을 수도 있다

```js
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  }
};

dog.say(); // 멍멍!
```

함수가 객체 안에 들어가게 되면, `this` 는 자신이 속해있는 객체를 가리키게 된다.

함수를 선언 할 때에는 이름이 없어도 됨

```js
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function() {
    console.log(this.sound);
  }
};

dog.say(); // 멍멍!
```

객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않는다.

`TypeError: Cannot read property 'sound' of undefined`

이유는, function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가리키게 되는데, 화살표 함수는 그렇지 않기 때문

## Getter 함수와 Setter 함수

객체를 만들고 나면, 다음과 같이 객체 안의 값을 수정 할 수도 있음

```js
const numbers = {
  a: 1,
  b: 2
};

numbers.a = 5;
console.log(numbers);
```

Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있다

```js
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
```

우리는 `numbers.sum()` 을 한 것이 아니라 `number.sum` 을 조회했을 뿐인데, 함수가 실행되고 그 결과 값이 출력 되었다.

이런 식으로 Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산 된 값을 반환한다.

이번에는 Setter 함수를 사용해보자.

```js
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
```

