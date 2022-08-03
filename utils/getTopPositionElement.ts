export default function getTopPositionElement(element: Element) {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();
  return elemRect.top - bodyRect.top;
}
