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


        // Face 1 Sleepy/night time
        if(hours > 20){
         
        sleepyFace();


        
        }else if(hours < 7){
        
       sleepyFace();

        }
        else{
           
          tint(255, 126);
          

        }


        // Face 2 Tired Face
        if (hours == 7){

            tiredFace();
            

        }
        else{
          
         tint(255, 126);
          

        }

         // Face 3 Unamused Face
        if (hours == 8){

           unamusedFace();
       }
        else{
           
           tint(255, 126);
           

        }


        // Face 4 Happy Face
        if (hours == 16){

            happyFace();

        }else if(hours == 11){
        
            happyFace();
        }
        else{
           
           tint(255, 126);
           
        }

        // Face 5 Hungry Face
        
        if (hours == 9){

            hungryFace();

        }else if(hours == 12){
        
           hungryFace();

       }else if(hours == 18){
        
           hungryFace();
        }
        else{
           
           tint(255, 126);
           
        }


        // Face 6 Thinking Face

        if (hours == 10){

            thinkingFace();
        }
        else{
          
          tint(255, 126);

      }

      // Face 7 Relieved Face

        if (hours == 13){

            relievedFace();
        }
        else{
          
          tint(255, 126);

     }

        //Face 8 Sunglasses Face

        if (hours == 14){

            sunglassesFace();
        }
        else{
          
          tint(255, 126);

      }


      print(alarm);


        // Face 8 Alert Face

        if (hours == 15){

            alertFace();
        }
        else{
          
          tint(255, 126);

      }

      // Face 9 Frowny Face

        if (hours == 17){

            frownyFace();
            
        }
        else{
          
          tint(255, 126);

      }

       // Face 10 Blushing Face

        if (hours == 19){

            blushingFace();
        }
        else{
          
          tint(255, 126);

      }

        //Face 11 MehFace

        if (hours == 20){

            mehFace();
        }
        else{
          
          tint(255, 126);
      }



    
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
    
    fill(46, 86, 87);
    noStroke();
    textSize(20);
    text(hours, 460, 456);
    fill(46, 86, 87);
    textSize(15);
    text(minutes, 465, 430);
    fill(108, 199, 198);
    textSize(14);
    text(seconds, 470, 404);
     

     	
	
     	
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






     function sleepyFace(){

        //Face basic
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        stroke(199, 151, 17);
        strokeWeight(8);
        ellipse(width/2, height/2, 200, 200);
        

        //Eyes
        noFill();
        stroke(199, 143, 58);
        arc(440, 240, 40, 40, 180, 0);
        arc(520, 240, 40, 40, 180, 0);
       
        //Mouth
        fill(166, 119, 40);
        noStroke();
        ellipse(width/2, 285, 30, 30);
        fill(199, 143, 58);
        noStroke();
        ellipse(width/2, 286, 25, 25);
        

        //Zzz
        strokeWeight(4);
        stroke(14, 17, 71);
        fill(32, 74, 166);
        textSize(60);
        text('Z', 525, 225);
        textFont('Source Code Pro');
        textSize(35);
        text('z', 495, 210);
        textSize(25);
        text('z', 470, 200);
     }

     function tiredFace(){
        
        //Basic Face
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        stroke(199, 151, 17);
        strokeWeight(8);
        ellipse(width/2, height/2, 200, 200);
        

        //Eyes
        noFill();
        stroke(0);
        //left
        arc(440, 245, 40, 40, 180, 0);
        //right
        arc(520, 240, 40, 40, 180, 0);

        //Eyebrows
        strokeWeight(6);
        //Eyebrow Shadow
        stroke(153, 114, 16);
        //left
        line(430, 205, 460, 225);
        //right
        line(520, 205, 490, 225);
        
        //Eyebrows
        stroke(199, 143, 58)
        //left
        line(430, 200, 460, 220);
        //right
        line(520, 200, 490, 220);
        
        
        //Mouth
        //Black
        fill(0);
        noStroke();
        arc(477, 300, 70, 70, 180, 0);
        //White
        fill(255);
        noStroke();
        arc(477, 290, 40, 40, 180, 0);
        //Red
        fill(145, 16, 34);
        noStroke();
        arc(477, 300, 30, 30, 180, 0);


    }
     
 
 
    function unamusedFace(){

        //Basic Face
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        strokeWeight(8);
        stroke(199, 151, 17);
        ellipse(width/2, height/2, 200, 200);
        

        //Eyebrows
        noFill();
        stroke(199, 143, 58);
        //left
        arc(440, 240, 40, 40, 220, 320);
        //right
        arc(520, 240, 40, 40, 220, 320);

        //Eyes
        fill(0);
        stroke(0);
        //left
        line(460, 240, 430, 240);
        ellipse(450, 245, 10, 10);
        //right
        line(500, 240, 530, 240);
        ellipse(520, 245, 10, 10);

        //Mouth
        noFill();
        arc(477, 320, 80, 80, 220, 320);

      }

   function happyFace(){

    //Basic Face
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        strokeWeight(8);
        stroke(199, 151, 17);
        ellipse(width/2, height/2, 200, 200);


        //Eyes
        fill(0);
        stroke(0);
        //left
        ellipse(445, 245, 10, 10);
        //right
        ellipse(510, 245, 10, 10);

        //Mouth
        noFill();
        strokeWeight(8);
        arc(477, 270, 80, 80, 20, 160);

    }


   
   function hungryFace(){

        //Basic Face
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        strokeWeight(8);
        stroke(199, 151, 17);
        ellipse(width/2, height/2, 200, 200);


        //Eyes
        noFill();
        stroke(0);
        //left
        arc(440, 245, 40, 40, 180, 0);
        //right
        arc(520, 240, 40, 40, 180, 0);

       
        //Tongue
        noFill();
        stroke(145, 16, 34);
        strokeWeight(50);
        line(480, 310, 495, 330);

        stroke(107, 20, 5);
        strokeWeight(8);
        line(480, 310, 495, 330);

        //Yellow circle hides top of tongue.
        fill(255, 194, 21);
        noStroke();
        ellipse(479, 284, 55, 55);


        //Mouth
        noFill();
        stroke(0);
        strokeWeight(8);
        arc(477, 270, 80, 80, 20, 160);

   }

    
    function thinkingFace(){

        //Basic Face
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        strokeWeight(8);
        stroke(199, 151, 17);
        ellipse(width/2, height/2, 200, 200);

        //Eyebrows
        noFill();
        stroke(199, 143, 58);
        //left
        arc(440, 245, 50, 50, 240, 350);
        //right
        arc(520, 260, 70, 70, 220, 290);

        //Eyes
        fill(0);
        noStroke();
        //left
        ellipse(445, 245, 15, 15);
        //right
        ellipse(510, 245, 15, 15);

        //Mouth
        noFill();
        stroke(0);
        arc(477, 335, 80, 80, 240, 320);

        //hand
        strokeWeight(15);
        stroke(173, 127, 31);
        line(420, 340, 410, 305);
        line(420, 330, 470, 320);
        line(430, 345, 470, 335);
        line(430, 358, 470, 348);
        fill(173, 127, 31);
        ellipse(440, 345, 40, 40);


}

    function relievedFace(){

        //Basic Face
        fill(41, 43, 69);
        noStroke();
        fill(255, 194, 21);
        strokeWeight(8);
        stroke(199, 151, 17);
        ellipse(width/2, height/2, 200, 200);

        //Eyes
        noFill();
        stroke(0);
        //left
        arc(440, 245, 40, 40, 180, 0);
        //right
        arc(520, 240, 40, 40, 180, 0);

        //Eyebrows
        noFill();
        stroke(199, 143, 58);
        //left
        arc(440, 215, 40, 40, 210, 310);
        //right
        arc(520, 213, 40, 40, 210, 310);

        //Mouth
        noFill();
        stroke(0);
        strokeWeight(8);
        arc(477, 270, 80, 80, 50, 120);

    }

    function sunglassesFace(){

    //Basic Face
    fill(41, 43, 69);
    noStroke();
    fill(255, 194, 21);
    strokeWeight(8);
    stroke(199, 151, 17);
    ellipse(width/2, height/2, 200, 200);


    //Sunglasses
    stroke(0);
    strokeWeight(15);
    noFill();
    line(390, 235, 570, 233);
    //Eye Part
    fill(0);
    noStroke();
    //left
    arc(440, 235, 70, 70, 0, 180);
    //right
    arc(520, 235, 70, 70, 0, 180);

    
    //Mouth
    noFill();
    strokeWeight(8);
    stroke(0);
    arc(477, 270, 80, 80, 20, 160);
    
    }

    function alertFace(){
    
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
     ellipse(445, 245, 10, 10);
     //right-black
     ellipse(510, 245, 10, 10);

    //Mouth
     fill(0);
     noStroke();
     arc(477, 280, 80, 80, 0, 180);
    
    }


    function frownyFace(){

    //Basic Face
    fill(41, 43, 69);
    noStroke();
    fill(255, 194, 21);
    strokeWeight(8);
    stroke(199, 151, 17);
    ellipse(width/2, height/2, 200, 200);

    //Eyes
    noFill();
    stroke(0);
    //left
    arc(440, 240, 40, 40, 180, 0);
    //right
    arc(520, 240, 40, 40, 180, 0);

    //Mouth
    noFill();
    stroke(0);
    arc(477, 325, 80, 80, 240, 320);

    }


    function blushingFace(){

    //Basic Face
    fill(41, 43, 69);
    noStroke();
    fill(255, 194, 21);
    strokeWeight(8);
    stroke(199, 151, 17);
    ellipse(width/2, height/2, 200, 200);

    //Blush Shadow
    fill(209, 75, 91);
    noStroke();
    ellipse(440, 270, 45, 45);
    ellipse(520, 270, 45, 45);
    //Blush
    fill(255, 87, 111);
    noStroke();
    ellipse(440, 270, 40, 40);
    ellipse(520, 270, 40, 40);
        
    //Mouth
    noFill();
    strokeWeight(8);
    stroke(0);
    arc(477, 270, 80, 80, 20, 160);

    //Eyes
    noFill();
    //left
    arc(440, 240, 40, 40, 180, 0);
    //right
    arc(520, 240, 40, 40, 180, 0);

    }


    function mehFace(){

    //Basic Face
    fill(41, 43, 69);
    noStroke();
    fill(255, 194, 21);
    strokeWeight(8);
    stroke(199, 151, 17);
    ellipse(width/2, height/2, 200, 200);

    //Eyes
    fill(0);
    stroke(0);
    //left
    ellipse(445, 245, 10, 10);
    //right
    ellipse(510, 245, 10, 10);

    //Mouth
    noFill();
    strokeWeight(8);
    arc(477, 270, 80, 80, 50, 120);



    }


    









