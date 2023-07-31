/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
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



background(210,4,45); //  red/cherry
//Image(img,0,0,960,500)
fill(200); // dark grey
textSize(40);
textAlign(CENTER, CENTER);
text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);

drawFlower1(200,200,obj.seconds)
if (obj.seconds>=10){
  drawFlower2(400,200,obj.seconds)

}
if (obj.seconds>=20){
  drawFlower3(600,200,obj.seconds)
}

if (obj.seconds>=30){
  drawFlower4(200,400,obj.seconds)
}
if (obj.seconds>=40){
  drawFlower5(400,400,obj.seconds)
}
if (obj.seconds>=50){
  drawFlower6(600,400,obj.seconds)
}

drawSun();

}
let millisSize =0
function drawFlower1(x,y,curSec,){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=0){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=1){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=2){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=3){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=4){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=5){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=6){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=7){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=8){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=9){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=10){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

 } 
 function drawFlower2(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=10){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=11){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=12){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=13){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=14){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=15){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=16){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=17){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=18){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=19){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=20){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
 
 } 
 function drawFlower3(x,y,curSec){
 
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=20){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=21){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=22){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=23){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=24){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=25){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=26){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=27){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=28){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=29){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=30){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
  
 } 
 function drawFlower4(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=30){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=31){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=32){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=33){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=34){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=35){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=36){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=37){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=38){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=39){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=40){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
 } 
 function drawFlower5(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=40){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=41){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=42){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=43){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=44){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=45){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=46){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=47){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=48){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=49){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=50){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
 } 
 function drawFlower6(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=50){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=51){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=52){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=53){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=54){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=55){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=56){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=57){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=58){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=59){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=59){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}


 } 



//seconds

function drawSun(){
noStroke()

fill(255,191,0);// Yellow
ellipse(width / 3, 350, 150);

fill(255,191,0,100);

//fill(255,191,0,150);

if(obj.millis<=500){
millisSize= map(obj.millis,0,1000,150,300)
millisSize= map(obj.millis,0,1000,130,300)
}
else if(obj.millis>=500){
millisSize= map(obj.millis,0,1000,300,150)
millisSize= map(obj.millis,0,1000,300,130)
}
ellipse(width/3,350,millisSize)
}

