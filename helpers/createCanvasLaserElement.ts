import {
  getNumberRelativeToScreenWidth,
  getNumberRelativeToScreenHeight,
} from "../utils/getNumbersRelativeToScreen";
import randomIntFromInterval from "../utils/randomIntFromInterval";

export type LaserElement = {
  xPosition: number;
  beginTipPosition: number;
  height: number;
  width: number;
  level: number;
  opacity: number;
  color: string;
  endTipPosition: number;
  finished: boolean;
  draw: () => LaserElement;
  animate: (distanceMovement: number) => LaserElement;
};

const createPrimarycolor = (opacity: number) => `rgba(3, 199, 255, ${opacity})`;
const createSecondarycolor = (opacity: number) =>
  `rgba(33, 120, 163, ${opacity})`;
const createTertiarycolor = (opacity: number) =>
  `rgba(11, 74, 106, ${opacity})`;
const generateColors = (opacity: number) => [
  createTertiarycolor(opacity),
  createSecondarycolor(opacity),
  createPrimarycolor(opacity),
];

const createLaser = (
  canvasContext: CanvasRenderingContext2D,
  xPosition: number
): LaserElement => {
  return {
    finished: false,
    xPosition,
    beginTipPosition: randomIntFromInterval(
      getNumberRelativeToScreenHeight(-1000),
      getNumberRelativeToScreenHeight(-400)
    ),
    height: randomIntFromInterval(getNumberRelativeToScreenHeight(250), getNumberRelativeToScreenHeight(400)),
    width: randomIntFromInterval(1, 3),
    level: randomIntFromInterval(1, 3),
    opacity: 1,
    get color() {
      return generateColors(this.opacity)[this.level - 1];
    },
    get endTipPosition() {
      return this.beginTipPosition + this.height;
    },
    draw() {
      // ending area is about 75 to 99 % of canvas height
      const laserEndingArea =
        (randomIntFromInterval(85, 99) / 100) * canvasContext.canvas.height;
      const isEndTipEnteringEndingArea = this.endTipPosition >= laserEndingArea;
      if (isEndTipEnteringEndingArea) {
        // reduce opacity on entering ending area
        this.opacity -= 0.25;
        this.finished = this.opacity <= 0;
      }

      canvasContext.strokeStyle = this.color;
      canvasContext.lineWidth = getNumberRelativeToScreenWidth(this.width);
      canvasContext.shadowBlur = 1; //shadow blur always 5
      canvasContext.shadowColor = this.color;
      canvasContext.beginPath();
      canvasContext.moveTo(this.xPosition, this.beginTipPosition);
      canvasContext.lineTo(this.xPosition, this.endTipPosition);
      canvasContext.stroke();
      return this;
    },
    animate(distanceMovement: number) {
      // make movement value is calculated based on level
      this.beginTipPosition += distanceMovement * this.level;
      return this.draw();
    },
  };
};

export default createLaser;
