import { useLayoutEffect, useRef } from "react";
import getElementRef from "../utils/getElementRef";
import createCanvasLaserElement, {
  LaserElement,
} from "../helpers/createCanvasLaserElement";
import {
  getNumberRelativeToScreenWidth,
  getNumberRelativeToScreenHeight,
} from "../utils/getNumbersRelativeToScreen";
import randomIntFromInterval from "../utils/randomIntFromInterval";

const LaserRainBackdrop: React.FC<{
  laserDistance?: number;
  movementSpeed?: number;
}> = ({ laserDistance = 30, movementSpeed = 5 }) => {
  const canvasRef = useRef(null);
  useLayoutEffect(() => {
    const canvasElement = getElementRef(canvasRef) as HTMLCanvasElement;
    canvasElement.setAttribute("width", `${window.innerWidth}`);
    canvasElement.setAttribute("height", `${window.innerHeight}`);
    // initializing canvas
    const canvasContext = canvasElement.getContext("2d");
    const relativeCanvasWidthLaserDistance =
      getNumberRelativeToScreenWidth(laserDistance);
    const relativeCanvasHeightMovementSpeed =
      getNumberRelativeToScreenHeight(movementSpeed);

    let lasers: LaserElement[] = [];
    function generateLasers(emiterConstant: number) {
      if (!!canvasContext) {
        let laserGenerationAreaBegin = 0;

        do {
          const laserGenerationAreaEnd =
            relativeCanvasWidthLaserDistance * emiterConstant +
            laserGenerationAreaBegin;
          const laserGenerationPoint = randomIntFromInterval(
            laserGenerationAreaBegin,
            laserGenerationAreaEnd
          );
          lasers.push(
            createCanvasLaserElement(canvasContext, laserGenerationPoint)
          );
          laserGenerationAreaBegin = laserGenerationAreaEnd;
        } while (laserGenerationAreaBegin < canvasElement.width);
      }
    }
    let isPaused = false;
    let distanceConstant = 1;
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.4) {
            isPaused = true;
          } else {
            isPaused = false;
            distanceConstant = Math.pow(1 / entry.intersectionRatio, 8);
          }
        });
      },
      {
        threshold: [
          1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4,
          0.35, 0.3, 0.25, 0.25, 0.2, 0.15, 0.1, 0.05, 0,
        ],
      }
    );
    observer.observe(canvasElement);

    //start animation
    let animation: number;
    let distanceMovement = 0;
    const animate = () => {
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
        distanceMovement += relativeCanvasHeightMovementSpeed;
        const thresholdToGenerateLasers = getNumberRelativeToScreenHeight(250);
        if (distanceMovement > thresholdToGenerateLasers) {
          generateLasers(distanceConstant);
          distanceMovement = 0;
        }
        lasers = lasers.filter((laser) => {
          return !laser.animate(relativeCanvasHeightMovementSpeed).finished;
        });
      } else {
        cancelAnimationFrame(animation);
      }
      animation = requestAnimationFrame(animate);
    };
    animate();
  });
  return <canvas ref={canvasRef} id="laser-rain"></canvas>;
};

export default LaserRainBackdrop;
