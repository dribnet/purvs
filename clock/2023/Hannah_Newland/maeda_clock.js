// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); // BLACK 
  strokeWeight(3);
  stroke(60);
  fill(255); //White
 
  let TopPointY = 100
  let LeftNumCentreX = 250
  let EllipseWidth = 50
 // centre colon
  ellipse(425,TopPointY+50,EllipseWidth);
  ellipse(425,TopPointY+250,EllipseWidth);
// left number
  ellipse(LeftNumCentreX,TopPointY,EllipseWidth);
  ellipse(LeftNumCentreX-50,TopPointY,EllipseWidth);
  ellipse(LeftNumCentreX+50, TopPointY, EllipseWidth);
 
  ellipse(LeftNumCentreX+100,TopPointY+50,EllipseWidth);
  ellipse(LeftNumCentreX+100,TopPointY+100,EllipseWidth);
  ellipse(LeftNumCentreX+100,TopPointY+150,EllipseWidth);
  ellipse(LeftNumCentreX+100,TopPointY+200,EllipseWidth);
  ellipse(LeftNumCentreX+100,TopPointY+250,EllipseWidth);
 
  ellipse(LeftNumCentreX,TopPointY+200,EllipseWidth);
  ellipse(LeftNumCentreX+50,TopPointY+200,EllipseWidth);
  ellipse(LeftNumCentreX-50,TopPointY+200,EllipseWidth);

  ellipse(LeftNumCentreX-50,TopPointY+300,EllipseWidth);
  ellipse(LeftNumCentreX,TopPointY+300,EllipseWidth);
  ellipse(LeftNumCentreX+50, TopPointY+300, EllipseWidth);

  ellipse(LeftNumCentreX-100,TopPointY+50,EllipseWidth);
  ellipse(LeftNumCentreX-100,TopPointY+100,EllipseWidth);
  ellipse(LeftNumCentreX-100,TopPointY+150,EllipseWidth);


// right first number
let RightFirstNumCentreX = 600

  ellipse(RightFirstNumCentreX,TopPointY,EllipseWidth);
  ellipse(RightFirstNumCentreX-50,TopPointY,EllipseWidth);
  ellipse(RightFirstNumCentreX+50, TopPointY, EllipseWidth);
  
  ellipse(RightFirstNumCentreX+100,TopPointY+50,EllipseWidth);
  ellipse(RightFirstNumCentreX+100,TopPointY+100,EllipseWidth);
  ellipse(RightFirstNumCentreX+100,TopPointY+150,EllipseWidth);
  ellipse(RightFirstNumCentreX+100,TopPointY+200,EllipseWidth);
  ellipse(RightFirstNumCentreX+100,TopPointY+250,EllipseWidth);

  ellipse(RightFirstNumCentreX-100,TopPointY+50,EllipseWidth);
  ellipse(RightFirstNumCentreX-100,TopPointY+100,EllipseWidth);
  ellipse(RightFirstNumCentreX-100,TopPointY+150,EllipseWidth);
  ellipse(RightFirstNumCentreX-100,TopPointY+200,EllipseWidth);
  ellipse(RightFirstNumCentreX-100,TopPointY+250,EllipseWidth);

  ellipse(RightFirstNumCentreX,TopPointY+300,EllipseWidth);
  ellipse(RightFirstNumCentreX-50,TopPointY+300,EllipseWidth);
  ellipse(RightFirstNumCentreX+50, TopPointY+300, EllipseWidth);


// right second number

let RightSecondNumCentreX = 850
ellipse(RightSecondNumCentreX,TopPointY,EllipseWidth);
ellipse(RightSecondNumCentreX,TopPointY+50,EllipseWidth); 
ellipse(RightSecondNumCentreX,TopPointY+100,EllipseWidth); 
ellipse(RightSecondNumCentreX,TopPointY+150,EllipseWidth);
ellipse(RightSecondNumCentreX,TopPointY+200,EllipseWidth);
ellipse(RightSecondNumCentreX,TopPointY+250,EllipseWidth); 
ellipse(RightSecondNumCentreX,TopPointY+300,EllipseWidth);   

// clock hands

line(LeftNumCentreX,TopPointY,LeftNumCentreX,TopPointY-25);
line(LeftNumCentreX,TopPointY,LeftNumCentreX-25,TopPointY);

line(LeftNumCentreX-50,TopPointY,LeftNumCentreX-50,TopPointY-25);
line(LeftNumCentreX-50,TopPointY,LeftNumCentreX-75,TopPointY);

line(LeftNumCentreX+50,TopPointY,LeftNumCentreX+50,TopPointY-25);
line(LeftNumCentreX+25,TopPointY,LeftNumCentreX+50,TopPointY);


line(RightFirstNumCentreX,TopPointY,RightFirstNumCentreX,TopPointY-25);
line(RightFirstNumCentreX,TopPointY,RightFirstNumCentreX-25,TopPointY);

line(RightFirstNumCentreX-50,TopPointY,RightFirstNumCentreX-50,TopPointY-25);
line(RightFirstNumCentreX-50,TopPointY,RightFirstNumCentreX-75,TopPointY);

line(RightFirstNumCentreX+50,TopPointY,RightFirstNumCentreX+50,TopPointY-25);
line(RightFirstNumCentreX+25,TopPointY,RightFirstNumCentreX+50,TopPointY);

line(RightSecondNumCentreX,TopPointY,RightSecondNumCentreX,TopPointY-25);
line(RightSecondNumCentreX,TopPointY,RightSecondNumCentreX-25,TopPointY);


line(LeftNumCentreX+100,TopPointY+50,LeftNumCentreX+100,TopPointY+25);
line(LeftNumCentreX+75,TopPointY+50,LeftNumCentreX+100,TopPointY+50);

line(LeftNumCentreX-100,TopPointY+50,LeftNumCentreX-100,TopPointY+25);
line(LeftNumCentreX-125,TopPointY+50,LeftNumCentreX-100,TopPointY+50);

line(425,TopPointY+50, 425,TopPointY+25);
line(425-25,TopPointY+50, 425,TopPointY+50);

line(RightFirstNumCentreX+100,TopPointY+50,RightFirstNumCentreX+100,TopPointY+25);
line(RightFirstNumCentreX+75,TopPointY+50,RightFirstNumCentreX+100,TopPointY+50);

line(RightFirstNumCentreX-100,TopPointY+50,RightFirstNumCentreX-100,TopPointY+25);
line(RightFirstNumCentreX-125,TopPointY+50,RightFirstNumCentreX-100,TopPointY+50);

line(RightSecondNumCentreX,TopPointY+50,RightSecondNumCentreX,TopPointY+25);
line(RightSecondNumCentreX-25,TopPointY+50,RightSecondNumCentreX,TopPointY+50);



line(LeftNumCentreX+100,TopPointY+100,LeftNumCentreX+100,TopPointY+75);
line(LeftNumCentreX+75,TopPointY+100,LeftNumCentreX+100,TopPointY+100);


line(LeftNumCentreX-100,TopPointY+100,LeftNumCentreX-100,TopPointY+75);
line(LeftNumCentreX-125,TopPointY+100,LeftNumCentreX-100,TopPointY+100);


line(RightFirstNumCentreX+100,TopPointY+100,RightFirstNumCentreX+100,TopPointY+75);
line(RightFirstNumCentreX+75,TopPointY+100,RightFirstNumCentreX+100,TopPointY+100);


line(RightFirstNumCentreX-100,TopPointY+100,RightFirstNumCentreX-100,TopPointY+75);
line(RightFirstNumCentreX-125,TopPointY+100,RightFirstNumCentreX-100,TopPointY+100);


line(RightSecondNumCentreX,TopPointY+100,RightSecondNumCentreX,TopPointY+75);
line(RightSecondNumCentreX-25,TopPointY+100,RightSecondNumCentreX,TopPointY+100);



line(LeftNumCentreX+100,TopPointY+150,LeftNumCentreX+100,TopPointY+125);
line(LeftNumCentreX+75,TopPointY+150,LeftNumCentreX+100,TopPointY+150);


line(LeftNumCentreX-100,TopPointY+150,LeftNumCentreX-100,TopPointY+125);
line(LeftNumCentreX-125,TopPointY+150,LeftNumCentreX-100,TopPointY+150);


line(RightFirstNumCentreX+100,TopPointY+150,RightFirstNumCentreX+100,TopPointY+125);
line(RightFirstNumCentreX+75,TopPointY+150,RightFirstNumCentreX+100,TopPointY+150);


line(RightFirstNumCentreX-100,TopPointY+150,RightFirstNumCentreX-100,TopPointY+125);
line(RightFirstNumCentreX-125,TopPointY+150,RightFirstNumCentreX-100,TopPointY+150);


line(RightSecondNumCentreX,TopPointY+150,RightSecondNumCentreX,TopPointY+125);
line(RightSecondNumCentreX-25,TopPointY+150,RightSecondNumCentreX,TopPointY+150);


line(LeftNumCentreX+100,TopPointY+200,LeftNumCentreX+100,TopPointY+175);
line(LeftNumCentreX+75,TopPointY+200,LeftNumCentreX+100,TopPointY+200);


line(LeftNumCentreX,TopPointY+200,LeftNumCentreX,TopPointY+175);
line(LeftNumCentreX-25,TopPointY+200,LeftNumCentreX,TopPointY+200);


line(LeftNumCentreX+50,TopPointY+200,LeftNumCentreX+50,TopPointY+175);
line(LeftNumCentreX+25,TopPointY+200,LeftNumCentreX+50,TopPointY+200);


line(LeftNumCentreX-50,TopPointY+200,LeftNumCentreX-50,TopPointY+175);
line(LeftNumCentreX-75,TopPointY+200,LeftNumCentreX-50,TopPointY+200);


line(RightFirstNumCentreX+100,TopPointY+200,RightFirstNumCentreX+100,TopPointY+175);
line(RightFirstNumCentreX+75,TopPointY+200,RightFirstNumCentreX+100,TopPointY+200);


line(RightFirstNumCentreX-100,TopPointY+200,RightFirstNumCentreX-100,TopPointY+175);
line(RightFirstNumCentreX-125,TopPointY+200,RightFirstNumCentreX-100,TopPointY+200);


line(RightSecondNumCentreX,TopPointY+200,RightSecondNumCentreX,TopPointY+175);
line(RightSecondNumCentreX-25,TopPointY+200,RightSecondNumCentreX,TopPointY+200);




line(LeftNumCentreX+100,TopPointY+250,LeftNumCentreX+100,TopPointY+225);
line(LeftNumCentreX+75,TopPointY+250,LeftNumCentreX+100,TopPointY+250);


line(RightFirstNumCentreX+100,TopPointY+250,RightFirstNumCentreX+100,TopPointY+225);
line(RightFirstNumCentreX+75,TopPointY+250,RightFirstNumCentreX+100,TopPointY+250);


line(RightFirstNumCentreX-100,TopPointY+250,RightFirstNumCentreX-100,TopPointY+225);
line(RightFirstNumCentreX-125,TopPointY+250,RightFirstNumCentreX-100,TopPointY+250);


line(RightSecondNumCentreX,TopPointY+250,RightSecondNumCentreX,TopPointY+225);
line(RightSecondNumCentreX-25,TopPointY+250,RightSecondNumCentreX,TopPointY+250);


line(425,TopPointY+250, 425,TopPointY+225);
line(425-25,TopPointY+250, 425,TopPointY+250);


line(LeftNumCentreX,TopPointY+300,LeftNumCentreX,TopPointY+275);
line(LeftNumCentreX-25,TopPointY+300,LeftNumCentreX,TopPointY+300);


line(LeftNumCentreX+50,TopPointY+300,LeftNumCentreX+50,TopPointY+275);
line(LeftNumCentreX+25,TopPointY+300,LeftNumCentreX+50,TopPointY+300);


line(LeftNumCentreX-50,TopPointY+300,LeftNumCentreX-50,TopPointY+275);
line(LeftNumCentreX-75,TopPointY+300,LeftNumCentreX-50,TopPointY+300);


line(RightFirstNumCentreX,TopPointY+300,RightFirstNumCentreX,TopPointY+275);
line(RightFirstNumCentreX-25,TopPointY+300,RightFirstNumCentreX,TopPointY+300);


line(RightFirstNumCentreX-50,TopPointY+300,RightFirstNumCentreX-50,TopPointY+275);
line(RightFirstNumCentreX-75,TopPointY+300,RightFirstNumCentreX-50,TopPointY+300);


line(RightFirstNumCentreX+50,TopPointY+300,RightFirstNumCentreX+50,TopPointY+275);
line(RightFirstNumCentreX+25,TopPointY+300,RightFirstNumCentreX+50,TopPointY+300);


line(RightSecondNumCentreX,TopPointY+300,RightSecondNumCentreX,TopPointY+275);
line(RightSecondNumCentreX-25,TopPointY+300,RightSecondNumCentreX,TopPointY+300);

}

