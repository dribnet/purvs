function setup () {
  createCanvas(2000, 1000);
  curRandomSeed = focusedRandom(0, 100);
  isleheight = 0;
  islespot = 0;
  isleheight1 = 0;
  islespot1 = 0;
  isleheight2 = 0;
  islespot2 = 0;
  isleheight3 = 0;
  islespot3 = 0;
  fisherx = 0;
  fishery = 0;
  fisherx2 = 0;
  fishery2 = 0;
  fisherx3 = 0;
  fishery3 = 0;
  fishelx = 0;
  fishely = 0;
  fishelx2 = 0;
  fishely2 = 0;
  fishelx3 = 0;
  fishely3 = 0;
  shipx = 0;
  shipy = 0;
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function draw () {
  //if (mouseIsPressed) {
  //  fill(0);
  //}
  //else {
   // fill(255);
  //}
 // ellipse(mouseX, mouseY, 80, 80);
 background(200);

 height = 1000;
 length = 2000;
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  oceanwave();
  startisland();
  building(210,10,3);
  
  building(80,30,1);
  building(150,200,0);
  

  //fisherleft(250,200);

  //right fisherman
  if(fishery == 0){
  	fishery = random(0,1) * height;
  }
  if(fisherx == 0){
  	fisherx = random(0,1) * length;
  }
  if(fisherx < 1500 && fishery < 900){
  	fisherx == 1740;
  }
  fisherright(fisherx,fishery);

  if(fishery2 == 0){
  	fishery2 = random(0,1) * height;
  }
  if(fisherx2 == 0){
  	fisherx2 = random(0,1) * length;
  }
  if(fisherx2 < 1500 && fishery2 < 900){
  	fisherx2 == 1640;
  }
  fisherright(fisherx2,fishery2);

  if(fishery3 == 0){
  	fishery3 = random(0,1) * height;
  }
  if(fisherx3 == 0){
  	fisherx3 = random(0,1) * length;
  }
  if(fisherx3 < 1500 && fishery3 < 900){
  	fisherx3 == 1740;
  }
  fisherright(fisherx3,fishery3);


// left fisherman
  if(fishely == 0){
  	fishely = random(0,1) * height;
  }
  if(fishelx == 0){
  	fishelx = random(0,1) * length;
  }
  if(fishelx < 1500 && fishely < 900){
  	fishelx == 1640;
  }
  fisherleft(fishelx,fishely);

  if(fishely2 == 0){
  	fishely2 = random(0,1) * height;
  }
  if(fishelx2 == 0){
  	fishelx2 = random(0,1) * length;
  }
  if(fishelx2 < 1500 && fishely2 < 900){
  	fishelx2 == 1640;
  }
  fisherleft(fishelx2,fishely2);

  if(fishely3 == 0){
  	fishely3 = random(0,1) * height;
  }
  if(fishelx3 == 0){
  	fishelx3 = random(0,1) * length;
  }
  if(fishelx3 < 1500 && fishely3 < 900){
  	fishelx3 == 1640;
  }
  fisherright(fishelx3,fishely3);
  

  building(0,300,0);
  building(120,300,2);

  //islands

  if(isleheight == 0){
  	isleheight = random(0,1) * height;
  }
  if(islespot == 0){
  	islespot = random(0,1) * length;
  }
  if(islespot < 1500 && isleheight < 900){
  	islespot == 1740;
  }
 islands(islespot,isleheight, 3);
 fern(islespot-30,isleheight-15);
 fern(islespot-20, isleheight-17);


 if(isleheight1 == 0){
  	isleheight1 = random(0,1) * height;
  }
  if(islespot1 == 0){
  	islespot1 = random(0,1) * length;
  }
  if(islespot1 < 1700 && isleheight1 < 900){
  	islespot1 == 1940;
  }
 islands(islespot1,isleheight1, 15);
 fern(islespot1+20,isleheight1+30);
 fern(islespot1+50, isleheight1+150);
 fern(islespot1+100, isleheight1+80);
 fern(islespot1+90, isleheight1+65);
  fern(islespot1+150, isleheight1+45);


 if(isleheight2 == 0){
  	isleheight2 = random(0,1) * height;
  }
  if(islespot2 == 0){
  	islespot2 = random(0,1) * length;
  }
  if(islespot2 < 1600 && isleheight2 < 900){
  	islespot2 == 1740;
  }
 islands(islespot2,isleheight2, 7);
 fern(islespot2+20,isleheight2+10);
 fern(islespot2+1, isleheight2+15);

 if(isleheight3 == 0){
  	isleheight3 = random(0,1) * height;
  }
  if(islespot3 == 0){
  	islespot3 = random(0,1) * length;
  }
  if(islespot3 < 1500 && isleheight3 < 900){
  	islespot3 == 1740;
  }
 islands(islespot3,isleheight3, 5);
 fern(islespot3+20,isleheight3+10);
 fern(islespot3+1, isleheight3+15);

 jetty(400,100);
 jetty(400,500);

if(shipy == 0){
  	shipy = random(0,1) * height;
  }
  if(shipx == 0){
  	shipx = random(0,1) * length;
  }
  if(shipx < 1500 && shipy < 800){
  	shipx == 1740;
  }
 ship(shipx,shipy);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function oceanwave(){
fill(0,204,204);
  stroke(255);
  strokeWeight(3);
  var w = 0;
  var i = 0;
  
  	w = 0;
	while(w < 200){
		i = 0;
  		while(i < 200){
  		push();
  		
  		translate(i*15 - 100,w*20 - 100);
  		rotate(frameCount * 0,01);
  		//ellipsoid(50,50,50);
  		bezier(0,25,50,75,65,150,100,200);
  		pop();
  		i++;
		}
		
		w = w + 1;
		//pop();
	}



}

function islands(x, y, size){
fill(153,76,0);
	stroke(76,153,0);
	strokeWeight(4);

	var w = 0;
  	var i = 0;
  
  	w = 0;
	while(w < size){
		i = 0;
  		while(i < size){
  		push();
  		
  		translate(i*15 - 100 + ((i+w) * 5),w*20 - 50);
  		
  		//ellipsoid(50,50,50);
  		quad(x,y+25,x+50,y+55,x+65,y+35,x+100,y+100);
  		pop();
  		i++;
		}
		
		w = w + 1;
		//pop();
	}

}


function rightface(x,y){
  fill(255,178,102);
  stroke(255);
  ellipse(x,y,40,40);
  line(x+10,y-5,x+15,y+5);
  ellipse(x,y-7,10,10);

}

function leftface(x,y){
fill(255,178,102);
 stroke(255);
 ellipse(x,y,40,40);
 line(x-10,y-5,x-15,y+5);
 ellipse(x,y-5,10,10);


}

function fishingbodyright(x,y){
	fill(255,178,102);
 stroke(255);
line(x,y+20,x,y+60);
line(x,y+60,x+10,y+80);
line(x,y+60,x-10,y+80);
line(x,y+40,x+30,y+5);
line(x,y+30,x+30,y+5);

//fishing pole
stroke(255,178,102);
line(x+30,y+5,x+70,y-20);
curve(x+70,y-20,x+70,y-20,x+120,y+30,x+100,y);

}

function fishingbodyleft(x,y){
	fill(255,178,102);
 stroke(255);
line(x,y+20,x,y+60);
line(x,y+60,x+10,y+80);
line(x,y+60,x-10,y+80);
line(x,y+40,x-30,y+5);
line(x,y+30,x-30,y+5);

//fishing pole
stroke(255,178,102);
line(x-30,y+5,x-70,y-20);
curve(x-70,y-20,x-70,y-20,x-120,y+30,x-100,y);


}

function building(x,y,win){
fill(255);
stroke(102,178,255);
rect(x,y,100,200);

fill(102,178,255);
stroke(255);
if(win >=1){
rect(x+30,y+20,30,30);}

if(win >=2){
rect(x+10,y+20,30,30);}

if(win >=3){
rect(x+50,y+40,30,30);}
}

function startisland(){
fill(153,76,0);
	stroke(76,153,0);
	strokeWeight(4);

	var w = 0;
  var i = 0;
  
  	w = 0;
	while(w < 30){
		i = 0;
  		while(i < 30){
  		push();
  		
  		translate(i*15 - 100 + ((i+w) * 1),w*20 - 50);
  		rotate(frameCount * 0,01);
  		//ellipsoid(50,50,50);
  		quad(0,25,50,55,65,35,100,100);
  		pop();
  		i++;
		}
		
		w = w + 1;
		//pop();
	}

}

function fisherleft(x,y){
boat(x,y);
leftface(x,y);
fishingbodyleft(x,y);

}

function fisherright(x,y){
boat(x,y);
rightface(x,y);
fishingbodyright(x,y);
}

function boat(x,y){
fill(255,178,102);
 stroke(255);
ellipse(x,y+70,100,30);
triangle(x+30,y+70,x+40,y+70,x+40,y+80);


}

function jetty(x,y) {
	fill(255);
	stroke(102,178,255);
	rect(x,y,200,50);
}


function ship(x,y){
fill(255,178,102);
 stroke(255);

 arc(x, y, 350, 100, 0, PI);
 rect(x-25,y-50,200,50);

line(x-145,y,x-115,y+30);
line(x-95,y,x-65,y+30);
line(x-55,y,x-25,y+30);
}

function fern(x,y){
	fill(0,153,0);
	stroke(153,255,153);
	line(x,y,x+30,y+40);
	ellipse(x,y,4,20);
	ellipse(x+15,y+20,4,20);
	

}