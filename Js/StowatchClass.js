class StopwatchClass {
  constructor(value) {
    console.log(value);
  }

  startTime = 0;
  endTime = 0;
  running = 0;
  duration = 0;

  start() {
    if (this.running) {
      throw new Error("Stopwatch is already started");
    }
    this.running = true;
    this.startTime = new Date();
  }

  reset() {
    (this.startTime = null), (this.endTime = null), (this.running = false), (this.duration = 0);
  }

  stop() {
    if (!this.running) {
      throw new Error("Stopwatch is already started");
    }
    this.running = false;
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this. duration += this.seconds;
  }
  print() {
    console.log("test");
  }
}

const swa = new StopwatchClass;

console.log(swa)

// swa.print();

// swa.start();

// setTimeout(() => {
//   swa.stop();
//   console.log(swa);
// }, 1000);
