//An object that contains references to all the sliders, and returns mapped values on a selected slider
function SliderValues(s1,s2,s3,s4,s5){
	this.s1 = s1;
	this.s2=s2;
	this.s3=s3;
	this.s4=s4;
	this.s5=s5;
	this.val = 0;
	this.rounded = false;

	//takes integer arguments detailing which slider is required, and how it is to be mapped
	//also takes a boolean stating whether it should be rounded to the nearest whole number
	this.scaleSliders = function(slide, min, max, rounded){
	this.rounded = rounded;
		//checks which slider value is required
		if (slide == 1){this.val = this.s1.value();}
		else if (slide == 2){this.val = this.s2.value();}
		 else if (slide == 3){this.val = this.s3.value();}
		else if (slide == 4){this.val = this.s4.value();}
		else{this.val = this.s5.value();}
	
		

//calculates and returns the correct value
		if(this.rounded){
			return Math.floor(map(this.val, 0, 100, min, max));
		}
		else{
			return map(this.val, 0, 100, min, max);
		}

	}}
