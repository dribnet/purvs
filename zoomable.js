var max_thickness = 64;
var hex_size = 16;
var noiseScale = 1/250;

var biome_normal = [
[0,"#94b9d1","deepsea"], 
[0.53,"#bed6e5","shallows"],
[0.54,"#f2efc4","beach"],
[0.56,"#DBE7C4","dunes"],
[0.562,"#b8d8b3","grass"],
[0.675,"#cde5c9","plains"],
[0.71,"#9ac189","forest"],
[0.69,"#b8d8b3","grass"],// out of order lower value will lerp only, not draw 
[0.73,"#cde5c9","plains"],
[0.75,"#c9d8c3","mountain"],
[0.84,"#fafafd","snow"],
[1,"#ffffff","end"]
];

var biome_desert = [
[0,"#94b9d1","deepsea"], 
[0.62,"#BDDCDF","shallows"],
[0.6385,"#ffffed","beach"],
[0.695,"#fcf3cf","desert"], 
[0.735,"#efe9d5","foothills"],
[0.75,"#d4e0ba","scrub"],
[0.76,"#f4dfd2","cliffs"],
[0.85,"#e3eeef","grey_peaks"],
[0.9,"#ffffed","white_peaks"],
[1,"#A0A0A0","name"]
];

var biome_islands = [
[0,"#94b9d1","deepsea"], 
[0.525,"#bed6e5","shallows"],
[0.655,"#bcedf2","tropical_fords"],
[0.6815,"#ffffed","beach"],
[0.6835,"#ede3c2","rocks"],
[0.6855,"#e1f4be","vegetation"],
[0.7,"#ffffed","beach"],
[0.7525,"#fcf3cf","desert"],
[0.815,"#e1f4be","vegetation"],
[0.855,"#bcedf2","tropical_fords"],
[1,"#bed6e5","shallows"]
];

var biome_mountains = [
[0,"#94b9d1","deepsea"], 
[0.52,"#bed6e5","shallows"],
[0.53,"#f7f7d7","dunes"],
[0.58,"#b7d6b3","grass"],
[0.63,"#b6c9a3","plains"],
[0.655,"#6aa06a","forest"],
[0.68,"#b6c9a3","plains"],
[0.72,"#d8d3c3","cliffs"],
[0.78,"#b7b3b7","mountain"],
[0.825,"#fafafd","snow"],
[1,"#ffffff","end"]
];

  function bioNoise(p5,x,y){
    return p5.noise(x * noiseScale/11+10000, y*noiseScale/11+10000, 15); 
}

function noiseVal(p5,x,y) {
    return p5.noise(x * noiseScale +1000000, y * noiseScale +1000000);
}

function getHexColor(p5, x, y) {
    var noise = noiseVal(p5,x, y);
    var bioNoiseval = bioNoise(p5,x,y);
    // more smooth, seperate noise map to modulate biome
    var col1,col2;
    var arraypos;
    var biome;

    if(bioNoiseval>0.0){
        biome = biome_islands;
    }
    if(bioNoiseval>0.475){
        biome = biome_normal;
    }
    if(bioNoiseval>0.575){
        biome = biome_mountains;
    }
    if(bioNoiseval>0.8){
        biome = biome_desert;
    }
    for (arraypos = 0; arraypos < biome.length; arraypos++) {
        if(noise > biome[arraypos][0]&&noise <biome[arraypos+1][0]){
            col1 = p5.color(biome[arraypos][1]);
            col2 = p5.color(biome[arraypos+1][1]);
            break;
        }
    }
    var col = p5.lerpColor(col1, col2, p5.map(noise,biome[arraypos][0],biome[arraypos+1][0 ],0,1));
    return col;
}

function snap_to_grid(num, gsize) {
    return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    // global noise setting
    p5.noiseDetail(8,0.5);

    var hex_sizey = 3 * hex_size / 4;

      var max_shift = hex_size;
      var min_x = snap_to_grid(x1 - max_shift, hex_size);
      var max_x = snap_to_grid(x2 + max_shift + hex_size, hex_size);
      var min_y = snap_to_grid(y1 - max_shift*1.5, hex_sizey);
      var max_y = snap_to_grid(y2 + max_shift*1.5 + hex_sizey, hex_sizey);

    p5.fill(0, 0, 128);
    var rowCount = Math.floor(min_y / hex_sizey);
    var offset;
    for (var y = min_y; y < max_y; y += hex_sizey) {
        if (rowCount % 2 === 0) {
            offset = hex_size / 2;
        } else {
            offset = 0;
        }
        for (var x = min_x; x < max_x; x += hex_size) {

            var hex_pos = [x + offset, y - hex_size]; //global
            var x_pos = p5.map(hex_pos[0], x1, x2, 0, 256); //local
            var y_pos = p5.map(hex_pos[1], y1, y2, 0, 256); //local

            var hex_color = getHexColor(p5, hex_pos[0], hex_pos[1]);
            var rad = p5.map(hex_size / 2, 0, x2 - x1, 0, 256);
            drawHex(p5, x_pos, y_pos, hex_color, rad);
        }
        rowCount++;
    }
  p5.noFill();
  // p5.rect(0, 0, 255, 255);
}

function drawHex(p5, x, y, hex_color, rad) {
    p5.push();
    //p5.strokeWeight(1);
    // p5.fill(getHexColor(p5, x, y, 1 / 20));
    p5.fill(hex_color);
    p5.stroke(hex_color);

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