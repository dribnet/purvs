/*
 * use p5.js to draw a clock on a 960x500 canvas
 */ 




function draw_clock(obj) {
    angleMode(DEGREES);
    textAlign(CENTER);
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
    let alarm = obj.seconds_until_alarm;



 



     //Night   
        
        if(hours > 20){
         
        background(11, 21, 43);

        }else if(hours < 7){
        
        background(11, 21, 43);
       }
        else{
           
         background(198, 231, 231);


        }
       

       
        //seconds
        strokeWeight(20);
        noFill();
        stroke(49, 89, 89);
        let end1 = map(seconds, 0, 60, 0, 360);
        arc(width/2, height/2, 300, 300, 0, end1);
       

        // min
        strokeWeight(20);
        noFill();
        stroke(82, 151, 153);
        let end2 = map(minutes, 0, 60, 0, 360);
        arc(width/2, height/2, 350, 350, 0, end2);

        // hour 
        strokeWeight(20);
        noFill();
        stroke(108, 199, 198);
        let end3 = map(hours, 0, 24, 0, 360);
        arc(width/2, height/2, 400, 400, 0, end3);


      


    
     //AlarmISGoing OFF!
     if (alarm == 0){


        
     	if(seconds % 2 == 0){
     		background(185, 47, 47);
     		alarmFace();


     	}
     	else{
     		background(198, 231, 231);
     	}
     }
     else{

     	tint(255, 126);
     	
     }
    
    
     

     	
	
     	
   if(alarm > 0){
     	noFill();
     	stroke(185, 47, 47);
     	strokeWeight(10);
     	let end4 = map(alarm, 0, 20, 0, 360);
        arc(width/2, height/2, 240, 240, 0, end4);
     	

 }
}

    


 function alarmFace(){
        //Basic Face
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        strokeWeight(8);
        stroke(199, 151, 17);
        ellipse(width/2, height/2, 200, 200);
       
        //Eyes
        fill(255);
        noStroke();
        //right-white
        ellipse(510, 245, 40, 40);
        //left-white
        ellipse(445, 245, 40, 40);

        fill(0);
        stroke(0);
        //left-black
        ellipse(445, 245, 5, 5);
        //right-black
        ellipse(510, 245, 5, 5);

        //Mouth
        fill(0);
        noStroke();
        arc(477, 280, 80, 80, 0, 180);
        

        

    }





