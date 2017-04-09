function SpotGlyph() {
  this.spot_hue = 200;

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
   *
   * this glyph can utilize changes in brightness and saturation, but only
   * using the spot_hue set above. So:
   *
   *    + hue will always be set to spot_hue (a value from 0-360)
   *    + saturation can vary from 0-100
   *    + brighness can vary from 0-100
   *
   * examples:
   *    - fill(this.spot_hue, 25, 50);     // desaturated. middle brightness.
   *    - stroke(this.spot_hue, 100, 100); // fully saturated and maximum brightness
   */
  this.draw = function(values, size) {
    var hue = values[0];
    var sat = values[1];
    var brt = values[2];

    var halfSize = size/2;
    var sqSize = size * Math.sqrt(2) / 2;

    noStroke();
    if(hue > this.spot_hue && hue < this.spot_hue + 90) {
      fill(this.spot_hue, sat, brt);
    }
    else {
      fill(this.spot_hue, 0, brt);
    }
    translate(halfSize, halfSize);
    rect(-sqSize/2, -sqSize/2, sqSize, sqSize);

    // circle color to brightness
var sat = values[1];
if (sat < 50) {
  sat = map(sat,0,50,0,45);
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
var circlesize = map(values[2], 0, 100, 4, 20);
ellipse(size/2, size/2, circlesize);

  }
}
