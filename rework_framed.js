/* This is an example of 10print translated into the PS4 framework */

var blue = "#0000AA";
var light_blue = "#0088FF";

function drawLayer(p5, x1, x2, y1, y2, z,zoom) {
  var noiseScale=1/64.0;
  var hex_per = 2;
  var seg_size = x2-x1;
  console.log(seg_size);
  var index_x = p5.map(x1+seg_size/2, x1, x2, 0, 256);
  var index_y = p5.map(y1+seg_size/2, y1, y2, 0, 256);

  var index = new Index(index_x, index_y, 5, 21.1, p5);
  index.draw();

    p5.fill("red");
    p5.ellipse(256/2,256/2,5);    
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.noiseDetail(8,0.5);
  p5.ellipseMode(p5.CENTER);
  //p5.background(light_blue);
  //p5.stroke(light_blue);
  p5.noStroke();
  drawLayer(p5, x1, x2, y1, y2, z,zoom);
  p5.noFill();
  p5.stroke(255, 0, 0)
 // p5.rect(0, 0, 255, 255);
}



// function shortRad(longRad){ // hexagons
// return longRad/Math.cos(30);
// }
