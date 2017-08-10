/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [95, 52, 8];

function FaceMap() {

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    //i use my variables differently
    angleMode(RADIANS);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    colorMode(HSB);

    if(canvasWidth < positions.left_eye[0][0])
      return;

    drawEye(positions.left_eye);
    drawEye(positions.right_eye);

    //reset vars back to tom's defaults
    colorMode(RGB);
    ellipseMode(CENTER);
    angleMode(DEGREES);
  }
}

function drawEye(eye){
  var pos = average_point(eye);

  var rect = Rect.fromPoints(eye);

  var ytend = rect.height*2.5;
  var paintRect = Rect.fromMinMax(rect.minX(), rect.minY()-ytend, rect.maxX(), rect.maxY());
  paintRect.y += rect.height*2;
  paintRect.width *= 2

  fill(0, 0, 100, 0.7); //white
  stroke(0, 0, 0);
  arc(paintRect.x, paintRect.y, paintRect.width/2, paintRect.height, PI, PI, OPEN); //big eye paint

  fill(0, 100, 80); //dark red
  noStroke();
  ellipse(rect.x, rect.y, rect.width*0.7, rect.height); //red eye

  fill(0,0,0);
  ellipse(rect.x, rect.y, 2, 2); //black pupil
}

class Rect{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(fillColor){
    //white default
    fill(fillColor || color(0, 0, 100));
    rect(this.x, this.y, this.width, this.height);
  }

  minX(){
    return this.x-this.width/2;
  }

  minY(){
    return this.y-this.height/2;
  }

  maxX(){
    return this.x+this.width/2;
  }

  maxY(){
    return this.y+this.height/2;
  }

  static fromPoints(points){
    var minX = canvasWidth;
    var minY = canvasHeight;
    var maxY = 0;
    var maxX = 0;

    points.forEach(point => {
      minX = min(point[0], minX);
      minY = min(point[1], minY);

      maxX = max(point[0], maxX);
      maxY = max(point[1], maxY);
    });

    return this.fromMinMax(minX, minY, maxX, maxY)
  }

  static fromMinMax(minX, minY, maxX, maxY){
    return new Rect(minX+(maxX-minX)/2, minY+(maxX-minX)/2, (maxX-minX), (maxY-minY));
  }
}

// given a point, return the average
function average_point(list) {
  var sum_x = 0;
  var sum_y = 0;
  var num_points = 0;
  for(var i=0; i<list.length; i++) {
    sum_x += list[i][0];
    sum_y += list[i][1];
    num_points += 1; 
  }
  return [sum_x / num_points, sum_y / num_points];
}