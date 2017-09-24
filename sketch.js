var mode = true;
var size = 100;

var cClouds;
var cFade;
var cFurther;
var cCloser;
var cMist;

function setup(){
  createCanvas(800,600);
  smooth();
  noiseSeed(1);


  cClouds = color(255, 255, 255);
  cFade = color(255, 77, 0);
  cFurther = color(255, 77, 0);
  cCloser = color(0, 0, 0);
  cMist = color(255,255,255);

}
function draw() {
  if (mode == true){ 
    Landscape();
  }
  else if (mode == false){
    Wallpaper();
  }
}
function Landscape () {
  noLoop(); 
  background(255, 77, 0);
    
  fade(cFade);
  fill(255, 149, 0);
  ellipse(400,200,250,250);
  clouds(cClouds);
  mountains(cCloser, cFurther, cMist);
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
   if (key == 'l'){
    background(0);
    mode = true;
  }

  else if (key == 'w'){
    background(255);
    mode = false;
  }
}
function mousePressed(){
  loop();
}
function fade(fadeColor) 
{
  for(var i = 0; i < height/3; i++) 
  {
    var alpha = map(i, 0, height/3, 255, 0);
    
    strokeWeight(1);
    stroke(fadeColor, alpha);
    line(0, i, width, i);
  }

}

function clouds(cloudColor){  
  var begin = random(50);
  
  var i = 0; 
  
  for(var x = 0; x < width; x += 2)
  {    
    var j = 0; 
    
    for(var y = 0; y < height/3; y += 2)
    {     
      var alphaMax = map(y, 0, height/2,255, 0);  
      var alpha = noise(begin + i, begin + j);
      alpha = map(alpha, 0.4, 1, 0, alphaMax);
      
      noStroke();    
      fill(180, 180, 180, alpha);
      ellipse(x, y, 2, 2);
      
      j += 0.06; //Scale y
    }
    
    i += 0.01;
  }
}

function mountains(closerColor, furtherColor, mistColor)
{
  //REFERENCE HEIGHT:
  var y0 = width - 500;
  var i0 = 30; 
  
  var cy = [10];
  for (var j = 0; j < 10; j++)
  {
    cy[9-j] = y0;
    y0 -= i0 / pow(1.2, j);
  }
  
  
  //DRAW/
  var dx = 0;
  
  for (var j = 1; j <  10; j++)
  {               
    var a = random(-width/2, width/2);  //random discrepancy between the sin waves
    var b = random(-width/2, width/2);  //random discrepancy between the sin waves  
    var c = random(2, 4);  //random amplitude for the second sin wave
    var d = random(40, 50);  //noise function amplitude
    var e = random(-width/2, width/2);
      
    for (var x = 0; x < width; x ++)
    {          
      var y = cy[j]; //y = reference y 
      y += 10*j*sin(2*dx/j + a);  //wave oscillates according to j
      y += c*j*sin(5*dx/j + b);   //wave has a random medium amplitude
      y += d*j*noise(1.2*dx/j +e);  //adds randomness to the mountains
      y += 1.7*j*noise(10*dx);  //adds trees
      
      strokeWeight(2);  //smoove peaks
      stroke(lerpColor(furtherColor, closerColor, j/9));
      line(x, y, x, height); 
      
      dx += 0.02;
    }
    
   
    //MIST 
    for (var i =  height; i > cy[j]; i -= 3)
    {
      var alpha = map(i, cy[j], height, 0, 400/(j+1));       
      strokeWeight(3);  //save time render
      stroke(255,255,255, alpha);     
      line(0, i, width, i);
    } 
  }
}