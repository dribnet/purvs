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
    // replace this with your own version
    //stroke(50, 100,100);
   // fill(0, 100, 50);
	//rect(0,0, size, size);

var sat = values[1];
//code this for the background 

//brightness
var color1 = map(values[2], 0, 100, 0, 255)
  stroke(color1);
  var s2 = size/2;

//var fill_color = map(sat, 0, 100, 0, 255);
//if(sat < 25){
  //sat = 0;
//}else if(sat > 26 && sat < 50){
  //sat = 25;
//}else if(sat > 50 && sat < 75){
  //sat = 50;
//}else if(sat > 75 && sat < 100){
  //sat = 75
//}else if(sat >= 100){
  //sat = 100;
//}

//ellipse(s2,s2,size);
//fill(color1);

//ellipse
// fill(100); 
//var sat = values[1];
  fill(sat)
  noStroke();
ellipse(s2, s2, size);
   
//var color1 = map(values[2], 0, 100, 10, 255)
  //stroke(color1);
//llipse(s2, s2, size);

//Shape change 
var color2 = map(values[0], 10, 10)

//shape 
var hue = map(values[0], 0, 100, 0, 100);
var inversesat = 100 - sat;
fill(inversesat);
stroke(sat)


push();
translate(s2 , s2);
rotate(PI);
for (var i = 0; i < 8; i ++) {
rect(s2/4, s2/3, 3*color1/100, size/8);
rotate(PI/(4+(hue/100)));
} 
pop();

//noStroke(); 
var circlesize = map(values[2], 0, 100, 0, 15);
ellipse(size/2, size/2, circlesize);

  }  
}
