export const DEFAULT_SCREEN_WIDTH = 1920;
export const DEFAULT_SCREEN_HEIGHT = 969;
export const getNumberRelativeToScreenWidth = (
  input: number,
  windowWidth = window.innerWidth
) => (input * windowWidth) / DEFAULT_SCREEN_WIDTH;
export const getNumberRelativeToScreenHeight = (
  input: number,
  windowHeight = window.innerHeight
) => (input * windowHeight) / DEFAULT_SCREEN_WIDTH;
