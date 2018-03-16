/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;

    background(255);
    fill(0);
    rect(0,0,960,500);
    fill(28,100,100);

    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    let hourBarPosition   = map(hours, 0, 23, 0, height-5);
    let minuteBarPosition = map(minutes, 0, 59, 15, width-15);
    let secondBarHeight = map(seconds, 0, 59, 5, height-5);
    let millisBarHeight = map(millis, 0, 1000, 5, height-5);

    noFill();
	strokeWeight(2);
	stroke(255);
	quad(2,2,958,2,958,498,2,498)

    


    noStroke();

   


    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 5, height-5);


    fill(255);
    rect(minuteBarPosition+5, 5, 2, secondBarWidthSmooth-5);


//minute lines

for (let i = 0; i < minutes; i++) {
	let incMinutes = minuteBarPosition/minutes;
    rect((incMinutes*i)+5, 5, 2, height-10);
}
//hour lines

for (let i = 0; i < hours; i++) {
	let incHours = hourBarPosition/hours;
    rect(minuteBarPosition, (incHours*i)+5, 12, 2);
}





// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

}