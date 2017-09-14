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
  background(0);
  fill(col1);
  stroke(col1);

  var hex = recordHex(width/2,height/2,120,0);
  drawHex(width/2,height/2,120,0);
  for(var i = 0;i<hex.length;i++){
    var point = hex[i];
  }

  var tips = [];
  tips.push(triOnEdge(hex[0],hex[1],-120,-20));
  tips.push(triOnEdge(hex[2],hex[3],-120,-20));
  tips.push(triOnEdge(hex[4],hex[5],-120,-20));

  fill(col2);
  

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

function recordHex(x,y,rad,rot){
  orig = [x,y];
  var ret = [];
  for(var s=0; s<6; s++){
    ret.push(findNewPoint(orig,60*s+rot,rad));
      }
  return ret;
}

function triOnEdge(p1,p2,B,C){ // returns a point given two other points and an angle relative to each
	//lower case == angles
	//upper case == side lengths
  //       /\
  //      / A\
  //     /    \
  //    c      b
  //   /        \
  //  /B____a___C\

		var a = distanceBetween(p1,p2);
		var A = 180 - B - C;
		var b = (a*sinOf(B))/sinOf(A);
		var c = (a*sinOf(C))/sinOf(A);
    B+=angleBetween(p1,p2)
		var ret = findNewPoint(p1,B,c);
    beginShape();
    vertex(p1[0],p1[1]);
    vertex(p2[0],p2[1]);
    vertex(ret[0],ret[1]);
    vertex(p1[0],p1[1]);
    endShape();
    return ret;

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

function angleBetween(p1, p2) {
    //angle given with reference to horizon line 
    var c;
    c = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180 / Math.PI;
    return c;
}