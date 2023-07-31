/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
var offset = 0;

var prevmin = undefined;
var prevhour = undefined;
var testing = [];

function draw_clock(obj) {
  angleMode(DEGREES);
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(0,5,10); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);

  const numbers = {
    zero: [createVector(20,0), createVector(55,0), createVector(75,40), createVector(75,100), createVector(55,125), createVector(20,125), createVector(0,100), createVector(20,0)],
    one: [createVector(0,50), createVector(50,0), createVector(37,125)],
    two: [createVector(0,50), createVector(20,0), createVector(55,0), createVector(75,50), createVector(0,125), createVector(75,125)],
    three: [createVector(0,30), createVector(20,0), createVector(55,0), createVector(75,50), createVector(40,60), createVector(75,90), createVector(60,125), createVector(20,125), createVector(0,100)],
    four: [createVector(75,75), createVector(75,75), createVector(0,75), createVector(50,0), createVector(50,125), createVector(50,125)],
    five: [createVector(75,0), createVector(0,0), createVector(0,50), createVector(75,60), createVector(75,100), createVector(50,125), createVector(20,125), createVector(0,100)],
    six: [createVector(75,30), createVector(50,0), createVector(20,0), createVector(0,60), createVector(0,100), createVector(30,125), createVector(60,125), createVector(75,100), createVector(50,65), createVector(0,75)],
    seven: [createVector(0,0), createVector(75,0), createVector(40,60), createVector(10,125)],
    eight: [createVector(55,0), createVector(20,0), createVector(0,50), createVector(37,62), createVector(75,75), createVector(75,105), createVector(55,125), createVector(20,125), createVector(0,105), createVector(0,75), createVector(37,62), createVector(75,50), createVector(75,20), createVector(55,0)],
    nine: [createVector(55,50), createVector(35,60), createVector(0,40), createVector(0,20), createVector(20,0), createVector(55,0), createVector(55,0), createVector(75,30), createVector(0,125)],
    colon: [createVector(37,5), createVector(41,15), createVector(35,25), 0, createVector(41,120), createVector(37,105), createVector(35,100)]
  };

  const numarray = [numbers.zero, numbers.one, numbers.two, numbers.three, numbers.four, numbers.five, numbers.six, numbers.seven, numbers.eight, numbers.nine];




  if(prevmin == undefined || obj.minutes != prevmin) {
    console.log(prevmin);

    let v1 = createVector(0,0);
    let v2 = createVector(100, 100);

    //testing = [];
    //testing = new ClockNumber(getNumberLines(numbers.zero), 200, 200, 8, 8);
    /*testing.push(new ClockNumber(getNumberLines(numbers.zero), 50, 50, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.one), 150, 50, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.two), 250, 50, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.three), 350, 200, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.four), 450, 200, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.five), 550, 200, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.six), 650, 200, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.seven), 750, 200, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.eight), 850, 200, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.nine), 50, 250, 8, 8));
    testing.push(new ClockNumber(getNumberLines(numbers.colon), 150, 250, 8, 8));*/
    let dig1 = floor(obj.hours/10);
    let dig2 = obj.hours%10;
    let dig3 = floor(obj.minutes/10);
    let dig4 = obj.minutes%10;


    if(dig1 != floor(prevhour/10) || prevhour == undefined) testing[0]=(new ClockNumber(getNumberLines(numarray[floor(obj.hours/10)]), -250, -62, 8, 8));
    if(dig2 != prevhour%10 || prevhour == undefined) testing[1]=(new ClockNumber(getNumberLines(numarray[obj.hours%10]), -150, -62, 8, 8));
    testing[2]=(new ClockNumber(getNumberLines(numbers.colon), -50, -62, 8, 8));
    if(dig3 != floor(prevmin/10) || prevmin == undefined) testing[3]=(new ClockNumber(getNumberLines(numarray[floor(obj.minutes/10)]), 50, -62, 8, 8));
    if(dig4 != prevmin%10 || prevmin == undefined) testing[4]=(new ClockNumber(getNumberLines(numarray[obj.minutes%10]), 150, -62, 8, 8));

    prevmin = obj.minutes;
    prevhour = obj.hours;

    
  }

  


  
  if(offset > 30) offset = -30;
  offset += 0.5;

  var offs = abs(offset);

  noStroke();
  let noiseScale = 0.02
  let c1 = color(0,5,5,30);
  let c2 = color(0,120,120,30);
  for(let x = 0; x < width; x+=15) {
    for(let y = 0; y < innerHeight; y+=15) {
      var val = noise(x*noiseScale,y*noiseScale);
      var col = lerpColor(c1,c2,val/1.5);
      var distance = map(dist(x, y, width/2, height/2), 0, width/1.2, 1, 0.1);
      fill(lerpColor(color(0,0,0,0), col, distance));
      var rand = random(1,1.5);
      
      var size = map(distance, 1, 0.1, 100, 30);
      ellipse(x,y,size,size);
    }
  }

  drawCircle(1.5, width/2, height/2.1, 150+offs);
  drawCircle(2, width/1.9, height/1.8, 70-offs);
  drawCircle(1.2, width/2.1, height/1.9, 0-offs);
  drawCircle(2.3, width/2, height/2, 200-offs);
  drawCircle(1.9, width/1.9, height/2, 30+offs);
  drawCircle(1.8, width/2.1, height/2.1, 140-offs);
  drawCircle(0.9, width/1.95, height/1.9, 90+offs);

  generateStars();

  for(let i = 0; i < 12; i++) {
    fill(200,200,250,4);
    ellipse(width/2, height/2, width*(pow(0.8, i)), width*(pow(0.8, i)));
  }

  fill(0,0,100,50);
  rect(0,0,width,height);


  push();
  translate(width/2,height/2);
  scale(0.8);
  for(let i = 0; i < testing.length; i++) {
    testing[i].drawNumber();
  }
  pop();


}



function getNumberLines(points) {
  lines = []
  for(let i = 1; i < points.length; i++) {
    if(points[i] == 0 || points[i-1] == 0) continue;
    lines.push(new NumLine(points[i-1], points[i]));
  }

  return lines;

}






function drawCircle(scale, x, y, rot) {
  push();
  translate(x, y);
  rotate(rot);
  noFill();
  stroke(255, 255, 255, 30);
  strokeWeight(0.3);
  beginShape();
  var inc = 5;
  for(let i = 0; i < 50; i++) {
    inc += 20
    let len = scale*(200 + (i%3)*12);
    let v = p5.Vector.fromAngle(inc, len);
    curveVertex(v.x, v.y);
  }
  endShape();
  pop();
}

function generateStars() {
  push();
  translate(width/2, height/2);
  let noiseScale = 0.02;
  let a = 0;
  for(let i = 0; i < 200; i++) {
    a += 97;
    let len = map(noise(0, i), 0, 1, 10, width/2);
    let v = p5.Vector.fromAngle(a, len);
    drawStar(v.x, v.y, noise(i, 0)*2);
  }  
  for(let i = 0; i < 50; i++) {
    a += 97;
    let len = map(noise(0, i), 0, 1, 1, width/4);
    let v = p5.Vector.fromAngle(a, len);
    drawStar(v.x, v.y, noise(i, 0)*2);
  }  
  pop();
}

function drawStar(x, y, scale) {
  let off = (abs(offset)/30*5);
  fill(220, 220, 255, 4);
  for(let i = 0; i < 4; i++) {
    circle(x, y, off+10*scale*1.2*(pow(0.8, i)));
  }
  fill(255, 100);
  circle(x, y, off/4+1.5*scale);
}

function distToLine(linePoint1, linePoint2, point) {
  
  d1 = p5.Vector.sub(linePoint2, linePoint1);
  d2 = p5.Vector.sub(point, linePoint1);
  l1 = d1.mag();
  
  dotp = constrain(d2.dot(d1.normalize()), 0, l1);
      
  let vec = p5.Vector.add(linePoint1, d1.mult(dotp));
  return point.dist(vec);
  
}


class ClockNumber {
  constructor(lines, x, y, randomness, density) {
    this.lines = lines;
    this.x = x;
    this.y = y;
    this.allstars = [];
    this.lines.forEach(element => element.generate(randomness, this.allstars, density, 0.3));

  }

  drawNumber() {
    push();
    translate(this.x, this.y);
    this.lines.forEach(element => element.drawSelf());

    stroke(255,255,255,200);
    strokeWeight(0.1);
    for(let i = 0; i < this.allstars.length-1; i++) {
      for(let j = 0; j < this.allstars.length-1; j++) {
        if(i == j) continue;
        let p1 = this.allstars[i].pos();
        let p2 = this.allstars[j].pos();
        if(p1.dist(p2) < 15) {
          line(p1.x, p1.y, p2.x, p2.y);
        }
      }
    }

    pop();
  }
}


class NumLine {
  constructor(end1, end2) {
    this.end1 = end1;
    this.end2 = end2;
    this.units = ceil(end1.dist(end2)/25);
    this.stars = [];
    this.decorationstars = [];
  }

  generate(randomness, starlist, density, decorationDensity) {
    for(let i = 0; i < density*this.units; i++) {
      let t = i/(density*this.units);
      let vec = p5.Vector.lerp(this.end1, this.end2, t);
      this.stars.push(new NumStar(this, vec.x + random(-randomness,randomness), vec.y + random(-randomness,randomness)));

      if(random() > 1-decorationDensity) this.decorationstars.push(new NumStar(this, vec.x + random(-randomness*5,randomness*5), vec.y + random(-randomness*5,randomness*5)));

    }

    starlist.push.apply(starlist, this.stars);

  }

  drawSelf() {
    //stroke(255);
    //line(this.end1.x, this.end1.y, this.end2.x, this.end2.y);
    this.stars.forEach(element => element.drawSelf());
    this.decorationstars.forEach(element => element.drawSelf());
  }
}


class NumStar {
  constructor(homeLine, x, y) {
    this.distance = 0;
    this.x = x;
    this.y = y;
    this.originx = x;
    this.originy = y;
  }

  drawSelf() {
    noStroke();
    fill(255,255,255,10);
    circle(this.x, this.y, 3);
    fill(255,255,255,random(100,255));
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    if(dist(this.x, this.y, this.originx, this.originy) > 6) {
      let newvec = p5.Vector.lerp(createVector(this.x, this.y), createVector(this.originx, this.originy), 0.1);
      this.x = newvec.x;
      this.y = newvec.y;
    }
    circle(this.x, this.y, 1);
  }

  pos() {
    return createVector(this.x, this.y);
  }
}



