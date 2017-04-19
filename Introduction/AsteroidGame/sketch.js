
var player;
var playerImage;

var enemy;
var enemyImage;

var speed = 5;

var backgroundImage;

var hit = 0;
var miss = 0;

function preload() {
  playerImage = loadImage("sprites/santa1.png");
  enemyImage = loadImage("sprites/fox1.png");
  backgroundImage = loadImage("backgrounds/bg6.png");
}

function setup() {
  createCanvas(400,400);
	
  player = createSprite(200, 300);
  player.addImage(playerImage);
	player.scale = 0.5;
	
  enemy = createSprite(200,0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 5.0;
	enemy.scale = 0.2;

}

function draw() {
	
	background(backgroundImage);
 
  
    if ((keyDown(RIGHT_ARROW) && player.position.x < width )) {
      player.position.x += 5;
    }
		
    if((keyDown(LEFT_ARROW) && player.position.x > 0)) {
      player.position.x -= 5;
    }
		
    enemy.position.y = enemy.position.y + speed;
	
    if (enemy.position.y > height) {
     enemy.position.y= 0;
		 enemy.position.x = random (0,400);
    }
	
	   if (enemy.overlap(player)) {
		 enemy.position.y= 0;
		 enemy.position.x = random (0,400);
    }
	
    drawSprites();
}




