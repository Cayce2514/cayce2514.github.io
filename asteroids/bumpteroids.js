var bullet;
var ship;
var shipImage;
var bulletImage;


function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = createSprite(width/2, height/2);

  // set our maxSpeed to 6. 6 what? 6 speed.
  ship.maxSpeed = 6;
  // set friction to allow our ship to eventually slow to a stop
  ship.friction = .98;
  
  bulletImage = loadImage("images/asteroids_bullet.png");
  
  shipImage = loadImage("images/asteroids_ship0001.png");
  ship.addImage("normal", shipImage);
  ship.addAnimation("thrust", 
    "images/asteroids_ship0002.png", 
    "images/asteroids_ship0003.png", 
    "images/asteroids_ship0004.png", 
    "images/asteroids_ship0005.png", 
    "images/asteroids_ship0006.png", 
    "images/asteroids_ship0007.png");

}

bullets = new Group();

function draw() {
  background(254,248,248);
  
  // set the text fill
  fill(254,190,190);

  // set the text alignment
  textAlign(RIGHT);

  // set the text size
  textSize(12);
  
  text("W + A + D keys to move.", width-30, 30);

  // set up a for loop based on the length of any sprite
  for(var i=0; i<allSprites.length; i++) {
    // create an array for each individual sprite
    var s = allSprites[i];

    // If the sprite's x position is less than or equal to 0 (the left edge),
    // then set the new x position to the value of the width of the window (on the right)
    if(s.position.x<-0) s.position.x = width;

    // If the sprite's x position is greater than the width of the windows (right edge)
    // then set the new x position to be 0 (left edge)
    if(s.position.x>width) s.position.x = 0;

    // If the sprite's y position is less than or equal to 0 (the top)
    // then set the new y position to be the height of the window (the bottom)
    if(s.position.y<-0) s.position.y = height;

    // If the sprite's y position is greater than the windows's height (bottom)
    // then set the new y position to be 0 (the top)
    if(s.position.y>height) s.position.y = 0;
  }

    // rotate left
  if(keyDown("A"))
    ship.rotation -= 4;

  // rotate right
  if(keyDown("D"))
    ship.rotation += 4;
    
  if(keyDown("W"))
    {
    ship.addSpeed(.2, ship.rotation);
    ship.changeAnimation("thrust");
    }
  else
    ship.changeAnimation("normal");
  
  if(keyWentDown("k"))
    {
    var bullet = createSprite(ship.position.x, ship.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10+ship.getSpeed(), ship.rotation);
    bullet.life = 30;
    bullets.add(bullet);
    }
    
  drawSprites();

}