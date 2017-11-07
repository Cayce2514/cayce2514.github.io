var asteroids;
var bullets;
var ship;
var shipImage, bulletImage, particleImage;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bulletImage = loadImage("images/asteroids_bullet.png");
  shipImage = loadImage("images/asteroids_ship0001.png");
  particleImage = loadImage("images/asteroids_particle.png");


  ship = createSprite(width/2, height/2);
  // set our maxSpeed to 6. 6 what? 6 speed.
  ship.maxSpeed = 6;
  // set friction to allow our ship to eventually slow to a stop
  ship.friction = .98;

  ship.addImage("normal", shipImage);
  ship.addAnimation("thrust",
    "images/asteroids_ship0002.png",
    "images/asteroids_ship0003.png",
    "images/asteroids_ship0004.png",
    "images/asteroids_ship0005.png",
    "images/asteroids_ship0006.png",
    "images/asteroids_ship0007.png");

asteroids = new Group();
bullets = new Group();

for(var i = 0; i<8; i++) {
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createAsteroid(3, px, py);
  }
}

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

  asteroids.overlap(bullets, asteroidHit);

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

function createAsteroid(type, x, y) {
  var a = createSprite(x, y);
  var img  = loadImage("images/asteroid"+floor(random(0,3))+".png");
  a.addImage(img);

  a.type = type;
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = .5;

  if(type == 2)
    a.scale = .6; // 60% of size
  if(type == 1)
    a.scale = .3; // 30% of size

  asteroids.add(a);
  return a;
}

function asteroidHit(asteroid, bullet) {
  var newType = asteroid.type-1;

  if(newType>0) {
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    }

  for(var i=0; i<10; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y);
    p.addImage(particleImage);
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
    }

  bullet.remove();
  asteroid.remove();
}
