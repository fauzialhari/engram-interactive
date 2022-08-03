import getTopPositionElement from "../utils/getTopPositionElement";
export default class ScrollSnap {
  private currentSnapPosition = 0;
  private nextSnapPosition = 0;
  private duration = 2000;
  constructor(children: Element[], duration=2000) {
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
        threshold: 0.001,
      }
    );
    children.forEach((scrollSnapChild) => {
      scrollSnapObserver.observe(scrollSnapChild);
    });
  }
  easeOutCubic(
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

  private scrollAnimation = 0;
  animateScroll() {    
    this.scrollAnimation = requestAnimationFrame(this.animateScroll.bind(this));
    this.calculateNextScrollTarget(
      this.currentSnapPosition,
      this.nextSnapPosition
    );
    this.scrollIt();
  }

  private nextScrollTarget = 0;
  private currentIteration = 0;
  private get totalIterations() {
    const FPS = 60;
    return Math.round(this.duration / 60);
  }
  calculateNextScrollTarget(startFrom: number, targetScroll: number) {
    this.currentIteration += 1;
    const nextScrollValue = this.easeOutCubic(
      this.currentIteration,
      startFrom,
      targetScroll - startFrom,
      this.totalIterations
    );

    const isAlreadyAchieved =
      Math.round(nextScrollValue - this.nextScrollTarget) === 0;
    if (isAlreadyAchieved || this.currentIteration === this.totalIterations) {
      this.currentIteration = 0;
      this.nextScrollTarget = targetScroll;
      cancelAnimationFrame(this.scrollAnimation);
      window.removeEventListener("scroll", this.scrollIt);
      this.isScrollInitializationDone = false;
    } else {
      this.nextScrollTarget = nextScrollValue;
    }
  }

  private isScrollInitializationDone = false;
  scrollIt() {
    window.scrollTo({
      top: this.nextScrollTarget,
    });
    if (!this.isScrollInitializationDone) {
      window.addEventListener("scroll", this.scrollIt);
      this.isScrollInitializationDone = true;
    }
  }
}
