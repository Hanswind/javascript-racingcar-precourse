# 🏎️ 자동차 경주 게임

## 👨‍💻 구현 기능 목록

: 주어진 요구사항을 토대로 구현해야 할 기능들은 아래와 같다.

1. **자동차 이름 입력 버튼 클릭 감지**

   : 제출하는 button 태그는 `#car-names-submit` id값을 가진다.

   

2. **게임 시도 횟수 입력 버튼 클릭 감지**

   : button 태그는 `#racing-count-submit` id값을 가진다.

   

3. **자동차 이름 입력받기**

   :  input 태그는 `#car-names-input` id값을 가진다.

   

4. **게임 시도 횟수 입력 받기**

   : input 태그는 `#racing-count-input`  id값을 가진다.

   

5. **입력한 자동차 이름 유효한지 검증하기**

   - 입력값이 공백인 경우
   - 중복된 자동차 명 있는 경우
   - `A,,C`와 같은 입력인 경우 (자동차 이름중 공백이 있는 경우)
   - 각 자동차의 이름이 5자 초과 인경우

   : alert 발생시키기

   

6. **입력한 게임 수행 횟수가 유효한지 검증하기**

   - 입력값이 숫자가 아닌경우
   - 입력값이 0 이하 인경우

   : alert 발생시키기

   

7. **0~9 사이의 랜덤 수 생성하기**

   

8. **주어진 조건에 따라 '전진', '정지'를 선택하기**

   : 여기서는  랜덤 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다

   

9. **게임 한번 수행하기**

   : 주어진 자동차들을 전진 or 정지를 결정하게 한다

   

10. **게임 우승자 뽑기**

    : 주어진 차량중에서 우승한 차량을 결정한다

    

11. **주어진 횟수만큼 게임 수행하기**

    

12. **실행결과 html 상에 출력하기**

    : n번 실행한 게임 결과를 한번에 html 상에 주어진 영역에 출력한다
    
    
    
13. **html 입력창 display toggle하기**

    : 입력창과 결과창이 순서대로 display 되도록 토클여부 조절하게 해준다.

<br />

## 🎯 기능 요구사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러명일 경우 ,를 이용하여 구분한다.

## 💻 프로그램 실행 결과

![실행이미지](images/result.gif)
![실행이미지](images/result.jpg)


## ✅ 프로그래밍 요구사항
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.

### 추가된 요구사항

- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 자동차의 이름을 입력하는 input 태그는 `#car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `#car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `#racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `#racing-count-submit` id값을 가진다.
- 다음 Car 객체를 만들고, new 를 이용해 인스턴스를 만든다.

```javascript
function Car(name) {
  this.name = name;
}

class Car {
  constructor(name) {
    this.name = name;
  }
}
```

- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)


## 📝 미션 저장소 및 진행 요구사항

- 미션은 [https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precourse) 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 javascript-racingcar-precourse/docs/README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.

