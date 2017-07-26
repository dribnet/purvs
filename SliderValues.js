//An object that contains references to all the sliders, and returns mapped values on a selected slider
function SliderValues(s1,s2,s3,s4,s5){
	this.r1 =1;
	this.r2 =1;
	this.r3 =1;
	this.r4 =1;
	this.r5 =1;

	this.s1 = s1;
	this.s2=s2;
	this.s3=s3;
	this.s4=s4;
	this.s5=s5;
	this.val = 0;
	this.rounded = false;

//takes random numbers in place of sliders
this.randomSliders = function(n1, n2, n3, n4, n5){
	this.r1 =n1;
	this.r2 = n2;
	this.r3 = n3;
	this.r4 = n4;
	this.r5 =n5;
}

	//takes integer arguments detailing which slider is required, and how it is to be mapped
	//also takes a boolean stating whether it should be rounded to the nearest whole number
	this.scaleSliders = function(slide, min, max, rounded){
	this.rounded = rounded;
		//checks which slider value is required
		if (slide == 1){this.val = this.r1;}
		else if (slide == 2){this.val = this.r2;}
		 else if (slide == 3){this.val = this.r3;}
		else if (slide == 4){this.val = this.r4;}
		else{this.val = this.r5;}
	
		

//calculates and returns the correct value
		if(this.rounded){
			return Math.floor(map(this.val, 0, 100, min, max));
		}
		else{
			return map(this.val, 0, 100, min, max);
		}

	}}
