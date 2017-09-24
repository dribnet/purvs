var curRandomSeed;
var slider1, slider2, slider3, slider4, slider5;
//var faceSelector;


function setup () {
 curRandomSeed = int(focusedRandom(0, 100));
 createCanvas(960, 500);
 rectMode(CORNERS);
    
     // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

//  faceSelector = createSelect();
//  faceSelector.option('Pattern');
//  faceSelector.option('Landscape');
//  faceSelector.value('Pattern');
//  faceSelector.parent('selector1Container');
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
   resetFocusedRandom(curRandomSeed);
    
  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();
    
 var x_steps = 1 + Math.floor(width / 10);
 var y_steps = 1 + Math.floor(height /10);

 var x_grid_locations = new Array(x_steps);
 var y_grid_locations = new Array(y_steps);
   
 for(var i=0;i<x_steps;i++) {
   var shift = focusedRandom(-10, 10, 2);
     var cur_x = i * 20 + shift;
   x_grid_locations[i] = cur_x;
 }

 for(var j=0;j<y_steps;j++) {
   var shift = focusedRandom(-10, 10, 2);
   var cur_y = j * 30 + shift;
   y_grid_locations[j] = cur_y;
 }
   angleMode(DEGREES);
    var rectangle = 0;
    var circle = 1;
    var opacity = map(s1, 0, 100, 100, 200);
    rectangles(rectangle,1,1,0,1,0,0);
//    rectangles(circle,1,1,0,1,0,150);
//    rectangles(rectangle,2,1,90,2,-1000,0);
//    rectangles(circle,1,1,0,1,0,100);
//    rectangles(rectangle,3,3,0,1,-1000,0);
//    rectangles(circle,1,1,0,1,0);
 
   function rectangles(shape, size, scale2, angle, strokeWidth,y,maxDarkness){
 for(var i=0;i<x_steps-1;i++) {
   for(var j=0;j<y_steps-1;j++) {
     fill(focusedRandom(0, 50, 3),100);
       noFill();
     stroke(220,200,80,focusedRandom(opacity));
     var x1 = x_grid_locations[i];
     var x2 = x_grid_locations[i+1];
     var y1 = y_grid_locations[j];
     var y2 = y_grid_locations[j+2];
        var ellipseW = focusedRandom(30,60,2);
       var ellipseH = focusedRandom(30, 60,2);
        var ellipseS = focusedRandom(10,60,2);
       if (shape == rectangle){
           push();
           rotate(angle);
      translate(0,y);
      strokeWeight(strokeWidth);
           scale(scale2);
     rect(x1*size, y1*size, x2*size, y2*size, focusedRandom(0,30,2)); 
           pop();
       }
       else{
            noStroke();
           fill(0,focusedRandom(0,100));
             ellipse(x1*3,y1*3,ellipseS*2,ellipseS*2);
       push();
       translate(-100,-70);
       //fill(255);
       fill(0,focusedRandom(0,maxDarkness,3));
      ellipse(x1*3,y1*3,ellipseS*3,ellipseS*3);
      pop();
       }
   }
 }
   }
 for(var i=0;i<x_steps-1;i++) {
   for(var j=0;j<y_steps-1;j++) {
     fill(focusedRandom(0, 50, 3),100);
     stroke(220,200,80,focusedRandom(0, 100));
     noStroke();
     var x1 = x_grid_locations[i];
     var x2 = x_grid_locations[i+1];
     var y1 = y_grid_locations[j];
     var y2 = y_grid_locations[j+2];
        var ellipseW = focusedRandom(30,60,2);
       var ellipseH = focusedRandom(30, 60,2);
        var ellipseS = focusedRandom(10,60,2);
    fill(0,focusedRandom(0,100));
// fill(0);
//fill(255,0,0);
      //ellipse(x1*3,y1*3,ellipseS*2,ellipseS*2);
       push();
       translate(-100,-70);
       //fill(255);
       fill(0,focusedRandom(0,150,3));
      //ellipse(x1*3,y1*3,ellipseS*3,ellipseS*3);
      pop();
      push();
      scale(2);
      //rect(x1*2, y1*2, x2*2, y2*2, focusedRandom(0,30,2)); 
      pop();
      push();
      rotate(90);
      translate(0,-1000);
      strokeWeight(3);
     stroke(220,200,80,focusedRandom(100, 200));
//rect(x1*3, y1*3, x2*3, y2*3, focusedRandom(0,30,2)); 
       strokeWeight(1);
       push();
       translate(-5,-5);
       
       //stroke(240,0,0,focusedRandom(100, 200));
       //rect(x1*3, y1*3, x2*3, y2*3, focusedRandom(0,30,2)); 
       pop();
       push();
       translate(5,5);
       //rect(x1*3, y1*3, x2*3, y2*3, focusedRandom(0,30,2)); 
       pop();
    noStroke();
       fill(0,focusedRandom(0,50,3));
     // ellipse(x1*3,y1*3,ellipseS*3,ellipseS*3);
       stroke(220,200,80,focusedRandom(200, 255));
       strokeWeight(4);
       //rect(x1*4, y1*4, x2*4, y2*4, focusedRandom(0,30,2)); 
pop();
       
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




