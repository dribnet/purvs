var col1;
var col2;
var curCol;
var curRandomSeed;

function setup () {
  createCanvas(960, 500);
  angleMode(DEGREES);
  col1 = color('#f3ff54');
  col2 = color('#ff4f4f');
  curCol = color('#f4eb42');
  curRandomSeed = int(focusedRandom(0, 100));
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  background(225);
  noStroke();
  var steps = 40;
  for(var i = steps; i>0; i--){
   curCol = lerpColor(col1,col2,map(i,0,steps,0,1));
   fill(curCol);
   curCol = lerpColor(col2,col1,map(i,0,steps,0.4,0.6));
   stroke(curCol);
   if (i%4 >0){noStroke();}
   drawHex(width/2,height/2,40+15*i,-14*i);
  }
}




function mousePressed(){
changeRandomSeed();
} 

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function drawHex(x,y,rad,rot){
  orig = [x,y];
  
  beginShape();
  var curVert;
  for(var s=0; s<7; s++){
    curVert = findNewPoint(orig,60*s+rot,rad);
    vertex(curVert[0],curVert[1]);
      }
  endShape();
}

function triOnEdge(p1,p2,B,C){ // returns a point given two other points and an angle relative to each
	//lower case == angles
	//upper case == side lengths
	if(B+C < 180){
		var a = distanceBetween(p1,p2);
		var A = 180 - B - C;
		var b = (a*sinOf(B))/sinOf(A);
		var c = (a*sinOf(C))/sinOf(A);
		console.log(findNewPoint(p2,B,c));
		console.log(findNewPoint(p2,C,b));
		return findNewPoint(p1,B,c);
	}
}

function distanceBetween(p1, p2) {
    var a = p1[0] - p2[0];
    var b = p1[1] - p2[1];
    var c = Math.abs(Math.sqrt(a * a + b * b));
    return c;
}

function findNewPoint(point, angle, distance) {
    var result =[];

    result[0] = Math.round(Math.cos(angle * Math.PI / 180) * distance + point[0]);
    result[1] = Math.round(Math.sin(angle * Math.PI / 180) * distance + point[1]);

    return result;
}

function sinOf(degrees){
	return Math.sin(degrees*Math.PI/180);
}

function debugShowPoints(arr, txtsiz) {
    push();
    textSize(0.25);
    if (txtsiz) {
        textSize(txtsiz);
    }
    noStroke();
    for (var i = arr.length - 1; i >= 0; i--) {
        text(i, arr[i][0], arr[i][1]);
    }

    pop();
}