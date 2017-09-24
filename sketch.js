var curRandomSeed;
var circleMove = 1;
var slider1, slider2, slider3, slider4;
var faceSelector;
var patternMode = true;
var noiseScale;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
    var w = 960;
    var h = 500;
    noiseScale = 0.001;
    noiseScaleMid = 0.002;
    noiseScaleBack = 0.003;
 
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

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}



function draw () {

    
    

    resetFocusedRandom(curRandomSeed);
    noiseSeed(curRandomSeed);
  
  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
    
    

  var size = map(s1, 0, 100, 8, 15);
  var shift = map(s2, 0, 100,50, 90);
  var rotation = map(s3, 0, 100,-3,9);
  var colour =  Math.floor(map(s4, 0, 100, 0, 1));
 
    
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

if (patternMode){
    
     if (colour < 1) {
         background(214,183,85);
    fill (110,31,31);
           stroke(255);
        strokeWeight(1);
    
         
  } else {
   background(110,31,31);
    fill(214,183,85); 
      stroke(214,183,85);
        strokeWeight(1);
  }
    

     cirlceMove = circleMove + 0.5;
     function move (i){return Math.sin(circleMove + i )* 10}

  for(var i=0;i<x_steps;i++) {
    for(var j=0;j<y_steps;j++) {
      var loc = grid_locations[i][j];

      
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

    else{
        
        var yoff = 0.0;  
        var sand_1 = random(170, 200);
        var sand_2 = random(300, 350);
        var sand_3 = random(350, 370);
        var sand_4 = random(370, 400);
        var sand_5 = random(600, 650);
        var randomPlot = random(0, 200);

  background(61);
 stroke(255);
        

  fill(214,183,85);
  beginShape(); 
       var xoff = yoff; 
       for (var x = 0; x <= width; x += 10) {
           var y = map(noise(xoff), 0, 1, sand_1,50);
           vertex(x, y); 
           xoff += 0.05;
        }

      yoff += 0.01;
      vertex(width, height);
      vertex(0, height);
      endShape(CLOSE);
        
        
  beginShape(); 
       var xoff = yoff; 
      for (var x = 0; x <= width; x += 10) {
        var y = map(noise(xoff), 0, 1, sand_2,100);
        vertex(x, y); 
        xoff += 0.05;
      }
      yoff += 0.05;
      vertex(width, height);
      vertex(0, height);
  endShape(CLOSE);
        
        
        
 beginShape(); 
   var xoff = yoff; 
   for (var x = 0; x <= width; x += 10) {
   var y = map(noise(xoff), 0, 1, sand_3 ,100);
    vertex(x, y); 
    xoff += 0.05;
  }

  yoff += 0.05;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
        
        
   beginShape(); 
   var xoff = yoff;
   for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xoff), 0, 1, sand_4,100);
    vertex(x, y); 
    xoff += 0.05;
  }
  yoff += 0.05;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);   
        
        
 beginShape(); 
   var xoff = yoff; 
   for (var x = 0; x <= width; x += 10) {
   var y = map(noise(xoff), 0, 1, sand_5,50);
    vertex(x, y); 
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
    
//    noStroke();
//    
//    fill(100,31,31);
//    push();
//    scale(0.6);
//    translate(100,400);
//beginShape();
//vertex(50, 20);
//vertex(65, 20);
//vertex(65, 60);    
//vertex(80,60); 
//vertex (80,40);
//vertex(95,40);
//vertex (95,80);    
//vertex(80,80);
//vertex(65,80);    
//vertex(65, 130);
//vertex(50, 130);
//endShape(CLOSE);
//    pop();
//    
//    
//      fill(100,31,31);
//    push();
//    scale(0.6);
//    translate(200,400);
//beginShape();
//vertex(-50, 20);
//vertex(-65, 20);
//vertex(-65, 50);    
//vertex(-80,50); 
//vertex(-80,35);
//vertex(-95,35);
//vertex(-95,70);    
//vertex(-80,70);
//vertex(-65,70);    
//vertex(-65, 130);
//vertex(-50, 130);
//endShape(CLOSE);
//    pop();

        
        
        
    }
 
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
     else if (key == ' ') {
    patternMode = !patternMode;
  }
}
