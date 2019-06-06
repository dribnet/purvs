// import toxi.geom.*;
// import toxi.geom.mesh2d.Voronoi;
// import Voronoi from toxi.geom.mesh2d;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let graphicElements=[];

let sourceFile = "input_3.png";
let maskFile   = "mask_1.png";
let outputFile = "artwork_3.png";

let graphicFile1 = "graphic.png";
// let graphicFile2 = "graphic_3.png";


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
  // sourceImg.filter(BLUR, 50)
}

function draw () {
  let outerPointSpacing = 60;
  let outerPoints = getPoints(outerPointSpacing);

  // Inner Points
  let innerPointSpacing = 15;
  let innerPoints = getPoints(innerPointSpacing);

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

      // if (maskImg.get(x,y)[0] < 50) continue;

      let pix = color(sourceImg.get(x,y));
      // stroke(lerpColor(pix, color(255), 0.2));
      stroke(pix);
      fill(pix);
      triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

      // lower right triangle
      x = (p2.x + p3.x + p4.x) / 3.0;
      y = (p2.y + p3.y + p4.y) / 3.0;
      pix = color(sourceImg.get(x,y));
      fill(pix);
      triangle(p2.x, p2.y, p4.x, p4.y, p3.x, p3.y);

      // fill(lerpColor(pix, color(255), 0.6));
      // ellipse(p1.x, p1.y, 3,3);

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


function getPoints(pointSpacing) {
  let points = [];
  for (let y = 0; y < sourceImg.height; y+=pointSpacing) {
    points.push([]);
    for (let x = 0; x < sourceImg.width; x+=pointSpacing) {

      let randVec = p5.Vector.random2D();
      randVec.setMag(pointSpacing/5, pointSpacing/3);
      let yindex = round(y/pointSpacing);
      if (yindex % 2 == 0){
        points[points.length - 1].push(createVector(x + randVec.x, y + randVec.y));
      } else {
        points[points.length - 1].push(createVector(x + randVec.x, y + randVec.y));

      }
    }

  }
  return points;
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
