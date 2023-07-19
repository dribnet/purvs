// Images
var playerImg, playerBulletImg, enemyImg, backgroundImage;

// Background
var backgroundY = 0;

// SpaceShips
var spaceShip;
var enemySpaceShips = [];
const maxEnemySpaceShips = 60;

// Lemniscate size constants
const enemyLemniscateWidth = 420; 
const enemyLemniscateHeight = 200;
const lemniscateWidth = 360;
const lemniscateHeight = 100;

// Bullet variables
var bulletList = [];
var currentSecond;

// Heart constants
const heartWidth = 15;
const heartMaxRowNum = 6;

// Charger constants
const chargerMeterWidth = 60;
const chargerMeterHeight = 170

// Classes
class SpaceShip {
  constructor(angle) {
    this.x = (lemniscateWidth * cos(angle)) / (1 + pow(sin(angle), 2));
    this.y = (lemniscateHeight * cos(angle) * sin(angle)) / (1 + pow(sin(angle), 2));
    this.angle = angle;
  }
  update() {
    // Increment the angle to make the spaceship move along the lemniscate path
    this.angle += 0.01;
  
    // Update the position of the spaceship based on the new angle
    this.x = (lemniscateWidth * cos(this.angle)) / (1 + pow(sin(this.angle), 2));
    this.y = (lemniscateHeight * cos(this.angle) * sin(this.angle)) / (1 + pow(sin(this.angle), 2));
  }
  draw() {
    image(playerImg, this.getX(), this.getY(), playerImg.width/2, playerImg.height/2);
  }
  getX() {
    return this.x + width / 2;
  }
  getY() {
    return this.y + height * 4 / 5;
  }
}

class EnemySpaceShip extends SpaceShip{
  constructor(angle) {
    super(angle);
  }
  update() {
    // Increment the angle to make the spaceship move along the lemniscate path
    this.angle += 0.02;
  
    // Update the position of the spaceship based on the new angle
    this.x = (enemyLemniscateWidth * cos(this.angle)) / (1 + pow(sin(this.angle), 2));
    this.y = (enemyLemniscateHeight * cos(this.angle) * sin(this.angle)) / (1 + pow(sin(this.angle), 2));
  }
  draw() {
    this.hidden = false;
    image(enemyImg, this.getX(), this.getY(), enemyImg.width/2, enemyImg.height/2);
  }
  getX() {
    return this.x + width / 2;
  }
  getY() {
    return this.y + height / 5;
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
    // angle on lemniscate
    var angle = map(i, 0, maxEnemySpaceShips, 0, TWO_PI);
    enemySpaceShips.push(new EnemySpaceShip(angle));
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
  drawChargeMeter();
  drawHearts();
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
    bulletList.push(new Bullet(spaceShip.getX(), spaceShip.getY()));
  }
}

function updateEnemyShips() {
  for (let i = 0; i < maxEnemySpaceShips; i++) {
    enemySpaceShips[i].update();
    if (i < obj.minutes) {
      enemySpaceShips[i].draw();
    }
  }
}

function drawHearts() {
  strokeWeight(0.1);
  fill(250, 0, 0);

  // Count the number of hearts in 12hr time
  var heartCount = (obj.hours % 12) || 12;
  for (var i = 0; i < heartCount; i++) {
    // Get the row number
    var row = Math.floor(i / heartMaxRowNum); 
    // Use remainder to ignore full rows
    var x = 20 + ((heartWidth * 3/2) * i) % (heartMaxRowNum * (heartWidth * 3/2)); 
    var y = 10 + (row * (heartWidth + 10));

    heart(x, y, heartWidth); 
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size * 7/8);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

// Draw charger on the second to indicate bullets charging before fired
function drawChargeMeter() {
  noFill();
  stroke(0);
  strokeWeight(1);
  var topCornerRadius = 8;
  var bottomCornerRadius = 0;
  rect(860, 320, chargerMeterWidth, chargerMeterHeight, topCornerRadius, topCornerRadius, bottomCornerRadius, bottomCornerRadius);
  fill(90, 250, 0);
  var yPos = map(obj.millis, 0, 999, 490, 320);
  rect(860, yPos, chargerMeterWidth, 490 - yPos, topCornerRadius, topCornerRadius, bottomCornerRadius, bottomCornerRadius);
}