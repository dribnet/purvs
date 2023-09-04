//color settings
const colorFont1  = "#f6f600"; // Yellow
const colorFont2  = "#ed1e79"; // Pink
const colorFont3  = "#2fade3" ; // Blue
const colorStroke  = "#0b282a"; //Black



function drawLetter(letterData) {

  // parameters
  let ax = letterData["arcX"];
  let ay = letterData["arcY"];
  let aw = letterData["arcW"];
  let ah = letterData["arcH"];
  let as = letterData["arcStart"];

  let cx = letterData["curveX"];
  let cy = letterData["curveY"];
  let cl = letterData["clnth"];
  let cg = letterData["cGap"];
  let a = letterData["cAngle"];

  let ex = letterData["elpsX"];
  let ey = letterData["elpsY"];
  let el = letterData["elpsLnth"];
  let eg = letterData["elpsGap"];
  let es = letterData["elpsSize"];
  let b = letterData["eAngle"];


  // draw arc
  angleMode(DEGREES);
  fill(colorFont3);
  strokeCap(ROUND);
  stroke(colorStroke);
  strokeWeight(5);
  arc(ax,ay,aw,ah,as,as+180,CHORD);


  // draw wave curve
  stroke(colorFont2);
  noFill();
  strokeWeight(15);
  bezier(cx,cy,cx+cos(a)*cl,cy-sin(a)*cl,cx+cos(90-a)*cg,cy+sin(90-a)*cg, cx+cos(a)*cl+cos(90-a)*cg,cy-sin(a)*cl+sin(90-a)*cg)


  // draw ellipse
  fill(colorFont1);
  noStroke();
  ellipse(ex,ey,es,es);
  ellipse(ex+cos(b)*el,ey+sin(b)*el,es,es);
  ellipse(ex+cos(b)*el*2,ey+sin(b)*el*2,es,es);

  ellipse(ex+cos(90-b)*eg,ey+sin(90-b)*eg,es,es);
  ellipse(ex+cos(b)*el+cos(90-b)*eg,ey+sin(b)*el+sin(90-b)*eg,es,es);
  ellipse(ex+cos(b)*el*2+cos(90-b)*eg,ey+sin(b)*el*2+sin(90-b)*eg,es,es);

}




function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //arc
  new_letter["arcX"]    = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcW"] = map(percent, 0, 100, oldObj["arcW"], newObj["arcW"]);
  new_letter["arcH"]    = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);

  //curve
  new_letter["curveX"] = map(percent, 0, 100, oldObj["curveX"], newObj["curveX"]);
  new_letter["curveY"]    = map(percent, 0, 100, oldObj["curveY"], newObj["curveY"]);
  new_letter["clnth"] = map(percent, 0, 100, oldObj["clnth"], newObj["clnth"]);
  new_letter["cGap"] = map(percent, 0, 100, oldObj["cGap"], newObj["cGap"]);
  new_letter["cAngle"]    = map(percent, 0, 100, oldObj["cAngle"], newObj["cAngle"]);

  //ellipse
  new_letter["elpsX"] = map(percent, 0, 100, oldObj["elpsX"], newObj["elpsX"]);
  new_letter["elpsY"] = map(percent, 0, 100, oldObj["elpsY"], newObj["elpsY"]);
  new_letter["elpsLnth"]    = map(percent, 0, 100, oldObj["elpsLnth"], newObj["elpsLnth"]);
  new_letter["elpsGap"] = map(percent, 0, 100, oldObj["elpsGap"], newObj["elpsGap"]);
  new_letter["elpsSize"] = map(percent, 0, 100, oldObj["elpsSize"], newObj["elpsSize"]);
  new_letter["eAngle"]    = map(percent, 0, 100, oldObj["eAngle"], newObj["eAngle"]);

  return new_letter;
}

var swapWords = [
  "MEMPHIS!",
  "01345789",
  "LEMONADE",
  "FLAMINGO",
  "SPARKLES",
  "SUNSHINE",

]
