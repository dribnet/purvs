var LineList = [];
var Xaxis = 0;
var Yaxis = 0;
var num = 0;
var color1 = 56;
var color2 = 103;
var color3 = 200;
var x1;
var numOld;
var density = 0;
var land = false;
var curRandomSeed;

function setup () { 
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  rectMode(CORNERS);
    fill(0);
    rect(0,0,1000,1000);
}
function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed(){
    changeRandomSeed();
  if (land == false){
    fill(0);
    rect(0,0,1000,1000);
  }
    else{
    fill(0);
    rect(0,0,1000,1000);
  }
      Yaxis = 0;
  Xaxis = 0;
  density = 0;
}

function draw () {
 // //WallPapper
    if (land == false){
	var ran = focusedRandom(1,10);
		if (ran < 2){
			stroke(1);
		} else { 
			noStroke();
			   }
	 color1 = 56;
	 color2 = 103;
	 color3 = 200;
    while(Xaxis < 1040){
      while(Yaxis < 580){

        num = focusedRandom(0,100);
        alpha = focusedRandom(0,120);
        fill(color1 , color2, color3, alpha);
        ellipse(Xaxis, Yaxis, 20, 20);

        num = focusedRandom(0,100);
        alpha = focusedRandom(0,120);
        fill(color1 , color2 , color3 , alpha);
        ellipse(Xaxis - 10, Yaxis - 10, 20, 20);

        num = focusedRandom(0,100);
        if (num < 50){
        num = focusedRandom(0,100);
        alpha = focusedRandom(50,120);
        fill(color1 + num, color2 + num, color3 + num, alpha);
        ellipse(Xaxis, Yaxis, 10, 10);
      }

        num = focusedRandom(0,100);
        if (num < 50){
        num = focusedRandom(0,100);
        alpha = focusedRandom(50,120);
        fill(color1 + num, color2 + num, color3 + num, alpha);
        ellipse(Xaxis - 10, Yaxis - 10, 10, 10);
      }
        Yaxis += 20;
      }

      Yaxis = 0;
      Xaxis+= 20;
    }
  } 
  else {  
    Yaxis = 600
    while(Xaxis < 1040){
      noStroke();
		var Hight;
		if (Xaxis > 300 && Xaxis < 620){
			Hight = focusedRandom(200,300);
		} else {
			Hight = focusedRandom(50,200);
		}
      while(Yaxis > Hight){
	  
      var snow = focusedRandom (125,175);
      var rock = focusedRandom (225,275);
      var dirt = focusedRandom (325,375);
      var grass = focusedRandom (425,475);
      if (Yaxis < snow){
          color1 = 184;
          color2 = 184;
          color3 = 175;
		} else if (Yaxis < rock){
          color1 = 98;
          color2 = 98;
          color3 = 93;
		
        } else if (Yaxis < grass){
          color1 = 58;
          color2 = 120;
          color3 = 56;
        } else {
         color1 = 56;
         color2 = 103;
         color3 = 200;
        }
        alpha = focusedRandom(60,120);
        fill(color1 , color2, color3, alpha);
        ellipse(Xaxis,Yaxis,Yaxis/30,Yaxis/30);
        alpha = focusedRandom(60,120);
        fill(color1 , color2, color3, alpha);
        ellipse(Xaxis- 10,Yaxis,Yaxis/30,Yaxis/30);
        alpha = focusedRandom(60,120);
        fill(color1 , color2, color3, alpha);
        ellipse(Xaxis,Yaxis-10,Yaxis/30,Yaxis/30);
        alpha = focusedRandom(60,120);
        fill(color1 , color2, color3, alpha);
        ellipse(Xaxis- 10,Yaxis-10,Yaxis/30,Yaxis/30);
        Yaxis -= 20;
      }
      Yaxis = 600;
      Xaxis+= 20;

      }

  }  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }  
  if (key == 'w'){
    fill(0);
    rect(0,0,1000,1000);
    land = false;
    mousePressed();
    draw();
  }
  if (key == 'l'){
    fill(255);
    rect(0,0,1000,1000);
    land = true;
    mousePressed();
    draw();
  }

}
