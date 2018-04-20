//const colorBack   = "#e3eded";
//const colorStroke = "#233f11";
let cY;
let cX;
let gap;
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
/*function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];

  // draw two circles
  ellipse(50, 150, 100, 100);
  ellipse(pos2x, pos2y, size2, size2);
}*/

/*function aStroke(x, y, x2, y2){
  this.x = x; 
  this.y = y;
  this.angle = angle;
  this.curve = curve;

  this.length;
  this.rA;
  this.depth;
  this.tAngle; 
  this.shaping = [];

  this.gap = true;
  this.gap2 = 0;

  this.drawing = function(){
    this.lenCal();
    //stroke(1);
    fill(255);
    //rotate(this.angle);
    //translate(this.x, this.y);
    beginShape(LINES);
    if(this.curve == 0){
      for(i = 0; i < this.length; i++){
        let cX = map(i, 0, this.length, this.x, this.x+fW);
        let cY = map(i, 0, this.length, this.y, this.depth+fY);
        this.shaping.push(cX, cY);
        this.shaping.push(cX + 8, cY);
        if(this.gap == true){
          vertex(cX, cY);
          vertex(cX + 8, cY);
          //this.gap = false;
        }
        else{
          //if(this.gap2 > 1){
            this.gap = true;
            this.gap2 = 0;
          //}
          //else{
            this.gap2 = this.gap2+1;
         // };
          }
        };
      };
      //for(n = 0; n < this.shaping.length; n++){console.log(this.shaping[n])};
      //line(this.length+100, this.y+100, this.x + this.length, this.length);
      endShape();
    }
  

this.lenCal = function(){
  if(this.angle%90 == 0){
    this.length = fW;
    this.depth = (((this.length^2)-(fW^2))^0.5);
  }
  else{
    this.tAngle = 90*((Math.floor(angle/90)));
    this.rA = angle - ((Math.floor(angle/90)*90));
    this.length = Math.floor((fW*((1-Math.sin(this.rA)))));
    this.depth = (((this.length^2)-(fW^2))^0.5);
  } 
  return length;
  };
}*/   

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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}