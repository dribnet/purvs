var max_thickness = 64;
var ball_radius = 16;
var line_width = 4;
var noiseScale = 1/200;
var hex_size = 30;

function getHexColor(p5, x, y) {
    var noise = p5.noise(x * noiseScale, y * noiseScale);
    var col1 = p5.color(40,40,250);
    var col2 = p5.color("#ffd263");
    var col = p5.lerpColor(col1, col2, noise);
    return col
}

function snap_to_grid(num, gsize) {
    return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    // global noise setting
    p5.noiseDetail(8,0.5);

    // debug - show border
    var tile_size = x2 - x1;
    var tile_cols = tile_size / hex_size;
    var tile_rows = tile_size / (hex_size * 3 / 4);

    // var hex_sizey = 3 * hex_size / 4;
    var hex_sizey = 3 * hex_size / 4;

      var max_shift = max_thickness + hex_size;
      var min_x = snap_to_grid(x1 - max_shift, hex_size);
      var max_x = snap_to_grid(x2 + max_shift + hex_size, hex_size);
      var min_y = snap_to_grid(y1 - max_shift, hex_sizey);
      var max_y = snap_to_grid(y2 + max_shift + hex_sizey, hex_sizey);


    //p5.background(255);

    p5.fill(0, 0, 128);
    var xCount = 0;
    var yCount = 0;
    var rowCount = Math.floor(min_y / hex_sizey)

    for (var y = min_y; y < max_y; y += hex_sizey) {

        if (rowCount % 2 === 0) {
            offset = hex_size / 2;
        } else {
            var offset = 0;
        }
        for (var x = min_x; x < max_x; x += hex_size) {

            var hex_point = [x + offset, y - hex_size];
            var x_pos = p5.map(hex_point[0], x1, x2, 0, 256);
            var y_pos = p5.map(hex_point[1], y1, y2, 0, 256);

            if(p5.noise(hex_point[0], hex_point[1])>0.5){
                var hex_color = getHexColor(p5, hex_point[0], hex_point[1]);
                p5.stroke(0, 0, 128);
                var rad = p5.map(hex_size / 2, 0, x2 - x1, 0, 256);
                drawHex(p5, x_pos, y_pos, hex_color, rad);
                // p5.ellipse(x_pos, y_pos, rad/2);
            }

        }
        rowCount++;
    }

    p5.noStroke();

    function mapPoint(x, y) {
        return [p5.map(x, x1, x2, 0, 256),
            p5.map(y, y1, y2, 0, 256)
        ]
    }
  p5.noFill();
  p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
function noiseVal() {}
function drawHexes(min_x, max_x, min_y, max_y) {
    for (var x = min_x; x < max_x; x += hex_size) {}
    for (var y = min_y; y < max_y; y += hex_size * 3 / 4) {

    }
}

function drawHex(p5, x, y, hex_color, rad) {
    p5.push();
    p5.strokeWeight(1);
    // p5.fill(getHexColor(p5, x, y, 1 / 20));
    p5.fill(hex_color);

    p5.beginShape();

    for (var i = 0; i < 6; i++) {
        var point = hexCorner(x, y, rad, i);
        p5.vertex(point[0], point[1]);
    }
    p5.endShape(p5.CLOSE);
    p5.pop();
}

function hexCorner(x, y, rad, i) {
    // return point at a specific corner
    // corners indexed from right-bottom corner on hex moving clockwise

    var angle_deg = (60 * i) + 30;
    var angle_rad = Math.radians(angle_deg);
    angle_rad %= Math.PI * 2;
    var point = [
        x + rad * Math.cos(angle_rad),
        y + rad * Math.sin(angle_rad)
    ];
    var regWidth = Math.sqrt(3) / 2 * (rad * 2);

    // stretch side points for a hex with equal width & height
    if (i == 5 || i === 0) {
        point[0] += Math.abs((rad * 2 - regWidth)) / 2;
    }
    if (i == 3 || i == 2) {
        point[0] -= (Math.abs(rad * 2 - regWidth)) / 2;
    }
    return point;
}


// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};