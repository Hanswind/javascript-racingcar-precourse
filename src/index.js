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

  getCarNameInput = () => {
    const carNameInput = document.getElementById("car-names-input");
    const carNameValue = carNameInput.value;
    const carNames = carNameValue.split(",");

    return carNames;
  };

  getCountInput = () => {
    const countInput = document.getElementById("racing-count-input");
    const counts = countInput.value;
    console.log(counts);

    return counts;
  };

  handleCarNameSubmit = () => {
    const carNameButton = document.getElementById("car-names-submit");
    carNameButton.addEventListener("click", () => {
      this.getCarNameInput();
    });
  };

  handleCountSubmit = () => {
    const countButton = document.getElementById("racting-count-submit");
    countButton.addEventListener("click", () => {
      this.getCountInput();
    });
  };
}

new RacingCarGame();
