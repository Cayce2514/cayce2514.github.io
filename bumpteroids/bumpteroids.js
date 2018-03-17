var ship;
var shipImage;


function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = createSprite(width/2, height/2);
  shipImage = loadImage("images/asteroids_ship0001.png");
  ship.addImage("normal", shipImage);
  
  ship.addAnimation("thrust", "images/asteroids_ship0002.png", "images/asteroids_ship0003.png", "images/asteroids_ship0004.png", "images/asteroids_ship0005.png", "images/asteroids_ship0006.png", "images/asteroids_ship0007.png");

  ship.maxSpeed = 6;
  ship.friction = .98;
    
}

function draw() {
  background(254,248,248);
  
    // set the text fill
  fill(254,190,190);

  // set the text alignment
  textAlign(RIGHT);

  // set the text size
  textSize(12);
  
  text("W + A + D keys to move. K to shoot", width-30, 30);
  
  for (var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];

    if (s.position.x<-0) s.position.x = width;

    if (s.position.x>width) s.position.x = 0;

    if (s.position.y<-0) s.position.y = height;

    if (s.position.y>height) s.position.y = 0;
  }

  if (keyDown("W")) {
    ship.addSpeed(.2, ship.rotation);
    ship.changeAnimation("thrust");
  }
  
  else {
    ship.changeAnimation("normal");
  }
  
    // rotate left
  if (keyDown("A"))
    ship.rotation -= 4;

  // rotate right
  if (keyDown("D"))
    ship.rotation += 4
    
  drawSprites();
}