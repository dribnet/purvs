/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
deskPrimary = "#4E403E";
deskLight = "#5C4B49";
deskDark = "#403433";
deskHighlight = "#8A716D";
deskShadowLight = "#2E2524";
deskShadowDark = "#141010";

mugPrimary = "#E2DFD3";
mugShadow = "#C4C2B7";
mugHighlight = "#F2F2F2";
coffee = "#5C4B49";

planter = "#E2DFD3";
planterShadow = "#C4C2B7";
plantLight = "#7AC943";
plantDark = "#62A136";

computerPrimary = "#DCC598";
computerSecondary = "#BB9F74";
computerShadowLight = "#C4AF89";
computerShadowDark = "#9C7B58";
computerVents = "#B18F6A";

screenBase = "#3C2C2B";
screenDepth1 = "#4E403E";
screenDepth2 = "#65625A";
screenGlass = "#8E8B80";

discShadow = "#C4AF89";
discBase = "#4E403C";
discDrive = "#3C2C2B";

cordShadow = "#C4AF89";
cordBase = "#4E403E";
cordSocket = "#3C2C2B";
cord = "#BDBAAE";

keyboardPrimary = "#ECD9B7";
keyboardShaded = "#BB9F74";
keyboardShadowLight = "#B18F6A";
keyboardShadowDark = "#9C7B58";
keyboardKey = "#BB9F74";
keyboardKeyShaded = "#9C7B58";

mousePrimary = "#ECD9B7";
mouseShaded = "#BB9F74";
mouseShadowLight = "#B18F6A";
mouseShadowDark = "#9C7B58";

lampPrimary = "#DCC598";
lampShaded = "#C4AF89";
lampSecondary = "#E2DFD3";
lampHighlight = "#F2F2F2";
lightbulbPrimary = "#E2DFD3";
lightbuldShaded = "#C4C2B7";
lightray = (242);

clockGlass = "#E2DFD3";
clockInner = "#999999";
clockOuter = "#4E403E";
clockHands = "#4E403E";
clockHightlight = "#F2F2F2";

colourList = ["#C6C4C1", "#ADACA6", "#7C7B77", "#5E5D58"];

otherColourList = ["#1798C4", "#6DCF00", "#FA3F00", "#F8FF00"];

bg = "#FFF8E1";

var objWidth = 1;
var margin = objWidth * 3;
var double = (objWidth * 3) + objWidth / 2;
var triple = (objWidth * 9) + objWidth / 2;


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

   p5.background(bg);
   p5.noStroke();
   p5.angleMode(p5.DEGREES);

   // clock outer
   var cx = p5.map(592, x1, x2, 0, 256);
   var cy = p5.map(392, y1, y2, 0, 256);
   var cx2 = p5.map(592+65, x1, x2, 0, 256);
   var cy2 = p5.map(392+65, y1, y2, 0, 256);

   p5.fill(clockOuter);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // clock inner
   var cx = p5.map(592, x1, x2, 0, 256);
   var cy = p5.map(392, y1, y2, 0, 256);
   var cx2 = p5.map(592+55, x1, x2, 0, 256);
   var cy2 = p5.map(392+55, y1, y2, 0, 256);

   p5.fill(clockInner);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // clock glass
   var cx = p5.map(592, x1, x2, 0, 256);
   var cy = p5.map(392, y1, y2, 0, 256);
   var cx2 = p5.map(592+52, x1, x2, 0, 256);
   var cy2 = p5.map(392+52, y1, y2, 0, 256);

   p5.fill(clockGlass);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // clock hands
   var cx = p5.map(592, x1, x2, 0, 256);
   var cy = p5.map(372, y1, y2, 0, 256);
   var cx2 = p5.map(592+0, x1, x2, 0, 256);
   var cy2 = p5.map(372+20, y1, y2, 0, 256);
   var cx3 = p5.map(592+7, x1, x2, 0, 256);
   var cy3 = p5.map(372+27, y1, y2, 0, 256);
   var cx4 = p5.map(592+3, x1, x2, 0, 256);

   p5.noFill();
   p5.stroke(clockHands);
   p5.strokeWeight(cx4 - cx);
   p5.strokeCap(p5.SQUARE);
   p5.beginShape();
   p5.vertex(cx, cy);
   p5.vertex(cx2, cy2);
   p5.vertex(cx3, cy3);
   p5.endShape();
   p5.noStroke();

   // clock highlight1
   var cx = p5.map(592, x1, x2, 0, 256);
   var cy = p5.map(392, y1, y2, 0, 256);
   var cx2 = p5.map(592+45, x1, x2, 0, 256);
   var cy2 = p5.map(392+45, y1, y2, 0, 256);
   var cx3 = p5.map(592+2, x1, x2, 0, 256);

   p5.noFill();
   p5.stroke(clockHightlight);
   p5.strokeWeight(cx3 - cx);
   p5.strokeCap(p5.ROUND);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 180, 225);
   p5.noStroke();

   // clock highlight2
   var cx = p5.map(592, x1, x2, 0, 256);
   var cy = p5.map(392, y1, y2, 0, 256);
   var cx2 = p5.map(592+45, x1, x2, 0, 256);
   var cy2 = p5.map(392+45, y1, y2, 0, 256);
   var cx3 = p5.map(592+2, x1, x2, 0, 256);

   p5.noFill();
   p5.stroke(clockHightlight);
   p5.strokeWeight(cx3 - cx);
   p5.strokeCap(p5.ROUND);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 235, 245);
   p5.noStroke();

   // mug handle shadow
   var cx = p5.map(407, x1, x2, 0, 256);
   var cy = p5.map(507, y1, y2, 0, 256);
   var cx2 = p5.map(407+15, x1, x2, 0, 256);
   var cx3 = p5.map(407+5, x1, x2, 0, 256);
   var cx4 = p5.map(407+360, x1, x2, 0, 256);

   p5.noFill();
   p5.strokeWeight(cx3 - cx);
   p5.stroke(mugShadow);
   p5.arc(cx, cy, cx2 - cx, cx2 - cx, 0, 360);
   p5.noStroke();

   // mug handle
   var cx = p5.map(407, x1, x2, 0, 256);
   var cy = p5.map(507, y1, y2, 0, 256);
   var cx2 = p5.map(407+15, x1, x2, 0, 256);
   var cx3 = p5.map(407+5, x1, x2, 0, 256);
   var cx4 = p5.map(407+360, x1, x2, 0, 256);

   p5.noFill();
   p5.strokeWeight(cx3 - cx);
   p5.stroke(mugPrimary);
   p5.strokeCap(p5.SQUARE);
   p5.arc(cx, cy, cx2 - cx, cx2 - cx, 270, 450);
   p5.noStroke();

   // mug main
   var cx = p5.map(380, x1, x2, 0, 256);
   var cy = p5.map(487, y1, y2, 0, 256);
   var cx2 = p5.map(380+25, x1, x2, 0, 256);
   var cy2 = p5.map(487+40, y1, y2, 0, 256);
   var cx3 = p5.map(380+8, x1, x2, 0, 256);

   p5.fill(mugPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // mug highlight1
   var cx = p5.map(383, x1, x2, 0, 256);
   var cy = p5.map(502, y1, y2, 0, 256);
   var cx2 = p5.map(383+2, x1, x2, 0, 256);
   var cy2 = p5.map(502+15, y1, y2, 0, 256);

   p5.fill(mugHighlight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // mug highlight2
   var cx = p5.map(383, x1, x2, 0, 256);
   var cy = p5.map(494, y1, y2, 0, 256);
   var cx2 = p5.map(383+2, x1, x2, 0, 256);
   var cy2 = p5.map(494+5, y1, y2, 0, 256);

   p5.fill(mugHighlight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // coffee line1
   var cx = p5.map(386, x1, x2, 0, 256);
   var cy = p5.map(460, y1, y2, 0, 256);
   var cx2 = p5.map(386+4, x1, x2, 0, 256);
   var cy2 = p5.map(460+20, y1, y2, 0, 256);

   p5.fill(coffee);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // coffee line2
   var cx = p5.map(394, x1, x2, 0, 256);
   var cy = p5.map(465, y1, y2, 0, 256);
   var cx2 = p5.map(394+4, x1, x2, 0, 256);
   var cy2 = p5.map(465+13, y1, y2, 0, 256);

   p5.fill(coffee);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // computer base shaded
   var cx = p5.map(448.5, x1, x2, 0, 256);
   var cy = p5.map(482, y1, y2, 0, 256);
   var cx2 = p5.map(448.5+85, x1, x2, 0, 256);
   var cy2 = p5.map(482+50, y1, y2, 0, 256);

   p5.fill(computerSecondary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // computer base
   var cx = p5.map(433.5, x1, x2, 0, 256);
   var cy = p5.map(482, y1, y2, 0, 256);
   var cx2 = p5.map(433.5+85, x1, x2, 0, 256);
   var cy2 = p5.map(482+50, y1, y2, 0, 256);

   p5.fill(computerPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // computer side shadow
   var cx = p5.map(448.5, x1, x2, 0, 256);
   var cy = p5.map(482, y1, y2, 0, 256);
   var cx2 = p5.map(448.5+85, x1, x2, 0, 256);
   var cy2 = p5.map(482+10, y1, y2, 0, 256);

   p5.fill(computerShadowDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // computer front shadow
   var cx = p5.map(433.5, x1, x2, 0, 256);
   var cy = p5.map(482, y1, y2, 0, 256);
   var cx2 = p5.map(433.5+85, x1, x2, 0, 256);
   var cy2 = p5.map(482+10, y1, y2, 0, 256);

   p5.fill(computerShadowLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // cord shadow
   var cx = p5.map(500, x1, x2, 0, 256);
   var cy = p5.map(500, y1, y2, 0, 256);
   var cx2 = p5.map(500+10, x1, x2, 0, 256);
   var cy2 = p5.map(500+10, y1, y2, 0, 256);
   var cx3 = p5.map(500+2, x1, x2, 0, 256);

   p5.fill(cordShadow);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // cord base
   var cx = p5.map(502, x1, x2, 0, 256);
   var cy = p5.map(501.5, y1, y2, 0, 256);
   var cx2 = p5.map(502+6, x1, x2, 0, 256);
   var cy2 = p5.map(501.5+7, y1, y2, 0, 256);
   var cx3 = p5.map(502+1, x1, x2, 0, 256);

   p5.fill(cordBase);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // cord socketLarge
   var cx = p5.map(503, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(503+4, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+4, y1, y2, 0, 256);

   p5.fill(cordSocket);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // cord socketSmall
   var cx = p5.map(503.5, x1, x2, 0, 256);
   var cy = p5.map(502.5, y1, y2, 0, 256);
   var cx2 = p5.map(503.5+3, x1, x2, 0, 256);
   var cy2 = p5.map(502.5+4, y1, y2, 0, 256);

   p5.fill(cordSocket);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // cord1
   var cx = p5.map(504, x1, x2, 0, 256);
   var cy = p5.map(504.5, y1, y2, 0, 256);
   var cx2 = p5.map(504+2, x1, x2, 0, 256);
   var cy2 = p5.map(504.5+18, y1, y2, 0, 256);

   p5.fill(cord);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx, cx2 - cx, 0, 0);

   // cord2
   var cx = p5.map(495, x1, x2, 0, 256);
   var cy = p5.map(520, y1, y2, 0, 256);
   var cx2 = p5.map(495+36, x1, x2, 0, 256);
   var cy2 = p5.map(520+2, y1, y2, 0, 256);

   p5.fill(cord);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // computer top shaded
   var cx = p5.map(443.5, x1, x2, 0, 256);
   var cy = p5.map(370, y1, y2, 0, 256);
   var cx2 = p5.map(443.5+95, x1, x2, 0, 256);
   var cy2 = p5.map(370+117, y1, y2, 0, 256);
   var cx3 = p5.map(443.5+6, x1, x2, 0, 256);

   p5.fill(computerSecondary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // computer top 
   var cx = p5.map(428.5, x1, x2, 0, 256);
   var cy = p5.map(370, y1, y2, 0, 256);
   var cx2 = p5.map(428.5+95, x1, x2, 0, 256);
   var cy2 = p5.map(370+117, y1, y2, 0, 256);
   var cx3 = p5.map(428.5+6, x1, x2, 0, 256);

   p5.fill(computerPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // disc shadow
   var cx = p5.map(476.5, x1, x2, 0, 256);
   var cy = p5.map(467, y1, y2, 0, 256);
   var cx2 = p5.map(476.5+40, x1, x2, 0, 256);
   var cy2 = p5.map(467+10, y1, y2, 0, 256);
   var cx3 = p5.map(476.5+6, x1, x2, 0, 256);

   p5.fill(discShadow);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // disc base
   var cx = p5.map(479, x1, x2, 0, 256);
   var cy = p5.map(469, y1, y2, 0, 256);
   var cx2 = p5.map(479+35, x1, x2, 0, 256);
   var cy2 = p5.map(469+6, y1, y2, 0, 256);
   var cx3 = p5.map(479+6, x1, x2, 0, 256);

   p5.fill(discBase);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // disc drive
   var cx = p5.map(481, x1, x2, 0, 256);
   var cy = p5.map(470.5, y1, y2, 0, 256);
   var cx2 = p5.map(481+31, x1, x2, 0, 256);
   var cy2 = p5.map(470.5+3, y1, y2, 0, 256);
   var cx3 = p5.map(481+6, x1, x2, 0, 256);

   p5.fill(discDrive);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // computer vents
   var yOffset = 0;
   for (var n = 0; n < 5; n++) {
     var cx = p5.map(531, x1, x2, 0, 256);
     var cy = p5.map(442 + yOffset, y1, y2, 0, 256);
     var cx2 = p5.map(531 + 7.5, x1, x2, 0, 256);
     var cy2 = p5.map(442 + yOffset + 5, y1, y2, 0, 256);

     p5.fill(computerVents);
     p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx, 0, 0, cx2 - cx);
     yOffset += 7;
   }

   // screen base
   var cx = p5.map(436, x1, x2, 0, 256);
   var cy = p5.map(379, y1, y2, 0, 256);
   var cx2 = p5.map(436+80, x1, x2, 0, 256);
   var cy2 = p5.map(379+80, y1, y2, 0, 256);
   var cx3 = p5.map(436+6, x1, x2, 0, 256);

   p5.fill(screenBase);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // screen depth1
   var cx = p5.map(440, x1, x2, 0, 256);
   var cy = p5.map(383, y1, y2, 0, 256);
   var cx2 = p5.map(440+73, x1, x2, 0, 256);
   var cy2 = p5.map(383+71, y1, y2, 0, 256);
   var cx3 = p5.map(440+3, x1, x2, 0, 256);

   p5.fill(screenDepth1);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // screen depth2
   var cx = p5.map(445, x1, x2, 0, 256);
   var cy = p5.map(383, y1, y2, 0, 256);
   var cx2 = p5.map(445+68, x1, x2, 0, 256);
   var cy2 = p5.map(383+68, y1, y2, 0, 256);
   var cx3 = p5.map(445+2, x1, x2, 0, 256);

   p5.fill(screenDepth2);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, 0, cx3 - cx, 0, cx3 - cx);

   // screen glass
   var cx = p5.map(447, x1, x2, 0, 256);
   var cy = p5.map(383, y1, y2, 0, 256);
   var cx2 = p5.map(447+66, x1, x2, 0, 256);
   var cy2 = p5.map(383+66, y1, y2, 0, 256);
   var cx3 = p5.map(447+1, x1, x2, 0, 256);

   p5.fill(screenGlass);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, 0, cx3 - cx, 0, cx3 - cx);

   // keyboard mid shaded
   var cx = p5.map(410, x1, x2, 0, 256);
   var cy = p5.map(513, y1, y2, 0, 256);
   var cx2 = p5.map(410+86, x1, x2, 0, 256);
   var cy2 = p5.map(513+2, y1, y2, 0, 256);

   p5.fill(keyboardShadowDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // keyboard top shaded
   var cx = p5.map(408, x1, x2, 0, 256);
   var cy = p5.map(505, y1, y2, 0, 256);
   var cx2 = p5.map(408+90, x1, x2, 0, 256);
   var cy2 = p5.map(505+8, y1, y2, 0, 256);
   var cx3 = p5.map(408+2, x1, x2, 0, 256);

   p5.fill(keyboardShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx, cx2 - cx, cx3 - cx, cx3 - cx);

   // keyboard bottom shaded
   var cx = p5.map(408, x1, x2, 0, 256);
   var cy = p5.map(515, y1, y2, 0, 256);
   var cx2 = p5.map(408+90, x1, x2, 0, 256);
   var cy2 = p5.map(515+8, y1, y2, 0, 256);
   var cx3 = p5.map(408+2, x1, x2, 0, 256);

   p5.fill(keyboardShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx, cx3 - cx, cx2 - cx, cx2 - cx);

   // key1 shaded
   var cx = p5.map(410, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(410+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(410+2, x1, x2, 0, 256);

   p5.fill(keyboardKeyShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key1
   var cx = p5.map(408, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(408+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(408+2, x1, x2, 0, 256);

   p5.fill(keyboardKey);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key2 shaded
   var cx = p5.map(421, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(421+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(421+2, x1, x2, 0, 256);

   p5.fill(keyboardKeyShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key2
   var cx = p5.map(419, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(419+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(419+2, x1, x2, 0, 256);

   p5.fill(keyboardKey);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key3 shaded
   var cx = p5.map(432, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(432+34, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(432+2, x1, x2, 0, 256);

   p5.fill(keyboardKeyShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key3
   var cx = p5.map(430, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(430+34, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(430+2, x1, x2, 0, 256);

   p5.fill(keyboardKey);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key4 shaded
   var cx = p5.map(470, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(470+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(470+2, x1, x2, 0, 256);

   p5.fill(keyboardKeyShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key4
   var cx = p5.map(468, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(468+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(468+2, x1, x2, 0, 256);

   p5.fill(keyboardKey);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key5 shaded
   var cx = p5.map(481, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(481+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(481+2, x1, x2, 0, 256);

   p5.fill(keyboardKeyShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // key5
   var cx = p5.map(479, x1, x2, 0, 256);
   var cy = p5.map(503.5, y1, y2, 0, 256);
   var cx2 = p5.map(479+7, x1, x2, 0, 256);
   var cy2 = p5.map(503.5+2, y1, y2, 0, 256);
   var cx3 = p5.map(479+2, x1, x2, 0, 256);

   p5.fill(keyboardKey);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // keyboard mid
   var cx = p5.map(404, x1, x2, 0, 256);
   var cy = p5.map(513, y1, y2, 0, 256);
   var cx2 = p5.map(404+86, x1, x2, 0, 256);
   var cy2 = p5.map(513+2, y1, y2, 0, 256);

   p5.fill(keyboardShadowLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // keyboard top
   var cx = p5.map(402, x1, x2, 0, 256);
   var cy = p5.map(505, y1, y2, 0, 256);
   var cx2 = p5.map(402+90, x1, x2, 0, 256);
   var cy2 = p5.map(505+8, y1, y2, 0, 256);
   var cx3 = p5.map(402+2, x1, x2, 0, 256);

   p5.fill(keyboardPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx, cx2 - cx, cx3 - cx, cx3 - cx);

   // keyboard bottom
   var cx = p5.map(402, x1, x2, 0, 256);
   var cy = p5.map(515, y1, y2, 0, 256);
   var cx2 = p5.map(402+90, x1, x2, 0, 256);
   var cy2 = p5.map(515+8, y1, y2, 0, 256);
   var cx3 = p5.map(402+2, x1, x2, 0, 256);

   p5.fill(keyboardPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx, cx3 - cx, cx2 - cx, cx2 - cx);

   // mouse mid shaded
   var cx = p5.map(532, x1, x2, 0, 256);
   var cy = p5.map(515, y1, y2, 0, 256);
   var cx2 = p5.map(532+21, x1, x2, 0, 256);
   var cy2 = p5.map(515+2, y1, y2, 0, 256);

   p5.fill(mouseShadowDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // mouse top shaded
   var cx = p5.map(530, x1, x2, 0, 256);
   var cy = p5.map(509, y1, y2, 0, 256);
   var cx2 = p5.map(530+25, x1, x2, 0, 256);
   var cy2 = p5.map(509+6, y1, y2, 0, 256);
   var cx3 = p5.map(530+2, x1, x2, 0, 256);

   p5.fill(mouseShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx, cx2 - cx, cx3 - cx, cx3 - cx);

   // mouse bottom shaded
   var cx = p5.map(530, x1, x2, 0, 256);
   var cy = p5.map(517, y1, y2, 0, 256);
   var cx2 = p5.map(530+25, x1, x2, 0, 256);
   var cy2 = p5.map(517+6, y1, y2, 0, 256);
   var cx3 = p5.map(530+2, x1, x2, 0, 256);

   p5.fill(mouseShaded);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx, cx3 - cx, cx2 - cx, cx2 - cx);

   // mouse mid
   var cx = p5.map(529, x1, x2, 0, 256);
   var cy = p5.map(515, y1, y2, 0, 256);
   var cx2 = p5.map(529+21, x1, x2, 0, 256);
   var cy2 = p5.map(515+2, y1, y2, 0, 256);

   p5.fill(mouseShadowLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // mouse top
   var cx = p5.map(527, x1, x2, 0, 256);
   var cy = p5.map(509, y1, y2, 0, 256);
   var cx2 = p5.map(527+25, x1, x2, 0, 256);
   var cy2 = p5.map(509+6, y1, y2, 0, 256);
   var cx3 = p5.map(527+2, x1, x2, 0, 256);

   p5.fill(mousePrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx, cx2 - cx, cx3 - cx, cx3 - cx);

   // mouse bottom
   var cx = p5.map(527, x1, x2, 0, 256);
   var cy = p5.map(517, y1, y2, 0, 256);
   var cx2 = p5.map(527+25, x1, x2, 0, 256);
   var cy2 = p5.map(517+6, y1, y2, 0, 256);
   var cx3 = p5.map(527+2, x1, x2, 0, 256);

   p5.fill(mousePrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx, cx3 - cx, cx2 - cx, cx2 - cx);

   // plant dark
   var cx = p5.map(608, x1, x2, 0, 256);
   var cy = p5.map(465, y1, y2, 0, 256);
   var cx2 = p5.map(608+16, x1, x2, 0, 256);
   var cy2 = p5.map(462+32, y1, y2, 0, 256);

   p5.fill(plantDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // plant light
   var cx = p5.map(619, x1, x2, 0, 256);
   var cy = p5.map(452, y1, y2, 0, 256);
   var cx2 = p5.map(619+16, x1, x2, 0, 256);
   var cy2 = p5.map(452+42, y1, y2, 0, 256);

   p5.fill(plantLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // plant pot main
   var cx = p5.map(607, x1, x2, 0, 256);
   var cy = p5.map(487, y1, y2, 0, 256);
   var cx2 = p5.map(637, x1, x2, 0, 256);
   var cy2 = p5.map(487, y1, y2, 0, 256);
   var cx3 = p5.map(633, x1, x2, 0, 256);
   var cy3 = p5.map(532, y1, y2, 0, 256);
   var cx4 = p5.map(611, x1, x2, 0, 256);
   var cy4 = p5.map(532, y1, y2, 0, 256);

   p5.fill(planter);
   p5.quad(cx, cy, cx2, cy2, cx3, cy3, cx4, cy4);

   // plant pot shadow
   var cx = p5.map(607, x1, x2, 0, 256);
   var cy = p5.map(487, y1, y2, 0, 256);
   var cx2 = p5.map(637, x1, x2, 0, 256);
   var cy2 = p5.map(487, y1, y2, 0, 256);
   var cx3 = p5.map(636.1, x1, x2, 0, 256);
   var cy3 = p5.map(497, y1, y2, 0, 256);
   var cx4 = p5.map(607.9, x1, x2, 0, 256);
   var cy4 = p5.map(497, y1, y2, 0, 256);

   p5.fill(planterShadow);
   p5.quad(cx, cy, cx2, cy2, cx3, cy3, cx4, cy4);

   // plant pot lid
   var cx = p5.map(602.5, x1, x2, 0, 256);
   var cy = p5.map(487, y1, y2, 0, 256);
   var cx2 = p5.map(604+38, x1, x2, 0, 256);
   var cy2 = p5.map(487+8, y1, y2, 0, 256);

   p5.fill(planter);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // lamp rod1
   var cx = p5.map(582, x1, x2, 0, 256);
   var cy = p5.map(502, y1, y2, 0, 256);
   var cx2 = p5.map(582+28, x1, x2, 0, 256);
   var cy2 = p5.map(502-30, y1, y2, 0, 256);
   var cx3 = p5.map(582+3, x1, x2, 0, 256);

   p5.stroke(lampSecondary);
   p5.strokeWeight(cx3 - cx);
   p5.line(cx, cy, cx2, cy2);
   p5.noStroke();

   // lamp rod2
   var cx = p5.map(570, x1, x2, 0, 256);
   var cy = p5.map(458, y1, y2, 0, 256);
   var cx2 = p5.map(570+40, x1, x2, 0, 256);
   var cy2 = p5.map(458+10, y1, y2, 0, 256);
   var cx3 = p5.map(570+3, x1, x2, 0, 256);

   p5.stroke(lampSecondary);
   p5.strokeWeight(cx3 - cx);
   p5.line(cx, cy, cx2, cy2);
   p5.noStroke();

   // lamp support shaded
   var cx = p5.map(613, x1, x2, 0, 256);
   var cy = p5.map(468.5, y1, y2, 0, 256);
   var cx2 = p5.map(613+10, x1, x2, 0, 256);
   var cy2 = p5.map(468.5+10, y1, y2, 0, 256);

   p5.fill(lampShaded);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // lamp support
   var cx = p5.map(611, x1, x2, 0, 256);
   var cy = p5.map(469, y1, y2, 0, 256);
   var cx2 = p5.map(611+10, x1, x2, 0, 256);
   var cy2 = p5.map(469+10, y1, y2, 0, 256);

   p5.fill(lampPrimary);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // lamp base
   var cx = p5.map(582, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(582+35, x1, x2, 0, 256);
   var cy2 = p5.map(522+35, y1, y2, 0, 256);

   p5.fill(lampPrimary);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // lamp base knob
   var cx = p5.map(582, x1, x2, 0, 256);
   var cy = p5.map(505, y1, y2, 0, 256);
   var cx2 = p5.map(582+10, x1, x2, 0, 256);
   var cy2 = p5.map(505+10, y1, y2, 0, 256);

   p5.fill(lampPrimary);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // lamp base highlight1
   var cx = p5.map(582, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(582+28, x1, x2, 0, 256);
   var cy2 = p5.map(522+28, y1, y2, 0, 256);
   var cx3 = p5.map(582+1.5, x1, x2, 0, 256);

   p5.noFill();
   p5.stroke(lampHighlight);
   p5.strokeWeight(cx3 - cx);
   p5.strokeCap(p5.ROUND);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 190, 220);
   p5.noStroke();

   // lamp base highlight2
   var cx = p5.map(582, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(582+28, x1, x2, 0, 256);
   var cy2 = p5.map(522+28, y1, y2, 0, 256);
   var cx3 = p5.map(582+1.5, x1, x2, 0, 256);

   p5.noFill();
   p5.stroke(lampHighlight);
   p5.strokeWeight(cx3 - cx);
   p5.strokeCap(p5.ROUND);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 235, 245);
   p5.noStroke();

   // lightbulb shaded
   var cx = p5.map(565, x1, x2, 0, 256);
   var cy = p5.map(472, y1, y2, 0, 256);
   var cx2 = p5.map(565+10, x1, x2, 0, 256);
   var cy2 = p5.map(472+10, y1, y2, 0, 256);

   p5.fill(lightbuldShaded);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 0, 360, p5.CHORD);

   // lightbulb
   var cx = p5.map(565, x1, x2, 0, 256);
   var cy = p5.map(472, y1, y2, 0, 256);
   var cx2 = p5.map(565+10, x1, x2, 0, 256);
   var cy2 = p5.map(472+10, y1, y2, 0, 256);

   p5.fill(lightbulbPrimary);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 40, 180, p5.CHORD);

   // lightray
   var cx = p5.map(550.92, x1, x2, 0, 256);
   var cy = p5.map(466.85, y1, y2, 0, 256);
   var cx2 = p5.map(579.09, x1, x2, 0, 256);
   var cy2 = p5.map(477.13, y1, y2, 0, 256);
   var cx3 = p5.map(585, x1, x2, 0, 256);
   var cy3 = p5.map(522, y1, y2, 0, 256);
   var cx4 = p5.map(500, x1, x2, 0, 256);
   var cy4 = p5.map(522, y1, y2, 0, 256);

   p5.fill(lightray, 255 / 2);
   p5.quad(cx, cy, cx2, cy2, cx3, cy3, cx4, cy4);

   // lamp cap
   var cx = p5.map(565, x1, x2, 0, 256);
   var cy = p5.map(472, y1, y2, 0, 256);
   var cx2 = p5.map(565+30, x1, x2, 0, 256);
   var cy2 = p5.map(472+30, y1, y2, 0, 256);

   p5.fill(lampPrimary);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 200, 380, p5.CHORD);

   // lamp cap knob
   var cx = p5.map(570, x1, x2, 0, 256);
   var cy = p5.map(458, y1, y2, 0, 256);
   var cx2 = p5.map(570+10, x1, x2, 0, 256);
   var cy2 = p5.map(458+10, y1, y2, 0, 256);

   p5.fill(lampPrimary);
   p5.ellipse(cx, cy, cx2 - cx, cy2 - cy);

   // lamp cap highlight1
   var cx = p5.map(565, x1, x2, 0, 256);
   var cy = p5.map(472, y1, y2, 0, 256);
   var cx2 = p5.map(565+24, x1, x2, 0, 256);
   var cy2 = p5.map(472+24, y1, y2, 0, 256);
   var cx3 = p5.map(565+1.5, x1, x2, 0, 256);

   p5.noFill();
   p5.stroke(lampHighlight);
   p5.strokeWeight(cx3 - cx);
   p5.strokeCap(p5.ROUND);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 215, 235);
   p5.noStroke();

   // lamp cap highlight2
   var cx = p5.map(565, x1, x2, 0, 256);
   var cy = p5.map(472, y1, y2, 0, 256);
   var cx2 = p5.map(565+24, x1, x2, 0, 256);
   var cy2 = p5.map(472+24, y1, y2, 0, 256);
   var cx3 = p5.map(565+1.5, x1, x2, 0, 256);

   p5.noFill();
   p5.stroke(lampHighlight);
   p5.strokeWeight(cx3 - cx);
   p5.strokeCap(p5.ROUND);
   p5.arc(cx, cy, cx2 - cx, cy2 - cy, 250, 260);
   p5.noStroke();

   // desk back
   var cx = p5.map(392, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(392+180, x1, x2, 0, 256);
   var cy2 = p5.map(522+50, y1, y2, 0, 256);

   p5.fill(deskLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // front leg 
   var cx = p5.map(372, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(372+15, x1, x2, 0, 256);
   var cy2 = p5.map(522+150, y1, y2, 0, 256);

   p5.fill(deskPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // back leg 
   var cx = p5.map(392, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(392+15, x1, x2, 0, 256);
   var cy2 = p5.map(522+140, y1, y2, 0, 256);

   p5.fill(deskDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // draws shaded
   var cx = p5.map(570, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(570+80, x1, x2, 0, 256);
   var cy2 = p5.map(522+150, y1, y2, 0, 256);
   var cx3 = p5.map(570+10, x1, x2, 0, 256);

   p5.fill(deskDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // draws main
   var cx = p5.map(555, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(555+80, x1, x2, 0, 256);
   var cy2 = p5.map(522+150, y1, y2, 0, 256);
   var cx3 = p5.map(555+10, x1, x2, 0, 256);

   p5.fill(deskPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // draw1
   var cx = p5.map(560, x1, x2, 0, 256);
   var cy = p5.map(552, y1, y2, 0, 256);
   var cx2 = p5.map(560+70, x1, x2, 0, 256);
   var cy2 = p5.map(552+25, y1, y2, 0, 256);
   var cx3 = p5.map(560+8, x1, x2, 0, 256);

   p5.fill(deskLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // draw2
   var cx = p5.map(560, x1, x2, 0, 256);
   var cy = p5.map(584, y1, y2, 0, 256);
   var cx2 = p5.map(560+70, x1, x2, 0, 256);
   var cy2 = p5.map(584+28, y1, y2, 0, 256);
   var cx3 = p5.map(560+8, x1, x2, 0, 256);

   p5.fill(deskLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // draw3
   var cx = p5.map(560, x1, x2, 0, 256);
   var cy = p5.map(619, y1, y2, 0, 256);
   var cx2 = p5.map(560+70, x1, x2, 0, 256);
   var cy2 = p5.map(619+45, y1, y2, 0, 256);
   var cx3 = p5.map(560+8, x1, x2, 0, 256);

   p5.fill(deskLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // draw1 handle shadow
   var cx = p5.map(591.5, x1, x2, 0, 256);
   var cy = p5.map(560.5, y1, y2, 0, 256);
   var cx2 = p5.map(591.5+10, x1, x2, 0, 256);
   var cy2 = p5.map(560.5+10, y1, y2, 0, 256);

   p5.fill(deskPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // draw1 handle
   var cx = p5.map(590, x1, x2, 0, 256);
   var cy = p5.map(559, y1, y2, 0, 256);
   var cx2 = p5.map(590+10, x1, x2, 0, 256);
   var cy2 = p5.map(559+10, y1, y2, 0, 256);

   p5.fill(deskHighlight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // draw2 handle shadow
   var cx = p5.map(591.5, x1, x2, 0, 256);
   var cy = p5.map(594.5, y1, y2, 0, 256);
   var cx2 = p5.map(591.5+10, x1, x2, 0, 256);
   var cy2 = p5.map(594.5+10, y1, y2, 0, 256);

   p5.fill(deskPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // draw2 handle
   var cx = p5.map(590, x1, x2, 0, 256);
   var cy = p5.map(593, y1, y2, 0, 256);
   var cx2 = p5.map(590+10, x1, x2, 0, 256);
   var cy2 = p5.map(593+10, y1, y2, 0, 256);

   p5.fill(deskHighlight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // draw3 handle shadow
   var cx = p5.map(591.5, x1, x2, 0, 256);
   var cy = p5.map(637.5, y1, y2, 0, 256);
   var cx2 = p5.map(591.5+10, x1, x2, 0, 256);
   var cy2 = p5.map(637.5+10, y1, y2, 0, 256);

   p5.fill(deskPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // draw3 handle
   var cx = p5.map(590, x1, x2, 0, 256);
   var cy = p5.map(636, y1, y2, 0, 256);
   var cx2 = p5.map(590+10, x1, x2, 0, 256);
   var cy2 = p5.map(636+10, y1, y2, 0, 256);

   p5.fill(deskHighlight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // front leg shadow
   var cx = p5.map(372, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(372+15, x1, x2, 0, 256);
   var cy2 = p5.map(522+25, y1, y2, 0, 256);

   p5.fill(deskShadowLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // draws shaded shadow
   var cx = p5.map(570, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(570+80, x1, x2, 0, 256);
   var cy2 = p5.map(522+25, y1, y2, 0, 256);

   p5.fill(deskShadowDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // draws main shadow
   var cx = p5.map(555, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(555+80, x1, x2, 0, 256);
   var cy2 = p5.map(522+25, y1, y2, 0, 256);

   p5.fill(deskShadowLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy,);

   // desk main
   var cx = p5.map(352, x1, x2, 0, 256);
   var cy = p5.map(522, y1, y2, 0, 256);
   var cx2 = p5.map(352+320, x1, x2, 0, 256);
   var cy2 = p5.map(522+20, y1, y2, 0, 256);

   p5.fill(deskPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   if (zoom >= 2) {
      p5.strokeCap(p5.ROUND);

      var startx = margin * (Math.floor(x1 / margin) - 1);
      var starty = margin * (Math.floor(y1 / margin) - margin*2);
      var endx = margin * (Math.floor(x2 / margin) + 1);
      var endy = margin * (Math.floor(y2 / margin) + 1);

      if (startx >= 444 && starty > 363 && startx < 507 && starty < 427) {
         p5.rectMode(p5.CORNERS);

         for (var x = startx; x < endx; x += margin / 2) { // x-margin

            var yEndPos = 0;
            var cx = p5.map(x, x1, x2, 0, 256);
            var cx2 = p5.map(x + objWidth, x1, x2, 0, 256); // width 
            var xWidth = cx2 - cx;
            p5.strokeWeight(3*xWidth / 4);

            var y = starty;

            while (y < endy) {

               var noiseScale2 = 1;
               var i = p5.noise(x * noiseScale2, y * noiseScale2, z+5);

               var marginStep;

               if (i < 0.5) {
                  yEndPos = y;
                  marginStep = margin/2;
               }
               else if (i < 0.7) {
                  yEndPos = y + margin/2;
                  marginStep = margin;
               }
               else  {
                  yEndPos = y + 3*margin/2;
                  marginStep = 4*margin/2;
               
               }

               var cy = p5.map(y, y1, y2, 0, 256);
               var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

               var noiseScale1 = 1;
               var noise1 = p5.noise(x * noiseScale1, y * noiseScale1, z);
               var noise1Mapped = p5.map(noise1, 0.3, 0.7, 0, 1);

               if (noise1Mapped > 1 || noise1Mapped <= 0) {
                  noise1Mapped = 0.9;
               }

               var colourIndex = Math.floor(noise1Mapped*colourList.length);
               var c = colourList[colourIndex];

               p5.stroke(c);
               p5.line(cx, cy, cx, cy2);

               if (zoom >= 4) {

                  if (i < 0.5) {
                  }

                  else if (i < 0.7) { // if small line draw additional dots

                     // bottom secondary dot
                     var noiseScale6 = 1;
                     var otherverynewi = p5.noise(x * noiseScale6, y * noiseScale6, z+20);
                     console.log(otherverynewi);

                     if (otherverynewi < 0.45) { // draw dot
                     
                        var cy = p5.map(y, y1, y2, 0, 256);
                        var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

                        // draw dot at top
                        p5.stroke(0, 100);
                        p5.line(cx, cy, cx, cy);
                     }

                     else if (otherverynewi < 0.55) { // draw dot
                     
                        var cy = p5.map(y, y1, y2, 0, 256);
                        var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

                        // draw dot at bottom
                        p5.stroke(0, 100);
                        p5.line(cx, cy2, cx, cy2);
                     }

                     else if (otherverynewi < 0.65) { // draw dot
                     
                        var cy = p5.map(y, y1, y2, 0, 256);
                        var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

                        // draw dot at top
                        p5.stroke(0, 100);
                        p5.line(cx, cy, cx, cy);

                        // draw dot at botom
                        p5.stroke(0, 100);
                        p5.line(cx, cy2, cx, cy2);
                     }

                     else { // draw nothing

                     }
                  }

                  else { // if longest line then draw additional dots

                     // bottom secondary dot
                     var noiseScale5 = 1;
                     var verynewi = p5.noise(x * noiseScale5, y * noiseScale5, z+15);

                     if (verynewi < 0.45) { // draw dot
                     
                        var cy = p5.map(yEndPos, y1, y2, 0, 256);
                        var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

                        // draw dot
                        p5.stroke(0, 100);
                        p5.line(cx, cy, cx, cy2);
                     }

                     else if (verynewi > 0.55) { // draw line
                     
                        var cy = p5.map(y + margin, y1, y2, 0, 256);
                        var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

                        // draw line
                        p5.stroke(0, 100);
                        p5.line(cx, cy, cx, cy2);

                        if (verynewi < 0.6) { // draw at top

                           // draw dot at top
                           p5.stroke(0, 100);
                           p5.line(cx, cy, cx, cy);
                        }
                        else if (newi < 0.72) { // draw at bottom

                           // draw dot at bottom
                           p5.stroke(0, 100);
                           p5.line(cx, cy2, cx, cy2);
                        }
                        else { // draw at both

                           // draw dot at top
                           p5.stroke(0, 100);
                           p5.line(cx, cy, cx, cy);

                           // draw dot at bottom
                           p5.stroke(0, 100);
                           p5.line(cx, cy2, cx, cy2);
                        }
                     }

                     else { // draw nothing

                     }

                     // top secondary dot
                     var noiseScale4 = 1;
                     var newi = p5.noise(x * noiseScale4, y * noiseScale4, z+10);

                     if (newi < 0.45) { // draw dot
                        yEndPos = y;
                     
                        var cy = p5.map(y, y1, y2, 0, 256);
                        var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

                        // draw dot
                        p5.stroke(0, 100);
                        p5.line(cx, cy, cx, cy2);
                     }

                     else if (newi > 0.55) { // draw line

                        yEndPos = y + margin/2;
                     
                        var cy = p5.map(y, y1, y2, 0, 256);
                        var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

                        // draw line
                        p5.stroke(0, 100);
                        p5.line(cx, cy, cx, cy2);

                        if (newi < 0.6) { // draw at top
                           
                           // draw dot at top
                           p5.stroke(0, 100);
                           p5.line(cx, cy, cx, cy);
                        }
                        else if (newi < 0.72) { // draw at bottom
                           
                           // draw dot at bottom
                           p5.stroke(0, 100);
                           p5.line(cx, cy2, cx, cy2);
                        }
                        else { // draw at both

                           // draw dot at top
                           p5.stroke(0, 100);
                           p5.line(cx, cy, cx, cy);

                           // draw dot at bottom
                           p5.stroke(0, 100);
                           p5.line(cx, cy2, cx, cy2);
                        }
                     }

                     else { // draw nothing

                     }
                        
                  }

                  if (zoom >= 6) {
                     
                  }
               
               }
           
               y += marginStep;
            }
         }

      } 
   }
  // p5.strokeWeight(1);
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
