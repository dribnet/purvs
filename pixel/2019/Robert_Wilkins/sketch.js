// import toxi.geom.*;
// import toxi.geom.mesh2d.Voronoi;
// import Voronoi from toxi.geom.mesh2d;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.png";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);

}

function setup () {
  let main_canvas = createCanvas(sourceImg.width, sourceImg.height);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  sourceImg.filter(BLUR, 50)
}

function draw () {
  let outerPointSpacing = 200;
  let outerPoints = getPoints(outerPointSpacing, outerPointSpacing/4, outerPointSpacing/3);

  // Inner Points
  let innerPointSpacing = 18;
  let innerPoints = getPoints(innerPointSpacing, innerPointSpacing/5, innerPointSpacing/3);

  fill(0);
  rect(0, 0, sourceImg.width, sourceImg.height);

  // Draw Outer Points
  strokeWeight(0.7);
  let colors = [color(0, 184, 255), color(189, 0, 255)];//, color(0, 200, 124)]; //
  for (let i = 0; i < outerPoints.length-1; i++) {
    for (let j = 0; j < outerPoints[i].length-1; j++) {
      let p1 = outerPoints[i][j];
      let p2 = outerPoints[i+1][j];
      let p3 = outerPoints[i][j+1];
      let p4 = outerPoints[i+1][j+1];


      // upper left triangle
      let x = (p1.x + p2.x + p3.x) / 3.0;
      let y = (p1.y + p2.y + p3.y) / 3.0;

      let randCol = colors[round(random(0, colors.length-1))];
      let randVal = random(0.115, 0.13);
      // stroke(0);
      stroke(color(lerpColor(color(0), randCol, randVal)));

      fill(color(lerpColor(color(0), randCol, randVal)));
      triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

      // lower right triangle
      x = (p2.x + p3.x + p4.x) / 3.0;
      y = (p2.y + p3.y + p4.y) / 3.0;

      // randCol = colors[round(random(0, colors.length-1))];
      randVal = random(0.095, 0.11);

      // randCol = colors[round(random(0, colors.length-1))];
      fill(color(lerpColor(color(0), randCol, randVal)));
      triangle(p2.x, p2.y, p4.x, p4.y, p3.x, p3.y);

      // fill(lerpColor(color(0), randCol, 0.4));
      // ellipse(p1.x, p1.y, outerPointSpacing/10,outerPointSpacing/10);

    }
  }


  // Draw inner points
  strokeWeight(0.7);
  for (let i = 0; i < innerPoints.length-1; i++) {
    for (let j = 0; j < innerPoints[i].length-1; j++) {
      let p1 = innerPoints[i][j];
      let p2 = innerPoints[i+1][j];
      let p3 = innerPoints[i][j+1];
      let p4 = innerPoints[i+1][j+1];

      // upper left triangle
      let x = (p1.x + p2.x + p3.x) / 3.0;
      let y = (p1.y + p2.y + p3.y) / 3.0;

      if (maskImg.get(x,y)[0] < 50) continue;

      let pix = color(sourceImg.get(x,y));
      stroke(pix);
      fill(pix);
      triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

      // lower right triangle
      x = (p2.x + p3.x + p4.x) / 3.0;
      y = (p2.y + p3.y + p4.y) / 3.0;
      pix = color(sourceImg.get(x,y));
      fill(pix);
      stroke(pix);
      triangle(p2.x, p2.y, p4.x, p4.y, p3.x, p3.y);


    }
  }



  renderCounter = renderCounter + 1;
  if(renderCounter > 0) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}


function getPoints(pointSpacing, minRand, maxRand) {
  let points = [];
  for (let y = 0-pointSpacing; y < sourceImg.height+pointSpacing; y+=pointSpacing) {
    points.push([]);
    points[points.length-1].push(createVector(0, y+random(-pointSpacing/4, pointSpacing/4)));
    for (let x = pointSpacing; x < sourceImg.width; x+=pointSpacing) {

      let randVec = p5.Vector.random2D();
      randVec.setMag(random(minRand, maxRand));
      let xindex = round(x/pointSpacing);
      if (xindex % 2 == 0){
        points[points.length - 1].push(createVector(x + randVec.x, y + randVec.y));
      } else {
        points[points.length - 1].push(createVector(x + randVec.x, y + randVec.y + pointSpacing/8));

      }
    }
    points[points.length-1].push(createVector(sourceImg.width, y));

  }
  return points;
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
