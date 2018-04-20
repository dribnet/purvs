let cY;
let cX;
let cX2;
let cY2;
let gap;
let distanceX;
let distanceY;

function drawLetter(letterData) {
  stroke(80,80,80);
  strokeWeight(4);
  let x1 = letterData["stroke1_x1"];
  let x2 = letterData["stroke1_x2"];
  let y1 = letterData["stroke1_y1"];
  let y2 = letterData["stroke1_y2"];
  //line(x1, y1, x2, y2);
  
  drawin(x1, y1, x2, y2);
  
  stroke(77,77,77);
  //strokeWeight(7.5);
  let x3 = letterData["stroke2_x1"];
  let x4 = letterData["stroke2_x2"];
  let y3 = letterData["stroke2_y1"];
  let y4 = letterData["stroke2_y2"];
  //line(x3, y3, x4, y4);
  
  drawin(x3, y3, x4, y4);
  
  stroke(0,0,0);
  //strokeWeight(5);
  let x5 = letterData["stroke3_x1"];
  let x6 = letterData["stroke3_x2"];
  let y5 = letterData["stroke3_y1"];
  let y6 = letterData["stroke3_y2"];
  
  drawin(x5, y5, x6, y6);
}

function drawin(x1, y1, x2, y2){
  length = ((((x2 - x1)^2)+((y2 - y1)^2))^0.5);
  beginShape(LINES);
  let gap = 0;
  for(i = 0; i < length; i++){
	  let cX = map(i, 0, length, x1, x2);
    let cY = map(i, 0, length, y1, y2);
    if(gap > 4){
      gap = 0;
      vertex(cX, cY);
      vertex(cX + 8, cY);
    }
    else{gap = gap + 1;};
  };
  endShape();
};

function interpolate_letter(percent, oldObj, newObj){
  stroke(80,80,80);
  strokeWeight(4);
  x1 = oldObj["stroke1_x1"];
  let x2 = oldObj["stroke1_x2"];
  let y1 = oldObj["stroke1_y1"];
  let y2 = oldObj["stroke1_y2"];
  let x3 = newObj["stroke1_x1"];
  let y3 = newObj["stroke1_y1"];
  let x4 = newObj["stroke1_x2"];
  let y4 = newObj["stroke1_y2"];
  
  interpolate_draw(percent, x1, y1, x2, y2, x3, y3, x4, y4);

  stroke(77,77,77);
  x1 = oldObj["stroke2_x1"];
  x2 = oldObj["stroke2_x2"];
  y1 = oldObj["stroke2_y1"];
  y2 = oldObj["stroke2_y2"];
  x3 = newObj["stroke2_x1"];
  y3 = newObj["stroke2_y1"];
  x4 = newObj["stroke2_x2"];
  y4 = newObj["stroke2_y2"];
  interpolate_draw(percent, x1, y1, x2, y2, x3, y3, x4, y4);

  stroke(0,0,0);
  x1 = oldObj["stroke3_x1"];
  x2 = oldObj["stroke3_x2"];
  y1 = oldObj["stroke3_y1"];
  y2 = oldObj["stroke3_y2"];
  x3 = newObj["stroke3_x1"];
  y3 = newObj["stroke3_y1"];
  x4 = newObj["stroke3_x2"];
  y4 = newObj["stroke3_y2"];
  interpolate_draw(percent, x1, y1, x2, y2, x3, y3, x4, y4);
}

function interpolate_draw(percent, x1, y1, x2, y2, x3, y3, x4, y4){
 /* length = ((((x2 - x1)^2)+((y2 - y1)^2))^0.5);
  beginShape(LINES);
  let gap = 0;
  for(i = 0; i < length; i++){
    let cX = map(i, 0, length, x1, x2);
    let cY = map(i, 0, length, y1, y2);
    if(gap > 4){
      gap = 0;
      vertex(cX, cY);
      vertex(cX + 8, cY);
    }
    else{gap = gap + 1;};
  };
  endShape();*/
  if(((((x2 - x1)^2)+((y2 - y1)^2))^0.5) > ((((x4 - x3)^2)+((y4 - y3)^2))^0.5)){length = ((((x2 - x1)^2)+((y2 - y1)^2))^0.5)}
  else{length = ((((x4 - x3)^2)+((y4 - y3)^2))^0.5)};
  beginShape(LINES);
  for(i = 0; i < length; i++){
    cX = map(i, 0, length, x1, x2);
    cY = map(i, 0, length, y1, y2);
    cX2 = map(i, 0, length, y3, y4);
    cY2 = map(i, 0, length, x3, x4);
    
  };
  endShape();
}

function interpolate_points(percent, x1, y1, x2, y2){
  distanceX = x2 - x1;
  distanceY = y2 - y1;
  vertex(((x1 - (distanceX*percent)),(y1 - (distanceY*percent))));
  vertex(((x1 - (distanceX*percent))+8,(y1 - (distanceY*percent))));
}

function interpolate_points2(percent, x1, y1, x2, y2){
  distanceX = x2 - x1;
  distanceY = y2 - y1;
  return ((x1 - (distanceX*percent))+8,(y1 - (distanceY*percent)));
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}