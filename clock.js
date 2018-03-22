
function setup() {
  createCanvas(960, 500);
  angleMode(DEGREES);
}

function draw () {
  background(200);
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
  fill(255, 255, 255, 45);
  textSize(205)
    rotate(sa1)
    rotate(-85)
    text (s, -6, 7)

    fill(255)
    textSize(8)
    text (mi, -6, 4)

    pop();

  push();
  noStroke();
  fill(255);


  text ('DATE' + '  -  '+ d, -30, 90)

    pop();

  push();
  noStroke()
    fill(255);
  textSize(20)

    text (h + ':' + m, -25, -75)

    pop();
    
    
}
