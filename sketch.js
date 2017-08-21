var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var mainFace;
var faceImages = [];
var curFaceIndex = 0;
var curTrainIndex = 0;
var main_canvas;
var faceSelector;
var facelist = [];
var NUMFACES = 6*9;
var sliders = [];
var NUM_SLIDERS = 12;
var sliderTint;

var faceData = [
]

var trainData = {}
var trainValues = {}

var faceMapping = null;

function preload () {
  extraFaceData = loadJSON('face_data.json');
  trainData = loadJSON('train_data.json');
  trainValues = loadJSON('train_values.json');
}

var allEmbeddingsTree;
var allEmbeddings = [];
var embeddingDimensions;
var curNeighbors = [];

function squaredDistance(a, b) {
  var sum = 0;
  var length = 128;
  for(var i=0; i<128; i++) {
    var diff = a[i] - b[i];
    sum += diff * diff;
  }
  // print(a.length,diff);
  // print(sum, a==b);
  return sum;
}

var haveStarted = false;
function setup () {
  var extraFaceDataArray = Object.values(extraFaceData);
  Array.prototype.unshift.apply(faceData, extraFaceDataArray);
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  for(var i=0; i<NUMFACES; i++) {
    var face = new Face();
    facelist.push(face);
  }

  mainFace = new FaceMap();
  littleFace = new FaceMap();

  for(var i=0; i<faceData.length; i++) {
    var data = faceData[i];
    data.image = loadImage(data.url);
  }

  trainDataKeys = Object.keys(trainData);
  for(var i=0; i<trainDataKeys.length; i++) {
    var curKey = trainDataKeys[i];
    var data = trainData[curKey];
    var curEmbedding = data.embedding[0];
    if(curEmbedding.length == 128) {
      curEmbedding.push(curKey);
      allEmbeddings.push(curEmbedding);
    }
    else {
      print("rejected embedding ", curEmbedding);
    }
    data.image = loadImage(data.url);
  }
  // print("Length: ", allEmbeddings.length);
  // setup k-d tree
  var N = allEmbeddings[0].length - 1; 
  embeddingDimensions = Array.apply(null, {length: N}).map(Number.call, Number);  
  // print(embeddingDimensions)
  allEmbeddingsTree = new kdTree(allEmbeddings, squaredDistance, embeddingDimensions);
  // print(allEmbeddingsTree)

  faceSelector = createSelect();
  faceSelector.option('Face');
  faceSelector.option('FaceMap');
  faceSelector.option('Train');
  faceSelector.option('Neighbors');
  faceSelector.value('Neighbors');
  faceSelector.parent('selector1Container');

  /* create the sliders */
  for(i=1; i<=NUM_SLIDERS; i++) {
    var slider = createSlider(0, 100, 50);
    var parentStr = 'slider' + i + 'Container';
    slider.parent(parentStr);
    sliders.push(slider);
  }

  sliderTint = createSlider(0, 100, 10);
  sliderTint.parent("sliderTintContainer");

  /* and the buttons */
  var loadButton = createButton('load');
  loadButton.mousePressed(loadCurrentSettings);
  loadButton.parent('button1Container');

  var interpButton = createButton('interpolate');
  interpButton.mousePressed(interpolateCurrent);
  interpButton.parent('button1Container');

  var saveButton = createButton('save');
  saveButton.mousePressed(saveCurrentSettings);
  saveButton.parent('button2Container');

  var getValuesButton = createButton('get values');
  getValuesButton.mousePressed(getSingleJson);
  getValuesButton.parent('button3Container');

  var randButton = createButton('get all values');
  randButton.mousePressed(getAllJson);
  randButton.parent('button4Container');

  updateSlidersForTraining();

  // rotation in degrees
  angleMode(DEGREES);

  haveStarted = true;
}

function saveCurrentSettings() {
  var curKey = trainDataKeys[curTrainIndex];
  obj = mainFace.getProperties();
  trainValues[curKey] = obj;
  // for(var i=0; i<obj.length; i++) {
  //   trainData[curKey][i] = obj[i];
  // }
  var text = select('#output');
  text.html("Storing values for " + curKey);
  // getAllJson();
}

function getSingleJson() {
  obj = mainFace.getProperties();
  var text = select('#output');
  var json = JSON.stringify(obj, null, 2);
  text.html(json)
}

function getAllJson() {
  obj = trainValues;
  var text = select('#output');
  var json = JSON.stringify(obj, null, 2);
  // alert(json);
  text.html(json)
}

// global variables for colors
var bg_color1 = [0, 0, 0];

var lastSwapTime = 0;
var millisPerSwap = 5000;

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  var mode = faceSelector.value();

  if(millis() > lastSwapTime + millisPerSwap) {
    lastSwapTime = millis();
    // changeRandomSeed();
  }

  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(bg_color1);
  var textDisplay = "unknown";

  var params = [];
  for(var i=0; i<NUM_SLIDERS; i++) {
    params.push(sliders[i].value());
  }

  if (mode == 'Face') {
    var w = canvasWidth / 10;
    var h = canvasHeight / 6;
    var max_shift = 0.2 * w;
    var cur_face = 0;
    for(var i=0; i<6; i++) {
      for(var j=0; j<9; j++) {
        var face = facelist[cur_face];
        cur_face = cur_face + 1;

        var y = h/2 + h*i;
        var x = w/2 + w*j;

        // shift even rows over by half a face
        if(i%2 == 0) {
          x = x + w/2;
        }

        // noFill();
        // stroke(255, 0, 0);
        // rect(x-w/2, y-w/2, w, h);
        face.randomize();
        face.draw1(x, y, w, h);
        // noStroke();
        // fill(255, 0, 0);
        // ellipse(x-2, y-2, 4, 4);
      }
    }
    textDisplay = "facegrid";
  }

  else if (mode == 'FaceMap' || mode == 'Train') {
    var do_train = true;
    if (mode == 'FaceMap') {
      do_train = false;
    }
    if(do_train) {
      // var keys = Object.keys(trainData);
      var curKey = trainDataKeys[curTrainIndex];
      var data = trainData[curKey];      
    }
    else {
      var data = faceData[curFaceIndex];
    }
    // Displays the image at its actual size at point (0,0)
    var img = data.image
    var x1 = (width/4-400/2);
    var x2 = (3*width/4-400/2);
    var y1 = (height/2-400/2);
    image(img, x1, y1, 400, 400);

    if(do_train) {
      if (curKey in trainValues) {
        fill(0, 200, 0);
      }
      else {
        fill(200, 0, 0);
      }
      ellipse(x1+400/2, y1+400+15, 10, 10);      
    }

    image(img, x2, y1, 400, 400);
    noStroke();
    var curSliderTintValue = sliderTint.value();
    var overlayAlpha = map(curSliderTintValue, 0, 100, 255, 0);
    fill(bg_color1[0], bg_color1[1], bg_color1[2], overlayAlpha);
    rect(x2, y1, 400, 400);
    stroke(0);
    fill(255);

    for(var i=0; i<data.landmarks.length; i++) {
      // get array of face marker positions [x, y] format
      var positions = data.landmarks[i];
      var shifted_positions = JSON.parse(JSON.stringify(positions))

      var data_mean = [0.0, 0.0];
      var data_scale = 1.0;
      var data_angle = 0.0;
      if ('transform' in positions) {
        data_mean = positions.transform.center;
        data_scale = positions.transform.scale;
        data_angle = positions.transform.angle;
        delete shifted_positions.transform
      }
      var scale_x = 400.0 / img.width;
      var scale_y = 400.0 / img.height;

      push();
      translate(x1, y1)
      translate(scale_x*data_mean[0], scale_y*data_mean[1]);
      scale(scale_x*data_scale, scale_y*data_scale);
      rotate(degrees(data_angle));

      stroke(0);
      fill(255);
      strokeWeight(1/data_scale);
      Object.keys(positions).forEach(function(key) {
        if (key=='transform') {
          return;
        }
        var curSection = positions[key];
        var shiftedSection = shifted_positions[key];
        for (var i=0; i<curSection.length; i++) {
          var cur_x = curSection[i][0];
          var cur_y = curSection[i][1];
          ellipse(cur_x, cur_y, 3/data_scale, 3/data_scale);
          // get ready for drawing the face
          shiftedSection[i][0] = cur_x;
          shiftedSection[i][1] = cur_y;
        }
      });

      noFill();
      stroke(0, 0, 255);
      ellipse(0, 0, 4, 4);
      line(0, -2, 0, 2);
      line(-2, 0, 2, 0);
      // ellipse(x1+data_mean[0], y1+data_mean[1], 4*data_scale, 4*data_scale);
      // line(x1+data_mean[0], y1+data_mean[1]-2*data_scale, x1+data_mean[0], y1+data_mean[1]+2*data_scale);
      pop();

      push();
      translate(x2, y1)
      translate(scale_x*data_mean[0], scale_y*data_mean[1]);
      scale(scale_x*data_scale, scale_y*data_scale);
      rotate(degrees(data_angle));
      strokeWeight(1/data_scale);
      mainFace.setProperties(params);
      mainFace.draw(shifted_positions);
      pop();
    }
    if(do_train) {
      textDisplay = "Train: " + curKey;
    }
    else {
      textDisplay = "FaceMap: " + curFaceIndex;
    }
  }

  else if (mode == 'Neighbors') {
    // var keys = Object.keys(trainData);
    var curKey = trainDataKeys[curTrainIndex];
    var data = trainData[curKey];

    // Displays the image at its actual size at point (0,0)
    var img = data.image
    var x1 = (width/4-250/2);
    var y1 = (height/3-250/2);
    image(img, x1, y1, 250, 250);
    if (curKey in trainValues) {
      fill(0, 200, 0);
    }
    else {
      fill(200, 0, 0);
    }
    ellipse(x1+250/2, y1+250+15, 10, 10);

    var y2 = (3*height/4-80/2);
    for(var i=0; i<4; i++) {
      // var keys = Object.keys(trainData);
      var curKey = curNeighbors[i];
      var nearData = trainData[curKey];      

      // Displays the image at its actual size at point (0,0)
      var img = nearData.image
      var x2 = (width/4 - 200 + i*100);
      image(img, x2, y2, 80, 80);
    }

    for(var i=0; i<1; i++) {
      // get array of face marker positions [x, y] format
      var positions = data.landmarks[i];
      var shifted_positions = JSON.parse(JSON.stringify(positions))

      var data_mean = [0.0, 0.0];
      var data_scale = 1.0;
      var data_angle = 0.0;
      if ('transform' in positions) {
        data_mean = positions.transform.center;
        data_scale = positions.transform.scale;
        data_angle = positions.transform.angle;
        delete shifted_positions.transform
      }
      var scale_x = 400.0 / img.width;
      var scale_y = 400.0 / img.height;

      Object.keys(positions).forEach(function(key) {
        if (key=='transform') {
          return;
        }
        var curSection = positions[key];
        var shiftedSection = shifted_positions[key];
        for (var i=0; i<curSection.length; i++) {
          var cur_x = curSection[i][0];
          var cur_y = curSection[i][1];
          // get ready for drawing the face
          shiftedSection[i][0] = cur_x;
          shiftedSection[i][1] = cur_y;
        }
      });


      var scale_x = 250.0 / img.width;
      var scale_y = 250.0 / img.height;
      var x2 = (3*width/4-250/2);
      push();
      translate(x2, y1);
      translate(scale_x*data_mean[0], scale_y*data_mean[1]);
      scale(scale_x*data_scale, scale_y*data_scale);
      rotate(degrees(data_angle));
      strokeWeight(1/data_scale);
      mainFace.setProperties(params);
      mainFace.draw(shifted_positions);
      pop();

      var scale_x = 80.0 / img.width;
      var scale_y = 80.0 / img.height;
      for(var j=0; j<4; j++) {
        // var keys = Object.keys(trainData);
        var curKey = curNeighbors[j];
        var x2 = (3*width/4 - 200 + j*100);

        push();
        translate(x2, y2);

        if (curKey in trainValues) {
          var settings = trainValues[curKey]
          translate(scale_x*data_mean[0], scale_y*data_mean[1]);
          scale(scale_x*data_scale, scale_y*data_scale);
          rotate(degrees(data_angle));
          strokeWeight(1/data_scale);
          littleFace.setProperties(settings);
          littleFace.draw(shifted_positions);
        }
        else {
          noFill();
          stroke(100);
          rect(10, 10, 70, 70);
        }
        pop();
      }
    }

    textDisplay = "Neighbors: " + trainDataKeys[curTrainIndex];
  }

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(textDisplay, width/2, height-12);
}

function keyTyped() {
  if(!haveStarted) {
    return;
  }
  var mode = faceSelector.value();
  if (key == '1' && mode != 'Face') {
    print("face")
    faceSelector.value('Face');
  }
  else if (key == '2' && mode != 'FaceMap') {
    print("facemap")
    faceSelector.value('FaceMap');
  }
  else if (key == '3' && mode != 'Train') {
    faceSelector.value('Train');
  }
  else if (key == '4' && mode != 'Neighbors') {
    faceSelector.value('Neighbors');
  }

  if (key == 's') {
    saveCurrentSettings();
  }
  else if (key == 'i') {
    interpolateCurrent();
  }
  else if (key == 'l') {
    loadCurrentSettings();
  }

  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

function interpolateCurrent() {
  var curNeighborSettings = [];

  for(var i=0; i<4; i++) {
    neighborKey = curNeighbors[i]
    if(neighborKey in trainValues) {
      curNeighborSettings.push(trainValues[neighborKey]);
    }
  }

  for(var i=0; i<NUM_SLIDERS; i++) {
    sliders[i].value(50);
  }

  if(curNeighborSettings.length > 0) {
    settings = curNeighborSettings[0];
    for(var i=0; i<settings.length; i++) {
      var sum = 0;
      for(j=0; j<curNeighborSettings.length; j++) {
        sum += curNeighborSettings[j][i];
      }
      var avg = int(sum / curNeighborSettings.length)
      sliders[i].value(avg);
    }
  }
}

function loadCurrentSettings() {
  var curKey = trainDataKeys[curTrainIndex];
  for(var i=0; i<NUM_SLIDERS; i++) {
    sliders[i].value(50);
  }    
  if (curKey in trainValues) {
    var settings = trainValues[curKey]
    for(var i=0; i<settings.length; i++) {
      sliders[i].value(settings[i]);
    }
  }
}

function updateSlidersForTraining() {
  var mode = faceSelector.value();
  var curKey = trainDataKeys[curTrainIndex];

  // first find the closest neighbors
  var nearest = allEmbeddingsTree.nearest(trainData[curKey].embedding[0], 5);
  curNeighbors = [];
  curNeighborSettings = [];
  for(var i=0; i<5; i++) {
    if(nearest[i][0][128] != curKey) {
      var neighborKey = nearest[i][0][128];
      curNeighbors.push(neighborKey);
      if(neighborKey in trainValues) {
        curNeighborSettings.push(trainValues[neighborKey]);
      }
    }
  }

  loadCurrentSettings();
  // if(mode == 'Neighbors') {
  //   interpolateCurrent();
  // }
  // else {
  //   loadCurrentSettings();
  // }
}

function keyPressed() {
  if(!haveStarted) {
    return;
  }
  var mode = faceSelector.value();
  if (mode == 'FaceMap') {
    if (keyCode == LEFT_ARROW || keyCode == UP_ARROW) {
      curFaceIndex = (curFaceIndex + faceData.length - 1) % faceData.length;
    } else if (keyCode === RIGHT_ARROW || keyCode == DOWN_ARROW) {
      curFaceIndex = (curFaceIndex + 1) % faceData.length;
    }
  }
  else if (mode == 'Train' || mode == 'Neighbors') {
    if (keyCode == LEFT_ARROW || keyCode == UP_ARROW) {
      curTrainIndex = (curTrainIndex + trainDataKeys.length - 1) % trainDataKeys.length;
      updateSlidersForTraining();
    } else if (keyCode == RIGHT_ARROW || keyCode == DOWN_ARROW) {
      curTrainIndex = (curTrainIndex + 1) % trainDataKeys.length;
      updateSlidersForTraining();
    }
  }
}
