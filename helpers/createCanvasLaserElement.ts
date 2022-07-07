import randomIntFromInterval from "../utils/randomIntFromInterval";

export type LaserElement = {
  xPosition: number;
  beginTipPosition: number;
  height: number;
  width: number;
  color: string;
  endTipPosition: number;
  draw: () => LaserElement;
  animate: (distanceMovement: number) => LaserElement;
};

const createLaser = (
  canvasContext: CanvasRenderingContext2D,
  xPosition: number,
  color: string
): LaserElement => ({
  xPosition,
  beginTipPosition: randomIntFromInterval(-1000, -400),
  height: randomIntFromInterval(250, 400),
  width: randomIntFromInterval(1, 3),
  color,
  get endTipPosition() {
    return this.beginTipPosition + this.height;
  },
  draw() {
    canvasContext.strokeStyle = this.color;
    canvasContext.lineWidth = this.width;
    canvasContext.shadowBlur = 1; //shadow blur always 5
    canvasContext.shadowColor = this.color;
    canvasContext.beginPath();
    canvasContext.moveTo(this.xPosition, this.beginTipPosition);
    canvasContext.lineTo(this.xPosition, this.endTipPosition);
    canvasContext.stroke();
    return this;
  },
  animate(distanceMovement: number) {
    this.beginTipPosition += distanceMovement;
    return this.draw();
  },
});

export default createLaser;
