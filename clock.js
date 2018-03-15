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
	
  let h = obj.hours;
  let m = obj.minutes;
  let s = obj.seconds;
  //Change the background depending on the time of day
  for(var i = 0; i < 12; i++){
	  if(h >= 12 && h <=23){ //Change numbers to the afternoon/night cycle
		  obj.Clouds_Array[i].hourNumber = i+12;
	  }else{ //Keep on day
		  obj.Clouds_Array[i].hourNumber = i;
	  }
	
  }   
  imageMode(CORNER); 
  if(h >= 5 && h < 19){
	  background(obj.bg_Day);
  }else{
	  background(obj.bg_Night);	  
  }
  imageMode(CENTER); 
  //All translations are to be done in relation to this translation
  translate(width/2,height/2);
    //Draw Hands
  Draw_Hands(h,m,s);
  //Draw Icon
  Draw_Icon(h, obj);
  //Draw Dino
  //Get current Cloud
  if(h >= 12){
	  obj.Dino.changePos(obj.Clouds_Array[h-12].positionX,obj.Clouds_Array[h-12].positionY-30);
  }else{
	  obj.Dino.changePos(obj.Clouds_Array[h].positionX,obj.Clouds_Array[h].positionY-30);
  }
  tint(255, 255);
  obj.Dino.drawImage();
  //Draw Clouds
  Draw_Clouds(obj.Clouds_Array);  	
}

function Draw_Clouds(Clouds_Array){
	for(var i = 0; i < 12; i++){
		tint(255, 200);
		Clouds_Array[i].drawImage();
	}
}

function Draw_Hands(h,m,s){
  fill(255);
  //Hours Hand
  rotate(h*30); 
  let hours_Hand = triangle(-10, 0, 0, -80, 10, 0);
  rotate(-(h*30)); 
  //Minutes Hand
  rotate(m*6);
  let minutes_Hand = triangle(-10, 0, 0, -150, 10, 0);
  rotate(-(m*6));  
  //Seconds Hand
  rotate(s*6);  
  let seconds_Hand = triangle(-5, 0, 0, -150, 5, 0);
  rotate(-(s*6));
}

function Draw_Icon(h, obj){
	fill(0);
	ellipse(0, 0, 40, 40);
	if(h >= 5 && h < 19){
	  image(obj.Sun, 0, 0);
    }else{
	  image(obj.Moon, 0, 0);	  
    }  
}

