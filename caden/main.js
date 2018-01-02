var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;

function setup() {
  createCanvas(480, 600);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
}

function draw() {
  var y = 0;
  while (y <= height) {

    var x = 0;
    while (x <= width) {
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y + circleRadius;
  }
}