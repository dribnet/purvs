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

colourList = ["#1798C4", "#6DCF00", "#FA3F00", "#F8FF00"];

bg = "#FFF8E1";

var objWidth = 2; // sets dot width
var margin = objWidth * 3; // sets margin


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

   p5.background(bg);
   p5.noStroke();
   p5.angleMode(p5.DEGREES);

   if (zoom < 3) {

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
   var cy2 = p5.map(465+15, y1, y2, 0, 256);

   p5.fill(coffee);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx);

   // computer base shaded
   var cx = p5.map(457, x1, x2, 0, 256);
   var cy = p5.map(497, y1, y2, 0, 256);
   var cx2 = p5.map(457+85, x1, x2, 0, 256);
   var cy2 = p5.map(497+50, y1, y2, 0, 256);

   p5.fill(computerSecondary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // computer base
   var cx = p5.map(442, x1, x2, 0, 256);
   var cy = p5.map(497, y1, y2, 0, 256);
   var cx2 = p5.map(442+85, x1, x2, 0, 256);
   var cy2 = p5.map(497+50, y1, y2, 0, 256);

   p5.fill(computerPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // computer side shadow
   var cx = p5.map(457, x1, x2, 0, 256);
   var cy = p5.map(497, y1, y2, 0, 256);
   var cx2 = p5.map(457+85, x1, x2, 0, 256);
   var cy2 = p5.map(497+10, y1, y2, 0, 256);

   p5.fill(computerShadowDark);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // computer front shadow
   var cx = p5.map(442, x1, x2, 0, 256);
   var cy = p5.map(497, y1, y2, 0, 256);
   var cx2 = p5.map(442+85, x1, x2, 0, 256);
   var cy2 = p5.map(497+10, y1, y2, 0, 256);

   p5.fill(computerShadowLight);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy);

   // cord shadow

   // cord base

   // cord socket

   // computer top shaded
   var cx = p5.map(452, x1, x2, 0, 256);
   var cy = p5.map(392, y1, y2, 0, 256);
   var cx2 = p5.map(452+95, x1, x2, 0, 256);
   var cy2 = p5.map(392+110, y1, y2, 0, 256);
   var cx3 = p5.map(452+6, x1, x2, 0, 256);

   p5.fill(computerSecondary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // computer top 
   var cx = p5.map(437, x1, x2, 0, 256);
   var cy = p5.map(392, y1, y2, 0, 256);
   var cx2 = p5.map(437+95, x1, x2, 0, 256);
   var cy2 = p5.map(392+110, y1, y2, 0, 256);
   var cx3 = p5.map(437+6, x1, x2, 0, 256);

   p5.fill(computerPrimary);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // disc shadow
   var cx = p5.map(485, x1, x2, 0, 256);
   var cy = p5.map(477, y1, y2, 0, 256);
   var cx2 = p5.map(485+40, x1, x2, 0, 256);
   var cy2 = p5.map(477+10, y1, y2, 0, 256);
   var cx3 = p5.map(485+6, x1, x2, 0, 256);

   p5.fill(discShadow);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // disc base
   var cx = p5.map(487.5, x1, x2, 0, 256);
   var cy = p5.map(479, y1, y2, 0, 256);
   var cx2 = p5.map(487.5+35, x1, x2, 0, 256);
   var cy2 = p5.map(479+6, y1, y2, 0, 256);
   var cx3 = p5.map(487.5+6, x1, x2, 0, 256);

   p5.fill(discBase);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // disc drive
   var cx = p5.map(489.5, x1, x2, 0, 256);
   var cy = p5.map(480.5, y1, y2, 0, 256);
   var cx2 = p5.map(489.5+31, x1, x2, 0, 256);
   var cy2 = p5.map(480.5+3, y1, y2, 0, 256);
   var cx3 = p5.map(489.5+6, x1, x2, 0, 256);

   p5.fill(discDrive);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // computer vents
   var yOffset = 0;
   for (var n = 0; n < 5; n++) {
     var cx = p5.map(539.5, x1, x2, 0, 256);
     var cy = p5.map(457 + yOffset, y1, y2, 0, 256);
     var cx2 = p5.map(539.5 + 7.5, x1, x2, 0, 256);
     var cy2 = p5.map(457 + yOffset + 5, y1, y2, 0, 256);

     p5.fill(computerVents);
     p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx2 - cx, 0, 0, cx2 - cx);
     yOffset += 7;
   }

   // screen base
   var cx = p5.map(444.5, x1, x2, 0, 256);
   var cy = p5.map(402, y1, y2, 0, 256);
   var cx2 = p5.map(444.5+80, x1, x2, 0, 256);
   var cy2 = p5.map(402+65, y1, y2, 0, 256);
   var cx3 = p5.map(444.5+6, x1, x2, 0, 256);

   p5.fill(screenBase);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // screen depth1
   var cx = p5.map(449.5, x1, x2, 0, 256);
   var cy = p5.map(407, y1, y2, 0, 256);
   var cx2 = p5.map(449.5+70, x1, x2, 0, 256);
   var cy2 = p5.map(407+55, y1, y2, 0, 256);
   var cx3 = p5.map(449.5+4, x1, x2, 0, 256);

   p5.fill(screenDepth1);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, cx3 - cx);

   // screen depth2
   var cx = p5.map(454.5, x1, x2, 0, 256);
   var cy = p5.map(407, y1, y2, 0, 256);
   var cx2 = p5.map(454.5+65, x1, x2, 0, 256);
   var cy2 = p5.map(407+51, y1, y2, 0, 256);
   var cx3 = p5.map(454.5+4, x1, x2, 0, 256);

   p5.fill(screenDepth2);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, 0, cx3 - cx, 0, cx3 - cx);

   // screen glass
   var cx = p5.map(457.5, x1, x2, 0, 256);
   var cy = p5.map(407, y1, y2, 0, 256);
   var cx2 = p5.map(457.5+62, x1, x2, 0, 256);
   var cy2 = p5.map(407+49, y1, y2, 0, 256);
   var cx3 = p5.map(457.5+4, x1, x2, 0, 256);

   p5.fill(screenGlass);
   p5.rect(cx, cy, cx2 - cx, cy2 - cy, 0, cx3 - cx, 0, cx3 - cx);

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
   var cx3 = p5.map(635.9, x1, x2, 0, 256);
   var cy3 = p5.map(497, y1, y2, 0, 256);
   var cx4 = p5.map(608.1, x1, x2, 0, 256);
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
}

  if (zoom >= 3) { // if zoom greater than or equal to 3 draw dot pattern
    p5.strokeCap(p5.ROUND);

    var startx = margin * (Math.floor(x1 / margin) - 1);
    var starty = margin * (Math.floor(y1 / margin) - margin*2);
    var endx = margin * (Math.floor(x2 / margin) + 1);
    var endy = margin * (Math.floor(y2 / margin) + 1);

      p5.rectMode(p5.CORNERS);

      for (var x = startx; x < endx; x += margin / 2) { // x-margin

        // var yStartPos = 0;
        var yEndPos = 0;
        var cx = p5.map(x, x1, x2, 0, 256);
        var cx2 = p5.map(x + objWidth, x1, x2, 0, 256); // width 
        var xWidth = cx2 - cx;
        p5.strokeWeight(xWidth); 

        var y = starty;
        while (y < endy) {

          var noiseScale2 = 1;
          var i = p5.noise(x * noiseScale2, y * noiseScale2, z+5);

          var marginStep;
          if (i < 0.33) { // draws dot
            yEndPos = y;
            marginStep = margin/2;
          }
          else if (i < 0.66) { // draws small line
            yEndPos = y + margin/2;
            marginStep = margin;
          }
          else  { // draws large line
            yEndPos = y + 3*margin/2;
            marginStep = 4*margin/2;
          }

          var cy = p5.map(y, y1, y2, 0, 256);
          var cy2 = p5.map(yEndPos, y1, y2, 0, 256);

          // determines colour
          var noiseScale1 = 1;
          var noise1 = p5.noise(x * noiseScale1, y * noiseScale1, z);
          var colourIndex = Math.floor(noise1*colourList.length);
          var c = colourList[colourIndex];

          // draw dot / line
          p5.stroke(c);
          p5.line(cx, cy, cx, cy2);
        
          y += marginStep; // y-margin
        }
    


    } 
  }
  // p5.strokeWeight(1);
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
