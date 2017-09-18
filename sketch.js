var curRandomSeed;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  rectMode(CORNERS);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function draw () {
    translate(-10,-10);
 background(0);
//    background(220,200,80);
    resetFocusedRandom(curRandomSeed);

//    stroke(0);
  var x_steps = 1 + Math.floor(width / 10);
  var y_steps = 1 + Math.floor(height /10);

  var x_grid_locations = new Array(x_steps);
  var y_grid_locations = new Array(y_steps);
    
  for(var i=0;i<x_steps;i++) {
    var shift = focusedRandom(-10, 10, 2);
   // var cur_x = i * 30 + shift;
      var cur_x = i * 20 + shift;
    x_grid_locations[i] = cur_x;
  }

  for(var j=0;j<y_steps;j++) {
    var shift = focusedRandom(-10, 10, 2);
    var cur_y = j * 30 + shift;
    y_grid_locations[j] = cur_y;
  }
//        scale(1.1);
//        translate(500);
    angleMode(DEGREES);
    
  for(var i=0;i<x_steps-1;i++) {
    for(var j=0;j<y_steps-1;j++) {
      fill(focusedRandom(0, 50, 3),100);
      stroke(220,200,80,focusedRandom(0, 150, 1));
      var x1 = x_grid_locations[i];
      var x2 = x_grid_locations[i+1];
      var y1 = y_grid_locations[j];
      var y2 = y_grid_locations[j+2];
         var ellipseW = focusedRandom(30,60,2);
        var ellipseH = focusedRandom(30, 60,2);
         var ellipseS = focusedRandom(10,60,2);
      rect(x1, y1, x2, y2, focusedRandom(0,30,2));
//        ellipse(x1,y1,ellipseS,ellipseS);
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
      else if (key == '@') {
    saveBlocksImages(true);
  }
}


//////
//
////var curRandomSeed;
////
////function setup () {
////  curRandomSeed = int(focusedRandom(0, 100));
////  createCanvas(960, 500);
////  ellipseMode(CORNERS);
////}
////
////function changeRandomSeed() {
////  curRandomSeed = curRandomSeed + 1;
////}
////
////function mousePressed() {
////    changeRandomSeed();
////}
////
////function shuffleArray(array) {
////    for (var i = array.length - 1; i > 0; i--) {
////        var j = Math.floor(Math.random() * (i + 1));
////        [array[i], array[j]] = [array[j], array[i]];
////    }
////    return array;
////}
////
////function draw () {
////  background(255);
////  resetFocusedRandom(curRandomSeed);
////
////  var x_steps = 1 + Math.floor(width / 30);
////  var y_steps = 1 + Math.floor(height / 30);
////
////  var x_grid_locations = new Array(x_steps);
////  var y_grid_locations = new Array(y_steps);
////  for(var i=0;i<x_steps;i++) {
////    var shift = focusedRandom(-10, 10, 2);
////    var cur_x = i * 30 + shift;
////    x_grid_locations[i] = cur_x;
////  }
////
////  for(var j=0;j<y_steps;j++) {
////    var shift = focusedRandom(-10, 10, 2);
////    var cur_y = j * 30 + shift;
////    y_grid_locations[j] = cur_y;
////  }
////
////  var shapes_to_draw = [];
////  for(var i=0;i<x_steps-1;i++) {
////    for(var j=0;j<y_steps-1;j++) {
////      var x1 = x_grid_locations[i];
////      var x2 = x_grid_locations[i+1];
////      var y1 = y_grid_locations[j];
////      var y2 = y_grid_locations[j+1];
////      //var growth = focusedRandom(3, 7, 4);
////        var growth = 10;
////      shapes_to_draw.push([x1-growth, y1-growth, x2+growth, y2+growth])
////        //shapes_to_draw.push([x1, y1, x2, y2])
////    }
////  }
////
////  shuffleArray(shapes_to_draw);
////  for(var i=0; i<shapes_to_draw.length; i++) {
////    var cur_shape = shapes_to_draw[i];
////    var shade = focusedRandom(0, 100, 3);
////    fill(shade, focusedRandom(0,100));
////      //noFill();
////    stroke(0);
////    //ellipse(cur_shape[0], cur_shape[1], cur_shape[2], cur_shape[3]);
////      rect(cur_shape[0], cur_shape[1], cur_shape[2], cur_shape[3], focusedRandom(0,30));
////  }
////}
////
////function keyTyped() {
////  if (key == '!') {
////    saveBlocksImages();
////  }
////}
////
//var curRandomSeed;
//
//function setup () {
//  curRandomSeed = int(focusedRandom(0, 100));
//  createCanvas(960, 500);
//}
//
//function changeRandomSeed() {
//  curRandomSeed = curRandomSeed + 1;
//}
//
//function mousePressed() {
//    changeRandomSeed();
//}
//function shuffleArray(array) {
//    for (var i = array.length - 1; i > 0; i--) {
//        var j = Math.floor(Math.random() * (i + 1));
//        [array[i], array[j]] = [array[j], array[i]];
//    }
//    return array;
//}
//
//function draw () {
//    translate(-100,-100);
//  background(255);
//  resetFocusedRandom(curRandomSeed);
//rectMode(CENTER);
//  var x_steps = 1 + Math.floor(width / 10);
//  var y_steps = 1 + Math.floor(height / 10);
//
//  // save grid locations
//  var grid_locations = new Array(x_steps);
//    for(var i=0;i<x_steps;i++) {
//    grid_locations[i] = new Array(y_steps);
//    for (var j = 0; j < y_steps; j++) {
//      x_pos = i * 80;
//      y_pos = j * 70;
//      if((j % 2) == 0){
//        x_pos = x_pos + 40;
//      }
//      grid_locations[i][j] = [x_pos, y_pos];
//    }
//  }
//
//  // draw a circle at each location
////  for(var i=0;i<x_steps;i++) {
////    for(var j=0;j<y_steps;j++) {
////      var loc = grid_locations[i][j];
////      var shade = focusedRandom(60, 150, 3);
////      fill(shade);
////      rect(loc[0]+40, loc[1]+40, 80,80, 30);
////    }
////  }
////    
//      var shapes_to_draw = [];
//  for(var i=0;i<x_steps-1;i++) {
//    for(var j=0;j<y_steps-1;j++) {
//         var loc = grid_locations[i][j];
//
//      shapes_to_draw.push([loc[0], loc[1]])
//
//    }
//  }
//
//  shuffleArray(shapes_to_draw);
//  for(var i=0; i<shapes_to_draw.length; i++) {
//    var cur_shape = shapes_to_draw[i];
//    var shade = focusedRandom(0, 100, 3);
//    fill(shade, focusedRandom(0,100));
//      //noFill();
//    stroke(0);
//    //ellipse(cur_shape[0], cur_shape[1], cur_shape[2], cur_shape[3]);
//      var rectSize = focusedRandom(50,80);
//      rect(cur_shape[0]+40, cur_shape[1]+40, rectSize, rectSize, 30);
//  }
//
//  // draw a few random connections
////   for(var i=0; i<10; i++) {
////     var rand_x = Math.floor(focusedRandom(0, x_steps));
////     var rand_y = Math.floor(focusedRandom(0, y_steps));
////     var loc1 = grid_locations[rand_x][rand_y];
////     var loc2 = grid_locations[rand_x][rand_y];
////     var shade = focusedRandom(200, 230, 2);
////     fill(shade);
////     line(loc1[0], loc1[1],loc2[0], loc2[1]);
////        rect(loc[0]+40, loc[1]+40, 80,80);
////   }
//
//}
//
//function keyTyped() {
//  if (key == '!') {
//    saveBlocksImages();
//  }
//}
