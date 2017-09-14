var curRandomSeed;

function setup (){
    curRandomSeed = int(focusedRandom(0, 100));
    createCanvas(960, 500);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}


function draw (){
    resetFocusedRandom(curRandomSeed);

    var x = 0;
    var y = 0;

rotate(radians(-45))
for (var i = 0; i < 2060; i = i+80) { 
  for (var j = 0; j < 1500; j = j+80) {
    push();
    translate(x, y);
    rotate(radians(90));
    noFill();
    stroke(0);
    rect(x, y, focusedRandom(80, 85), focusedRandom(80, 85));
    pop();
    x += 160;
    }
x=0;
y += 80; 

}

    //line(30, 0, 30, 60);
    // beginShape();
    // vertex(30, 0); // top point
    // vertex(60, 30);   // right point
    // vertex(30, 60); // bottom point
    // vertex(0, 30);   // left point
    // vertex(30, 0); // top point
    // endShape();

}



function keyTyped(){
  if (key == '!') {
    saveBlocksImages();
  }
}
