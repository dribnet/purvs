const colorFront  = "#199cff";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let scale = 40;
  
  let offset = letterData["offset"];

  let type = letterData["first"];
  if(type==0){
    strokeWeight(scale);
    line(0, (offset*scale/2)+0+((scale+scale/4)*0), 0, (offset*scale/2)+0+((scale+scale/4)*0));
  } else if(type==1){
    strokeWeight(scale);
    line(0-scale, (offset*scale/2)+0+((scale+scale/4)*0), 0+scale, (offset*scale/2)+0+((scale+scale/4)*0))
  }
  type = letterData["second"];
  if(type==0){
    strokeWeight(scale);
    line(0, (offset*scale/2)+0+((scale+scale/4)*1), 0, (offset*scale/2)+0+((scale+scale/4)*1));
  } else if(type==1){
    strokeWeight(scale);
    line(0-scale, (offset*scale/2)+0+((scale+scale/4)*1), 0+scale, (offset*scale/2)+0+((scale+scale/4)*1))
  }
  type = letterData["third"];
  if(type==0){
    strokeWeight(scale);
    line(0, (offset*scale/2)+0+((scale+scale/4)*2), 0, (offset*scale/2)+0+((scale+scale/4)*2));
  } else if(type==1){
    strokeWeight(scale);
    line(0-scale, (offset*scale/2)+0+((scale+scale/4)*2), 0+scale, (offset*scale/2)+0+((scale+scale/4)*2))
  }
  type = letterData["fourth"];
  if(type==0){
    strokeWeight(scale);
    line(0, (offset*scale/2)+0+((scale+scale/4)*3), 0, (offset*scale/2)+0+((scale+scale/4)*3));
  } else if(type==1){
    strokeWeight(scale);
    line(0-scale, (offset*scale/2)+0+((scale+scale/4)*3), 0+scale, (offset*scale/2)+0+((scale+scale/4)*3))
  }
  type = letterData["fifth"];
  if(type==0){
    strokeWeight(scale);
    line(0, (offset*scale/2)+0+((scale+scale/4)*4), 0, (offset*scale/2)+0+((scale+scale/4)*4));
  } else if(type==1){
    strokeWeight(scale);
    line(0-scale, (offset*scale/2)+0+((scale+scale/4)*4), 0+scale, (offset*scale/2)+0+((scale+scale/4)*4))
  }
}
