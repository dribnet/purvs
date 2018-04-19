const colorFront  = "#199cff";
const colorStroke = "#233f11";

var swapWords = [
"MORSCODE",
"DJOROVIC",
"BELGRADE",
]

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let alpha = letterData["alpha"];

  stroke(0,0,0, alpha);

  let weight = 40;

  let length = letterData["length"];

  let offset = letterData["offset"];

  let type = letterData["first"];
  if(type==0){
    strokeWeight(weight);
    line(0, (offset*weight/2)+((weight+weight/4)*0), 0, (offset*weight/2)+((weight+weight/4)*0));
  } else if(type==1){
    strokeWeight(weight);
    line(0-length, (offset*weight/2)+((weight+weight/4)*0), 0+length, (offset*weight/2)+((weight+weight/4)*0));
  }
  type = letterData["second"];
  if(type==0){
    strokeWeight(weight);
    line(0, (offset*weight/2)+((weight+weight/4)*1), 0, (offset*weight/2)+0+((weight+weight/4)*1));
  } else if(type==1){
    strokeWeight(weight);
    line(0-length, (offset*weight/2)+((weight+weight/4)*1), 0+length, (offset*weight/2)+((weight+weight/4)*1));
  }
  type = letterData["third"];
  if(type==0){
    strokeWeight(weight);
    line(0, (offset*weight/2)+((weight+weight/4)*2), 0, (offset*weight/2)+((weight+weight/4)*2));
  } else if(type==1){
    strokeWeight(weight);
    line(0-length, (offset*weight/2)+((weight+weight/4)*2), 0+length, (offset*weight/2)+((weight+weight/4)*2));
  }
  type = letterData["fourth"];
  if(type==0){
    strokeWeight(weight);
    line(0, (offset*weight/2)+((weight+weight/4)*3), 0, (offset*weight/2)+((weight+weight/4)*3),);
  } else if(type==1){
    strokeWeight(weight);
    line(0-length, (offset*weight/2)+((weight+weight/4)*3), 0+length, (offset*weight/2)+((weight+weight/4)*3));
  }
  type = letterData["fifth"];
  if(type==0){
    strokeWeight(weight);
    line(0, (offset*weight/2)+((weight+weight/4)*4), 0, (offset*weight/2)+((weight+weight/4)*4));
  } else if(type==1){
    strokeWeight(weight);
    line(0-length, (offset*weight/2)+((weight+weight/4)*4), 0+length, (offset*weight/2)+((weight+weight/4)*4));
  }
}

function interpolate_letter (percent, oldObj, newObj) {

  let new_letter = {};

  if(percent<40){
    new_letter["length"] = map(percent, 0, 40, oldObj["length"], 0);
    new_letter["first"] = oldObj["first"];
    new_letter["second"] = oldObj["second"];
    new_letter["third"] = oldObj["third"];
    new_letter["fourth"] = oldObj["fourth"];
    new_letter["fifth"] = oldObj["fifth"];
    new_letter["offset"] = oldObj["offset"];
  } else if (percent<50) {
    new_letter["length"] = 0;
    new_letter["first"] = oldObj["first"];
    new_letter["second"] = oldObj["second"];
    new_letter["third"] = oldObj["third"];
    new_letter["fourth"] = oldObj["fourth"];
    new_letter["fifth"] = oldObj["fifth"];
    new_letter["offset"] = oldObj["offset"];
  } else if (percent<60) {
    new_letter["length"] = 0;
    new_letter["first"] = newObj["first"];
    new_letter["second"] = newObj["second"];
    new_letter["third"] = newObj["third"];
    new_letter["fourth"] = newObj["fourth"];
    new_letter["fifth"] = newObj["fifth"];
    new_letter["offset"] = newObj["offset"];
  } else if(percent<=100) {
    new_letter["length"] = map(percent, 60, 100, 0, newObj["length"]);
    new_letter["first"] = newObj["first"];
    new_letter["second"] = newObj["second"];
    new_letter["third"] = newObj["third"];
    new_letter["fourth"] = newObj["fourth"];
    new_letter["fifth"] = newObj["fifth"];
    new_letter["offset"] = newObj["offset"];
  }
  if(percent<50){
        new_letter["alpha"] = map(percent, 0, 50, oldObj["alpha"], 0);
  } else if (percent<100) {
        new_letter["alpha"] = map(percent, 50, 100, 0, newObj["alpha"]);
  }
  if(percent==0){
    new_letter["alpha"] = newObj["alpha"];
  }
  return new_letter;

}
