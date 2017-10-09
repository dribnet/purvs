/* This is an example of 10print translated into the PS4 framework */

var blue = "#0000AA"
var light_blue = "#0088FF"

function drawLayer(p5, x1, x2, y1, y2, z) {
  var noiseScale=1/16.0;
  var longRad = 16; // center to corner
  var shortRad = Math.sqrt((longRad*longRad)-(longRad/2)*(longRad/2))*2; //center to edge

  var startx = longRad * 2  * (Math.floor(x1/(longRad*2)-1));
  var starty = shortRad * 2 * (Math.floor(y1/(shortRad*2))-1);
  var endx   = longRad * 2  * (Math.floor(x2/(longRad*2)) + 1);
  var endy   = shortRad * 2 * (Math.floor(y2/(shortRad*2)) + 1);

  var cell_width  = 256 / ((x2-x1)/(longRad * 2)); 
  var cell_height = 256 / ((y2-y1)/(shortRad * 2)); 

  var loopCountX = 0;
  for(var x=startx; x<endx; x+= 2* cell_width/3) {
    var n_x = x / cell_width;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    var yOff = 0;

    if(loopCountX %2 == 0){
      yOff = -cell_height/4;
    }

    for(var y=starty; y<endy; y+=cell_height/2) {
      var n_y = y / cell_height/2;
      var y_pos = mapY(y);
      var noiseValue = p5.noise(x * noiseScale, y+yOff * noiseScale, z);
      var fillValue = 255*(noiseValue);
      p5.noStroke();
      p5.fill(fillValue*0.9,fillValue*0.9,230);
      hex(x_pos, y_pos+yOff, longRad,p5);
      }

    loopCountX ++;
    }

    p5.fill("red");
    p5.ellipse(256/2,256/2,15);


  function mapX(nx){
      return p5.map(nx, x1, x2, 0, 256);
    }

  function mapY(ny){
      return p5.map(ny, y1, y2, 0, 256);
    }

    
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.noiseDetail(8,0.5);
  p5.background(light_blue);
  //p5.stroke(light_blue);
  drawLayer(p5, x1, x2, y1, y2, z);
}

function hex(x, y, radius, p5) {
  var npoints = 6;
  var angle = p5.TWO_PI / npoints;
  p5.beginShape();
  for (var a = 0; a < p5.TWO_PI; a += angle) {
    var sx = x + p5.cos(a) * radius;
    var sy = y + p5.sin(a) * radius;
    p5.vertex(sx, sy);
  }
  p5.endShape(p5.CLOSE);
}




// function shortRad(longRad){ // hexagons
// return longRad/Math.cos(30);
// }