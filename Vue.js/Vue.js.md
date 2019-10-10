# Vue.js

## 	data-binding

### 		1. one-way binding

자바스크립트문에서 vue 인스턴스를 생성해주고 데이터를 바인딩시켜준다.

- html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  
  <div id="app">
    <h1>hello, I'm {{name}}</h1>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</body>
</html>
```



- js

```js
var app = new Vue({
  el: '#app', 
  data: {
    name: "funny coding",
  },
  // app 뷰 인스턴스를 위한 메소드들
  methods: {
  }
});
```

## Directive(지시문)

Directive란?

- Vue 의 기능들을 사용하기 위해서 사용하는, HTML 태그 안에 들어가는 하나의 속성
- v-`something` 의 형식으로 사용한다.
- 13개의 종류가 있다. 9개 먼저 살펴보자.
  1. v-text
  2. v-html
  3. v-show
  4. v-if
  5. v-else
  6. v-else-if
  7. v-pre
  8. v-cloak
  9. v-once



### 1. v-text

```html
<div id="app">
    <h1>
    	Hello, I'm {{ name }}
	</h1>
</div>
```

위의 one-way binding을 directive로 같은 기능을 구현해보자.

```html
<div id="app">
    <h1>
        Hello, I'm <span v-text="name"></span>
    </h1>
</div>
```

v-text를 사용하면 태그의 inner text값이 덮어쓰기 된다.

```js
var app = new Vue({
  el: '#app', // 어떤 엘리먼트에 적용을 할 지 정합니다
  // data 는 해당 뷰에서 사용할 정보를 지닙니다
  data: {
    name: '<i>이탈릭</i>'
  }   
});
```

v-text의 경우 data에 태그를 넣어줘도 text로 인식을 한다.

보안적으로 사용할 수도 있다. (XSS 방지)



### 2. v-html

data 안에 html 태그를 사용하고 싶을 때 v-text대신 사용할 수 있다.

```html
<div id="app">
    <h1>
        <!-- 이제 태그가 적용이 된다. -->
        Hello, I'm <span v-html="name"></span>
    </h1>
</div>
```

React의 `dangerouslySetInnerHTML` 과 비슷하다.

이 디렉티브를 사용할 땐 악성코드 필터링에 주의하자.



### 3. v-show

해당 엘리먼트를 display 할지, 말지 true/false로 지정할 수 있다.

먼저, 자바스크립트문에 v-show 디렉티브에 사용할 데이터를 설정해주자.

```js
var app = new Vue({
    el: "#app",
    data: {
        name: "<u>funny coding</u>",
        visibility: true
    }
});
```

```html
<div id="app">
    <h1>
        <!-- 이제 태그가 적용이 된다. -->
        Hello, I'm <span v-show="visibility" v-html="name"></span>
    </h1>
</div>
```

이제 app.visibility를 true로 해주면 출력되고 false로 해주면 숨겨진다.



### 4. v-if

조건문을 사용하여 엘리멘트가 출력될지 말지 설정할 수 있다. 위의 v-show 디렉티브와 비슷하다.

```js
var app = new Vue({
    el: "#app",
    data: {
        name: "3보다 값이 큽니다.",
        visibility: true,
        value: 0
    }
});
```

```html
<div id="app">
    <h1>
        <!-- 이제 태그가 적용이 된다. -->
        Hello, I'm <span v-if="value>3" v-html="name"></span>
    </h1>
</div>
```

v-if 디렉티브 안의 조건문이 만족되는 경우에만 출력이 되는 걸 확인할 수 있다.



### 5. v-else

v-if 디렉티브와 함께 사용하며 v-if의 조건을 만족하지 않을 경우 다른 내용을 출력하기 위한 디렉티브이다.

```html
<div id="app">
    <h1>
        <!-- 이제 태그가 적용이 된다. -->
        Hello, I'm <span v-if="value>3" v-html="name"></span>
        <span v-else>value가 3이하네요</span>
    </h1>
</div>
```



### 6. v-else-if

v-if 디렉터리의 조건을 만족하지 않을 때 체크 할 다른 조건을 설정해줄 수 있다.

v-if와 v-else 사이에 사용되어야 하며 여러번 사용될 수 있다.

```html
<div id="app">
    <h1>
        <!-- 이제 태그가 적용이 된다. -->
        Hello, I'm <span v-if="value>3" v-html="name"></span>
        <span v-else-if="value>0">3보단 작지만 0보단 크네요</span>
        <span v-else>value가 3이하네요</span>
    </h1>
</div>
```



### 7. v-pre

해당 엘리멘트는 디렉티브가 없다고 알리는 특수한 디렉티브이다.

디렉티브가 필요없는 엘리멘트에게 v-pre를 사용하면 vue 시스템이 엘리멘트가 디렉티브가 없다고 인식하기 때문에 그 엘리멘트 내부의 자식 엘리멘트들을 무시하고 건너뜀으로서 컴파일 속도가 빨라진다.

```html
<div id="app">
    <h1>
        <!-- 이제 태그가 적용이 된다. -->
        Hello, I'm <span v-if="value>3" v-html="name"></span>
        <span v-else-if="value>0">3보단 작지만 0보단 크네요</span>
        <span v-else>value가 3이하네요</span>
        <span v-pre>{{ 그대로 컴파일 해주세요 }}</span>
    </h1>
</div>
```



### 8. v-cloak

우리가 웹 페이지를 로드할 때 자바스크립트 코드가 실행되기까지의 시간이 필요하다. 자바스크립트 코드가 실행되기 전까지는 숨기고 싶은 내용들도 모두 출력 될 수 있는데, 이를 막기 위해 v-cloak 디렉티브를 사용한다.

즉, Vue 인스턴스가 제대로 준비될 때 까지 우리의 템플렛을 위한 html 코드를 숨기고 싶을 때 이 디렉티브를 사용한다.

숨기고 싶은 태그에 v-cloak를 넣어주자.

```html
<div id="app" v-cloak>
    <h1>
        <!-- 이제 태그가 적용이 된다. -->
        Hello, I'm <span v-if="value>3" v-html="name"></span>
        <span v-else-if="value>0">3보단 작지만 0보단 크네요</span>
        <span v-else>value가 3이하네요</span>
        <span v-pre>{{ 그대로 컴파일 해주세요 }}</span>
    </h1>
</div>
```

그 다음 css 를 지정해주어야 한다.

```css
[v-cloak]{
    display: none;
}
```



### 9. v-once

해당 엘레멘트를 초기에 **딱 한번만 렌더링**한다. 즉, 자바스크립트 데이터를 사용하는 엘레멘트중 변동이 없거나 초기값만 보여주고 싶은 경우 사용하면 된다.

```html
<div id="app" v-cloak>
    <h1 v-once v-if="value > 5">value 가 5보다 크군요</h1>
    <h1 v-else-if="value === 5">값이 5네요</h1>
    <h1 v-else>value 가  5보다 작아요</h1>.
    <h1 v-pre>{{ 이건 그대로 렌더링해줘요 }}</h1>
    
    <h2 v-once>초기 값: {{ value }}</h2>
	<h2>현재 값: {{ value }}</h2>
</div>
```



### 10. v-bind

html 태그 안의 내용을 설정하고 싶은 경우 위의 방법들로 설정해주면 된다.

하지만 img 태그의 src 같이 태그의 속성을 바꾸고 싶을 때는 v-bind 디렉티브를 사용해야 설정이 가능하다.

- javascript

```js
// 새로운 뷰를 정의합니다
var app = new Vue({
  el: '#app', // 어떤 엘리먼트에 적용을 할 지 정합니다
  // data 는 해당 뷰에서 사용할 정보를 지닙니다
  data: {
    name: 'Vue',
    feelsgood: 'https://imgh.us/feelsgood_1.jpg'
  }   
});
```

- html

```html
<div id="app">
    <h1>Hello, {{ name }}</h1>
    <img v-bind:src="feelsgood"/>
</div>
```

조금 더 간단하게 쓰기 위하여 v-bind도 생략시켜 줄 수 있다.

```html
<div id="app">
    <h1>Hello, {{ name }}</h1>
    <img :src="feelsgood"/>
</div>
```

머스태쉬 {{ }} 나, 디렉티브를 사용할 때 내부값을 꼭 뷰 인스턴스의 데이터 명으로 해야되는건 아니다. 이 안에도 자바스크립트 표현식을 사용할 수 있다.

예를들어, v-bind 디렉티브에 자바스크립트 표현식을 써보자.

- js

```js
// 새로운 뷰를 정의합니다
var app = new Vue({
  el: '#app', // 어떤 엘리먼트에 적용을 할 지 정합니다
  // data 는 해당 뷰에서 사용할 정보를 지닙니다
  data: {
      name: 'Vue',
      feelsgoodman: 'https://mmorpg.net/wp-content/uploads/2018/11/feelsgoodman-300x273.png',
      feelsbadman: 'https://2static.fjcdn.com/pictures/Feels_9c41c0_6042240.jpg'
  }   
});
```

- html

```html
<div id="app">
    <h1>Hello, {{ name }}</h1>
    <img :src="smile? feelsgoodman:feelsbadman"/>
    <h1>
        {{ Date() }}
    </h1>
</div>
```



### 11. v-for

html에서 for-loop를 구현하기 위해서 사용한다. ex) 게시판의 게시물 목록 렌더링

이 디렉티브를 반복할 태그에서 `item in items`의 형식으로 작성한다.

- item : 이것은 별칭이기 때문에 편의상 item이라 명명한 것이지 우리 마음대로 설정해도 된다.
- items : Vue 인스턴스 안에 있는 데이터 이름이다.

예를들어, Todolist를 만든다고 생각해보자.

- js

```js
var app = new Vue({
  el: '#app', 
  data: {
    todos: [
      { text: 'Vue.js 튜토리얼 작성하기' },
      { text: 'Webpack2 알아보기' },
      { text: '사이드 프로젝트 진행하기' }
    ]
  }   
});
```

- html

```html
  <div id="app">
    <h2>오늘 할 일</h2>
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
  </div>
```

- html (index를 사용하고 싶은 경우)

```html
  <div id="app">
    <h2>오늘 할 일</h2>
    <ul>
      <li v-for="(e, i) in todos">{{i}} : {{ todo.text }}</li>
    </ul>
  </div>
```

forEach를 사용한다고 생각하면 된다.



### 12. v-model

이전에 머스태쉬 {{ }} 를 사용한 데이터 출력은, 단방향 데이터 바인딩 이었다.

- 단방향 데이터 바인딩 : 데이터 → 뷰
- 데이터 값이 변하면 바로 업데이트가 된다.

이를 양방향 데이터 바인딩으로 바꿔서 데이터가 뷰를 바꿀 뿐 아니라 뷰의 값이 바뀔 때 데이터 값도 바뀔 수 있도록 해보자.

- html

```html
<div id="app">
    <h1>Hello, {{ name }}</h1>
    <input type="text" v-model="name"/>
</div>
```

- js

```js
var app = new Vue({
  el: '#app', 
  data: {
    name: "<u>funny coding</u>",
    text: "아직 없음"
  },
  // app 뷰 인스턴스를 위한 메소드들
  methods: {
  }
});
```

이 디렉티브를 체크박스와 연동해서 토글 기능도 만들 수 있다.

- html

```html
<div id="app">
    <h1>Hello, {{ name }}</h1>
    <input type="text" v-model="name"/>
    <input type="checkbox" v-model="check"/>
    <h1 v-text="check? '있었는데?':'없었습니다.'"></h1>
</div>
```

- js

```js
var app = new Vue({
  el: '#app', 
  data: {
      name: "<u>funny coding</u>",
      text: "아직 없음",
      check: true
  },
  // app 뷰 인스턴스를 위한 메소드들
  methods: {
  }
});
```

이렇게 v-model을 사용하면 양방향 데이터 바인딩이 가능하지만, 이것만으론 부족하다. 프로젝트를 완벽하게 만들기 위해선 이벤트를 다뤄줄 디렉티브 v-on이 필요하다.



### 13. v-on

드디어 methods를 사용할 때가 되었다. v-on을 사용해서 이벤트를 발생시 처리를 할 수 있는데, 그 동작을 정의하기 위해 methods를 정의해서 사용하자.

v-on을 사용할 때는 `v-on:이벤트이름="메소드이름"` 형식으로 사용해보자.

카운터를 만들면서 사용법을 익혀보자.

- js

```js
let app = new Vue({
    el: "#app",
    data: {
        count: 0
    },
    methods: {
        plus: ()=>{
            this.count++;
        },
        minus: ()=>{
            this.count--;
        }
    }
})
```

- html

```html
<div id="app">
    <h1>
        초기 숫자 : <span v-once v-text="count"></span>
        현재의 숫자 : {{ count }}
        차이는 알아서 계산하세요
    </h1>
    <button v-on:click="plus">
        플러스
    </button>
    <button v-on:click="minus">
        마이너스
    </button>
</div>
```

