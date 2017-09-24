//most recent old code

var curRandomSeed;
var slider1, slider2, slider3, slider4, slider5;
var inMapMode = true;

function opacityFromValue(v){
    if (v < 0.5) {
        color1 = color(0,50);
    color2 = color(200,50);
    c = lerpColor(color1, color2, v*2);
    return c;
  }
  else if(v<0.6) {
      return color(240,150,70,5);
  }
  else if(v<0.8) {
    return color(230,175,75,25);
  }
  else {
      return color(220,200,80,50);
  }
}
function colorFromValue(v) {
  if (v < 0.5) {
      color1 = color(0,50);
    color2 = color(150,50);
    c = lerpColor(color1, color2, v*2);
    return c;
  }
  else if(v<0.6) {
       return color(240,150,70,50);
  }
  else if(v<0.8) {
    return color(230,175,75,75);
  }
  else {
      return color(220,200,80,100);
  }
}
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
     translate(-10,-10);
background(0);
    k = int(focusedRandom(0,8));
  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();
 if(inMapMode) {
var x_steps = 1 + Math.floor(width / 15);
  var y_steps = 1 + Math.floor(height / 15);
 }
    else{
        var x_steps = 1 + Math.floor(width / 38);
  var y_steps = 1 + Math.floor(height / 35);
    }
    
translate(0,25);
 var x_grid_locations = new Array(x_steps);
 var y_grid_locations = new Array(y_steps);
   
   // save grid locations
  var grid_locations = new Array(x_steps);
    for(var i=0;i<x_steps;i++) {
    grid_locations[i] = new Array(y_steps);
    for (var j = 0; j < y_steps; j++) {
      x_pos = i * 20;
      y_pos = j * 18;
      if((j % 2) == 0){
        x_pos = x_pos + 10;
      }
      grid_locations[i][j] = [x_pos, y_pos];
        
//        //
//        var loc = grid_locations[i][j];
    }
  }

   angleMode(DEGREES);
    
    if(inMapMode) {
    // draw the map
          rectangles(0,0,0.5,2);
       
        
           function rectangles( x, y, strokeWidth, edgeRoundness){
    for(var i=0;i<x_steps-1;i++) {
      for(var j=0;j<y_steps-1;j++) {
        // var shade = map(noiseVal, 0, 1, 0, 255)
        var loc = grid_locations[i][j];
          //var loc2 = grid_locations[i+1][j+2];
          var shiftAmount = focusedRandom(-10, 10, 2);
          var cur_x = i * 20 + shiftAmount;
   loc[0] = cur_x;
          
   var cur_y = j * 30 + shiftAmount;
   loc[1] = cur_y;
          
        var x1 = loc[0];
        var y1 = loc[1];
        var spot = (i+j+k) % 9;
        if(spot == 0 || spot == 1) {
          fill(100, 0, 0);
        }
        else if(spot == 2 || spot == 3) {
          fill(0, 100, 0);
        }
        else if(spot == 6) {
          fill(200, 200, 0);
        }
        else {
          fill(0, 0, 100);          
        }
noFill();
          rectMode(CENTER);
          strokeWeight(strokeWidth);
          stroke(220,200,80,focusedRandom(255, opacity, 3));
          fill(0,focusedRandom(fillOpacity,0,1));
           push();
          translate(x,y);
          
  var x_noise = x1/100.0;
        var y_noise = y1/100.0;
        var noiseVal = noise(x_noise, y_noise);
        var shade = colorFromValue(noiseVal);
        var opacity = opacityFromValue(noiseVal)
        stroke(shade);
       fill(opacity);
           rect(x1, y1, 20, 30,focusedRandom(0,edgeRoundness,2));
          pop();
          
      }
    }    
  }  
  }
  else {
    
    // draw a pattern
         var opacity = map(s1, 0, 100, 0, 255);
         var shiftX = map(s3, 0, 100, -5, 5);
         var shiftY = map(s3, 0, 100, -5, 5);
       var ellipseOpacity = map(s4, 0, 100, 100, 200);
       var fillOpacity = map(s5, 0, 100, 50, 200);
          // var ellipses = Math.floor(map(s4, 0, 100, 0, 2));
          var layersAmount = Math.floor(map(s2, 0, 100, 0, 3));
      //layersAmount =0;
     // rectangles(1,10,25,0,0,0.5,5);
       rectangles(2,20,35,0,0,0.5,5);
         if (layersAmount > 0) {
         //rectangles(3,40,70,shiftX,shiftY,1,15);
             rectangles(3,50,80,shiftX,shiftY,1,15);
         }
      if (layersAmount > 1) {
          rectangles(6,110,180,shiftX*2,shiftY*2,2,25);    
         }
      if (layersAmount > 2) {
           rectangles(12,230,370,shiftX*4,shiftY*4,3,35); 
             }
      
      function rectangles(size, w, h, x, y, strokeWidth, edgeRoundness){
    for(var i=0;i<x_steps-1;i++) {
      for(var j=0;j<y_steps-1;j++) {
        // var shade = map(noiseVal, 0, 1, 0, 255)
        var loc = grid_locations[i][j];
        var x1 = loc[0];
        var y1 = loc[1];
        var x2 = loc[0]+1;
        var y2 = loc[1]+2;
        var spot = (i+j+k) % 9;
        if(spot == 0 || spot == 1) {
          fill(100, 0, 0);
        }
        else if(spot == 2 || spot == 3) {
          fill(0, 100, 0);
        }
        else if(spot == 6) {
          fill(200, 200, 0);
        }
        else {
          fill(0, 0, 100);          
        }
noFill();
          rectMode(CENTER);
          strokeWeight(strokeWidth);
          stroke(220,200,80,focusedRandom(255, opacity, 3));
          fill(0,focusedRandom(fillOpacity,0,1));
           push();
          translate(x,y);
//          rect(x1*size, y1*size, focusedRandom(w,w+w/3), focusedRandom(h,h+h/2),focusedRandom(0,edgeRoundness,2));
           rect(x1*size, y1*size, w, h,focusedRandom(0,edgeRoundness,2));
          pop();
         // if(ellipses==1){
             fill(0,focusedRandom(ellipseOpacity));
              //fill(255);
              noStroke();
              var ellipseS = focusedRandom(10,60,2);
             ellipse(x1*3,y1*3,ellipseS*2,ellipseS*2);
         // }
          
      }
    }    
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
    else if (key == ' ') {
    inMapMode = !inMapMode;
  }
}




