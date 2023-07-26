// Images
var playerImg, playerBulletImg, enemyImg, backgroundImage, bossImg, lazerImg;

// Background
var backgroundY = 0;

// SpaceShips
var spaceShip;
var enemySpaceShips = [];
const maxEnemySpaceShips = 59;
var bossSpaceShip;

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

// Alarm constants
const beginTransitionSecond = 5;

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
  draw(x = this.getX(), y = this.getY(), width = enemyImg.width/2, height = enemyImg.height/2) {
    this.hidden = false;
    image(enemyImg, x, y, width, height);
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
  flyIn() {
    // 0 - 1 value over the minute
    var fadeInOnMinute = (obj.seconds+obj.millis/1000)/60;
    var enemyX = map(fadeInOnMinute, 0.97, 1, width/2, this.getX());
    var enemyY = map(fadeInOnMinute, 0.97, 1, -enemyImg.height/2, this.getY());

    // Draw the image
    if (fadeInOnMinute >= 0.97) {
      this.draw(enemyX, enemyY);
    }
    
  }
  // Calculates flyAway on hour changes
  flyAway(angle, mapValue, mapStart, mapStop) {
    // Calculate the new position to draw the image at
    var arcX = width/2 + (width + (enemyImg.width * 2))/2 * cos(angle);
    var arcY = height/5 + height/2 * sin(angle);
    var enemyX = map(mapValue, mapStart, mapStop, this.getX(), arcX);
    var enemyY = map(mapValue, mapStart, mapStop, this.getY(), arcY);

    // Draw the image
    this.draw(enemyX, enemyY);
  }
  // Flys ship in from arc after alarm finishes
  flyInAfterAlarm(angle, mapValue, mapStart, mapStop) {
    var arcX = width/2 + (width + (enemyImg.width * 2))/2 * cos(angle);
    var arcY = height/5 + height/2 * sin(angle);
    var enemyX = map(mapValue, mapStart, mapStop, arcX, this.getX());
    var enemyY = map(mapValue, mapStart, mapStop, arcY, this.getY());

    this.draw(enemyX, enemyY);
  }
}

class BossEnemySpaceShip {
  constructor() {
    this.x = 480;
    this.y = -358.5;
    this.hidden = true;
    this.retreating = false;
  }
  draw(x = this.getX(), y = this.getY(), width = bossImg.width/2, height = bossImg.height/2) {
    this.hidden = false;
    image(bossImg, x, y, width, height);
  }
  // Moves boss off screen when retreating and stops moving once it is offscreen
  update() {
    if (this.retreating) {
      this.y -= 1;
      bossSpaceShip.draw();
    }
    if (this.getY() <= -bossImg.height/2) {
      this.retreating = false;
      this.hidden = true;
    }
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  // Function for debugging
  drawBoundingBox() {
    noFill();
    rect(this.getX()-bossImg.width/4, this.getY()-bossImg.height/4, bossImg.width/2, bossImg.height/2);
  }
  // Moves boss from -bossImg.height/2 to on screen
  flyIn() {
    this.retreating = false;
    this.y = map(obj.seconds_until_alarm, beginTransitionSecond, 0, -bossImg.height/2, 20, true);
    this.draw();
  }
  // Changes update to move boss offscreen
  flyAway() {
    this.retreating = true;
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
    if (obj.seconds_until_alarm === -1 || obj.seconds_until_alarm === undefined) {
      this.handleEnemySpaceShipCollision(enemySpaceShips, enemyImg);
    } else {
      this.handleEnemySpaceShipCollision([bossSpaceShip], bossImg);
    }
  }
  handleEnemySpaceShipCollision(enemies, enemyImg) {
    enemies.forEach(enemySpaceShip => {
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
  bossImg = loadImage("assets/enemyBoss.png");
  lazerImg = loadImage("assets/enemyBossLazer.png");

  orbitronFont = loadFont("assets/Orbitron-Regular.ttf");

  spaceShip = new SpaceShip(480, 400);
  bossSpaceShip = new BossEnemySpaceShip(); // go up to height/2

  // Load the enemy spaceships
  for (let i = 0; i < maxEnemySpaceShips; i++) {
    // angle on lemniscate
    var angle = map(i, 0, maxEnemySpaceShips, 0, TWO_PI);
    enemySpaceShips.push(new EnemySpaceShip(angle));
  }
}

function draw_clock(obj) {
  drawBackground();
  imageMode(CENTER);

  drawChargeMeter();
  drawOverHeatBar();

  updateGame();
  drawShipCount();
  drawAllHearts();
}

// Draws the number of red ships visible.
function drawShipCount() {
  textAlign(LEFT);
  fill(255, 220,  220).textSize(18);
  textFont(orbitronFont);
  text("ENEMY SHIPS: " + obj.minutes, 770, height / 16);
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

  updateBossShip();

  if (obj.seconds_until_alarm !== -1 && obj.seconds_until_alarm > 0) {
    textAlign(CENTER);
    fill(255, 220,  220).textSize(128);
    textFont(orbitronFont);
    text("BOSS\nINCOMING\n" + Math.round(obj.seconds_until_alarm), width/2, height / 4);
  }
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
  for (var i = 0; i < maxEnemySpaceShips; i++) {
    enemySpaceShips[i].update();
    if (obj.seconds_until_alarm === -1 && bossSpaceShip.retreating) {
      // Draws the current minute ships sliding back into place
      if (i < obj.minutes) {
        var angle = map(i, 0, obj.minutes - 1, PI, TWO_PI);
        enemySpaceShips[i].flyInAfterAlarm(angle, bossSpaceShip.getY(), 20, -bossImg.height/2);
      }

      // Normal transition for new minute
      if (i === obj.minutes) {
        enemySpaceShips[i].flyIn();
      }

    // Edge case of boss just before retreating
    } else if (obj.seconds_until_alarm === -1 && !bossSpaceShip.hidden) {
      return;

    // Begin to fly visible enemy ships away on beginTransitionSecond
    } else if (obj.seconds_until_alarm < beginTransitionSecond && i < obj.minutes && obj.seconds_until_alarm !== -1) {
      var angle = map(i, 0, obj.minutes - 1, PI, TWO_PI);
      enemySpaceShips[i].flyAway(angle, obj.seconds_until_alarm, beginTransitionSecond, 0);

    // Fly the ships offscreen when hour changes
    } else if (obj.seconds === 59 && obj.minutes === 59) {
      // Find the point on the arc offscreen to fly away to
      var angle = map(i, 0, maxEnemySpaceShips - 1, PI, TWO_PI);
      enemySpaceShips[i].flyAway(angle, obj.millis, 0, 999);
    } else {
      if (i < obj.minutes) {
        enemySpaceShips[i].draw();
      }
      // Flies in the ship from width/2, -enemyImg.height/2 to its location on the lemniscate near the end of the second
      if (i === obj.minutes && obj.seconds_until_alarm === -1) {
        enemySpaceShips[i].flyIn();
      }
    }
  }
}

// Handles drawing and moving the boss
function updateBossShip() {
  bossSpaceShip.update();
  // When the boss is visible and the alarm is no longer on
  if (obj.seconds_until_alarm === -1 && bossSpaceShip.hidden === false) {
    bossSpaceShip.flyAway();
  }
  // Draw lazers as well when alarm is going off
  if (obj.seconds_until_alarm === 0) {
    image(lazerImg, width/2, 0, 348, lazerImg.height);
  }
  // If alarm is set or going off and not in debug mode
  if (obj.seconds_until_alarm !== -1 && obj.seconds_until_alarm !== undefined) {
    bossSpaceShip.flyIn();
  }
}

// Draws all the hearts
function drawAllHearts() {
  strokeWeight(0.1);
  fill(250, 0, 0);

  // Count the number of hearts in 12hr time
  var heartCount = (obj.hours % 12) || 12;
  var isRedHeart = true;

  if (obj.hours > 12) {
    drawHearts(12, true);
    fill(250, 180, 40);
    isRedHeart = false;
  } else if (obj.hours === 0) {
    isRedHeart = false;
  }

  // Draws the remaining hearts (hours % 12)
  drawHearts(heartCount, isRedHeart);
}

// Draws heartCount amount of hearts
function drawHearts(heartCount, isRedHeart) {
  // Fade out the yellow hearts when changing for 12am to 1am
  if (heartCount === 12 && !isRedHeart) {
    fill(250, 180, 40, map(obj.millis, 0, 999, 255, 0));
  }

  // Draws the hearts
  for (var i = 0; i < heartCount; i++) {
    // Get the row number
    var row = Math.floor(i / heartMaxRowNum); 
    // Use remainder to ignore full rows
    var x = 20 + ((heartWidth * 3/2) * i) % (heartMaxRowNum * (heartWidth * 3/2)); 
    var y = 10 + (row * (heartWidth + 10));

    heart(x, y, heartWidth); 
  }
  // Draw expanding heart on x:59:59
  // Edge case of 12am and pm fades in the opposite colour
  if (heartCount === 12) {
    drawExpandingHeart(0, !isRedHeart);
  } else {
    drawExpandingHeart(heartCount, isRedHeart);
  }
}

// Draws an expanding heart given the number of current hearts and whether it is red or not
function drawExpandingHeart(heartCount, isRedHeart) {
  if (obj.minutes === 59 && obj.seconds === 59) {
    // Get the row number
    var row = Math.floor(heartCount / heartMaxRowNum);
    var fadeInHearWidth = map(obj.millis, 0, 999, 0, heartWidth);

    // Use remainder to ignore full rows
    var x = 20 + ((heartWidth * 3/2) * (heartCount)) % (heartMaxRowNum * (heartWidth * 3/2));
    var y = 10 + (row * (heartWidth + 10));
    if (isRedHeart) {
      fill(250, 0, 0, map(obj.millis, 0, 999, 0, 255));
    } else {
      fill(250, 180, 40, map(obj.millis, 0, 999, 0, 255));
    }
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
  stroke(255);
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
  stroke(255);
  strokeWeight(1);
  noFill();
  rect(overHeatBarX, overHeatBarY, overHeatBarWidth, overHeatBarHeight);
}