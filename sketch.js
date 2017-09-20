var curRandomSeed;
var triangleMove = 1;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
    var w = 960;
    var h = 500;

}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function draw () {
  background(255);
  resetFocusedRandom(curRandomSeed);

  var x_steps = 1 + Math.floor(width / 20);
  var y_steps = 1 + Math.floor(height / 20);

  // save grid locations
  var grid_locations = new Array(x_steps);
    for(var i=0;i<x_steps;i++) {
    grid_locations[i] = new Array(y_steps);
    for (var j = 0; j < y_steps; j++) {
      x_pos = i * 40;
      y_pos = j * 35;
      if((j % 2) == 0){
        x_pos = x_pos + 20;
      }
      grid_locations[i][j] = [x_pos, y_pos];
    }
  }

  // draw a circle at each location
     triangleMove = triangleMove + 0.5;
     function move (i){return Math.sin(triangleMove + i )* 10}

  for(var i=0;i<x_steps;i++) {
    for(var j=0;j<y_steps;j++) {
      var loc = grid_locations[i][j];
      var shade = focusedRandom(60, 150, 3);
        //strokeWeight(5);
      fill(shade,50,50);
      noStroke();
       push();
       	scale(0.8);
        translate(loc[0]-130, loc[1]+15);
        rotate(50 + move, 250);
        triangle (loc[0]+15, loc[1], loc[0]+30, loc[1]+30,loc[0], loc[1]+30);
        rotate(100,5);
        triangle (loc[0]+15, loc[1], loc[0]+30, loc[1]+30,loc[0], loc[1]+30);
        pop();      
    }
  }
 
    
    
  // draw a few random connections
  // for(var i=0; i<10; i++) {
  //   var rand_x = Math.floor(focusedRandom(0, x_steps));
  //   var rand_y = Math.floor(focusedRandom(0, y_steps));
  //   var loc1 = grid_locations[rand_x][rand_y];
  //   var loc2 = grid_locations[rand_x][rand_y];
  //   var shade = focusedRandom(200, 230, 2);
  //   fill(shade);
  //   line(loc1[0], loc1[1],loc2[0], loc2[1]);
  // }

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
