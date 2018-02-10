export const pathFromBezierCurve = cubicBerizerCurve => {
  const {
    initialAxis,
    initialControlPoint,
    endingControlPoint,
    endingAxis
  } = cubicBerizerCurve;
  return `M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};

export const radiansToDegrees = radians => radians * 180 / Math.PI;

export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  } else if (x2 < 0 && y2 >= 0) {
    return -90;
  }

  const dividend = x2 - x1;
  const divisor = y2 - y1;
  const quotient = dividend / divisor;
  return radiansToDegrees(Math.atan(quotient)) * -1;
};

// https://stackoverflow.com/questions/10298658/mouse-position-inside-autoscaled-svg/10298843#10298843
export const getCanvasPosition = event => {
  const svg = document.getElementById("aliens-go-home-canvas");

  // Create an SVGPoint for future math
  const point = svg.createSVGPoint();

  // Get point in global SVG space
  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return { x, y };
};
