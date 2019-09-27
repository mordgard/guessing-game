class GuessingGame {
  constructor() {
    this.result = 0;
    this.max = 0;
    this.min = 0;
  }

  setRange(min, max) {
    this.max = max;
    this.min = min;
  }

  guess() {
    this.result = Math.ceil((this.max + this.min) / 2);
    return this.result;
  }

  lower() {
    this.max = this.result;
  }

  greater() {
    this.min = this.result;
  }
}

module.exports = GuessingGame;
