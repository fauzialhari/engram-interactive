import { useLayoutEffect, useRef } from "react";
import getElementRef from "../utils/getElementRef";
import createCanvasLaserElement, {
  LaserElement,
} from "../helpers/createCanvasLaserElement";
import randomIntFromInterval from "../utils/randomIntFromInterval";
import detectScrollDirection from "../utils/detectScrollDirection";
console.log(detectScrollDirection);

import FpsCtrl from "../helpers/FpsCtrl";
const LaserRainBackdrop: React.FC<{
  laserDistance?: number;
  movementSpeed?: number;
}> = ({ laserDistance = 60, movementSpeed = 20 }) => {
  const canvasRef = useRef(null);
  useLayoutEffect(() => {
    const canvasElement = getElementRef(canvasRef) as HTMLCanvasElement;
    canvasElement.setAttribute("width", `${window.innerWidth}`);
    canvasElement.setAttribute("height", `${window.innerHeight}`);
    // initializing canvas
    const canvasContext = canvasElement.getContext("2d");
    const PRIMARY_COLOR = "#03c7ff";
    const SECONDARY_COLOR = "#2e7299";
    let lasers: LaserElement[] = [];
    function generateLasers() {
      if (!!canvasContext) {
        let laserGenerationArea = 0;
        do {
          const laserGenerationPoint = randomIntFromInterval(
            laserGenerationArea,
            laserGenerationArea + laserDistance
          );
          const color = randomIntFromInterval(0, 1)
            ? PRIMARY_COLOR
            : SECONDARY_COLOR;
          lasers.push(
            createCanvasLaserElement(canvasContext, laserGenerationPoint, color)
          );
          laserGenerationArea += laserDistance;
        } while (laserGenerationArea < canvasElement.width);
      }
    }
    let isPaused = false;
    window.addEventListener("scroll", (e) => {
      if (detectScrollDirection() === "down") {
          isPaused = true;
      } else {
          isPaused = false;
      }
    });

    //start animation
    let animation: number;
    let distanceMovement = 0;
    const laserRainAnimation = new FpsCtrl(36, () => {
      if (!isPaused) {
        if (!!canvasContext) {
          // clear canvas before repainting
          canvasContext.clearRect(
            0,
            0,
            canvasElement.width,
            canvasElement.height
          );
        }
        distanceMovement += movementSpeed;
        if (distanceMovement > 400) {
          generateLasers();
          distanceMovement = 0;
        }
        lasers = lasers.filter((laser) => {
          laser.animate(movementSpeed);
          return (
            laser.endTipPosition <=
            (randomIntFromInterval(75, 99) / 100) * canvasElement.height
          );
        });
      }
    });
  });
  return <canvas ref={canvasRef} id="laser-rain"></canvas>;
};

export default LaserRainBackdrop;
