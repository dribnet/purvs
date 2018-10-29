const max_thickness = 64;
const max_movement = 300;
const ball_radius = 32;
const line_width = 8;
const grid_size = 64;
let do_animation = true;


/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 463.575195312500,567.494140625000],
  [3, 467.452636718750,572.531738281250],
  [4, 448.134277343750,571.708984375000],
  [8, 447.437881469727,576.664093017578],
  [2, 189.150390625000,415.698242187500],
  [3, 197.625000000000,416.250000000000],
  [2, 699.000000000000,813.250000000000],
  [3, 686.875000000000,839.250000000000],

  //[6, 512, 512]
]


//function drawWindow(p5,x,y,x1,y1,x2,y2){
	//let rX = p5.map(x+100, x1, x2, 0, 256);
	//let rY = p5.map(y+100, y1, y2, 0, 256);
	//let rW = p5.map(x-50, x1, x2, 0, 256);
	//let rH = p5.map(y+50, y1, y2, 0, 256);
	//p5.fill(255);
	//p5.rect(rX, rY, 40, 40);

//}

/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let offsetX = getRandomValue(p5, x, y, z, "offsetX", -max_movement, max_movement, noiseScale);
  let offsetY = getRandomValue(p5, x, y, z, "offsetY", -max_movement, max_movement, noiseScale);
  return [x+offsetX, y+offsetY]
}

function drawShape(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     let x = p5.map(xpos - 10, x1, x2, 0, 256);
     let y = p5.map(ypos + 5 , y1, y2, 0, 256);
     let X2 = p5.map(xpos + 10, x1, x2, 0, 256);
     let Y2 = p5.map(ypos + 5, y1, y2, 0, 256);
     let X3 = p5.map(xpos, x1, x2, 0, 256);
     let Y3 = p5.map(ypos - 9, y1, y2, 0, 256);
     p5.noFill();
     p5.strokeWeight(3 * x_unit);
     p5.stroke(255);
     p5.push();
     p5.pop();
     p5.triangle(x, y, X2, Y2, X3, Y3);

}
function drawSmallBall(xpos, ypos, p5, x1, x2, y1, y2, z, zoom){
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos + 575, x1, x2, 0, 256);
     y = p5.map(ypos + 455, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(70, 130, 180);
     p5.ellipse(x, y, 65 * x_unit, 65 * x_unit);
}

function drawSmallBallWeight(xpos, ypos, p5, x1, x2, y1, y2, z, zoom){
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos + 575, x1, x2, 0, 256);
     y = p5.map(ypos + 455, y1, y2, 0, 256);
     p5.strokeWeight(2 * x_unit);
     p5.stroke(224, 255, 255);
     p5.noFill();
     p5.ellipse(x, y, 65 * x_unit, 65 * x_unit);
}

function drawStarLine(xpos, ypos, p5, x1, x2, y1, y2, z, zoom){
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     w = p5.map(xpos, x1, x2, 0, 256);
     h = p5.map(ypos + 20, y1, y2, 0, 256);
     p5.strokeWeight(2 * x_unit);
     p5.stroke(255, 215, 0);
     p5.line(x, y, w, h);

     x = p5.map(xpos -10, x1, x2, 0, 256);
     y = p5.map(ypos + 1, y1, y2, 0, 256);
     w = p5.map(xpos -10, x1, x2, 0, 256);
     h = p5.map(ypos + 30, y1, y2, 0, 256);
     p5.strokeWeight(2 * x_unit);
     p5.stroke(255, 215, 0);
     p5.line(x, y, w, h);

     x = p5.map(xpos + 10, x1, x2, 0, 256);
     y = p5.map(ypos + 2.5, y1, y2, 0, 256);
     w = p5.map(xpos + 10, x1, x2, 0, 256);
     h = p5.map(ypos + 35, y1, y2, 0, 256);
     p5.strokeWeight(2 * x_unit);
     p5.stroke(255, 215, 0);
     p5.line(x, y, w, h);

     x = p5.map(xpos -20, x1, x2, 0, 256);
     y = p5.map(ypos + 6, y1, y2, 0, 256);
     w = p5.map(xpos -20, x1, x2, 0, 256);
     h = p5.map(ypos + 15, y1, y2, 0, 256);
     p5.strokeWeight(2 * x_unit);
     p5.stroke(255, 215, 0);
     p5.line(x, y, w, h);

     x = p5.map(xpos + 20, x1, x2, 0, 256);
     y = p5.map(ypos + 9, y1, y2, 0, 256);
     w = p5.map(xpos + 20, x1, x2, 0, 256);
     h = p5.map(ypos + 31, y1, y2, 0, 256);
     p5.strokeWeight(2 * x_unit);
     p5.stroke(255, 215, 0);
     p5.line(x, y, w, h);


}

function drawStar(xpos, ypos, p5, x1, x2, y1, y2, z, zoom){
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos + 24, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 215, 0);
     p5.ellipse(x, y, 8.5 * x_unit, 8.5 * x_unit);
}

function drawStardetail(xpos, ypos, p5, x1, x2, y1, y2, z, zoom){
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 0, 0);
     p5.ellipse(x, y, 7.5 * x_unit, 7.5 * x_unit);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 4 * x_unit, 4 * x_unit);

     x = p5.map(xpos + 2, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos - 2, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos - 2, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos + 2, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos + 1.5, x1, x2, 0, 256);
     y = p5.map(ypos + 1.5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos - 1.5, x1, x2, 0, 256);
     y = p5.map(ypos + 1.5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos - 1.5, x1, x2, 0, 256);
     y = p5.map(ypos - 1.5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos + 1.5, x1, x2, 0, 256);
     y = p5.map(ypos - 1.5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 165, 0);
     p5.ellipse(x, y, 2.5 * x_unit, 2.5 * x_unit);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 215, 0);
     p5.ellipse(x, y, 2 * x_unit, 2 * x_unit);

}

function drawStarLast(xpos, ypos, p5, x1, x2, y1, y2, z, zoom){
     let speed = 3.0;
     let flowerWave = p5.sin(speed * p5.globalFrameCount);
     let fVar = p5.map(flowerWave, -1, 1, 51, 255);

     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.7 * x_unit, 0.7 * x_unit);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos - 0.5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);

     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos + 0.5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);

     x = p5.map(xpos + 0.5, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);

     x = p5.map(xpos - 0.5, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);

     x = p5.map(xpos - 0.4, x1, x2, 0, 256);
     y = p5.map(ypos - 0.4, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);

     x = p5.map(xpos + 0.4, x1, x2, 0, 256);
     y = p5.map(ypos - 0.4, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);

     x = p5.map(xpos + 0.4, x1, x2, 0, 256);
     y = p5.map(ypos + 0.4, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);

     x = p5.map(xpos - 0.4, x1, x2, 0, 256);
     y = p5.map(ypos + 0.4, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(fVar);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);
     
     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     p5.strokeWeight(0.05 * x_unit);
     p5.stroke(255, 69, 0);
     p5.ellipse(x, y, 0.5 * x_unit, 0.5 * x_unit);








}





function drawflower(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     //stem
     x = p5.map(xpos + 5, x1, x2, 0, 256);
     y = p5.map(ypos, y1, y2, 0, 256);
     w = p5.map(xpos - 5, x1, x2, 0, 256);
     h = p5.map(ypos + 35, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(154, 205, 50);
     p5.rect(x, y, w, h);

     //main part
     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos -15, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 40 * x_unit, 40 * x_unit);

     //main part center
     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos -15, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 215, 0);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-1
     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos + 10, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-2
     x = p5.map(xpos + 20, x1, x2, 0, 256);
     y = p5.map(ypos + 5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-3
     x = p5.map(xpos - 20, x1, x2, 0, 256);
     y = p5.map(ypos + 5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-4
     x = p5.map(xpos + 25, x1, x2, 0, 256);
     y = p5.map(ypos - 15, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-5
     x = p5.map(xpos - 25, x1, x2, 0, 256);
     y = p5.map(ypos - 15, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-6
     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos - 40, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-7
     x = p5.map(xpos - 20, x1, x2, 0, 256);
     y = p5.map(ypos - 35, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pental-8
     x = p5.map(xpos + 20, x1, x2, 0, 256);
     y = p5.map(ypos - 35, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(186, 85, 211);
     p5.ellipse(x, y, 20 * x_unit, 20 * x_unit);

     //pot
     x = p5.map(xpos - 20, x1, x2, 0, 256);
     y = p5.map(ypos + 80, y1, y2, 0, 256);
     w = p5.map(xpos + 20, x1, x2, 0, 256);
     h = p5.map(ypos + 50, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(210, 180, 140);
     p5.rect(x, y, w, h);
     x = p5.map(xpos - 30, x1, x2, 0, 256);
     y = p5.map(ypos + 50, y1, y2, 0, 256);
     w = p5.map(xpos + 30, x1, x2, 0, 256);
     h = p5.map(ypos + 35, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(210, 180, 140);
     p5.rect(x, y, w, h);
}


function drawBird(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let speed = 2;
     let birdWave = p5.sin(speed * p5.globalFrameCount);

     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     //bird mouth1
     let mouthBirdHeight1 = p5.map(birdWave, -1, 1, 175, 185);
     x = p5.map(xpos + 440, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     w = p5.map(xpos + 450, x1, x2, 0, 256);
     h = p5.map(ypos + mouthBirdHeight1, y1, y2, 0, 256);
     // h = p5.map(ypos + 185, y1, y2, 0, 256);
     p5.strokeWeight(9 * x_unit);
     p5.stroke(255, 69, 0);
     p5.noFill();
     p5.line(x, y, w, h);

     //bird mouth2
     let mouthBirdHeight2 = p5.map(birdWave, -1, 1, 185, 175);
     x = p5.map(xpos + 440, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     w = p5.map(xpos + 450, x1, x2, 0, 256);
     h = p5.map(ypos + mouthBirdHeight2, y1, y2, 0, 256);
     // h = p5.map(ypos + 175, y1, y2, 0, 256);
     p5.strokeWeight(9 * x_unit);
     p5.stroke(255, 69, 0);
     p5.noFill();
     p5.line(x, y, w, h);

     //left leg
     x = p5.map(xpos + 390, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     w = p5.map(xpos + 390, x1, x2, 0, 256);
     h = p5.map(ypos + 245, y1, y2, 0, 256);
     p5.strokeWeight(5 * x_unit);
     p5.stroke(51);
     p5.noFill();
     p5.line(x, y, w, h);

     //right leg
     x = p5.map(xpos + 410, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     w = p5.map(xpos + 410, x1, x2, 0, 256);
     h = p5.map(ypos + 245, y1, y2, 0, 256);
     p5.strokeWeight(5 * x_unit);
     p5.stroke(51);
     p5.noFill();
     p5.line(x, y, w, h);

     //bird body
     x = p5.map(xpos + 400, x1, x2, 0, 256);
     y = p5.map(ypos +180, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 215, 0);
     p5.ellipse(x, y, 90 * x_unit, 90 * x_unit);

     //bird eye
     x = p5.map(xpos + 410, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(51);
     p5.ellipse(x, y, 15 * x_unit, 15 * x_unit);

     //bird tail1
     x = p5.map(xpos + 345, x1, x2, 0, 256);
     y = p5.map(ypos + 190, y1, y2, 0, 256);
     w = p5.map(xpos + 360, x1, x2, 0, 256);
     h = p5.map(ypos + 190, y1, y2, 0, 256);
     p5.strokeWeight(10 * x_unit);
     p5.stroke(255, 215, 0);
     p5.noFill();
     p5.line(x, y, w, h);

     //bird tail2
     x = p5.map(xpos + 345, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     w = p5.map(xpos + 360, x1, x2, 0, 256);
     h = p5.map(ypos + 190, y1, y2, 0, 256);
     p5.strokeWeight(10 * x_unit);
     p5.stroke(255, 215, 0);
     p5.noFill();
     p5.line(x, y, w, h);

     //bird tail3
     x = p5.map(xpos + 345, x1, x2, 0, 256);
     y = p5.map(ypos + 170, y1, y2, 0, 256);
     w = p5.map(xpos + 360, x1, x2, 0, 256);
     h = p5.map(ypos + 190, y1, y2, 0, 256);
     p5.strokeWeight(10 * x_unit);
     p5.stroke(255, 215, 0);
     p5.noFill();
     p5.line(x, y, w, h);

     //bird wing
     x = p5.map(xpos + 380, x1, x2, 0, 256);
     y = p5.map(ypos + 190, y1, y2, 0, 256);
     p5.fill(255, 215, 0);
     p5.strokeWeight(5 * x_unit);
     p5.stroke(51);
     p5.arc(x, y, 25 * x_unit, 85 * x_unit, 50, 200);
}

function drawWindow(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos + 256, x1, x2, 0, 256);
     y = p5.map(ypos + 256, y1, y2, 0, 256);
     w = p5.map(xpos + 768, x1, x2, 0, 256);
     h = p5.map(ypos + 768, y1, y2, 0, 256);
     p5.strokeWeight(25 * x_unit);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.rect(x, y, w, h);

     x = p5.map(xpos + 256, x1, x2, 0, 256);
     y = p5.map(ypos + 256, y1, y2, 0, 256);
     w = p5.map(xpos + 768, x1, x2, 0, 256);
     h = p5.map(ypos + 768, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(224, 255, 255);
     p5.rect(x, y, w, h);

     x = p5.map(xpos + 512, x1, x2, 0, 256);
     y = p5.map(ypos + 256, y1, y2, 0, 256);
     w = p5.map(xpos + 512, x1, x2, 0, 256);
     h = p5.map(ypos + 768, y1, y2, 0, 256);
     p5.strokeWeight(10 * x_unit);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.line(x, y, w, h);

     x = p5.map(xpos + 256, x1, x2, 0, 256);
     y = p5.map(ypos + 512, y1, y2, 0, 256);
     w = p5.map(xpos + 768, x1, x2, 0, 256);
     h = p5.map(ypos + 512, y1, y2, 0, 256);
     p5.strokeWeight(10 * x_unit);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.line(x, y, w, h);

     x = p5.map(xpos + 150, x1, x2, 0, 256);
     y = p5.map(ypos + 800, y1, y2, 0, 256);
     w = p5.map(xpos + 900, x1, x2, 0, 256);
     h = p5.map(ypos + 800, y1, y2, 0, 256);
     p5.strokeWeight(40 * x_unit);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.line(x, y, w, h);
}

function drawWallpaper(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos + 256, x1, x2, 0, 256);
     y = p5.map(ypos + 256, y1, y2, 0, 256);
     w = p5.map(xpos + 768, x1, x2, 0, 256);
     h = p5.map(ypos + 768, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 192, 203);
     p5.rect(x, y, w, h);
 }

 function drawTable(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     //main part
     x = p5.map(xpos + 65, x1, x2, 0, 256);
     y = p5.map(ypos + 120, y1, y2, 0, 256);
     w = p5.map(xpos + 191, x1, x2, 0, 256);
     h = p5.map(ypos + 150, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(117, 168, 196);
     p5.rect(x, y, w, h);

     //left leg
     x = p5.map(xpos + 60, x1, x2, 0, 256);
     y = p5.map(ypos + 120, y1, y2, 0, 256);
     w = p5.map(xpos + 60, x1, x2, 0, 256);
     h = p5.map(ypos + 360, y1, y2, 0, 256);
     p5.strokeWeight(15 * x_unit);
     p5.stroke(117, 168, 196);
     p5.noFill();
     p5.line(x, y, w, h);

     //right leg
     x = p5.map(xpos + 190, x1, x2, 0, 256);
     y = p5.map(ypos + 120, y1, y2, 0, 256);
     w = p5.map(xpos + 190, x1, x2, 0, 256);
     h = p5.map(ypos + 360, y1, y2, 0, 256);
     p5.strokeWeight(15 * x_unit);
     p5.stroke(117, 168, 196);
     p5.noFill();
     p5.line(x, y, w, h);

    //first line
     x = p5.map(xpos + 25, x1, x2, 0, 256);
     y = p5.map(ypos + 120, y1, y2, 0, 256);
     w = p5.map(xpos + 233, x1, x2, 0, 256);
     h = p5.map(ypos + 120, y1, y2, 0, 256);
     p5.strokeWeight(16 * x_unit);
     p5.stroke(207, 217, 233);
     p5.noFill();
     p5.line(x, y, w, h);

     //second line
     x = p5.map(xpos + 60, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     w = p5.map(xpos + 190, x1, x2, 0, 256);
     h = p5.map(ypos + 180, y1, y2, 0, 256);
     p5.strokeWeight(10 * x_unit);
     p5.stroke(117, 168, 196);
     p5.noFill();
     p5.line(x, y, w, h);

}

function drawCrystalBall(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     //pot
     x = p5.map(xpos + 596, x1, x2, 0, 256);
     y = p5.map(ypos + 480, y1, y2, 0, 256);
     X2 = p5.map(xpos + 554, x1, x2, 0, 256);
     Y2 = p5.map(ypos + 480, y1, y2, 0, 256);
     X3 = p5.map(xpos + 532, x1, x2, 0, 256);
     Y3 = p5.map(ypos + 512, y1, y2, 0, 256);
     X4 = p5.map(xpos + 620, x1, x2, 0, 256);
     Y4 = p5.map(ypos + 512, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(160, 82, 45);
     p5.quad(x, y, X2, Y2, X3, Y3, X4, Y4);

     //crystalball
     x = p5.map(xpos + 575, x1, x2, 0, 256);
     y = p5.map(ypos + 455, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(224, 255, 255);
     p5.ellipse(x, y, 70 * x_unit, 70 * x_unit);
}

function drawFlowerZoom(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     //pental-1
     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos + 10, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 0, 0);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);

     //pental-2
     x = p5.map(xpos + 20, x1, x2, 0, 256);
     y = p5.map(ypos + 5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 140, 0);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);

     //pental-3
     x = p5.map(xpos - 20, x1, x2, 0, 256);
     y = p5.map(ypos + 5, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 255, 0);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);

     //pental-4
     x = p5.map(xpos + 25, x1, x2, 0, 256);
     y = p5.map(ypos - 15, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(50, 205, 50);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);

     //pental-5
     x = p5.map(xpos - 25, x1, x2, 0, 256);
     y = p5.map(ypos - 15, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(30, 144, 255);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);

     //pental-6
     x = p5.map(xpos, x1, x2, 0, 256);
     y = p5.map(ypos - 40, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 192, 203);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);

     //pental-7
     x = p5.map(xpos - 20, x1, x2, 0, 256);
     y = p5.map(ypos - 35, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);

     //pental-8
     x = p5.map(xpos + 20, x1, x2, 0, 256);
     y = p5.map(ypos - 35, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(219, 112, 147);
     p5.ellipse(x, y, 10 * x_unit, 10 * x_unit);
}

function drawBirdEye(xpos, ypos, p5, x1, x2, y1, y2, z, zoom) {
     let x_0 = p5.map(0, x1, x2, 0, 256);
     let x_1 = p5.map(1, x1, x2, 0, 256);
     let x_unit = (x_1 - x_0);

     x = p5.map(xpos + 410, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255);
     p5.arc(x, y, 30 * x_unit, 30 * x_unit, 0, 180);

     x = p5.map(xpos + 410, x1, x2, 0, 256);
     y = p5.map(ypos + 180, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(51);
     p5.arc(x, y, 15 * x_unit, 15 * x_unit, 0, 180);


}









// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
     p5.background(216, 191, 216);
     p5.rectMode(p5.CORNERS);
     p5.angleMode(p5.DEGREES);
     //let rot = 0;

     
     
     // drawShape(400, 400, 100, p5, x1, x2, y1, y2, z, zoom);
     // drawShape(300, 300, 100, p5, x1, x2, y1, y2, z, zoom);
     //for(let i=0; i<1000; i+=100) {
    drawBird(0, 0, p5, x1, x2, y1, y2, z, zoom);
    drawWindow(0, 0, p5, x1, x2, y1, y2, z, zoom);
    drawflower(850, 700, p5, x1, x2, y1, y2, z, zoom);
    //drawShape(560, 448, p5, x1, x2, y1, y2, z, zoom);


    if (zoom >= 2) {
        drawWallpaper(0, 0, p5, x1, x2, y1, y2, z, zoom); 
        drawTable(448, 400, p5, x1, x2, y1, y2, z, zoom);
        drawCrystalBall(0, 0, p5, x1, x2, y1, y2, z, zoom);
        //drawFlowerZoom(850, 700, p5, x1, x2, y1, y2, z, zoom);
        //drawBirdEye(0, -7.5, p5, x1, x2, y1, y2, z, zoom);
        //drawShape(560, 448, p5, x1, x2, y1, y2, z, zoom);    
      }

      if (zoom >= 3){

          drawSmallBall(0, 0, p5, x1, x2, y1, y2, z, zoom);
          drawStarLine(577, 423.5, p5, x1, x2, y1, y2, z, zoom);
          drawStar(577, 423.5, p5, x1, x2, y1, y2, z, zoom);
          drawStar(567, 433, p5, x1, x2, y1, y2, z, zoom);
          drawStar(557, 418, p5, x1, x2, y1, y2, z, zoom);
          drawStar(587, 438, p5, x1, x2, y1, y2, z, zoom);
          drawStar(597, 434, p5, x1, x2, y1, y2, z, zoom);
          drawSmallBallWeight(0, 0, p5, x1, x2, y1, y2, z, zoom);
          drawBirdEye(0, -7.5, p5, x1, x2, y1, y2, z, zoom);
          drawFlowerZoom(850, 700, p5, x1, x2, y1, y2, z, zoom);

      }

      if(zoom >= 4){
          drawStardetail(567, 457, p5, x1, x2, y1, y2, z, zoom);
          drawStardetail(577, 447.5, p5, x1, x2, y1, y2, z, zoom);
          drawStardetail(557, 442, p5, x1, x2, y1, y2, z, zoom);
          drawStardetail(587, 462, p5, x1, x2, y1, y2, z, zoom);
          drawStardetail(597, 458, p5, x1, x2, y1, y2, z, zoom);

      }

      if(zoom >=8){
          drawStarLast(577,447.5, p5, x1, x2, y1, y2, z, zoom);
      }

     

  // p5.noFill();
  // p5.strokeWeight(1);
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}

  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);

