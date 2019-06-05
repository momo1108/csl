# HTML and JavaScript

### 자바스크립트 코딩 연습

#### 변수(Variable) vs 상수(Constant)
#### 사람이 일일이 하나씩 하기엔 힘든 일을 변수를 사용해서 편하게 수행할 수 있다.
#### var 변수명 = ??;

### 자바스크립트의 전체적인 구조는 이렇다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"><!-- 브라우저에서 한글이 깨져보이는 경우는 html파일은 UTF-8 방식으로 저장되었으나 웹페이지를 열 때 UTF-8 방식으로 해석하지 않아서이다. 그 경우 브라우저에게 알려줘야한다. -->
    <title></title>
  </head>
  <body>
    
  </body>
</html>
```

### 목차를 의미하는 list 태그에는 두가지가 있다. **ul** vs **ol**

```html
  <ol>
    <li><a href="1.html">평일</a></li>
    <li><a href="2.html">주말</a></li> <!-- list(목차)를 의미하는 태그 -->
    <li><a href="3.html">공휴일</a></li>
  </ol> <!-- ol은 리스트들의 구분을 해주고 순서대로 번호를 매겨주는 태그 -->
  <ul>
    <li>수업시간</li>
    <li>쉬는시간</li>
    <li>점심시간</li>
  </ul> <!-- ul은 리스트들의 구분을 해주고 목차의 번호는 매겨주지 않음 -->
```

### 제목 태그들이 있다. h1, h2, h3, h4 , h5, h6

```html
<h1>평일에는?</h1>
```

### **링크를 제공해주는 a 태그가 있다. ★**

- <a> = Anchor (닻)
- href = Hypertext Reference
- target 속성으로 페이지 열리는 방식 제공 (_blank 라는 속성을 넣어주면 새창열림)
- 다른 도메인 연결시 http:// 까지 제공해야함
- 파란색 텍스트에 밑줄로 기본제공됨

```html
  <a href="https://www.w3.org/TR/html5/" target="_blank" title="html 설명">
    <u>HTML 설명을 듣고싶다면 <strong>클릭</strong></u>
  </a>
<a href="">1. 링크값에 내용이 없을경우</a>
<a href="#">2. #만 제공하는 경우 </a>
<a href="#content">3. 내부링크를 제공하는 경우 </a>
<a href="#a">4. 없는 아이디를 넣는경우 </a>
1번 : 내용이 없을경우 IE의 경우는 내컴퓨터가 열림 , Chrome 는 아무 변화없음
2번 : #만 제공하는경우엔 scroll이 맨위로 가게됩니다
3번 : #content는 #뒤에 이름을 써줄경우 내부링크로 작동되어 
      태그의 id='content' 인 태그를 찾아서 scroll 이 이동됩니다.
4번 : #a #뒤에 없는 id를 넣을경우 현재 scroll 고정, 현재scroll에서 새창이나 
      다른 이벤트를 줄경우 사용 #none를 쓰는사람도있는대 #a 로 쓰는게 바람직하다
```

### 문단을 구성하는 p 태그와 줄바꿈하는 br 태그가 있다.

```html
<p>
    동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
</p>
<p style="margin-top:15px;"><img src="file:///C:/Users/student/Desktop/WEB/1.jpg" width="20%"> or 인터넷상의 이미지 주소를 써도 됌
<br> 아니면 다운받아서 소스주소를 쓰면 됌 같은 폴더내에 있을경우 경로말고 파일 이름만 써도 무방
```

### html 본문에 자바스크립트를 사용하려면 script 태그로 알려줘야 한다.

```html
<body>
    <h1 style="background-color:coral; color:hotpink">Java Script</h1>
    <script type="text/javascript">
      document.write('hello world');
      document.write(1+1);
    </script> <!-- 자바스크립트를 사용하겠다고 브라우저에 알려주는 태그-->
    <h1>html</h1>
    hello world
    1+1
  </body>
```

### **원하는 곳에 스타일을 적용하고 싶을 땐 style 태그와 선택자(div, span)태그를 사용한다.★★★**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>백그라운드버튼을 만들어보자</title>
    <style>
      /* 선택자를 사용해서 여러개를 한꺼번에 선택해서 스타일을 바꿔줄 수 있다.
      class라는 것은 그룹을 지어준다는 개념이다. id보다 포괄적인 선택자이다.
      선택자가 class로 선언된 경우에는 앞에 . 을 붙어주어야 한다.*/
      .js{
        font-weight : bold;
        color:skyblue;
      }
      /*선택자가 id로 선언된 경우에는 앞에 # 을 붙어주어야 한다. id라는 것은 어떤
      한가지 대상을 식별한다는 개념이다. id는 여러곳에 중복사용할 수 없다. class보다 우선한다. */
      #first{
        color:green;
        font-weight : normal;
      }
      /*span의 경우에는 모든 span 선택자에 적용이된다.
      id보단 class가, class보단 span이 포괄적이라 볼 수 있다.
      또 css상의 span의 옵션보단 본문의 span옵션이 더 우선시된다.*/
      span{
        background-color : yellow;
      }
    </style> <!-- 선택자를 사용해서 여러개를 한꺼번에 선택해서 스타일을 바꿔줄 수 있다.
      이 태그 안은 css다 라고 웹 브라우져에게 알려준다.-->
  </head>
  <body style="background-color:gray; color:hotpink;">
    <h1 style="background-color:powderblue; color:red;">자바스크립트(영어: JavaScript)</h1>는 객체 기반의 스크립트 프로그래밍 언어이다.
    <br>이 언어는 웹 브라우저 내에서 주로 <span>사용</span>하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.
    <br>또한 Node.js와 같은 런타임 환경과 같이 서버 사이드 네트워크 프로그래밍에도 <span>사용</span>되고 있다.
    <br><span id="first" class="js">자바스크립트</span>는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가
    <br>처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며,
    <br>최종적으로 <span class="js">자바스크립트</span>가 되었다. <span class="js">자바스크립트</span>가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만,
    <br>이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 <span class="js">자바스크립트</span>는 직접적인 관련성이 없다.
    <br>이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.
    <div class="js">
      div 태그는 무색 무취의 태그이다. 이놈은 어디에다 쓸까? 바로 style을 입히고 싶을 때 이다.
      <br>하지만 이 태그는 줄바꿈이 일어나는 태그이다. 그렇다면 줄바꿈이 없는 무색 무취의 태그는 무엇일까?
    </div>
    <br><span style="font-weight:900;">바로</span> <span style="background-color:white;color:hotpink;">span</span> 태그이다.
  </body>
</html>

```

