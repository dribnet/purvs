function GrayGlyph() {
  /*
   * values is an array of 3 numbers: [hue, saturation, brightness]
   *   + hue ranges from 0..360
   *   + saturation ranges from 0..100
   *   + brightness ranges from 0..100
   * this matches the default range for p5.js colorMode(HSB) as describe at:
   *   https://p5js.org/reference/#/p5/colorMode
   *
   * size is the number of pixels for width and height
   *
   * use p5.js to draw a round grayscale glpyh
   * the glyph should stay within the bounding box [0, 0, width, height]
   * this is a grayscale glyph, so only brighness can be adjusted.
   * the range for brighness is 0..100
   *
   * the color mode will be HSB, so you can either:
   *    + use a one argument grayscale call; this is easiest. examples:
   *       - fill(50);    // ranges from 0-100
   *       - stroke(100); // white
   *    + use a three arguement HSB call with values but set both H and S to 0. examples:
   *       - fill(0, 0, 51);    // equivalent to above
   *       - stroke(0, 0, 100); //
   */ 
 this.draw = function(values, size) {
 
// circle color to brightness
var sat = values[1];
if (sat < 50) {
	sat = map(sat,0,50,10,45);
}
else {
	sat = map(sat,50,100,55,100);
}

//brightness
var color1 = map(values[2], 0, 100, 0, 255)
  stroke(color1);
  var s2 = size/2;
  fill(sat)
  noStroke();
  ellipse(s2, s2, size);
   
//saturation effecting colour of circle and rectangles

var inversesat = 100 - sat;
fill(inversesat);
stroke(sat)

//hue effecting rotation
var hue = map(values[0], 0, 100,  10, 200);
push();
translate(s2 , s2);
rotate(PI);
for (var i = 0; i < 8; i ++) {
rect(s2/4, s2/3, 2+2*color1/100, size/8);
rotate(PI/(4+(hue/100)));
} 
pop();

//size of inner circle effected by brightness
var circlesize = map(values[2], 0, 100, size/6, size/2);
ellipse(size/2, size/2, circlesize);

  }  
}
