var curRandomSeed;
var inMapMode = true;



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
    resetFocusedRandom(curRandomSeed);
  noiseSeed(curRandomSeed);
     translate(-10,-10);
background(0);

     colour = int(focusedRandom(0,2));
 var x_steps = 1 + Math.floor(width / 19);
 var y_steps = 1 + Math.floor(height /20);

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
    
    
    if(inMapMode) {
        push();
    scale(focusedRandom(2,4));
        background(0);
   for(var i=0;i<x_steps-1;i++) {
   for(var j=0;j<y_steps-1;j++) {
     fill(focusedRandom(0, 50, 3),100);
       noFill();
     
       
     var x1 = x_grid_locations[i];
     var x2 = x_grid_locations[i+1];
     var y1 = y_grid_locations[j];
     var y2 = y_grid_locations[j+2];
           push();
  
           var x_noise = x1/100.0;
        var y_noise = y1/100.0;
        var noiseVal = noise(x_noise, y_noise);
       if (noiseVal <0.5){
       var roundness = 30;}
       else{
            var roundness = 5;
       }
        
       if(colour==0){
           var shade = colorFromValue(noiseVal);
           var opacity = opacityFromValue(noiseVal);
          
       }
      else if(colour==1){
          var shade = colorFromValueGrey(noiseVal);
        var opacity = opacityFromValueGrey(noiseVal);}
       
        stroke(shade);
        
       fill(opacity);

     rect(x1/2, y1/2, x2/2, y2/2, focusedRandom(0,roundness,2)); 

           pop();
   }
 }
          pop();
    }
        
        
    else{
  
    var rectangle = 0;
    var circle = 1;

         var opacity = focusedRandom(100, 200);

        var layersAmount = int(focusedRandom(1,6));
         if (layersAmount > 0) {
         rectangles(rectangle,1,1,0,1,0,0);
         }
      if (layersAmount > 1) {
          rectangles(circle,1,1,0,1,0,150);
         }
      if (layersAmount > 2) {
         rectangles(rectangle,2,1,90,2,-1000,0);          }
     if (layersAmount > 3) {
     rectangles(circle,1,1,0,1,0,100);
          }
     if (layersAmount > 4) {
rectangles(rectangle,3,3,0,1,-1000,0);
         }
    
   

 
   function rectangles(shape, size, scale2, angle, strokeWidth,y,maxDarkness){
 for(var i=0;i<x_steps-1;i++) {
   for(var j=0;j<y_steps-1;j++) {
     fill(focusedRandom(0, 50, 3),100);
       noFill();
     stroke(220,200,80,focusedRandom(opacity));
          if(colour==0){stroke(220,200,80,focusedRandom(opacity));}
      else if(colour==1){stroke(170,focusedRandom(opacity));}
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
    }
}

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
function opacityFromValueGrey(v){
    if (v < 0.5) {
    
        color1 = color(0,50);
    color2 = color(200,50);
//        color1 =  color(240,150,70,10);
//    color2 =  color(220,200,80,30);
    c = lerpColor(color1, color2, v*2);
    return c;
  }
  else if(v<0.6) {
      return color(255,5);
  }
  else if(v<0.8) {
    return color(255,25);
  }
  else {
      return color(255,50);
  }
}

//stroke colour
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
function colorFromValueGrey(v) {
  if (v < 0.5) {
      color1 = color(0,20);
    color2 = color(200,20);
      
       
    c = lerpColor(color1, color2, v*2);
    return c;
  }
  else if(v<0.6) {
       return color(255,50);
       
  }
  else if(v<0.8) {
    return color(255,75);
  }
  else {
      return color(255,100);
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



