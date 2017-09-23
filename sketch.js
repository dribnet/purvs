


function setup () {
  createCanvas(960, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
  strokeWeight(0.5);
  var r;
  var shape;
}

function draw (){
  var al;
  clear();
  for(var posy = 0; posy <=height*2; posy+=height/3){
    for(var posx = 0; posx <= width; posx+=(width/6)){
    	shape = whatShape(); //decide what shape to draw
      	al=255;
      	for(var i = 2; i < 200; i+=2){
	        stroke(172, 237, 255, al);
	        push();
	        translate(posx, posy);
	        rotate(i);
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
  noLoop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}



function whatShape(){
	r = focusedRandom(0, 100);

	if(r<60){
		return("square");
	}
	else{
		return("triangle");
	}

}

function mousePressed(){
	draw();
}











