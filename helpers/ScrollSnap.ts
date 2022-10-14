import getTopPositionElement from "../utils/getTopPositionElement";
export default class ScrollSnap {
  private currentSnapPosition = 0;
  private nextSnapPosition = 0;
  private duration = 2000;
  constructor(children: Element[], duration = 2000) {
    this.duration = duration;
    const scrollSnapObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.currentSnapPosition = window.scrollY;
            this.nextSnapPosition = getTopPositionElement(entry.target);
            this.animateScroll();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    children.forEach((scrollSnapChild) => {
      scrollSnapObserver.observe(scrollSnapChild);
    });
  }

  animateScroll() {
    let scrollAnimation: number;
    const startFrom = this.currentSnapPosition;
    const targetScroll = this.nextSnapPosition;
    let nextScrollTarget = 0;
    let currentIteration = 0;
    let isScrollInitializationDone = false;
    const totalIterations = (() => {
      const FPS = 60;
      return Math.round(this.duration / 60);
    })();
    function easeOutCubic(
      currentIteration: number,
      startValue: number,
      changeInValue: number,
      totalIterations: number
    ) {
      return (
        changeInValue *
          (Math.pow(currentIteration / totalIterations - 1, 3) + 1) +
        startValue
      );
    }

    const stopScrolling = (e: Event) => e.preventDefault();

    function scrollIt() {
      window.addEventListener("wheel", stopScrolling, { passive: false });
      window.scrollTo({
        top: nextScrollTarget,
      });
      if (!isScrollInitializationDone) {
        window.addEventListener("scroll", scrollIt);
        isScrollInitializationDone = true;
      }
    }

    const animate = () => {
      scrollAnimation = requestAnimationFrame(animate);
      currentIteration += 1;
      const nextScrollValue = easeOutCubic(
        currentIteration,
        startFrom,
        targetScroll - startFrom,
        totalIterations
      );
      const isAlreadyAchieved =
        Math.round(nextScrollValue - targetScroll) === 0;
      if (isAlreadyAchieved || currentIteration === totalIterations) {
        currentIteration = 0;
        nextScrollTarget = targetScroll;
        cancelAnimationFrame(scrollAnimation);
        window.removeEventListener("scroll", scrollIt);
        isScrollInitializationDone = false;
        window.removeEventListener("wheel", stopScrolling);
      } else {
        nextScrollTarget = nextScrollValue;
        scrollIt();
      }
    };
    animate();
  }
}
