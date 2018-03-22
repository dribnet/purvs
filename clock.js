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
   
//setting up the variables


angleMode(DEGREES);
	let hr = obj.hours;
	let mn = obj.minutes;
	let sc = obj.seconds; 
  let ml = obj.millis;
	let alarm = obj.seconds_until_alarm;
 
	
//background gradient

	colorMode (HSL, 360, 100, 100, 1);
   
    var color1 = color(sc*6,100,90);
    var color2 = color(sc*6,100,60);

    setGradient(0, 0, 960, 500, color1, color2, "Y");
  
//******************** S E C O N D S ********************


//bkgrd ellipse ornamentation
		fill(sc*15, 50, 95, .2);
       	noStroke();
        let end4 = map(sc, 59, 0, 0, 300+600);
        ellipse(480,250,end4,end4, 0);

//bkgrd ellipse ornamentation2
		fill(sc*15, 50, 95, .2);
       	noStroke();
        let end5 = map(sc, 59, 0, 0, 300+1200);
        ellipse(480,250,end5,end5, 0);

//bkgrd ellipse ornamentation3
		fill(sc*15, 50, 95, .2);
       	noStroke();
        let end6 = map(sc, 59, 0, 0, 300+2400);
        ellipse(480,250,end6,end6, 0);

        //seconds ellipse
       	fill(hr*15, 95, 95, .3);
       	noStroke();
       	let end3 = map(sc, 59, 0, 0, 300);
       	ellipse(480,250,end3,end3, 0);


//******************** H O U R S ********************

       	//Hours Ellipse
        fill(hr*15, 70, 60, .7);
       	let end2 = map(hr, 0, 23, 0, 300);
        noStroke();
        ellipse(960/2,500/2,end2,end2, 0);

//******************** M I N U T E S ********************

translate(480, 250);
rotate(-90);
			//minute arc
            strokeWeight (3);
            stroke(255);
            noFill();
            let end = map(mn, 0, 60, 0, 360);
            arc(0, 0, 300, 300,0,end);
         
         	//minute arc GLOW
        	filter(BLUR, 2);
            strokeWeight (1);
            stroke(255);
            noFill();
          	let end1 = map(mn, 0, 60, 0, 360);
            arc(0, 0, 300, 300,0,end1);

            
        
//******************** A L A R M ********************

    if (alarm > 0) {
    	let bling = map(ml, 0, 1000, 300, 600);
      strokeWeight(3);
    	stroke(360, 100, 100);
      noFill();
    	ellipse(0,0, bling, bling, 0);
    }    

    if (alarm == 0)	{
      noStroke();
      let call = map(ml, 0, 1000, 50, 80);
    	fill(sc*6,85,call);
    	rect(-175,-250,350,500,30);
      rotate(90);
      fill(255,100,100,1);
      textSize(45);
      textFont('Helvetica-Bold');
            textAlign('center');

      let qu = '0-800-ALARMISON242';
      text(qu, 0, -110);
      text(qu, 0, -70);
      text(qu, 0, -30);
      text(qu, 0, 10);
      text(qu, 0, 50);
      text(qu, 0, 90);
      text(qu, 0, 130);
    }
	}
        





function setGradient(x, y, w, h, c1, c2, axis){
    noFill();
    if (axis == "Y") {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
}
}
}
