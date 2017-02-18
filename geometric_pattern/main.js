var NUM_CIRCLES = 12;
var circleDiameter;
var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(480, 600);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
}

function draw() {
  rVal = 255;
  gVal = 0;
  bVal = 0;
  
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
      fill(color(rVal, bVal, gVal));
      stroke(color(rVal, bVal, gVal)); 
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y - circleRadius;
    isShifted = !isShifted;
    
    rVal = rVal -2;
    gVal = gVal + 7;
    bVal = bVal +3;
  }
}