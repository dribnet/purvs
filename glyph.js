/*
 * val4 is an array of 3 numbers that range from [0,1000]
 * size is the number of pixels for width and height
 * use p5.js to draw a round grawscale glpyh within the bounding box
 */ 
function gray_glyph(values, size) {
  // replace this with your own version

var sat = values[1];
var fill_color = map(sat, 0, 100, 0, 255);
  fill(fill_color)
  noStroke();

//brightness
var color1 = map(values[2], 0, 100, 10, 255)
  stroke(color1);
  var s2 = size/2;
   noStroke();

//Shape change 
var color2 = map(values[0], 10, 10)

//shape 
var hue = values[0];
push();
translate(s2 , s2);
for (var i = 0; i < 10; i ++) {
rect(s2/4, s2/3, 3*color1/50, size/8);
rotate(PI/(4+(hue/100)));
} 
pop();

noStroke();


}