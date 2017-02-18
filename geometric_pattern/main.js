var NUM_CIRCLES = 12;
var circleDiameter;

function setup() {
  createCanvas(480, 600);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
}

function draw() {
  var isShifted = false;
  
  var y = height;
  while (y >= 0) {

    var x;
    if (isShifted) {
        x = circleRadius;
    } else {
        x = 0;
    }
    
    while (x <= width) {
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y - circleRadius;
    isShifted = !isShifted;
  }
}