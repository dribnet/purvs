var curRandomSeed;
var colours;


function setup (){
    curRandomSeed = int(focusedRandom(0, 100));
    createCanvas(907, 500);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}


function draw (){
    resetFocusedRandom(curRandomSeed);

    var x = 0;
    var y = 0;
    colours = ["255, 240, 112","139, 186, 179"];
    colours = random(colours);

// draws lines behind the diamonds
    strokeWeight(0.5);
    line(226.5, 0, 226.5, height);
    line(452.5, 0, 452.5, height);
    line(678.5, 0, 678.5, height);


// draws rows
rotate(radians(-45))
for (var i = 0; i < 560; i = i+80) { 
  for (var j = 0; j < 500; j = j+80) {
    var dimensions = random(100, 150, 50);
    var dimensionsArc = random(50, 200);
    var doubleDots = random(50, 100);

    push();
    translate(x, y);
    rotate(radians(90));
    noFill();
    stroke(0);
    strokeWeight(random(0.2, 1));

    // arcs in the midground
    push();
    noStroke();
    fill(colours);
    arc(x, y, dimensionsArc, dimensionsArc, -0.8, radians(135));
    pop();


    // diamonds in the foreground
    rect(x, y, dimensions, dimensions);

    // diamonds in the background
    push();
    stroke(200);
    strokeWeight(0.1);
    rectMode(CENTER);
    rect(x, y, dimensions, dimensions);
    pop();

    noStroke();
    fill(145, 187, 255);
    // random dots around the pattern
    // dots in center of points
    if(dimensions < 120){
    ellipseMode(CENTER);
    ellipse(x, y, 10, 10);
    }

    // dots on top verticies of rects
    if(dimensions > 140){
    ellipseMode(CENTER);
    ellipse(x, (y+doubleDots), 7, 7);
    }

    if(dimensions > 140){
    ellipseMode(CENTER);
    ellipse((x+doubleDots), y, 7, 7);
    }

    pop();


    x += 160;
    }
x=0;
y += 80; 

}
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
