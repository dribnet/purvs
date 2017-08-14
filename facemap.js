/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [95, 52, 8];

var rand = new Math.seedrandom(focusedRandom())

function FaceMap() {
  this.hairLength = 50;
  this.hairColor = 50;
  this.mouthTimingRand = rand();

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

    strokeCap(ROUND);
    strokeJoin(BEVEL);

    if(canvasWidth < positions.left_eye[0][0])
      return;

    //background white on whole face
    fill(0,0,100, .7);
    noStroke();
    drawQuadratic(positions.left_eyebrow.concat(positions.right_eyebrow, positions.chin.reverse()));

    //lips and mouth
    doCentered(positions.top_lip.concat(positions.bottom_lip), function(points, mapper){
      push();
      scale(1.8, 1.5);
      fill(0, 80, 100);
      drawQuadratic(convexHull(points));
      pop();

      scale(1, 1+.3*sin(millis()/focusedRandom(100, 600, 2, 300)*TAU));
      fill(0, 0, 100);
      drawQuadratic(positions.top_lip.map(mapper));
      drawQuadratic(positions.bottom_lip.map(mapper));
    })

    //chin border
    noFill();
    stroke(0, 100, 0);
    strokeWeight(2.5)
    drawQuadratic(positions.chin, true);

    //eyes
    [positions.left_eye, positions.right_eye].forEach(function(eye){
      doCentered(eye, function(points, mapper){
        scale(2);
        noStroke();

        let pointsRect = Rect.fromPoints(points.map(point => [point[0]/4, point[1]/4]));
        
        //white eye
        fill(50, 98, 95);
        drawQuadratic(convexHull(points));

        // scale(0.5)

        fill(0,0,0);
        ellipse(focusedRandom(pointsRect.minX(), pointsRect.maxX(), 3, 0)*sin(millis()/focusedRandom(500, 3000)), 
          focusedRandom(pointsRect.minY(), pointsRect.maxY(), 3, 0)*sin(millis()/focusedRandom(300, 1000)),
            1.5, 1.5); //black pupil
      })
    })

    //nose
    doCentered(positions.nose_bridge.concat(positions.nose_tip), function(points){
      rotate(sin(millis()/focusedRandom(300, 3000)*TAU)*focusedRandom(0, PI/16));
      noFill();
      stroke(0, 100, 100);
      strokeWeight(4);
      drawQuadratic(points, true);
    })

    //reset vars back to tom's defaults
    colorMode(RGB);
    ellipseMode(CENTER);
    angleMode(DEGREES);
  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.hairLength;
    properties[1] = this.hairColor;
    return properties;
  }
}

function doCentered(points, func){
  push();
  var position = average_point(points);
  translate(position[0], position[1]);
  let centeredMap = point => [point[0]-position[0], point[1]-position[1]];
  func(points.map(centeredMap), centeredMap, position);
  pop();
}

function drawQuadratic(points, leaveOpen){
  beginShape();
  vertex(points[0][0], points[0][1]);
  for(let i = 1; i<points.length; i++){
    quadraticVertex(points[i-1][0], points[i-1][1], points[i][0], points[i][1]);
  }
  endShape(leaveOpen ? null : CLOSE);
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

function cross(a, b, o) {
   return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
}

/**
 * @param points An array of [X, Y] coordinates
 */
function convexHull(points) {
   points.sort(function(a, b) {
      return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
   });

   var lower = [];
   for (var i = 0; i < points.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
         lower.pop();
      }
      lower.push(points[i]);
   }

   var upper = [];
   for (var i = points.length - 1; i >= 0; i--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
         upper.pop();
      }
      upper.push(points[i]);
   }

   upper.pop();
   lower.pop();
   return lower.concat(upper);
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