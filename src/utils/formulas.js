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
