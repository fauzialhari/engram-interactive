import { CSSProperties } from "react";

class ElementSetter {
  element;
  constructor(element: HTMLElement) {    
    this.element = element;
  }

  addStyle(styles: CSSProperties): ElementSetter {
    Object.assign(this.element.style, styles);
    return this;
  }

  removeStyle(styleProperties: string[] | string): ElementSetter {
    if (typeof styleProperties === "string") {
      this.element.style.removeProperty(styleProperties);
    } else {
      styleProperties.map((styleProperty) => {
        this.element.style.removeProperty(styleProperty);
      });
    }
    return this;
  }

  addClass(classNames: string[] | string): ElementSetter {
    if (typeof classNames === "string") {
      this.element.classList.add(classNames);
    } else {
      classNames.map((className) => {
        this.element.classList.add(className);
      });
    }
    return this;
  }

  removeClass(classNames: string[] | string): ElementSetter {
    if (typeof classNames === "string") {
      this.element.classList.remove(classNames);
    } else {
      classNames.map((className) => {
        this.element.classList.remove(className);
      });
    }
    return this;
  }
}

export default ElementSetter;
