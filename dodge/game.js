var player;
var playerImage;

var enemy;
var enemyImage;

var backgroundImage;

var isGameOver;


function preload() {
  playerImage = loadImage("img/alienYellow_dying_2.png");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
  
  backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {
    isGameOver = false;
    createCanvas(256, 256);
    
    playerImage.height = playerImage.height/2;
    playerImage.width = playerImage.width/2;
    player = createSprite(width/2, height-(playerImage), 0, 0);
    player.addImage(playerImage);

    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;

}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        
      //if (enemy.overlap(player)) {
      //  gameOver();
      //}
    
      background(backgroundImage);

      drawSprites();
    
      if (keyDown("d") && player.position.x < (width-(playerImage.height/2))) {
        player.position.x = player.position.x + 1;
      }
     
      if (keyDown("a") && player.position.x > (playerImage.height/2)) {
        player.position.x = player.position.x - 1;
      }  
    
      enemy.position.y = enemy.position.y + 3;
    
      if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);

      }
    }
// brace below belongs to the draw() function.    
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again...", width/2, 3*height/4);    

}

function mouseClicked() {
  if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
  }
}