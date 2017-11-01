// Map generator with biomes, landmarks, and contextual markings
// Code adapted from Red Blob Games' guide to hexagonal grids
//      https:// www.redblobgames.com/grids/hexagons/

var hex_size_static = 4 ; // width/height of each hex tile in pixels
var hex_size = hex_size_static;
var noiseScale = 1 / 100    ;
var scatterNoiseScale = 200;
var stepNoiseScale = 1 / 25;

var initialZoomLevel = 2;
var maxZoomLevel = 5;

/* TOUR VARIABLES (required)
/* the random number seed for the tour */
var tourSeed = 442;
/* triplets of locations: zoom, x, y */

var tourPath = [ 
    [1, -1206, 2967],
    [1, -563, 4614],
    [1, 512, 512]
];

function noiseVal(p5, x, y) { // get noise at main noiseScae;
    return p5.noise(x * noiseScale + 1000000, y * noiseScale + 1000000);
}

function snap_to_grid(num, gsize) {
    return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    var hex_size = hex_size_static;
    if (zoom === 0) {
        hex_size *= 4;
    }
    if (zoom === 1) {
        hex_size *= 2;

    }
   
    p5.noiseDetail(80 , 0.475);  // global noise setting
    var hex_sizey = 3 * hex_size / 4;
    var max_shift = hex_size;
    var min_x = snap_to_grid(x1 - max_shift, hex_size);
    var max_x = snap_to_grid(x2 + max_shift + hex_size, hex_size);
    var min_y = snap_to_grid(y1 - max_shift * 1.5, hex_sizey);
    var max_y = snap_to_grid(y2 + max_shift * 1.5 + hex_sizey, hex_sizey);

    p5.fill(0, 0, 128);
    var rowCount = Math.floor(min_y / hex_sizey);
    var offset;

    // Draw Tiles
    for (var y = min_y; y < max_y; y += hex_sizey) {
        if (rowCount % 2 == 0) {
            offset = hex_size / 2;
        } else {
            offset = 0;
        }
        for (var x = min_x; x < max_x; x += hex_size) {
            var hex_pos = [x + offset, y - hex_size]; // global co-ordinates
            var hex_color = getHexColor(p5, hex_pos[0], hex_pos[1]);
            var x_pos = p5.map(hex_pos[0], x1, x2, 0, 256); // local co-ordinates
            var y_pos = p5.map(hex_pos[1], y1, y2, 0, 256); // local co-ordinates
            var rad = p5.map(hex_size / 2, 0, x2 - x1, 0, 256);

            drawHex(p5, x_pos, y_pos, hex_color, rad);
        }
        rowCount++;
    }
    // Draw Features
    rowCount = Math.floor(min_y / hex_sizey);
    if (zoom > 0) {
        for (var y = min_y - hex_sizey; y < max_y + hex_sizey; y += hex_sizey) {
            if (rowCount % 2 === 0) {
                offset = hex_size / 2;
            } else {
                offset = 0;
            }
            for (var x = min_x - hex_size; x < max_x + hex_size; x += hex_size) {
                var hex_pos = [x + offset, y - hex_size]; // global co-ordinates
                var x_pos = p5.map(hex_pos[0], x1, x2, 0, 256); // local co-ordinates
                var y_pos = p5.map(hex_pos[1], y1, y2, 0, 256); // local co-ordinates
                var q = Math.floor(hex_pos[0] / (hex_size)); // column index
                var r = Math.floor(hex_pos[1] / (hex_sizey)); // row index
                
                var rad = p5.map(hex_size / 2, 0, x2 - x1, 0, 256);
                x_pos-=rad;
                var hex_color = getHexColor(p5, hex_pos[0], hex_pos[1]);

                var curHexState = getHexState(p5, hex_pos[0], hex_pos[1]);
                var curHexNoise = noiseVal(p5, hex_pos[0], hex_pos[1]);

                // scatterNoise holds the noise value from a perlin noise map with a lower period
                // adjacent values have virtually no correlation. This value is used to prevent identical glyphs from being drawn too close together
                var scatterNoise = p5.noise(hex_pos[0] * scatterNoiseScale, hex_pos[1] * scatterNoiseScale, 800);
                //var scatterNoise = p5.noise(q * scatterNoiseScale, r * scatterNoiseScale, 800);

                // glyphOffsets are used to stop glyphs from being drawn _precisely_ on the hexGrid. 
                // pairs with scatterNoise to give the map's legend a hand-drawn feel
                var glyphOffset_x = rad *0.5 * (p5.noise(hex_pos[0], hex_pos[1], 40) - 0.5);
                var glyphOffset_y = rad *0.5 * (p5.noise(hex_pos[0], hex_pos[1], 50) - 0.5);

                if (curHexNoise < 0.3) { // waves in deep ocean (all biomes)
                    // waves are drawn on every second row and every 3rd column
                    if (scatterNoise > 0.45 && zoom >= 2 && q % 3 == 0 && r % 2 == 0) {
                        drawWave(p5, x_pos+(r % 6 * rad), y_pos + glyphOffset_y, x1, x2, y1, y2, rad);
                    }
                    if (scatterNoise > 0.35 && zoom == 1 && q % 3 == 0 && r % 2 == 0) {
                        drawWave(p5, x_pos+(r % 6 * rad), y_pos + glyphOffset_y, x1, x2, y1, y2, rad);
                    }
                }

                if (curHexState == "dry_desert" || curHexState == "dry_beach") {
                    if (zoom > 1) {
                        if (curHexNoise > 0.5675 && curHexNoise < 0.615) {
                            if (scatterNoise < 0.125) {
                                drawSkelly(p5, x_pos, y_pos, rad * 2, hex_color);
                            }
                            if (scatterNoise > 0.875) {
                                drawSkelly(p5, x_pos, y_pos, rad * 2, hex_color);
                            }
                            if (0.4 < scatterNoise && scatterNoise < 0.4001 ) {
                                drawSkelly(p5, x_pos, y_pos, rad * 2, hex_color);
                            }

                        }
                    }
                } else if (curHexState == "red_desert" || curHexState == "desert") {
                    if (zoom > 1) {

                        var steplayer1 = 0.425;
                        var steplayer2 = 0.575;
                        var scatterThresh = 4;
                        var zoomDetail_mod = zoom * 0.45;
                        zoomDetail_mod = scatterThresh-zoomDetail_mod;
                        if(zoomDetail_mod < 1){
                            zoomDetail_mod = 1;
                        }
                        if (curHexNoise < 0.8 && scatterNoise < curHexNoise / zoomDetail_mod) {
                            var stepNoise = p5.noise(hex_pos[0] * stepNoiseScale, hex_pos[1] * stepNoiseScale, 320);

                            if (stepNoise < steplayer1) {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, -1);
                            } else if (stepNoise > steplayer1 && stepNoise < steplayer2) {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, 0);
                            } else {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, 1);
                            }
                        }
                        if (curHexNoise > 0.8 && curHexNoise < 0.855 && scatterNoise < curHexNoise / zoomDetail_mod * 2) {
                            var stepNoise = p5.noise(hex_pos[0] * stepNoiseScale, hex_pos[1] * stepNoiseScale, 320);

                            if (stepNoise < steplayer1) {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, -1);
                            } else if (stepNoise > steplayer1 && stepNoise < steplayer2) {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, 0);
                            } else {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, 1);
                            }
                        }

                        if (curHexNoise > 0.855 && curHexNoise < 0.8625 && scatterNoise < curHexNoise / zoomDetail_mod * 4) {
                            var stepNoise = p5.noise(hex_pos[0] * stepNoiseScale, hex_pos[1] * stepNoiseScale, 320);

                            if (stepNoise < steplayer1) {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, -1);
                            } else if (stepNoise < steplayer1 && stepNoise > steplayer2) {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, 0);
                            } else {
                                drawSteps(p5, x_pos, y_pos, rad * 2, hex_color, 1);
                            }
                        }

                    }
                } else if (curHexState == "mountain") {
                    if (curHexNoise > 0.855) {
                        drawSnowyMountain(p5, x_pos, y_pos, rad, hex_color);
                    }

                    if (zoom >= 1) {
                        if (scatterNoise > 0.7) {
                            drawMountain(p5, x_pos, y_pos, rad, hex_color);
                        }
                        if (curHexNoise > 0.87) {
                            drawMountain(p5, x_pos, y_pos, rad, hex_color);
                        }
                    }

                    if (zoom >= 2) {
                        if (scatterNoise > 0.55) {  
                        }
                        if (curHexNoise > 0.855 && scatterNoise > 0.25) {
                            drawSnowyMountain(p5, x_pos, y_pos, rad, hex_color);
                        }
                    }

                } else if (curHexState == "cliffs") {
                    if (zoom > 1 && curHexNoise > 0.72 && curHexNoise < 0.775 && scatterNoise > 0.795) {
                        drawHill(p5, x_pos, y_pos, rad, hex_color);
                    }
                    if (zoom > 2 && curHexNoise > 0.72 && curHexNoise < 0.775 && scatterNoise > 0.695) {
                        drawHill(p5, x_pos, y_pos, rad, hex_color);
                    }
                    if (zoom > 2 && curHexNoise > 0.72 && curHexNoise < 0.775 && scatterNoise > 0.625) {
                        drawHill(p5, x_pos, y_pos, rad, hex_color);
                    }

                } else if (curHexState == "forest" || curHexState == "deep_forest") {
                    if (zoom > 2) {
                        if (zoom > 3 && scatterNoise > 0.425 && curHexNoise < 0.79) { // tiny trees
                            drawForest(p5, x_pos + glyphOffset_x, y_pos - rad / 2 + glyphOffset_y, rad * 0.4, hex_color);
                        }
                        if (curHexNoise > 0.78 && scatterNoise < 0.625 && curHexNoise < 0.815) { // medium forest
                            glyphOffset_x = rad * (p5.noise(hex_pos[0], hex_pos[1], 60) - 0.5);
                            glyphOffset_y = rad * (p5.noise(hex_pos[0], hex_pos[1], 70) - 0.5);
                            drawForest(p5, x_pos + rad / 2 + glyphOffset_x, y_pos + rad / 3 + glyphOffset_y, rad * 0.5, hex_color);
                        }
                    }
                    if (curHexState == "deep_forest" && zoom > 2 && curHexNoise > 0.8 && curHexNoise < 0.82) { // big boi
                        glyphOffset_x = rad * (p5.noise(hex_pos[0], hex_pos[1], 80) - 0.5);
                        glyphOffset_y = rad * (p5.noise(hex_pos[0], hex_pos[1], 90) - 0.5);
                        console.log("Big_bois");
                        drawForest(p5, x_pos - rad / 4 + glyphOffset_x, y_pos + glyphOffset_y, rad * 0.7, hex_color);
                    }
                    if (curHexState == "deep_forest") {
                        // large icons in overview
                        if (zoom === 2 && q % 3 == 0 && r % 4 == 0 && scatterNoise >0.45) {
                            drawForest(p5, x_pos + glyphOffset_x, y_pos + glyphOffset_y, rad * 2.666, hex_color);
                        }
                        if (zoom === 1 && q % 3 == 0 && r % 4 == 0 ) {
                            drawForest(p5, x_pos + glyphOffset_x, y_pos + glyphOffset_y, rad * 2, hex_color);
                        }

                    }
                }
                rowCount++;
            }
        }
    }

    p5.noFill();
}


function drawHex(p5, x, y, hex_color, rad) { //draw hex tile
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

// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

function midpoint(p1, p2) {
    return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
};