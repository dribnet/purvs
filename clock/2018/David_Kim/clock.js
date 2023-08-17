function draw_clock(obj) {
    background(0);
    let sky = obj.hours;
    let hours = obj.hours;
    hours%=12;
        if(hours==0){
        hours=12;
        }
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;

    if(sky==7||sky==19){
        var c1 = color(255,0,0);
        var c2 = color(255,209,27);    
        background(c1);
    }
    else if(sky>=8&&sky<=18){
        var c1 = color(3, 126, 173);
        var c2 = color(219, 241, 249);
        background(c1);
    }
    else{
        var c1 = color(33);
        var c2 = color(70);
        background(c1);
    }
    
    for(var i =0;i<height;i+=40){
           var n = map(i, 0, height,0,1);
    var grad = lerpColor(c1, c2, n);
    fill(grad);
        rect(0,i-100,width,40);
    }
    
    if(sky<7||sky>19){
    fill(255);
    rect(100,100,3,3);
    rect(150,150,3,3);
    rect(200,50,3,3);
    rect(300,125,3,3);
    rect(400,25,3,3);
    rect(500,10,3,3);
    rect(550,35,3,3);
    rect(700,100,3,3);
    rect(800,25,3,3);
    rect(900,50,3,3);
    fill(77);
    }
    else{
    fill(255);
    }
    var d =0;
    var e =0;
    var f =0;
    d=d+seconds*20;
    e=e+seconds*10;
    f=f+seconds*40;
    rect(-100-100+d,110,70,40);
    rect(-30-100+d,120,20,30);
    rect(-120-100+d,130,20,20);
    rect(-130-100+d,140,10,10);
    rect(-20-100+d,140,20,10);
    
    rect(100-300+e,200,70,40);
    rect(90-300+e,210,10,30);
    rect(70-300+e,230,20,10);
    rect(170-300+e,230,30,10);
    rect(170-300+e,220,10,10);
        
    rect(420+70+e,200,70,40);
    rect(410+70+e,210,10,30);
    rect(390+70+e,230,20,10);
    rect(490+70+e,230,30,10);
    rect(490+70+e,220,10,10);
    
    
    rect(100-1000+f,10,70,50);
    rect(70-1000+f,20,30,40);
    rect(40-1000+f,30,30,30);
    rect(10-1000+f,50,30,10);
    rect(170-1000+f,30,20,30);
    rect(190-1000+f,40,10,20);
    rect(170-1000+f,20,10,10);
    rect(200-1000+f,50,10,10);
    
noStroke();
    fill(101, 114, 119);
    rect(0,420,width,100);
    if(sky>7&&sky<19){
    fill(88,192,77);
    rect(0,420,width,30);
    }
    else if(sky==7||sky==19){
    fill(7,107,30);
    rect(0,420,width,30);
    }
    fill(180);
    rect(0,450,width,30);//sidewalks
    fill(50);
    rect(530,25,3,40);
    rect(540,25,3,40);
    quad(503,33,503,50,547,50,547,38);
    rect(350,50,260,400);//building

    if(alarm!=0){
    fill(116, 119, 119);
    rect(455,400,50,50);
    fill(70);
    rect(480,400,2,50);//door
    }
    else{
        fill(211);
rect(455,400,50,50);
    }
    fill(77, 109, 160);
    rect(360,400,85,40);
    rect(515,400,85,40);//ground windows
    var sc = seconds%5;
    var mc = minutes%5;
    
    fill(255, 188, 20);
    DisplayTime(sc,530);
    DisplayTime(mc,375);//lightbulbs
    fill(50);
    rect(415,410,20,20);
    fill(255, 188, 20);
    textSize(15);
    if(alarm>0&&alarm<19){
        if(alarm<=18&&alarm>=16){
            text("6",421,425);
        }
        if(alarm<=15&&alarm>=13){
            text("5",421,425);
        }
        if(alarm<=12&&alarm>=10){
            text("4",421,425);
        }
        if(alarm<=9&&alarm>=7){
            text("3",421,425);
        }
        if(alarm<=6&&alarm>=4){
            text("2",421,425);
        }
        if(alarm<=3&&alarm>=1){
            text("1",421,425);
        }
        }
    else if(alarm==0){
        text("G",419,425);
    }
    else {
        text("7",421,425);
    }
    fill(50);
    rect(350,380,260,20);//lampshade
    fill(116, 119, 119);
    rect(360,356,240,25);
    rect(365,250,230,10);
    rect(365,150,230,10);//facade
    fill(140);
    textFont("Helvetica");
    textSize(20);
    text("CHRONO APARTMENTS",365,376);
    let hWindows = MakeWindows(365,70);//hours
    let mWindows = MakeWindows(365 ,170);//minutes
    let sWindows = MakeWindows(365,270);//seconds
    hWindows[hours-1].on=true;
    CheckTime(seconds,sWindows);
    CheckTime(minutes,mWindows);
    DisplayWindows(hWindows);
    DisplayWindows(mWindows);
    DisplayWindows(sWindows);
    
}
function DisplayTime(unit,x){
        if(unit==1){
        rect(x,395,10,10);
    }
    if(unit==2){
        rect(x,395,10,10);
        rect(x+15,395,10,10);
    }
    if(unit==3){
        rect(x,395,10,10);
        rect(x+15,395,10,10);
        rect(x+30,395,10,10);
    }
    if(unit==4){
        rect(x,395,10,10);
        rect(x+15,395,10,10);
        rect(x+30,395,10,10);
        rect(x+45,395,10,10);
    }
}
function CheckTime(unit,array){
    if(unit>=0&&unit<=4){
        array[0].on=true;
    }
        if(unit>=5&&unit<=9){
        array[1].on=true;
    }
        if(unit>=10&&unit<=14){
        array[2].on=true;
    }
        if(unit>=15&&unit<=19){
        array[3].on=true;
    }
        if(unit>=20&&unit<=24){
        array[4].on=true;
    }
        if(unit>=25&&unit<=29){
        array[5].on=true;
    }
        if(unit>=30&&unit<=34){
        array[6].on=true;
    }
        if(unit>=35&&unit<=39){
        array[7].on=true;
    }
        if(unit>=40&&unit<=44){
        array[8].on=true;
    }
        if(unit>=45&&unit<=49){
        array[9].on=true;
    }
        if(unit>=50&&unit<=54){
        array[10].on=true;
    }
        if(unit>=55&&unit<=59){
        array[11].on=true;
    }
}
function MakeWindows(x,y){
    array = []
    for(var i = 0; i<6; i++){
        array.push(new Window(x+40*i,y,i+1));
    }
    for(var i = 0; i<6; i++){
        array.push(new Window(x+40*i,y+40,i+7));
    }
    return array;
}
function DisplayWindows(array){
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
        if(this.on==false){
            fill(77, 109, 160);
        }
        else{
            fill(255, 188, 20);
        }
        rect(this.x,this.y,30,30);
    }
}
