// Initialize Firebase
var config = {
    apiKey: "AIzaSyCA7_xKMf6oNW8WpiLc77rqCfgULyIoW-I",
    authDomain: "collaborative-sketch-a815a.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-a815a.firebaseio.com",
    projectId: "collaborative-sketch-a815a",
    storageBucket: "collaborative-sketch-a815a.appspot.com",
    messagingSenderId: "848954033921"
  };
  firebase.initializeApp(config);
  
var pointsData = firebase.database().ref();

var points = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  background(220);
  fill(0);
  
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });

  pointsData.on("child_removed", function () {
    points = [];
  });
  
  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(drawPointIfMousePressed);
}


function draw() {
  background(220);
    
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}

function drawPoint() {
  pointsData.push({x: mouseX, y: mouseY});
}

function drawPointIfMousePressed() {
  if (mouseIsPressed) {
    drawPoint();
  }
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
  saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
  pointsData.remove();
  points = [];
}