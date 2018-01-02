var backgroundImage;

function setup() {
  createCanvas(1024, 640);
  backgroundImage = loadImage("img/background.jpg");
}

function draw() {
  background(backgroundImage);

}