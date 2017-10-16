/* This is an example of 10print translated into the PS4 framework */
var blue = "#0000AA";
var light_blue = "#0088FF";
var noiseScale = 1 / 80.0;
function drawLayer(p5, x1, x2, y1, y2, z, zoom) {
    var seg_size = x2 - x1;
    var centerX = p5.map(x1 + seg_size / 2, x1, x2, 0, 256);
    var centerY = p5.map(y1 + seg_size / 2, y1, y2, 0, 256);

    var grid_size = 13 - (zoom *2) ; //must be odd number >1
    //var grid_size = 3
    grid_size *= 2;

    var hex_size = (128 / ((grid_size - 2) * 3 / 4));

    var index = new Index(0, 0, grid_size,grid_size, hex_size, p5,x1,y1,z);
    index.draw();
    console.log(index.keys.length);
    p5.fill("white");
    // p5.ellipse(256/2,256/2,hex_size*2);    
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    p5.noiseDetail(8, 0.5);
    p5.ellipseMode(p5.CENTER);
    //p5.background(light_blue);
    //p5.stroke(light_blue);
    p5.noStroke();
    drawLayer(p5, x1, x2, y1, y2, z, zoom);
    p5.noFill();
    p5.stroke(255, 0, 0)
   // p5.rect(0, 0, 255, 255);
}

function height_to_width(height) {
    var width = Math.sqrt(3) / 2 * height;
    return width

}

function width_to_height(width) {
    var height = width / Math.sqrt(3) / 2;
    return height
}
