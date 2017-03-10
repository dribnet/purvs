/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
 point(240, 60);

line(20, 50, 420, 110);

triangle(347, 54, 392, 9, 392, 66);

quad(158, 55, 199, 14, 392, 66, 351, 107);

rect(50, 50, 80, 80)

ellipse(50, 50, 80, 80);

arc(90, 60, 80, 80, 0, HALF_PI);

arc(90, 60, 80, 80, 0, radians(90));

strokeWeight(8);

fill(102);

stroke(200);

noFill();

noStroke();

fill(255, 0, 0);

fill(255, 0, 0, 160);

beginShape();
vertex(180, 82);
vertex(207, 36);
vertex(214, 63);
vertex(407, 11);
vertex(412, 30);
vertex(219, 82);
vertex(226, 109);
endShape(CLOSE);


}
