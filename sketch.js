//This code was modified from the example Hexagon grid code give by Tom White.


//Global Variables


var curRandomSeed;


function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
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

  var x_steps = 1 + Math.floor(width / 50);
  var y_steps = 1 + Math.floor(height / 50);

  // save grid locations
  var grid_locations = new Array(x_steps);
    for(var i=0;i<x_steps;i++) {
    grid_locations[i] = new Array(y_steps);
    for (var j = 0; j < y_steps; j++) {
      x_pos = i * 80;
      y_pos = j * 70;
      if((j % 2) == 0){
        x_pos = x_pos + 40;
      }
      grid_locations[i][j] = [x_pos, y_pos];
    }
  }

  // draw a circle at each location
  for(var i=0;i<x_steps;i++) {
    for(var j=0;j<y_steps;j++) {
      var loc = grid_locations[i][j];

      var rCol = focusedRandom(0,20);

      var rCol2 = focusedRandom(0,255, 2);
      var rCol3 = focusedRandom(0,50, 1);
      var rCol4 = focusedRandom(0,155, 2);

      //fill(rCol,rCol,rCol,60);

      fill(rCol2,rCol3,rCol4,40);

      strokeWeight(0.5);
      stroke(20);
      noStroke();

      ellipse(loc[0]-60, loc[1]-60, focusedRandom(100,300));

      fill(200);
      rect(loc[0]-60, loc[1]-60, 20, 600);


      fill(20);
      rect(loc[0]-60, loc[1]-60, 200, 58);

    }
  }


  

  for(var i2=0;i2<x_steps;i2++) {
    for(var j2=0;j2<y_steps;j2++) {

   	  fill(255);
      rect(loc[0]-60, loc[1]-60, 20, 600);
    }
  }

  // //draw a few random connections
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