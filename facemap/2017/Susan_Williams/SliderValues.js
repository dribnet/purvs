//An object that contains a set of random numbers based on the seed, in place of sliders
//the names are a legacy from when it was sliders running things
function SliderValues(){
	//these will store the random numbers created by the seed
	this.r1 =1;
	this.r2 =1;
	this.r3 =1;
	this.r4 =1;
	this.r5 =1;
	this.r6 =1;
	this.r7 =1;
	//the variable that will be rounded, or not, and returned
	this.val = 0;
	//does the function calling want an integer
	this.rounded = false;


this.setSliders = function(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12){
this.s1=s1;
this.s2=s2;
this.s3=s3;
this.s4=s4;
this.s5=s5;
this.s6=s6;
this.s7=s7;
this.s8=s8;
this.s9=s9;
this.s10=s10;
this.s11=s11;
this.s12=s12;
}
//updates a set of random numbers used instead of sliders
this.randomSliders = function(n1, n2, n3, n4, n5,n6,n7){
	this.r1 =n1;
	this.r2 = n2;
	this.r3 = n3;
	this.r4 = n4;
	this.r5 =n5;
	this.r6 = n6;
	this.r7 =n7;
}

	//takes integer arguments detailing which slider-substitute is required, and how it is to be mapped
	//also takes a boolean stating whether it should be rounded to the nearest whole number
	this.scaleSliders = function(slide, min, max, rounded){
	this.rounded = rounded;
		//checks which slider value is required
		if (slide == 1){this.val = this.s1;}
		else if (slide == 2){this.val = this.s2;}
		 else if (slide == 3){this.val = this.s3;}
		else if (slide == 4){this.val = this.s4;}
		else if (slide == 5){this.val = this.s5;}
		else if (slide == 6){this.val = this.s6;}
		else if (slide == 7){this.val = this.s7;}
		 else if (slide == 8){this.val = this.s8;}
		else if (slide == 9){this.val = this.s9;}
		else if (slide == 10){this.val = this.s10;}
		else if (slide == 11){this.val = this.s11;}
		else{this.val = this.s12;}

//calculates and returns the correct value, depending on whether it should be an int
		if(this.rounded){
			return Math.floor(map(this.val, 0, 100, min, max));
		}
		else{
			return map(this.val, 0, 100, min, max);
		}

	}}
