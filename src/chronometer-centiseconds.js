class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=> {
      if (printTimeCallback) printTimeCallback();
      this.currentTime++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.round((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    if (value > 9) return value.toString();
    return '0' + value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    console.log(Math.round(this.getSeconds()))
    const minits = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minits}:${seconds}.${centiseconds}`;
  }
}
