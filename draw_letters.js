const colorFront1  = "#ffffff";
const colorFront2  = "#000000";
const colorStroke  = "#000000";


function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);//Colors all my lines black
  strokeWeight(1);
  push();//I had to add a push and pop because putting the rect mode on center messed up the canvas position
  rectMode(CENTER);

  let a = letterData["space"];//the spacing between the lines in the loop
  let pLV1 = letterData["lpV1"];//Controlls the angled verticle lines
  let pLV2 = letterData["lpV2"];
  let pLV3 = letterData["lpV3"];
  let pLH1 = letterData["lpH1"];//Controlls the angled horizontal lines
  let pLH2 = letterData["lpH2"];
  let pLH3 = letterData["lpH3"];
  let pLH1st = letterData["lpH1st"];//Controlls the straight horizontal lines
  let pLH2st = letterData["lpH2st"];
  let pLV1st = letterData["lpV1st"];//Controlls the straight verticle lines
  let pLV2st = letterData["lpV2st"];
  let lilR = letterData["mid"];//The size of the center black square

  fill(colorFront1);
  rect(50, 150, 100, 100);//The white square all the letters are drawn in
  noStroke();
  fill(colorFront2);
 rect(50,150,lilR,lilR);//The black center square
 stroke(colorStroke);
  
  for(let i = 0; i< 105; i+= a){//the loop for all verticle lines
    line(pLV1,pLV2,i,pLV3);//angled line
    line(i,pLV1st,i,pLV2st);//straight line

  }
  for(let i = 100;i< 205; i += a){//the loop for all horizontal lines
line(pLH1,pLH2,pLH3,i);//angled line 
  line(pLH1st,i,pLH2st,i);//straight line
}

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["space"] = map(percent, 0, 100, oldObj["space"], newObj["space"]);
  new_letter["lpV1"] = map(percent, 0, 100, oldObj["lpV1"], newObj["lpV1"]);
  new_letter["lpV2"] = map(percent, 0, 100, oldObj["lpV2"], newObj["lpV2"]);
  new_letter["lpV3"] = map(percent, 0, 100, oldObj["lpV3"], newObj["lpV3"]);
  new_letter["lpH1"] = map(percent, 0, 100, oldObj["lpH1"], newObj["lpH1"]);
  new_letter["lpH2"] = map(percent, 0, 100, oldObj["lpH2"], newObj["lpH2"]);
  new_letter["lpH3"] = map(percent, 0, 100, oldObj["lpH3"], newObj["lpH3"]);
  new_letter["lpH1st"] = map(percent, 0, 100, oldObj["lpH1st"], newObj["lpH1st"]);
  new_letter["lpH2st"] = map(percent, 0, 100, oldObj["lpH2st"], newObj["lpH2st"]);
  new_letter["lpV1st"] = map(percent, 0, 100, oldObj["lpV1st"], newObj["lpV1st"]);
  new_letter["lpV2st"] = map(percent, 0, 100, oldObj["lpV2st"], newObj["lpV2st"]);
  new_letter["mid"] = map(percent, 0, 100, oldObj["mid"], newObj["mid"]);
  return new_letter;
}

var swapWords = [
  "ABIKAX??",//Name of font
  "MAVISLEE",//My name (my name is Mavis Leigh but Leigh doesn't fit)
  "MATHTIME",//because my font looks mathmaticle
  "SHARPENS",//because the font looks sharp
  "02141998"// my birthday
]