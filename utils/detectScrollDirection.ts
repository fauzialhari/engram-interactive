let oldValue = 0;
let newValue = 0;
export default function getScrollDirection(): "down" | "up" {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    return "down";
  }
  oldValue = newValue;
  return "up";
}
