// Images
var playerImg, playerBulletImg, enemyImg, backgroundImage;

// Background
var backgroundY = 0;

// SpaceShips
var spaceShip;
var enemySpaceShips = [];
const maxEnemySpaceShips = 6;

// Bullet variables
var bulletList = [];
var currentSecond;

// Classes
class SpaceShip {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
  }
  update() {
    if (this.x + playerImg.width > width || this.x - playerImg.width/2 < 0) {
      this.speed *= -1;
    }
    this.x += this.speed;
  }
  draw() {
    image(playerImg, this.x, this.y, playerImg.width/2, playerImg.height/2);
  }
}

class EnemySpaceShip extends SpaceShip{
  constructor(x, y) {
    super(x, y);
    this.speed = 3;
  }
  update() {
    if (this.x + enemyImg.width/2 > width || this.x - enemyImg.width/2 < 0) {
      this.speed *= -1;
    }
    this.x += this.speed;
  }
  draw() {
    this.hidden = false;
    image(enemyImg, this.x, this.y, enemyImg.width/2, enemyImg.height/2);
  }
}

class Bullet {
  static bulletSpeed = 25;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
    this.y -= Bullet.bulletSpeed;
  }
  draw() {
    image(playerBulletImg, this.x, this.y, playerBulletImg.width, playerBulletImg.height);
  }
}

// Loads before setup
function preload() {
  playerImg = loadImage("player.png");
  playerBulletImg = loadImage("playerBullets.png");
  enemyImg = loadImage("enemyEasy.png");
  backgroundImage = loadImage("newBackground.png");

  spaceShip = new SpaceShip(460, 400);

  // Load the enemy spaceships
  for (let i = 0; i < maxEnemySpaceShips; i++) {
    enemySpaceShips.push(new EnemySpaceShip(100 + i * 100, 80));
  }
}

function draw_clock(obj) {
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  drawBackground();
  imageMode(CENTER);
  updateGame();
}

// Creates the effect of an infinitely scrolling background
function drawBackground() {
  imageMode(CORNER);
  image(backgroundImage, 0, backgroundY - 500);
  image(backgroundImage, 0, backgroundY - backgroundImage.height - 500);
  backgroundY += 1;
  if (backgroundY >= backgroundImage.height) {
    backgroundY = 0;
  }
}

function updateGame() {

  addBullet();

  spaceShip.update();
  spaceShip.draw();

  updateEnemyShips();

  bulletList.forEach(bullet => bullet.update());
  bulletList.forEach(bullet => bullet.draw());
}

// Add a bullet every second
function addBullet() {
  if (obj.seconds !== currentSecond) {
    currentSecond = obj.seconds;
    bulletList.push(new Bullet(spaceShip.x, spaceShip.y));
  }
}

function updateEnemyShips() {
  for (let i = 0; i < maxEnemySpaceShips; i++) {
    enemySpaceShips[i].update();
    enemySpaceShips[i].draw();
  }
}
