/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
var offset = 0;
var offset2 = 0;

var moonStars = [];

var prevmin = undefined;
var prevhour = undefined;
var testing = [];

let font;

let fontPoints = {
  romanI: [],
  romanV: [],
  romanX: []
};

let fontBounds  = {
  romanI: [],
  romanV: [],
  romanX: []
};

function preload() {
  //font = loadFont('HEAVEN MINE.otf');
  font = loadFont('MartianMono_SemiCondensed-Medium.ttf')
}

function draw_clock(obj) {
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

  const romanNumerals = [
    [fontPoints.romanI],
    [fontPoints.romanI, fontPoints.romanI],
    [fontPoints.romanI, fontPoints.romanI, fontPoints.romanI],
    [fontPoints.romanI, fontPoints.romanV],
    [fontPoints.romanV],
    [fontPoints.romanV, fontPoints.romanI],
    [fontPoints.romanV,fontPoints.romanI,fontPoints.romanI],
    [fontPoints.romanV,fontPoints.romanI,fontPoints.romanI,fontPoints.romanI],
    [fontPoints.romanI,fontPoints.romanX],
    [fontPoints.romanX],
    [fontPoints.romanX,fontPoints.romanI],
    [fontPoints.romanX,fontPoints.romanI,fontPoints.romanI],
  ];

  const numarray = [numbers.zero, numbers.one, numbers.two, numbers.three, numbers.four, numbers.five, numbers.six, numbers.seven, numbers.eight, numbers.nine];

  if(prevhour == undefined) {
    fontPoints.romanI = font.textToPoints('I', 0, 0, 12, {
      sampleFactor: 5,
      simplifyThreshold: 0
    });
    fontBounds.romanI = font.textBounds('I', 0, 0, 12);

    fontPoints.romanV = font.textToPoints('V', 0, 0, 12, {
      sampleFactor: 5,
      simplifyThreshold: 0
    });
    fontBounds.romanV = font.textBounds('V', 0, 0, 12);

    fontPoints.romanX = font.textToPoints('X', 0, 0, 12, {
      sampleFactor: 5,
      simplifyThreshold: 0
    });
    fontBounds.romanX = font.textBounds('X', 0, 0, 12);

  }



  if(prevmin == undefined || obj.minutes != prevmin || obj.hours != prevhour) {

    let v1 = createVector(0,0);
    let v2 = createVector(100, 100);

    let dig1 = floor(obj.hours/10);
    let dig2 = obj.hours%10;
    let dig3 = floor(obj.minutes/10);
    let dig4 = obj.minutes%10;


    if(dig1 != floor(prevhour/10) || prevhour == undefined) testing[0]=(new ClockNumber(getNumberLines(numarray[floor(obj.hours/10)]), -220, -62, 8, 8));
    if(dig2 != prevhour%10 || prevhour == undefined) testing[1]=(new ClockNumber(getNumberLines(numarray[obj.hours%10]), -130, -62, 8, 8));
    testing[2]=(new ClockNumber(getNumberLines(numbers.colon), -40, -62, 8, 8));
    if(dig3 != floor(prevmin/10) || prevmin == undefined) testing[3]=(new ClockNumber(getNumberLines(numarray[floor(obj.minutes/10)]), 30, -62, 8, 8));
    if(dig4 != prevmin%10 || prevmin == undefined) testing[4]=(new ClockNumber(getNumberLines(numarray[obj.minutes%10]), 120, -62, 8, 8));

    prevmin = obj.minutes;
    prevhour = obj.hours;

    
  }

  
  if(offset > 30) offset = -30;
  offset += 0.5;
  offset2 += 0.5;

  var offs = abs(offset);

  noStroke();
  let noiseScale = 0.02
  let c1 = color(0,5,5,40);
  let c2 = color(0,120,120,40);
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

  drawCircle(1.5, width/2, height/2.1, 150+offs, 30);
  drawCircle(2, width/1.9, height/1.8, 70-offs, 40);
  drawCircle(1.2, width/2.1, height/1.9, 0-offs, 25);
  drawCircle(2.3, width/2, height/2, 200-offs, 30);
  drawCircle(1.9, width/1.9, height/2, 30+offs, 50);
  drawCircle(1.8, width/2.1, height/2.1, 140-offs, 30);
  drawCircle(0.9, width/1.95, height/1.9, 90+offs, 25);

  generateStars();

  for(let i = 0; i < 12; i++) {
    fill(200,200,250,4);
    ellipse(width/2, height/2, width*(pow(0.8, i)), width*(pow(0.8, i)));
  }

  fill(0,0,100,50);
  rect(0,0,width,height);


  push();
  translate(width/2,height/2);
  scale(0.75);
  for(let i = 0; i < testing.length; i++) {
    testing[i].drawNumber();
  }
  pop();


  if(obj.seconds_until_alarm == 0) alarm();
  



  drawCircle(1, width/2, height/2, 150+offset2, 100);
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(width/2, height/2, 420);

  stroke(255,255,255,2.5);
  for(let i = 0; i < 10; i++) {
    strokeWeight(50-(4.5*i));
    circle(width/2, height/2, 410);
  }

  
  push();
  translate(width/2, height/2);
  rotate(PI/6);
  for(let i = 1; i < 13; i++) {
    if(i%2==0) {
      fill(255,255,255,100);
      noStroke();
    } else {
      stroke(255);
      noFill();
      strokeWeight(0.3);
    }

    beginShape();
    vertex(0, 220);
    vertex(3, 215);
    vertex(0, 210);
    vertex(-3, 215);
    endShape(CLOSE);

    stroke(255);
    noFill();
    strokeWeight(0.3);

    for(let n = 0; n < romanNumerals[i-1].length; n++) {

      beginShape();
      for (let j = 0; j < romanNumerals[i-1][n].length; j++) {
        let p = romanNumerals[i-1][n][j];
        vertex(p.x+(fontBounds.romanV.w+1)*(n-(romanNumerals[i-1].length/2)), p.y-230);
      }
      endShape();
    }

    rotate(PI/6);
  }
  pop();
  

  let sec = obj.seconds;
  let mill = obj.millis;

  let saturnAngle = map(sec + mill/1000, 0, 60, 0, 2*PI);
  let saturnVec = p5.Vector.fromAngle(saturnAngle-PI/2, 208);

  let starAngle = map(obj.hours%12 + obj.minutes/60, 0, 12, 0, 2*PI);
  let starVec = p5.Vector.fromAngle(starAngle-PI/2, 208);

  let moonAngle = map(obj.minutes + obj.seconds/60, 0, 60, 0, 2*PI);
  let moonVec = p5.Vector.fromAngle(moonAngle-PI/2, 208);

  
  let alarmVec;
  if(obj.seconds_until_alarm > 0) {
    let alarmSec = obj.seconds_until_alarm;
    let tta = (sec+mill/1000 + alarmSec);
    let circleTTA = ceil(tta)%60;
    let displayTTA = circleTTA + (tta-circleTTA);

    let alarmAngle = map(displayTTA, 0, 60, 0, 2*PI);
    alarmVec = p5.Vector.fromAngle(alarmAngle-PI/2, 208);

    console.log(saturnAngle, alarmAngle);

    noFill();
    stroke(140,255,250);
    strokeWeight(5);

    arc(width/2, height/2, 410, 410, saturnAngle-PI/2, alarmAngle-PI/2);

    for(let i = 0; i < 5; i++) {
      stroke(140,255,250,10);
      strokeWeight(30-i*5);
      arc(width/2, height/2, 410, 410, saturnAngle-PI/2, alarmAngle-PI/2);
    }


    drawPlanet(alarmVec, bell);
  }

  drawPlanet(moonVec, moon);
  drawPlanet(starVec, planetStar);
  drawPlanet(saturnVec, saturn);
  

  for(let i = 0; i < floor(random(0, 5)); i++) {
    moonStars.push(new NumStar(undefined, moonVec.x+random(-15, 15), moonVec.y+random(-15,15)));
    moonStars.push(new NumStar(undefined, starVec.x+random(-15, 15), starVec.y+random(-15,15)));
    moonStars.push(new NumStar(undefined, saturnVec.x+random(-15, 15), saturnVec.y+random(-15,15)));
    if(obj.seconds_until_alarm > 0) {
      moonStars.push(new NumStar(undefined, alarmVec.x+random(-15, 15), alarmVec.y+random(-15,15)));
    }
  }

  push();
  translate(width/2, height/2);
  for(let i = moonStars.length-1; i >=0; i--) {
    if(moonStars[i].lifetime <= 0) {
      moonStars.splice(i, 1);
    } else {
      moonStars[i].drawSelf();
    }
  }

  for(let i = alarmStars.length-1; i >=0; i--) {
    if(alarmStars[i].lifetime <= 0) {
      alarmStars.splice(i, 1);
    } else {
      alarmStars[i].drawSelfAlarm();
    }
  }

  pop();

  pushStars();

}

function pushStars() {

  let mousepos = createVector(mouseX-width/2, mouseY-height/2);

  noStroke();
  fill(255,0,0);
  
  for(let i = 0; i < testing.length; i++) {
    for(let j = 0; j < testing[i].getStars().length; j++) {
      let star = testing[i].getStars()[j];
      let starpos = p5.Vector.add(star.pos(), createVector(testing[i].x, testing[i].y)).mult(0.75);

      if(starpos.dist(mousepos) < 15) {
        
        star.setVelocity(p5.Vector.sub(starpos, mousepos).setMag(10));

      }
    }
  }


}



function getNumberLines(points) {
  lines = []
  for(let i = 1; i < points.length; i++) {
    if(points[i] == 0 || points[i-1] == 0) continue;
    lines.push(new NumLine(points[i-1], points[i]));
  }

  return lines;

}

function moon() {
  stroke(255,255,255,7);
  fill(255);
  beginShape();
  curveVertex(4, -8);
  curveVertex(0, -9);
  curveVertex(-7, -7);
  curveVertex(-10, 0);
  curveVertex(-7, 7);
  curveVertex(0, 9);
  curveVertex(4, 8);
  curveVertex(4, 8);
  curveVertex(-2, 5);
  curveVertex(-4, 0);
  curveVertex(-2, -5);
  curveVertex(4, -8);
  curveVertex(4, -8);
  endShape(CLOSE);
}

function saturn() {
  stroke(255,255,255,7);
  fill(255);
  circle(0,0, 15);
  noFill();
  stroke(255);
  strokeWeight(0.6);
  ellipse(0,0, 25, 8);
}

function planetStar() {
  stroke(255,255,255,7);
  fill(255);

  beginShape();
  for(let i = 0; i < 10; i++) {
    let a = i*((2*PI)/10);
    let l = i%2==0 ? 10 : 5;
    let v = p5.Vector.fromAngle(a, l);
    vertex(v.x, v.y);
  }
  endShape(CLOSE);

}

function bell() {
  stroke(255,255,255,7);
  fill(255,255,255);
  push();
  scale(0.8);

  beginShape();
  curveVertex(-10, 7);
  curveVertex(-10, 7);
  curveVertex(10, 7);
  curveVertex(10, 7);
  curveVertex(8, 3);
  curveVertex(9, -4);
  curveVertex(0, -10);
  curveVertex(-9, -4);
  curveVertex(-8, 3);
  curveVertex(-10, 7);
  curveVertex(-10, 7);
  endShape(CLOSE);

  noFill();
  stroke(255,255,255);
  strokeWeight(1);
  circle(0,7,6);

  pop();
}


function drawPlanet(planetVector, planet) {
  
  push();
  translate(width/2+planetVector.x, height/2+planetVector.y);
  scale(1.3)

  for(let i = 0; i < 5; i++) {

    strokeWeight(14-i*2.5);
    planet();
    
  }

  pop();
}


let alarmStars = [];

function alarm() {
  let mult = map(pow(obj.millis/1000, 3), 0, 1, 1, 0.3);

  noiseLayer(30*mult, 1.3*mult, 3);
  noiseLayer(30*mult, 1.8*mult, 4);
  
  console.log(obj.seconds_until_alarm);

  let amount = floor(map(pow(obj.millis/800, 3), 0, 1, 20, 0));
  if(obj.millis < 200) {
    for(let i = 0; i < amount; i++) {
      let a = random(0, 2*PI);
      let l = 210 + random(0, 20);
      let v = p5.Vector.fromAngle(a, l);

      let star = new NumStar(undefined, v.x, v.y);
      star.setVelocity(p5.Vector.fromAngle(a, random(5, 10)));
      alarmStars.push(star);

    }
  }

  noiseLayer(30*mult, 1*mult, 1.5);

}


function noiseLayer(opacity, size, yoffset) {
  push();
  translate(width/2, height/2);

  let l = 210;
  let points = 30;
  
  let a = -PI/2;
  let v = p5.Vector.fromAngle(a, l+100);

  noStroke();
  fill(140,255,250, opacity);

  beginShape();
  curveVertex(v, v.y);
  curveVertex(v.x, v.y);
  for(let i = 0; i < points+1; i++) {
    a = (2*PI/points)*i-PI/2;
    v = p5.Vector.fromAngle(a, l);
    curveVertex(v.x, v.y);
    if(i==0) curveVertex(v.x, v.y);
  }
  curveVertex(v.x, v.y);

  let enda = a;

  let noiseScale = 0.7;

  for(let i = 0; i < points+1; i++) {
    let noisePoint = noise(i*noiseScale, offset2*0.1+yoffset);
    let noiseSize = map(pow(noisePoint, 3), 0, 1, 40, 300)*size;

    let a = -1*(2*PI/points)*i+enda;
    v = p5.Vector.fromAngle(a, l+noiseSize);
    curveVertex(v.x, v.y);
    if(i==0) curveVertex(v.x, v.y);
  }

  endShape(CLOSE);

  pop();
}


function drawCircle(scale, x, y, rot, opacity) {
  push();
  translate(x, y);
  rotate(rot*0.02);
  noFill();
  stroke(255, 255, 255, opacity);
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

  getStars() {
    return this.allstars;
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
    stroke(230,230,255,2);
    strokeWeight(60);
    for(let i = 0; i < 6; i++) {
      strokeWeight(50-8*i);
      line(this.end1.x, this.end1.y, this.end2.x, this.end2.y);
    }
    
    this.stars.forEach(element => element.drawSelf());
    this.decorationstars.forEach(element => element.drawSelf());
  }
}


class NumStar {
  constructor(homeLine, x, y) {
    this.lifetime = 25;
    this.x = x;
    this.y = y;
    this.originx = x;
    this.originy = y;
    this.velocity = createVector(0,0);
    this.rot = 0;
    this.size = 0;
  }

  drawSelf() {
    this.lifetime--;
    noStroke();
    fill(255,255,255,10);
    circle(this.x, this.y, 3);
    fill(255,255,255,random(100,255));
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    if(dist(this.x, this.y, this.originx, this.originy) > 6) {
      let newvec = p5.Vector.lerp(createVector(this.x, this.y), createVector(this.originx, this.originy), 0.1);
      this.x = newvec.x;
      this.y = newvec.y;

      let between = createVector(this.originx, this.originy).sub(newvec).setMag(0.5);
      this.velocity = this.velocity.add(between);
    }
    circle(this.x, this.y, 1);
  }

  drawSelfAlarm() {
    this.lifetime--;
    this.rot += 0.1;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.x += random(-1, 1);
    this.y += random(-1, 1);

    noStroke();
    let opac = map(this.lifetime, 25, 0, 255, 0);
    fill(255,255,255,opac);
    push();
    translate(this.x, this.y);
    rotate(this.rot);
    rect(-this.size/2, -this.size/2, this.size, this.size);

    fill(130,255,255,5);
    for(let i = 0; i < 5; i++) {
      circle(0,0,22-i*4);
    }

    pop();

  }

  setVelocity(newVelocity) {
    this.velocity = newVelocity;
    this.rot = offset2;
    this.size = random(2, 6);
  }

  pos() {
    return createVector(this.x, this.y);
  }

  lifetime() {
    return this.lifetime;
  }
}



