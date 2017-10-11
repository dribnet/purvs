/* This is an example of 10print translated into the PS4 framework */

var blue = "#0000AA"
var light_blue = "#0088FF"

function drawLayer(p5, x1, x2, y1, y2, z,zoom) {
  var noiseScale=1/64.0;
  var hex_per = 9;

  var seg_size = x2-x1;
  var hex_width = 256/hex_per * Math.pow(zoom+1,2);
  var hex_height =  Math.sqrt(3/2)*2; //center to edge
  console.log(seg_size%(hex_height+hex_width)/4);
  var startx = hex_width * (Math.floor(x1/hex_width));
  var starty = hex_height * (Math.floor(y1/hex_height-8));
  var endx   = hex_width * (Math.floor(x2/hex_width)+8);
  var endy   = hex_height * (Math.floor(y2/hex_height)+8);

  var loopCountX = 0;
  for(var x=startx; x<endx; x+= hex_width/2+hex_width/4) {
    var x_pos = p5.map(x, x1, x2, 0, 256);
    var yOff = 0;
    if(loopCountX %2 == 0){
      yOff = -hex_height/4;
    }

    for(var y=starty; y<endy; y+=hex_height/2) {
      var y_pos = mapY(y);
      var noiseValue = p5.noise(x * noiseScale + 100000, (y+yOff) * noiseScale + 100000, z);
      var fillValue = 255*(noiseValue);
      p5.noStroke();
      p5.fill(fillValue*0.9,fillValue*0.9,230);
      hex(x_pos, y_pos+yOff, hex_width/2,p5);
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
  p5.ellipseMode(p5.CENTER);
  //p5.background(light_blue);
  //p5.stroke(light_blue);
  drawLayer(p5, x1, x2, y1, y2, z,zoom);
  p5.noFill();
  p5.stroke(255, 0, 0)
  p5.rect(0, 0, 255, 255);
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


  var h = Math.sqrt((radius*radius)-(radius/2)*(radius/2));
  p5.endShape(p5.CLOSE);
  p5.push();
  p5.stroke("red")
  p5.noFill();
  p5.rectMode(p5.CENTER);
 // p5.rect(x,y-h/2,radius*2-4,h);
  p5.pop();

}

function pythag_c(b,c){
return Math.sqrt(Math.pow(c,2)-Math.pow(b,2));

}


// function shortRad(longRad){ // hexagons
// return longRad/Math.cos(30);
// }