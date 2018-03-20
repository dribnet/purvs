const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
let X, Y, X1, Y1, X2, Y2, XH, YH, XM, YM, XS, YS;
 X = 0;
 Y = 0;
 X1 = 0;
 Y1 = 0;
 X2 = 0;
 Y2 = 0;
 XH = 0;
 YH = 0;
 XM = 0;
 YM = 0;
 XS = 0;
 YS = 0;

function draw_clock(obj) {

let hr = obj.hours;
let mn = obj.minutes;
let sc = obj.seconds;
let ml = obj.millis;  
let bg = map(mouseY, 0, 500,0, 200);

background(50, bg, bg, 200);
fill(250, 250, 250, 100);

textSize(90);
textAlign(CENTER);
text(hr, XH, YH);
text(":", X1, Y1)
text(mn, XM, YM);
text(":", X2, Y2)
text(sc, XS, YS);

XH = XH+ (mouseX - XH)/5.0;
YH = YH+ (mouseY - YH)/5.0;

X1 = X1+ (mouseX - X1)/15.0;
Y1 = Y1+ (mouseY - Y1)/15.0;

XM = XM+ (mouseX - XM)/25.0;
YM = YM+ (mouseY - YM)/25.0;

X2 = X2+ (mouseX - X2)/40.0;
Y2 = Y2+ (mouseY - Y2)/40.0;

XS = XS+ (mouseX - XS)/55.0;
YS = YS+ (mouseY - YS)/55.0;


}

