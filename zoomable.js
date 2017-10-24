var max_thickness = 64;
var hex_size = 5;
var noiseScale = 1 / 150;
var scatterNoiseScale = 1/3;
var initialZoomLevel = 3;
var maxZoomLevel = 12;

/* TOUR VARIABLES (required)
/* the random number seed for the tour */
var tourSeed = 442;
/* triplets of locations: zoom, x, y */

var tourPath = [
    [1, -115, 911],
    [1, -1206, 2967],
    [1, -563, 4614],
    [1, 512, 512]
];

var biome_normal = [
    [0, "#84afcc", "deepsea"],
    [0.53, "#bed6e5", "shallows"],
    [0.54, "#f2efc4", "beach"],
    [0.59, "#b8d8b3", "grass"],
    [0.7, "#d2edc7", "plains"],
    [0.76, "#82af7c", "forest"],
    [0.8, "#689363", "deep_forest"],
    [0.845, "#689363", "deep_forest"],
    [0.91, "#d2edc7", "plains"],
    [1, "#d7dbc9", "crags"]
];
var biome_mountains = [
    [0, "#84afcc", "deepsea"],
    [0.52, "#bed6e5", "shallows"],
    [0.54, "#f7f7d7", "dunes"],
    [0.58, "#b8d8b3", "grass"],
    [0.65, "#cbe0be", "plains"],
    [0.675, "#d8d6c3", "cliffs"],
    [0.69, "#8db57c", "forest"],
    [0.72, "#d8d6c3", "cliffs"],
    [0.73, "#d8d6c3", "cliffs"],
    [0.77, "#b1abb2", "mountain"],
    [0.885, "#fafafd", "mountain"],
    [1, "#ffffff", "end"]
];
var biome_desert = [
    [0, "#84afcc", "deepsea"],
    [0.515, "#bed6e5", "shallows"],
    [0.54, "#fcf3cf", "beach"],
    [0.585, "#ffffed", "dry_desert"],
    [0.76, "#f9eec0", "desert"],
    [0.8, "#ffddb5", "red_desert"],
    [0.845, "#f9eec0", "desert"],
    [0.85, "#d4e0ba", "scrub"],
    [0.85, "#d4e0ba", "scrub"],
    [0.855, "#f9eec0", "desert"],
    [0.865, "#bed6e5", "oasis"],
    [0.95, "#bed6e5", "oasis"],
    [1, "#bcedf2", "oasis"]
];
var biome_islands = [
    [0, "#84afcc", "deepsea"],
    [0.525, "#bed6e5", "shallows"],
    [0.655, "#bcedf2", "tropical_fords"],
    [0.683, "#ffffed", "beach"],
    [0.684, "#ede3c2", "rocks"],
    [0.685, "#e1f4be", "vegetation"],
    [0.7, "#ffffed", "beach"],
    [0.7675, "#fcf3cf", "desert"],
    [0.835, "#e1f4be", "vegetation"],
    [0.8675, "#bcedf2", "tropical_fords"],
    [1, "#bed6e5", "shallows"]
];

function bioNoise(p5, x, y) {
    // p5.noiseDetail(10,0.5);
    return 1 - p5.noise(x * noiseScale / 13 + 10000, y * noiseScale / 13 + 10000, 8);
}

function noiseVal(p5, x, y) {
    //p5.noiseDetail(5,0.45);
    return p5.noise(x * noiseScale + 1000000, y * noiseScale + 1000000);
}

function featureNoise(p5, x, y) {
    return p5.noise(x * noiseScale + 1000000, y * noiseScale + 1000000, 30);
}

function getHexColor(p5, x, y) {
    var curHexNoise = noiseVal(p5, x, y);
    var biome = getBiome(bioNoise(p5, x, y));
    // smoother, seperate noise map to modulate biome
    var col1, col2;
    var arraypos;

    for (arraypos = 0; arraypos < biome.length; arraypos++) {
        if (curHexNoise > biome[arraypos][0] && curHexNoise < biome[arraypos + 1][0]) {
            col1 = p5.color(biome[arraypos][1]);
            col2 = p5.color(biome[arraypos + 1][1]);
            break;
        }
    }
    var col = p5.lerpColor(col1, col2, p5.map(curHexNoise, biome[arraypos][0], biome[arraypos + 1][0], 0, 1));
    return col;
}

function getBiome(val) {
    var biome;
    if (val > 0.0) {
        biome = biome_mountains;
    }
    if (val > 0.385) {
        biome = biome_normal;
    }
    if (val > 0.55) {
        biome = biome_desert;
    }
    if (val > 0.675) {
        biome = biome_islands;
    }
    biome = biome_mountains;
    return biome;
}

function getHexState(p5, x, y) {
    var noise = noiseVal(p5, x, y);
    var biome = getBiome(bioNoise(p5, x, y));
    var curHexNoise = noiseVal(p5, x, y);
    var arraypos;
    for (arraypos = 0; arraypos < biome.length; arraypos++) {
        if (curHexNoise > biome[arraypos][0] && curHexNoise < biome[arraypos + 1][0]) {
            return biome[arraypos][2];
            break;
        }
    }
}

function snap_to_grid(num, gsize) {
    return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    // global noise setting
    p5.noiseDetail(16, 0.5);

    var hex_sizey = 3 * hex_size / 4;
    var max_shift = hex_size;
    var min_x = snap_to_grid(x1 - max_shift, hex_size);
    var max_x = snap_to_grid(x2 + max_shift + hex_size, hex_size);
    var min_y = snap_to_grid(y1 - max_shift * 1.5, hex_sizey);
    var max_y = snap_to_grid(y2 + max_shift * 1.5 + hex_sizey, hex_sizey);

    p5.fill(0, 0, 128);
    var rowCount = Math.floor(min_y / hex_sizey);
    var offset;

    //Draw Cells
    for (var y = min_y; y < max_y; y += hex_sizey) {
        if (rowCount % 2 ==  0) {
            offset = hex_size / 2;
        } else {
            offset = 0;
        }
        for (var x = min_x; x < max_x; x += hex_size) {
            var hex_pos = [x + offset, y - hex_size]; //global
            var hex_color = getHexColor(p5, hex_pos[0], hex_pos[1]);
            var x_pos = p5.map(hex_pos[0], x1, x2, 0, 256); //local
            var y_pos = p5.map(hex_pos[1], y1, y2, 0, 256); //local
            var rad = p5.map(hex_size / 2, 0, x2 - x1, 0, 256);

            drawHex(p5, x_pos, y_pos, hex_color, rad);
        }
        rowCount++;
    }
    //Draw Features
    rowCount = Math.floor(min_y / hex_sizey);
   if(zoom>0){
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
            var rad = p5.map(hex_size / 2, 0, x2 - x1, 0, 256);
            var hex_color = getHexColor(p5, hex_pos[0], hex_pos[1]);

            var curHexState = getHexState(p5, hex_pos[0], hex_pos[1]);
            var curHexNoise = noiseVal(p5, hex_pos[0], hex_pos[1]);
            var scatterNoise = p5.noise(hex_pos[0] * scatterNoiseScale, hex_pos[1] * scatterNoiseScale, 800);
            var glyphOffset_x = rad / 2 * (p5.noise(hex_pos[0], hex_pos[1], 40) - 0.5);
            var glyphOffset_y = rad / 2 * (p5.noise(hex_pos[0], hex_pos[1], 50) - 0.5);
            // console.log(curHexState);

            //Glyph conditions

            if (curHexNoise < 0.3) { //waves in deeper sea
                if (scatterNoise > 0.45 && zoom >= 2 && (hex_pos[0] / (hex_size / 2)) % 3 == 0 && (hex_pos[1] / (hex_size / 3) % 1.25) % 1 == 0) {
                    drawWave(p5, x_pos, y_pos + glyphOffset_y, x1, x2, y1, y2, rad);
                }
                if (scatterNoise > 0.5 && zoom == 1 && (hex_pos[0] / (hex_size / 2)) % 3 == 0 && (hex_pos[1] / (hex_size / 3) % 1.25) % 1 == 0) {
                    drawWave(p5, x_pos, y_pos + glyphOffset_y, x1, x2, y1, y2, rad);
                }
            }

            if (curHexState == "mountain") {
                if (zoom > 1) {
                    if(scatterNoise >0.65){
                    drawMountainPeak(p5, x_pos, y_pos, rad, hex_color);
                    }
                    if(curHexNoise >0.89){
                    drawMountainPeak(p5, x_pos, y_pos, rad, hex_color);
                    }
                }
                    
                if(zoom>2){
                    if (scatterNoise > 0.55 ) {
                        drawMountainPeak(p5, x_pos, y_pos, rad, hex_color);
                        }
                    if (curHexNoise>0.855 && scatterNoise > 0.25) {
                        drawSnowyPeak(p5, x_pos, y_pos, rad, hex_color);
                        }
                }
                if(zoom >0 && curHexNoise>0.855 && scatterNoise > 0.25){
                   drawSnowyPeak(p5, x_pos, y_pos, rad, hex_color);

                }

            }
            if (curHexState == "cliffs") {
                if (zoom > 1 && curHexNoise > 0.72 && curHexNoise < 0.775 && scatterNoise > 0.475) {
                    drawMountain(p5, x_pos, y_pos, rad, hex_color);
                }
            }

            if (curHexState == "forest" || curHexState == "deep_forest") {
                if (zoom > 2) {
                    if (zoom > 3 && scatterNoise > 0.425 && curHexNoise < 0.79) { //tiny trees
                        drawForest(p5, x_pos + glyphOffset_x, y_pos - rad / 2 + glyphOffset_y, rad * 0.4, hex_color);
                    }
                    if (curHexNoise > 0.78 && scatterNoise<0.625 && curHexNoise <0.815) { //medium forest
                        glyphOffset_x = rad * (p5.noise(hex_pos[0], hex_pos[1], 60) - 0.5);
                        glyphOffset_y = rad * (p5.noise(hex_pos[0], hex_pos[1], 70) - 0.5);
                        drawForest(p5, x_pos + rad / 2 + glyphOffset_x, y_pos + rad / 3 + glyphOffset_y, rad * 0.5, hex_color);
                    }
                }
                if (curHexState == "deep_forest" && zoom > 2 && curHexNoise > 0.8 && curHexNoise<0.82) { //big boi
                    glyphOffset_x = rad * (p5.noise(hex_pos[0], hex_pos[1], 80) - 0.5);
                    glyphOffset_y = rad * (p5.noise(hex_pos[0], hex_pos[1], 90) - 0.5);
                    drawForest(p5, x_pos - rad / 4 + glyphOffset_x, y_pos + glyphOffset_y, rad * 0.7, hex_color);
                }
                if (curHexState == "deep_forest" && zoom >0) { // larger forests glyphs in overworld
                //large icons in overview
                if (zoom >=2 && curHexNoise < 0.9 && curHexNoise > 0.82 && scatterNoise > 0.45) {
                    drawForest(p5, x_pos + glyphOffset_x, y_pos + glyphOffset_y, rad * 1.5, hex_color);
                }else if(zoom == 1 && curHexNoise < 0.9 && curHexNoise > 0.825 && scatterNoise > 0.55) {
                    drawForest(p5, x_pos + glyphOffset_x, y_pos + glyphOffset_y, rad * 2, hex_color);
                }
            }
            }


        }
        rowCount++;
    }}

    p5.noFill();
    // p5.rectMode(p5.CORNERS);
    // p5.stroke(255,0,0);
    // p5.rect(0, 0, 255, 255);
}

function drawWave(p5, xpos, ypos, x1, x2, y1, y2, rad) {
    var w =rad*4;
    xpos +=rad/32

    var res = 32;
    var amp = 21; //higher val == shorter waves
    var period = 20; // lower val == more waves
    period *= w;
    amp = w / amp;
    var xspace = w / res;
    var dx = (360 / period) * xspace; // Value for incrementing x
    var theta = x1+xpos;
    var store = new Array(Math.floor(w / xspace)); // y values

    var x = theta;
    for (var i = 0; i < store.length; i++) {
        store[i] = Math.cos(x) * amp;
        x += dx;
    }

    p5.push();
    p5.noFill();
    p5.stroke("white");
    p5.strokeWeight(rad/6);
    p5.beginShape();

    for (var x = 0; x < store.length; x++) {
        p5.curveVertex(xpos + (x * xspace) - w / 2, ypos + store[x]);
    }

    p5.endShape();
    p5.pop();
}

function drawHex(p5, x, y, hex_color, rad) {
    p5.push();
    p5.fill(hex_color);
    p5.stroke(hex_color);
    // p5.stroke("white")
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

function drawForest(p5, x, y, bottom_size, hex_color) {
    p5.push();
    p5.rectMode(p5.CENTER);
    p5.fill(hex_color);
    p5.strokeWeight(bottom_size/10);
    p5.stroke("white");

    var bs = bottom_size;
    var c_b = Math.pow(bs, 2) + Math.pow(bs / 2, 2);
    var h = Math.sqrt(c_b) * 0.6;
    var rad = bottom_size / 3;

    p5.rect(x, y + bottom_size * 0.5, bottom_size / 5, bottom_size * 0.9);
    p5.triangle(x - rad, y + h, x + rad, y + h, x, y);
    y -= bottom_size / 6;
    rad *= 1.125;
    p5.triangle(x - rad, y + h, x + rad, y + h, x, y);

    p5.pop();
}

function drawMountain(p5,xpos,ypos,rad,hex_color){
    var w  = rad;
    var line = rad/16

    p5.push();
    p5.fill(hex_color);  
    p5.stroke(hex_color);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(xpos+w*7/4,ypos+w*0.2);
    p5.vertex(xpos-w*0/4,ypos+w*1-line/2);
    p5.vertex(xpos-w*4/4+line/2,ypos+w*0.5);
    p5.endShape(p5.CLOSE);

    p5.stroke("white");
    p5.strokeWeight(line);
    p5.beginShape();
    p5.curveVertex(xpos-w*5/4,ypos+w*0.5);
    //befor midpoint 
    p5.curveVertex(xpos-w*4/4,ypos+w*0.5);
    p5.curveVertex(xpos-w*3/4,ypos+w*0.2);
    p5.curveVertex(xpos-w*2/4,ypos+w*0.2);
    p5.curveVertex(xpos-w*1/4,ypos+w*0.1);
    //center of hex
    p5.curveVertex(xpos-w*0/4,ypos-w*0.1);
    //past midpoint
    p5.curveVertex(xpos+w*1/4,ypos+w*0.1);
    p5.curveVertex(xpos+w*2/4,ypos+w*0.05);
    p5.curveVertex(xpos+w*3/4,ypos-w*0.35);
    p5.curveVertex(xpos+w*4/4,ypos-w*0.5);
    //curve outside hex
    p5.curveVertex(xpos+w*5/4,ypos-w*0.35);
    p5.curveVertex(xpos+w*6/4,ypos+w*0.05);
    p5.curveVertex(xpos+w*7/4,ypos+w*0.2);
    //finalise curve
    p5.curveVertex(xpos+w*7/4,ypos+w*0.2);
    p5.endShape();
    p5.pop();

}

function drawSnowyPeak(p5,xpos,ypos,rad,hex_color){
    var w  = rad;
    var line = rad/8
    p5.noFill();

    p5.push();

    p5.fill("white");
    p5.stroke("white");
    p5.strokeWeight(1);

    p5.beginShape();
    p5.vertex(xpos-w*1/8+line,ypos-w*0.2-line*2);
    p5.vertex(xpos+w*1/8,ypos-w*1+line/2);
    p5.vertex(xpos+w*2/4-line  ,ypos+w*0.05-line*2);
    p5.endShape(p5.CLOSE);

    p5.beginShape();
    p5.vertex(xpos+w*2/4 -line/10,ypos+w*0.05);
    p5.vertex(xpos+w*5/8,ypos-w*0.3);
    p5.vertex(xpos+w*4/4-line*1.75,ypos+w*0.38-line*3.5);
    p5.endShape(p5.CLOSE);

    p5.noFill();  
    //p5.stroke("red");
    p5.strokeWeight(line);

    p5.beginShape();
    p5.vertex(xpos-w*4/4,ypos+w*0.38);
    p5.vertex(xpos-w*3/4,ypos+w*0.15);
    p5.vertex(xpos-w*5/8,ypos+w*0.4);
    p5.vertex(xpos-w*1/4,ypos-w*0.35);
    p5.vertex(xpos-w*1/8,ypos-w*0.2);

    p5.vertex(xpos+w*1/8,ypos-w*1);

    p5.vertex(xpos+w*2/4,ypos+w*0.05);
    p5.vertex(xpos+w*5/8,ypos-w*0.3);
    p5.vertex(xpos+w*4/4,ypos+w*0.38);
    p5.endShape();
    p5.pop();

}

function drawMountainPeak(p5,xpos,ypos,rad,hex_color){
    var w  = rad;
    var line = rad/10

    p5.noFill();
    p5.push();
    p5.fill(hex_color);  
    p5.stroke("white");
    p5.strokeWeight(line);

    p5.beginShape();
    p5.vertex(xpos-w*4/4,ypos+w*0.38);
    p5.vertex(xpos-w*3/4,ypos+w*0.15);
    p5.vertex(xpos-w*5/8,ypos+w*0.4);
    p5.vertex(xpos-w*1/4,ypos-w*0.35);
    p5.vertex(xpos-w*1/8,ypos-w*0.2);

    p5.vertex(xpos+w*1/8,ypos-w*1);

    p5.vertex(xpos+w*2/4,ypos+w*0.05);
    p5.vertex(xpos+w*5/8,ypos-w*0.3);
    p5.vertex(xpos+w*4/4,ypos+w*0.38);
    p5.endShape();
    p5.pop();

}


// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};