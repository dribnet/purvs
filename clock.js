/*
 * Building clock: rows: hour,minutes,seconds 
 hour window = 1 hr, minute window = 5 mins, second window = 5 secs.
 */ 
 var hWindows = [];
 var mWindows = [];
 var sWindows = [];
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

    background(114, 191, 255);
    fill(128,100,100); 
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);
noStroke();
    rect(0,420,width,100);
    fill(198, 165, 145);
    rect(0,450,width,30);
fill(140);
	rect(350,50,260,400);//building
MakeWindows(hWindows,365,70);//hours
MakeWindows(mWindows, 365 ,170);//minutes
MakeWindows(sWindows,365,270);//seconds
CheckTime(hWindows,hours);

}
function CheckTime(array, unit){
	for(var i = 0; i<array.length; i++){
	if (array[i].val=unit){
		array[i].on == true;
	}
}
}
function MakeWindows(array,x,y){
	for(var i = 0; i<6; i++){
		array.push(new Window(x+40*i,y,i+1));
	}
		for(var i = 0; i<6; i++){
		array.push(new Window(x+40*i,y+40,i+7));
	}
		for(var i =0; i<array.length; i++){
		array[i].display();
	}
}
function Window(x,y,val){
	this.x=x;
	this.y=y;
	this.val=val;
	this.on=false;
	this.display = function(){
		if(this.on==true){
			fill(255,255,0);
		}
		else{
		fill(255);}
		rect(this.x,this.y,30,30);
	}
}