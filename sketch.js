var curRandomSeed;
var circleMove = 1;
var slider1, slider2, slider3, slider4;
var faceSelector;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
    var w = 960;
    var h = 500;
 
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');

  angleMode(DEGREES);
  rectMode(CENTER);
}

//function changeRandomSeed() {
//  curRandomSeed = curRandomSeed + 1;
//}
//
//function mousePressed() {
//    changeRandomSeed();
//}

function draw () {

    background(214,183,85);

  resetFocusedRandom(curRandomSeed);
    
  
  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();

  var size = map(s1, 0, 100, 8, 15);
  var shift = map(s2, 0, 100,50, 90);
  var rotation = map(s3, 0, 100,-3,9);
  var colour = Math.floor(map(s4, 0, 100, 80, 131));
    
    
    
  var x_steps = 1 + Math.floor(width / 20);
  var y_steps = 1 + Math.floor(height / 20);

  // save grid locations
  var grid_locations = new Array(x_steps);
    for(var i=0;i<x_steps;i++) {
    grid_locations[i] = new Array(y_steps);
    for (var j = 0; j < y_steps; j++) {
      x_pos = i * 40;
      y_pos = j * 25;
      if((j % 2) == 0){
        x_pos = x_pos + 20;
      }
      grid_locations[i][j] = [x_pos, y_pos];
    }
  }		


  // draw a circle at each location
     cirlceMove = circleMove + 0.5;
     function move (i){return Math.sin(circleMove + i )* 10}

  for(var i=0;i<x_steps;i++) {
    for(var j=0;j<y_steps;j++) {
      var loc = grid_locations[i][j];
      

        stroke(255);
        strokeWeight(1);
         fill(colour,31,31);
      
       push();
       	scale(0.8);
        translate(loc[0]-250, loc[1]+15);
        ellipse(loc[0]+15, loc[1]+20,size,size);        
        fill(colour,31,31);
        translate(0,-100);
        rotate(rotation);
        circleDetail(loc[0]+shift, loc[1]+20);
        pop(); 

    
    }
  }
 

  function circleDetail(x,y){
  	ellipse(x,y,size,size);
  	ellipse(x,y,size-5,size-5);

  }

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
