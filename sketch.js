
var inMapMode = true;
var curRandomSeed;

function setup () {
  createCanvas(960, 500);
  curRandomSeed = int(random(0, 100));
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
  strokeWeight(0.5);
  var r;
  var shape;
  var randomSize;
  noiseScale = 0.003;
  noiseScaleMid = 0.005;
  noiseScaleMidFront = 0.007;
  noiseScaleFront = 0.009;

}


function draw (){
  randomSeed(curRandomSeed*20000);
  noiseSeed(curRandomSeed);
  randomSize = random(0, 100);
  var from = color('#0f34a9');
  var to = color("#df3621");
  var to2= color('#fefa8e');
  var col;
  var c;

  if(!inMapMode){ //PATTERN
    var al;
    clear();
    noFill();
    strokeWeight(0.5);
    for(var posy = 0; posy <=height*2; posy+=height/3){
      for(var posx = 0; posx <= width; posx+=(width/6)){
        shape = whatShape(); //decide what shape to draw
          al=255;
          for(var i = 2; i < 200; i+=2){
            stroke(172, 237, 255, al);
            push();
            translate(posx, posy);
            rotate(i);
            rect(0, 0, i, i);
            if(shape == "square"){
              rect(0, 0, i, i);
            }
            else{
              triangle(0, (-5/3)-(i), (-5/3)-(i), (2.5/3)+(i/1.7), (5/3)+(i), (2.5/3)+(i/1.7));
            }
            pop();
            al-=2.5;
          }
        }
      }

    }else{  //LANDSCAPE
      clear();
      strokeWeight(1);
      for(var y = 0; y < height/2; y++){ //background gradient
        c = map(y, 0, (height/2)-1, 0, 1);
        col = lerpColor(from, to, c);
        stroke(col);
        line(0, y, width, y);
      }
      for(var y = height/2; y <= height; y++){ //background gradient
        c = map(y, height/2, height, 0, 1);
        col = lerpColor(to, to2, c);
        stroke(col);
        line(0, y, width, y);
      }



      noStroke();
      console.log(randomSize);

      fill(255, 231, 69, 20); //back sun layer
      ellipse(width/2, height-height/3, 130 + randomSize +randomSize/3, 130+ randomSize +randomSize/3);

      fill(255, 231, 69, 30);
      ellipse(width/2, height-height/3, 115+ randomSize +randomSize/5, 115+ randomSize +randomSize/5);


      fill(255, 231, 69, 80);
      ellipse(width/2, height-height/3, 105+ randomSize +randomSize/8, 105+ randomSize +randomSize/8);

      fill(255, 231, 69);  //front sun layer
      ellipse(width/2, height-height/3, 100+ randomSize, 100+ randomSize);





      for(var x = 0; x <= width; x++){  //back mountains
        stroke("#523b5b");
        var noiseVal = noise((1000+x)*noiseScale);
        line(x, 300+noiseVal*100, x, height)
      }

      for(var x = 0; x <= width; x++){ //back mid mountains
        stroke("#152951");
        var noiseVal = noise((1000+x)*noiseScaleMid);
        line(x, 325+noiseVal*100, x, height)
      }

      for(var x = 0; x <= width; x++){ //front mid mountains
        stroke("#09193a");
        var noiseVal = noise((1000+x)*noiseScaleMidFront);
        line(x, 360+noiseVal*100, x, height)
      }

      for(var x = 0; x <= width; x++){ //front mountains
        stroke("#03030c");
        var noiseVal = noise((1000+x)*noiseScaleFront);
        line(x, 380+noiseVal*100, x, height)
      }





    }
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == ' ') {
    inMapMode = !inMapMode;
  }
}


function whatShape(){
	r = random(0, 100);
	if(r<60){
		return("square");
	}
	else{
		return("triangle");
	}
}


function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}


function mousePressed() {
    changeRandomSeed();
}












