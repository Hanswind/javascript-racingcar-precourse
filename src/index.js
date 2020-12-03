export default class RacingCarGame {
  constructor() {
    this.handleCarNameSubmit();
    this.handleCountSubmit();
  }

  checkCarNameVaild = (carNames) => {
    carNames.map((carName) => {
      if (carName.length === 0) {
        alert("주어진 자동차 이름중 공백인 이름이 있습니다");

        return false;
      } else if (carName.length > 5) {
        alert("주어진 자동차 이름중 5글자 초과인 이름이 있습니다");

        return false;
      } else if (carNames.indexOf(carName) !== carNames.lastIndexOf(carName)) {
        alert("주어진 자동차 이름중 중복된 이름이 존재합니다");

        return false;
      }
    });

    return true;
  };

  checkCountVaild = (counts) => {
    if (isNaN(counts)) {
      alert("입력한 횟수가 숫자가 아닙니다");

      return false;
    }

    if (counts <= 0) {
      alert("입력한 횟수가 올바른 값이 아닙니다");

      return false;
    }

    return true;
  };

  generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 10);

    return num;
  };

  getCarNameInput = () => {
    const carNameInput = document.getElementById("car-names-input");
    const carNameValue = carNameInput.value;
    const carNames = carNameValue.split(",");

    return carNames;
  };

  getCountInput = () => {
    const countInput = document.getElementById("racing-count-input");
    const counts = countInput.value;

    return counts;
  };

  handleCarNameSubmit = () => {
    const carNameButton = document.getElementById("car-names-submit");
    carNameButton.addEventListener("click", () => {
      this.getCarNameInput();
    });
  };

  handleCountSubmit = () => {
    const countButton = document.getElementById("racing-count-submit");
    countButton.addEventListener("click", () => {
      this.getCountInput();
    });
  };
}

new RacingCarGame();
