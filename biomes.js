function getBiome(val) {
    var biome;
    if (val > 0.0) {
        biome = biome_mountains;
    }
    if (val > 0.425) {
        biome = biome_plains
    }
    if (val > 0.575) {
        biome = biome_desert;
    }
    if (val > 0.7) {
        biome = biome_islands;
    }
    //biome = biome_desert;
    return biome;
}

function bioNoise(p5, x, y) {
    // p5.noiseDetail(10,0.5);
    return 1 - p5.noise(x * noiseScale / 13 + 10000, y * noiseScale / 13 + 10000, 8);
}

var biome_plains = [ // lush, grassy plains surrounding deep forests
    [0, "#84afcc", "deepsea"],
    [0.53, "#bed6e5", "shallows"],
    [0.54, "#f2efc4", "beach"],
    [0.59, "#b8d8b3", "grass"],
    [0.7, "#d2edc7", "plains"],
    [0.76, "#82af7c", "forest"],
    [0.8, "#689363", "deep_forest"],
    [0.835, "#689363", "deep_forest"],
    [0.91, "#d2edc7", "plains"],
    [1, "#d7dbc9", "crags"]
];
var biome_mountains = [ // drier & colder than the forests, 
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
    [0.54, "#fcf3cf", "dry_beach"],
    [0.585, "#f4f4de", "dry_desert"],
    [0.73, "#f9eec0", "desert"],
    [0.8, "#f7e1c0", "red_desert"],
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
    [0.7675, "#fcf3cf", "bright_sand"],
    [0.835, "#e1f4be", "vegetation"],
    [0.8675, "#bcedf2", "tropical_fords"],
    [1, "#bed6e5", "shallows"]
];

function getHexColor(p5, x, y) {
    var curHexNoise = noiseVal(p5, x, y);
    var biome = getBiome(bioNoise(p5, x, y));
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

