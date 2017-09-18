function setup () {
  createCanvas(960, 500);
  curRandomSeed = focusedRandom(0, 100);
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
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  oceanwave();
  islands();
  
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
	while(w < 100){
		i = 0;
  		while(i < 100){
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

function islands(){
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
  		
  		translate(i*15 - 100 + ((i+w) * curRandomSeed/20),w*20 - 50);
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
