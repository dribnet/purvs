var curRandomSeed;
var circleMove = 1;
var slider1, slider2, slider3, slider4;
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


  angleMode(DEGREES);
  rectMode(CENTER);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function cactus (x1,y1,size,size){
    noFill();
    stroke(255);
    ellipse(x1,y1,10,10);
    ellipse(x1,y1,5,5);
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

  //grid locations
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

//Wallpaper Pattern
if (!patternMode){
    

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
//Landscape
    else{
        
        var yoff = 0.0;  
        var sand_1 = random(170, 200);
        var sand_2 = random(300, 350);
        var sand_3 = random(350, 370);
        var sand_4 = random(370, 400);
        var sand_5 = random(600, 650);
        var randomPlot = random(0, 200);
        
    
        

  
 stroke(255);
       //Day
   random_result = focusedRandom(0, 100);
        if(random_result < 50) {
            background(61);
              fill(214,183,85);
            
        }

        //Night
         else{
             background(44, 52, 58);
             fill(73, 69, 55);

                 // draws the map
		for(var i=0;i<x_steps-1;i++) {
	      for(var j=0;j<y_steps-1;j++) {
	        var loc = grid_locations[i][j];
	        var x1 = loc[0];
	        var y1 = loc[1];

	        var x_noise = x1/100.0;
	        var y_noise = y1/100.0;
	        var noiseVal = noise(x_noise, y_noise);


                   random_result = focusedRandom(0, 100);
        if(random_result <40) {
            if(randomPlot < 200){
            if(y1 < sand_1){
               line(x1,y1,x1+1,y1+1);
            }
                
               
                
            }
        }
        else  {

        }    




    }
}

         }
// Sand Dunes
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
    

        // draws the map
		for(var i=0;i<x_steps-1;i++) {
	      for(var j=0;j<y_steps-1;j++) {
	        var loc = grid_locations[i][j];
	        var x1 = loc[0];
	        var y1 = loc[1];

	        var x_noise = x1/100.0;
	        var y_noise = y1/100.0;
	        var noiseVal = noise(x_noise, y_noise);

	      //cacti 
        random_result = focusedRandom(0, 100);
        if(random_result <= 20) {
            if(randomPlot < 50){
            if(y1 > sand_1){
               cactus(x1,y1,10,10);
            }
                
                if(y1 > sand_3){
                noFill();
                stroke(100,31,31);
               ellipse(x1,y1,10,10);
            }
                
            }
        }
        else  {

        }
              
              random_result = focusedRandom(0, 100);
        if(random_result <= 40 && random_result > 20) {
            if(randomPlot < 20){
            if(y1 > sand_1){
               cactus(x1,y1,10,10);
            }
                
                if(y1 > sand_3){
                noFill();
                stroke(100,31,31);
               ellipse(x1,y1,10,10);
            }
                
            }
        }
        else  {

        }
              
              
              
          random_result = focusedRandom(0, 100);
        if(random_result <= 60 && random_result > 40) {
            if(randomPlot < 50 && randomPlot > 20){
            if(y1 > sand_1){
               cactus(x1,y1,10,10);
            }
                
                if(y1 > sand_3){
                noFill();
                stroke(100,31,31);
               ellipse(x1,y1,10,10);
            }
                
            }
        }
        else  {

        }
              
                      random_result = focusedRandom(0, 100);
        if(random_result <= 60 && random_result > 40) {
            if(randomPlot < 80 && randomPlot > 50){
            if(y1 > sand_1){
               cactus(x1,y1,10,10);
            }
                
                if(y1 > sand_3){
                noFill();
                stroke(100,31,31);
               ellipse(x1,y1,10,10);
            }
                
            }
        }
        else  {

        }
              
              
                    random_result = focusedRandom(0, 100);
        if(random_result <= 80 && random_result > 60) {
            if(randomPlot < 150 && randomPlot > 80){
            if(y1 > sand_1 && y1 < sand_4){
               cactus(x1,y1,10,10);
            }
            
                
                if(y1 > sand_4){
                noFill();
                stroke(61);
               ellipse(x1,y1,15,15);
            }
                
            }
        }
        else  {

        }  
              
              
                    random_result = focusedRandom(0, 100);
        if(random_result <= 80 && random_result > 60) {
            if(randomPlot < 200 && randomPlot > 150){
            if(y1 > sand_1){
               cactus(x1,y1,10,10);
            }
                
      
                
                
                if(y1 > sand_3){
                noFill();
                stroke(100,31,31);
               ellipse(x1,y1,10,10);
            }
                
                
            }
        }
        else  {

        }
              
              
                random_result = focusedRandom(0, 100);
        if(random_result <= 100 && random_result > 80) {
            if(randomPlot == 200){
            if(y1 > sand_1){
               cactus(x1,y1,10,10);
            }
                
                if(y1 > sand_3){
                noFill();
                stroke(100,31,31);
               ellipse(x1,y1,focusedRandom(5, 10),focusedRandom(5, 10));
            }
                
            }
        }
        else  {

        }      
    
              
              
          }
        }
        
        
        
        
    }
 
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
     else if (key == ' ') {
    patternMode = patternMode;
  }
}
