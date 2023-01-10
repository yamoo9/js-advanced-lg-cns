/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

// JavaScript 객체 지향 프로그래밍 
// - OOJS (with Prototype)
// - class 문법(syntax) : Java, C#

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// Button 클래스
class Button {
  #type;
  #content;

  constructor(type, content) {
    this.#type = type;
    this.#content = content;
  }
  
  static version = '1.0.0';

  get label() {
    return this.#content;
  }
  set label(newLabel) {
    this.#content = newLabel;
  }
  
  getType() {
    return this.#type;  
  }
  setType(newType) {
    this.#type = newType;
  }
}

// Button 클래스를 확장한 AriaButton 클래스
const AriaButton = class extends Button {
  constructor(type, content, usingAria = true) {
    super(type, content);
    this.usingAria = usingAria;  
  }

  static displayName = 'AriaButton';

  getVersion() {
    return AriaButton.version;
  }
}
