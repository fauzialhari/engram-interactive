

export default class FpsCtrl {
    fps: number;
    delay: number;
    time: number;
    frame: number;
    tref: number;
    callback: any;
    constructor(
      fps: number,
      callback: ({ time, frame }: { time: number; frame: number }) => void
    ) {
      this.fps = fps;
      this.delay = 1000 / this.fps; // calc. time per frame
      this.time = 0; // start time
      this.frame = -1; // frame count
      this.tref = 0; // rAF time reference
      this.callback = callback;
      this.loop(performance.now());
    }
  
    loop(timestamp: number) {
      if (this.time === 0) {
        this.time = timestamp;
      } // init start time}
      const seg = Math.floor((timestamp - this.time) / this.delay); // calc frame no.
      if (seg > this.frame) {
        // moved to next frame?
        this.frame = seg; // update
        this.callback({
          // callback function
          time: timestamp,
          frame: this.frame,
        });
      }
      this.tref = requestAnimationFrame(this.loop.bind(this));
    }
  
    stopAnimation() {
      cancelAnimationFrame(this.tref);
    }
  }