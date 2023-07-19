// Images
var playerImg, enemyImg;

// SpaceShips
var spaceShip;
var enemySpaceShip;

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

// Loads before setup
function preload() {
  playerImg = loadImage("player.png");
  enemyImg = loadImage("enemyEasy.png");

  spaceShip = new SpaceShip(460, 400);
  enemySpaceShip = new EnemySpaceShip(200, 120);
}

function draw_clock(obj) {
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(120, 150, 255);

  imageMode(CENTER);
  updateGame();
}

function updateGame() {
  spaceShip.update();
  spaceShip.draw();

  enemySpaceShip.update();
  enemySpaceShip.draw();
}
