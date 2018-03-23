//*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    background(0);
    angleMode(DEGREES);
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;

        strokeWeight(8);
        noFill();
        stroke(255, 100, 150);
        let end1 = map(seconds, 0, 60, 0, 360);
        arc(480, 250, 300, 300, 0, end1);


        strokeWeight(8);
        noFill();
        stroke(33, 191, 107);
        let end2 = map(minutes, 0, 60, 0, 360);
        arc(480, 250, 280, 280, 0, end2);


        strokeWeight(8);
        noFill();
        stroke(232, 134, 31);
        let end3 = map(hours, 0, 24, 0, 360);
        arc(480, 250, 260, 260, 0, end3);

        fill(255);
        noStroke();
        textSize(24);

        text(hours + ':' + minutes + ':' + seconds, 4Clock0, 260);
        textFont('Source Code Pro');

    
        

        

    // }
}
clock1.js#
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); 
  noStroke();

  //Background
  fill(0,227,255);
  rect(100,100,750,300);
  strokeWeight(10);
  stroke(0,159,178);
  rect(100,100,750,300);
  ellipse(0,100,50,50);
  ellipse(100,70,50,50);
  ellipse(200,100,50,50);
  ellipse(170,20,50,50);
  ellipse(300,35,50,50);
  ellipse(20,15,50,50);
  ellipse(500,75,50,50);
  ellipse(400,55,50,50);
  ellipse(600,40,50,50);
  ellipse(700,20,50,50);
  ellipse(800,40,50,50);
  ellipse(900,80,50,50);
  ellipse(950,10,50,50);
  ellipse(930,200,50,50);
  ellipse(850,300,50,50);



  noFill();
  stroke(0,159,178);
  strokeWeight(10);
  ellipse(0,200,50,50);
  ellipse(40,400,50,50);
  ellipse(400,451,50,50);
  ellipse(170,400,50,50);
  ellipse(300,490,50,50);
  ellipse(20,500,50,50);
  ellipse(500,480,50,50);
  ellipse(360,380,50,50);
  ellipse(600,360,50,50);
  ellipse(700,520,50,50);
  ellipse(800,540,50,50);
  ellipse(900,380,50,50);
  ellipse(950,490,50,50);
  ellipse(800,450,50,50);


  

  
  //Big Four
  fill(255,83,13);
  rect(290, 170, 30, 170);
  rect(260,180,30,30);
  rect(240,210,20,20);
  rect(210,230,30,50);
  rect(210,250,150,30);

//Four
  stroke(0,159,178);
  strokeWeight(3);
  fill(171,56,9);
  rect(570,230,10,58);
  rect(561,240,10,10);
  rect(557,250,5,5);
  rect(548,255,10,10);
  rect(548,260,40,10);

//Eight
  rect(620,235,7,20);
  rect(649,235,7,20);
  rect(628,230,20,7);
  rect(628,255,20,7);
  rect(620,260,7,20);
  rect(649,260,7,20);
  rect(628,280,20,7);

  
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}