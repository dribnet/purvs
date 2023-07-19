// Images
var playerImg, playerBulletImg, enemyImg, backgroundImage;

// Background
var backgroundY = 0;

// SpaceShips
var spaceShip;
var enemySpaceShips = [];
const maxEnemySpaceShips = 59;

// Lemniscate size constants
const enemyLemniscateWidth = 420; 
const enemyLemniscateHeight = 200;
const lemniscateWidth = 360;
const lemniscateHeight = 100;

// Bullet variables
var bulletList = [];
var currentSecond;
var firedOffSecondBullet = false;

// Heart constants
const heartWidth = 15;
const heartMaxRowNum = 6;

// Charger constants
const chargerMeterWidth = 40;
const chargerMeterHeight = 170

// Overheat bar constants
const overHeatBarWidth = 50;
const overHeatBarHeight = 280;
const overHeatBarX = 10;
const overHeatBarY = 210;

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
    this.hidden = true;
  }
  update() {
    this.hidden = true;
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
  // Function for debugging
  drawBoundingBox() {
    noFill();
    rect(this.getX()-enemyImg.width/4, this.getY()-enemyImg.height/4, enemyImg.width/2, enemyImg.height/2);
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
    enemySpaceShips.forEach(enemySpaceShip => {
      if (
        this.x - playerBulletImg.width / 2 > enemySpaceShip.getX() - enemyImg.width / 4 &&
        this.x + playerBulletImg.width / 2  < enemySpaceShip.getX() + enemyImg.width / 4 &&
        this.y - playerBulletImg.height / 2 > enemySpaceShip.getY() - enemyImg.height / 4 &&
        this.y + playerBulletImg.height / 2 < enemySpaceShip.getY() + enemyImg.height / 4 &&
        !enemySpaceShip.hidden ||
        this.y < 0
      ) {
        bulletList.splice(bulletList.indexOf(this), 1);
      }
    });
  }
  draw() {
    image(playerBulletImg, this.x, this.y, playerBulletImg.width, playerBulletImg.height);
  }
}

// Loads before setup
function preload() {
  playerImg = loadImage("assets/spaceShip.png");
  playerBulletImg = loadImage("assets/bullets.png");
  enemyImg = loadImage("assets/enemyShip.png");
  backgroundImage = loadImage("assets/background.png");

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
  drawOverHeatBar();
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
  // Does not fire at 59 seconds since it is overheating
  // Does not fire at 0 minutes as there are no ships
  if (obj.seconds === 59 || obj.minutes === 0) {
    return;
  }
  if (obj.seconds !== currentSecond) {
    currentSecond = obj.seconds;
    bulletList.push(new Bullet(spaceShip.getX()+playerImg.width/8, spaceShip.getY()));
    firedOffSecondBullet = false;
  }
  if (!firedOffSecondBullet && obj.millis >= 499.5) {
    bulletList.push(new Bullet(spaceShip.getX()-playerImg.width/8, spaceShip.getY()));
    firedOffSecondBullet = true;
  }
}

function updateEnemyShips() {
  for (let i = 0; i < maxEnemySpaceShips; i++) {
    enemySpaceShips[i].update();
    if (i < obj.minutes) {
      enemySpaceShips[i].draw();
    }
    // Flies in the ship from width/2, -enemyImg.height/2 to its location on the lemniscate near the end of the second
    if (i === obj.minutes) {
      // 0 - 1 value over the minute
      var fadeInOnMinute = (obj.seconds+obj.millis/1000)/60;
      var enemyX = map(fadeInOnMinute, 0.97, 1, width/2, enemySpaceShips[i].getX());
      var enemyY = map(fadeInOnMinute, 0.97, 1, -enemyImg.height/2, enemySpaceShips[i].getY());
      enemySpaceShips[i].hidden = false;
      image(enemyImg, enemyX, enemyY, enemyImg.width/2, enemyImg.height/2);
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
  // Draw expanding heart on x:59:59
  if (obj.minutes === 59 && obj.seconds === 59) {
    // Get the row number
    var row = Math.floor((heartCount) / heartMaxRowNum);
    var fadeInHearWidth = map(obj.millis, 0, 999, 0, heartWidth);

    // Use remainder to ignore full rows
    var x = 20 + ((heartWidth * 3/2) * (heartCount)) % (heartMaxRowNum * (heartWidth * 3/2));
    var y = 10 + (row * (heartWidth + 10));
    fill(250, 0, 0, map(obj.millis, 0, 999, 0, 255));
    noStroke();
    heart(x, y, fadeInHearWidth);
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size * 7/8);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

// Draws chargers to indicate bullets charging before fired
function drawChargeMeter() {
  noFill();
  stroke(0);
  strokeWeight(1);
  var topCornerRadius = 8;
  var bottomCornerRadius = 0;
  rect(820, 320, chargerMeterWidth, chargerMeterHeight, topCornerRadius, topCornerRadius, bottomCornerRadius, bottomCornerRadius);
  rect(900, 320, chargerMeterWidth, chargerMeterHeight, topCornerRadius, topCornerRadius, bottomCornerRadius, bottomCornerRadius);

  if(obj.seconds === 59) return;
  fill(90, 250, 0);
  var yPos;

  // Right charger on the second
  yPos = map(obj.millis, 0, 999, 490, 320);
  rect(900, yPos, chargerMeterWidth, 490 - yPos, topCornerRadius, topCornerRadius, bottomCornerRadius, bottomCornerRadius);

  if(obj.seconds === 58 && obj.millis > 499.5) return;
  // Left charger on the 0.5 to next 0.5 of a second
  if (obj.millis >= 499.5) {
    yPos = map(obj.millis, 499.5, 999, 490, 410);
    rect(820, yPos, chargerMeterWidth, 495 - yPos, topCornerRadius, topCornerRadius, bottomCornerRadius, bottomCornerRadius);
  } else {
    yPos = map(obj.millis, 0, 499.5, 410, 320);
    rect(820, yPos, chargerMeterWidth, 490 - yPos, topCornerRadius, topCornerRadius, bottomCornerRadius, bottomCornerRadius);
  }
}

function drawOverHeatBar() {
  var secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
  var overHeatBarHeightSmooth  = map(secondsWithFraction, 0, 59, 0, overHeatBarHeight);
  var strokeColor;
  var isFalling = false;

  // Set the bar to fall once it reaches the final second of the minute
  if (obj.seconds === 59) {
    isFalling = true;
  }
  // Interpolate colour between green and lime
  if (overHeatBarHeightSmooth < overHeatBarHeight / 3) {
    strokeColor = lerpColor(color(0, 255, 0), color(165, 255, 0), overHeatBarHeightSmooth / (overHeatBarHeight / 3));
  // Interpolate colour between lime and orange/yellow
  } else if (overHeatBarHeightSmooth < (2 * overHeatBarHeight) / 3) {
    strokeColor = lerpColor(color(165, 255, 0), color(255, 165, 0), (overHeatBarHeightSmooth - (overHeatBarHeight / 3)) / (overHeatBarHeight / 3));
  // Interpolate colour between orange/yellow and red
  } else {
    var interpolate = (overHeatBarHeightSmooth - (2 * overHeatBarHeight) / 3) / (overHeatBarHeight / 3);
    if (!isFalling) {
      // Draws a flashing red rectangle for warning overheating
      fill(255,0,0, map(interpolate, 0, 1, 0, 140, true) * map(sin(map(obj.millis, 0, 999, 0, TWO_PI)), -1, 1, 0.2, 1));
      rect(0,0,width,height);
    }
    strokeColor = lerpColor(color(255, 165, 0), color(255, 0, 0), interpolate);
  }

  // The bar is filled by strokes
  stroke(strokeColor);
  strokeWeight(2);
  // When not falling the bar is filled to the mapped value from seconds + millis
  if (!isFalling) {
    for (let y = 0; y < overHeatBarHeightSmooth; y++) {
      line(overHeatBarX + 1, overHeatBarY + overHeatBarHeight - 1 - y, overHeatBarX + overHeatBarWidth - 1, overHeatBarY + overHeatBarHeight - 1 - y);
    }
  // Otherwise is filled based on millis to go from fill to empty (red to green) in a second
  } else {
    // Draws the red rectangle and decreases alpha based on millis
    var interpolate = (map(obj.millis, 0, 999, 0, overHeatBarHeight)) / overHeatBarHeight;
    fill(255,0,0, map(interpolate, 0, 1, 140, 0, true));
    rect(0,0,width,height);

    // Fills the bar
    strokeColor = lerpColor(color(255, 0, 0), color(0, 255, 0), (map(obj.millis, 0, 999, 0, overHeatBarHeight)) / overHeatBarHeight);
    stroke(strokeColor);
    for (let y = 0; y < (1 - obj.millis / 999) * overHeatBarHeight; y++) {
      line(overHeatBarX + 1, overHeatBarY + overHeatBarHeight - 1 - y, overHeatBarX + overHeatBarWidth - 1, overHeatBarY + overHeatBarHeight - 1 - y);
    }
  }
  
  // Draw the outline
  stroke(0);
  strokeWeight(1);
  noFill();
  rect(overHeatBarX, overHeatBarY, overHeatBarWidth, overHeatBarHeight);
}