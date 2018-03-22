function setup() {
  createCanvas(960, 500);
  angleMode(DEGREES);
}

function draw () {
  background(200);
  push();
  for (var i = 0; i < 960; i++) {
  var r = random(30,40);
  fill(180)
ellipse(480, 250, 300, 300);
  
  stroke(r * 5);
  line(0, i, 960 + r, i);
}
pop();

  noFill();
  strokeWeight(2)
    stroke(2)
    ellipse(480, 250, 300, 300);
  translate(480, 250);
  rotate(-90)

    let h = hour();
  let m = minute();
  let s = second();
  let d = day();
  let mi = millis(); 



  noFill()
    strokeWeight(40);
  stroke(74, 143, 229);
  let ha = map (h % 12, 0, 12, 0, 360);
  arc (0, 0, 300, 300, 0, ha); 

  strokeWeight(20);
  stroke(75, 229, 98);
  let ma = map (m, 0, 60, 0, 360);
  arc (0, 0, 300, 300, 0, ma); 

  strokeWeight(8);
  stroke(234, 168, 60);
  let sa = map (s, 0, 60, 0, 360);
  arc (0, 0, 300, 300, 0, sa); 

  let mia = map (mi, 0, 60, 0, 360);


  noStroke()

    fill(74, 143, 229);
  let ha1 = map (h % 12, 0, 12, 0, 360);
  arc (0, 0, 100, 100, 0, ha1); 

  fill(75, 229, 98);
  let ma1 = map (m, 0, 60, 0, 360);
  arc (0, 0, 80, 80, 0, ma1); 

  fill(234, 168, 60)
    let sa1 = map (s, 0, 60, 0, 360);
  arc (0, 0, 55, 55, 0, sa1); 




  rotate(90)





push();
  noStroke();
  fill(255);
  textFont('Courier New') ;
textSize(12)
  text ('DATE' + ' - '+ d, -30, 90)

   


  textFont('Courier New') ;
  noStroke()
    fill(255);
  textSize(20)

    text (nf(h, 2) + ':' + nf(m, 2), -30, -75)

    pop();
    
      rotate(sa1)
    rotate(-85)
    fill(255)
    textFont('Courier New')
    textSize(20)
    text ('            ' + nf(s, 2), -6, 4)
}