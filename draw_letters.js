/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFB6C1";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const babyBlue  = "#89cff0";
const lightBlue  = "#cdebf9";
const lBabyBlue = "#b6e2f6";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  drawA(letterData);
  drawB(letterData);
  drawC(letterData);
  drawD(letterData);
  drawE(letterData);
  drawF(letterData);
  drawG(letterData);
  drawH(letterData);
  drawI(letterData);
  drawJ(letterData);
  drawK(letterData);
  drawL(letterData);
  drawM(letterData);
  drawN(letterData);
  drawO(letterData);
  drawP(letterData);
  drawQ(letterData);
  drawR(letterData);
  drawS(letterData);
  drawT(letterData);
  drawU(letterData);
  drawV(letterData);
  drawW(letterData);
  drawX(letterData);
  drawY(letterData);
  drawZ(letterData);
  
}
function drawA(letterD){
  let start = letterD["startA"];
  let stop =  letterD["endA"];
  let start2 = letterD["start2A"];
  let stop2 =  letterD["end2A"];
  let start3 = letterD["start3A"];
  let stop3 =  letterD["end3A"];
  let start4 = letterD["start4A"];
  let stop4 =  letterD["end4A"];
  let start5 = letterD["start5A"];
  let stop5 =  letterD["end5A"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
  line(start4,stop4,start5,stop5);
}
function drawB(letterD){
  let start = letterD["startB"];
  let stop =  letterD["endB"];
  let start2 = letterD["start2B"];
  let stop2 =  letterD["end2B"];
  let start3 = letterD["start3B"];
  let stop3 =  letterD["end3B"];
  let start4 = letterD["start4B"];
  let stop4 =  letterD["end4B"];
  let start5 = letterD["start5B"];
  let stop5 =  letterD["end5B"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
  line(start4,stop4,start5,stop5);
}
function drawC(letterD){
  let start = letterD["startC"];
  let stop =  letterD["endC"];
  let start2 = letterD["start2C"];
  let stop2 =  letterD["end2C"];
  let start3 = letterD["start3C"];
  let stop3 =  letterD["end3C"];
  let start4 = letterD["start4C"];
  let stop4 =  letterD["end4C"];
  let start5 = letterD["start5C"];
  let stop5 =  letterD["end5C"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
}
function drawD(letterD){
  let start = letterD["startD"];
  let stop =  letterD["endD"];
  let start2 = letterD["start2D"];
  let stop2 =  letterD["end2D"];
  let start3 = letterD["start3D"];
  let stop3 =  letterD["end3D"];
  let start4 = letterD["start4D"];
  let stop4 =  letterD["end4D"];
  let start5 = letterD["start5D"];
  let stop5 =  letterD["end5D"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
}
function drawE(letterD){
  let start = letterD["startE"];
  let stop =  letterD["endE"];
  let start2 = letterD["start2E"];
  let stop2 =  letterD["end2E"];
  let start3 = letterD["start3E"];
  let stop3 =  letterD["end3E"];
  let start4 = letterD["start4E"];
  let stop4 =  letterD["end4E"];
  let start5 = letterD["start5E"];
  let stop5 =  letterD["end5E"];
  let start6 = letterD["start6E"];
  let stop6 = letterD["end6E"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
  line(start5,stop5,start6,stop6);
}
function drawF(letterD){
  let start = letterD["startF"];
  let stop =  letterD["endF"];
  let start2 = letterD["start2F"];
  let stop2 =  letterD["end2F"];
  let start3 = letterD["start3F"];
  let stop3 =  letterD["end3F"];
  let start4 = letterD["start4F"];
  let stop4 =  letterD["end4F"];
  let start5 = letterD["start5F"];
  let stop5 =  letterD["end5F"];
  let start6 = letterD["start6F"];
  let stop6 = letterD["end6F"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
  line(start5,stop5,start6,stop6);
}
function drawG(letterD){
  let start = letterD["startG"];
  let stop =  letterD["endG"];
  let start2 = letterD["start2G"];
  let stop2 =  letterD["end2G"];
  let start3 = letterD["start3G"];
  let stop3 =  letterD["end3G"];
  let start4 = letterD["start4G"];
  let stop4 =  letterD["end4G"];
  let start5 = letterD["start5G"];
  let stop5 =  letterD["end5G"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
  line(start4,stop4,start5,stop5);
}
function drawH(letterD){
  let start = letterD["startH"];
  let stop =  letterD["endH"];
  let start2 = letterD["start2H"];
  let stop2 =  letterD["end2H"];
  let start3 = letterD["start3H"];
  let stop3 =  letterD["end3H"];
  let start4 = letterD["start4H"];
  let stop4 =  letterD["end4H"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
}
function drawI(letterD){
  let start = letterD["startI"];
  let stop =  letterD["endI"];
  let start2 = letterD["start2I"];
  let stop2 =  letterD["end2I"];
  let start3 = letterD["start3I"];
  let stop3 =  letterD["end3I"];
  let start4 = letterD["start4I"];
  let stop4 =  letterD["end4I"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
}
function drawJ(letterD){
  let start = letterD["startJ"];
  let stop =  letterD["endJ"];
  let start2 = letterD["start2J"];
  let stop2 =  letterD["end2J"];
  let start3 = letterD["start3J"];
  let stop3 =  letterD["end3J"];
  let start4 = letterD["start4J"];
  let stop4 =  letterD["end4J"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
}
function drawK(letterD){
  let start = letterD["startK"];
  let stop =  letterD["endK"];
  let start2 = letterD["start2K"];
  let stop2 =  letterD["end2K"];
  let start3 = letterD["start3K"];
  let stop3 =  letterD["end3K"];
  let start4 = letterD["start4K"];
  let stop4 =  letterD["end4K"];
  let start5 = letterD["start5K"];
  let stop5 =  letterD["end5K"];
  let start6 = letterD["start6K"];
  let stop6 =  letterD["end6K"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
  line(start5,stop5,start6,stop6);
}
function drawL(letterD){
  let start = letterD["startL"];
  let stop =  letterD["endL"];
  let start2 = letterD["start2L"];
  let stop2 =  letterD["end2L"];
  let start3 = letterD["start3L"];
  let stop3 =  letterD["end3L"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
}
function drawM(letterD){
  let start = letterD["startM"];
  let stop =  letterD["endM"];
  let start2 = letterD["start2M"];
  let stop2 =  letterD["end2M"];
  let start3 = letterD["start3M"];
  let stop3 =  letterD["end3M"];
  let start4 = letterD["start4M"];
  let stop4 =  letterD["end4M"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
}
function drawN(letterD){
  let start = letterD["startN"];
  let stop =  letterD["endN"];
  let start2 = letterD["start2N"];
  let stop2 =  letterD["end2N"];
  let start3 = letterD["start3N"];
  let stop3 =  letterD["end3N"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
}
function drawO(letterD){
  let start = letterD["startO"];
  let stop =  letterD["endO"];
  let start2 = letterD["start2O"];
  let stop2 =  letterD["end2O"];
  let start3 = letterD["start3O"];
  let stop3 =  letterD["end3O"];
  let start4 = letterD["start4O"];
  let stop4 =  letterD["end4O"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start,stop,start4,stop4);
  line(start3,stop3,start4,stop4);
}
function drawP(letterD){
  let start = letterD["startP"];
  let stop =  letterD["endP"];
  let start2 = letterD["start2P"];
  let stop2 =  letterD["end2P"];
  let start3 = letterD["start3P"];
  let stop3 =  letterD["end3P"];
  let start4 = letterD["start4P"];
  let stop4 =  letterD["end4P"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
}
function drawQ(letterD){
  let start = letterD["startQ"];
  let stop =  letterD["endQ"];
  let start2 = letterD["start2Q"];
  let stop2 =  letterD["end2Q"];
  let start3 = letterD["start3Q"];
  let stop3 =  letterD["end3Q"];
  let start4 = letterD["start4Q"];
  let stop4 =  letterD["end4Q"];
  let start5 = letterD["start5Q"];
  let stop5 =  letterD["end5Q"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start4,stop4,start5,stop5);
}
function drawR(letterD){
  let start = letterD["startR"];
  let stop =  letterD["endR"];
  let start2 = letterD["start2R"];
  let stop2 =  letterD["end2R"];
  let start3 = letterD["start3R"];
  let stop3 =  letterD["end3R"];
  let start4 = letterD["start4R"];
  let stop4 =  letterD["end4R"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
}
function drawS(letterD){
  let start = letterD["startS"];
  let stop =  letterD["endS"];
  let start2 = letterD["start2S"];
  let stop2 =  letterD["end2S"];
  let start3 = letterD["start3S"];
  let stop3 =  letterD["end3S"];
  let start4 = letterD["start4S"];
  let stop4 =  letterD["end4S"];
  let start5 = letterD["start5S"];
  let stop5 =  letterD["end5S"];
  let start6 = letterD["start6S"];
  let stop6 =  letterD["end6S"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start4,stop4,start5,stop5);
  line(start5,stop5,start6,stop6);
}
function drawT(letterD){
  let start = letterD["startT"];
  let stop =  letterD["endT"];
  let start2 = letterD["start2T"];
  let stop2 =  letterD["end2T"];
  let start3 = letterD["start3T"];
  let stop3 =  letterD["end3T"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
}
function drawU(letterD){
  let start = letterD["startU"];
  let stop =  letterD["endU"];
  let start2 = letterD["start2U"];
  let stop2 =  letterD["end2U"];
  let start3 = letterD["start3U"];
  let stop3 =  letterD["end3U"];
  let start4 = letterD["start4U"];
  let stop4 =  letterD["end4U"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
}
function drawV(letterD){
  let start = letterD["startV"];
  let stop =  letterD["endV"];
  let start2 = letterD["start2V"];
  let stop2 =  letterD["end2V"];
  let start3 = letterD["start3V"];
  let stop3 =  letterD["end3V"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
}
function drawW(letterD){
  let start = letterD["startW"];
  let stop =  letterD["endW"];
  let start2 = letterD["start2W"];
  let stop2 =  letterD["end2W"];
  let start3 = letterD["start3W"];
  let stop3 =  letterD["end3W"];
  let start4 = letterD["start4W"];
  let stop4 =  letterD["end4W"];
  let start5 = letterD["start5W"];
  let stop5 =  letterD["end5W"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start4,stop4,start5,stop5);
}
function drawX(letterD){
  let start = letterD["startX"];
  let stop =  letterD["endX"];
  let start2 = letterD["start2X"];
  let stop2 =  letterD["end2X"];
  let start3 = letterD["start3X"];
  let stop3 =  letterD["end3X"];
  let start4 = letterD["start4X"];
  let stop4 =  letterD["end4X"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
}
function drawY(letterD){
  let start = letterD["startY"];
  let stop =  letterD["endY"];
  let start2 = letterD["start2Y"];
  let stop2 =  letterD["end2Y"];
  let start3 = letterD["start3Y"];
  let stop3 =  letterD["end3Y"];
  let start4 = letterD["start4Y"];
  let stop4 =  letterD["end4Y"];
  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
}
function drawZ(letterD){
  let start = letterD["startZ"];
  let stop =  letterD["endZ"];
  let start2 = letterD["start2Z"];
  let stop2 =  letterD["end2Z"];
  let start3 = letterD["start3Z"];
  let stop3 =  letterD["end3Z"];
  let start4 = letterD["start4Z"];
  let stop4 =  letterD["end4Z"];
  let start5 = letterD["start5Z"];
  let stop5 =  letterD["end5Z"];
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start4,stop4,start5,stop5);
}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["start"]    = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["end"]    = map(percent, 0, 100, oldObj["end"], newObj["end"]);
  new_letter["start2"]    = map(percent, 0, 100, oldObj["start2"], newObj["start2"]);
  new_letter["end2"]    = map(percent, 0, 100, oldObj["end2"], newObj["end2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]




