var col1 = "#f4eb42"
function setup () {
  createCanvas(960, 500);
  angleMode(DEGREES);
  var origin = [width/2,height/2];
}

function draw () {
  background(225);
  stroke(245);
  fill(col1); 
  beginShape();
  for(vari=0; i<6; i++){

  }
  endShape();

}


function mousePressed(){

} 
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


function debugGrid(inc, no){ //increment size, number of increments
  var lineSize;
  if (width<height){
    lineSize = height;
  } 
  else{
    lineSize = width;
  }
  for(var i= -no;i<no;i++){
    push();
    translate(width/2,height/2 + i*inc);
    line(-lineSize,0,lineSize,0);
    pop();


  }
}

function triOnEdge(x1,y1,x2,y2,B,C){ // returns a point given two other points and an angle relative to each
	//lower case == angles
	//upper case == side lengths
	if(B+C < 180){
		var a = distanceBetween([x1,y1],[x2,y2]);
		var A = 180 - B - C;
		var b = (a*sinOf(B))/sinOf(A);
		var c = (a*sinOf(C))/sinOf(A);
		console.log(findNewPoint(x1,y1,B,c));
		console.log(findNewPoint(x2,y2,C,b));
		return findNewPoint(x1,y2,B,c);
	}
}

function distanceBetween(p1, p2) {
    var a = p1[0] - p2[0];
    var b = p1[1] - p2[1];
    var c = Math.abs(Math.sqrt(a * a + b * b));
    return c;
}

function findNewPoint(x, y, angle, distance) {
    var result =[];

    result[0] = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
    result[1] = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);

    return result;
}

function sinOf(degrees){
	return Math.sin(degrees*Math.PI/180);
}