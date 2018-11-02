//Globals
var gc;
var appgl = {}; //struct for app's graphics stuff
let anchors = [];
const frameMax = 60;
var speedslider;
var patternselect;
var viewQuad;
var mx=0,my=0;
var viewSize = { width : window.innerWidth, height: window.innerHeight};
var gl_canvas = { width : window.innerWidth, height: window.innerHeight};

var mousedown = false;
var dragStart;

var view = {x:0, y:0};
var view_last = {x:0, y:0};

function mouseMove( e ) {
  if (mousedown){
  view = { x: view_last.x + e.pageX - dragStart.pageX,
           y:   view_last.y + e.pageY - dragStart.pageY}
  console.log(view);
  }
}

function catchClick( e ){
  console.log("click " + e); 
  mousedown=true;
  dragStart = e;
  view_last = view;
}

function releaseClick(){
 console.log("unclick"); 
  mousedown=false;
  view_last = view;
}

function setup_gl_canvas( width, height) {

  // Demote the leaflet
  document.getElementsByClassName("leaflet-container" )[0].style.position="absolute";
  body = document.getElementsByTagName("body");
  gl_canvas = document.createElement("canvas");
  gl_canvas.id="gl_canvas";

  gl_canvas.width=width; gl_canvas.height=height;
  //gl_canvas.style.position="fixed";
  gl_canvas.style.position="fixed";

  body[0].appendChild(gl_canvas);
  gc = gl_canvas.getContext("webgl2" ,{preserveDrawingBuffer: true});
 
  gl_boilerplate_init ();

// Controls

}

function glObject(){
  var vPosAttribPtr;
  var vertBuffer;
}

function resizeMap(){
  viewSize.width = window.innerWidth; 
  viewSize.height = window.innerHeight;

  setup_gl_canvas(window.innerWidth, window.innerHeight)
}



function draw_the_map () {

  var d = new Date();
  var time = d.getTime();
/*  //console.log ("mx" + mx);
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill(255);
  }
*/
  // updates
  var iTime = 1*time/30 * (1/2000);
  //gc.uniform1f(gc.getUniformLocation(appgl.prog,"iTime"),time*5);
  gc.uniform1f(gc.getUniformLocation(appgl.prog,"iTime"),100);

  gc.uniform2f(gc.getUniformLocation(appgl.prog,"iMouse"), mx,my);
  
  gc.clearColor(0,0.5,0,1);
  gc.clear(gc.COLOR_BUFFER_BIT);
  gc.enableVertexAttribArray(viewQuad.vPosAttribPtr);
  gc.drawArrays(gc.TRIANGLE_FAN,0,4);
  gc.disableVertexAttribArray(viewQuad.vPosAttribPtr);
 

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

var vertshader, fragshader;

var  frag_helpers;
var  frag_tracers;
var  frag_intersections;
var  frag_distance_functions;
var  frag_procedural_map_main;

var squareVertexPositionBuffer;


function gl_boilerplate_init(){

var fragSrc = frag_layout + frag_body; 
  vertshader = gc.createShader(gc.VERTEX_SHADER);
  fragshader = gc.createShader(gc.FRAGMENT_SHADER);
 gc.shaderSource(vertshader,vertSrc);
 gc.shaderSource(fragshader,fragSrc);
 
 gc.compileShader(vertshader);
 console.log(`vert shader:${gc.getShaderInfoLog(vertshader)}`);
 gc.compileShader(fragshader);
 console.log(`fragment shader:${gc.getShaderInfoLog(fragshader)}`);

 sp = gc.createProgram();
 gc.attachShader(sp,fragshader);
 gc.attachShader(sp,vertshader);
 gc.linkProgram(sp);
 gc.useProgram(sp);

 appgl.prog = sp;


 viewQuad = new glObject();
	
 viewQuad.vertBuffer = gc.createBuffer();
 gc.bindBuffer(gc.ARRAY_BUFFER, viewQuad.vertBuffer);
 vertices = [
      -1.0, -1.0,  0.0,
       1.0, -1.0,  0.0,
       1.0, 1.0,  0.0,
      -1.0, 1.0,  0.0
  ];
  gc.bufferData(gc.ARRAY_BUFFER, new Float32Array(vertices), gc.STATIC_DRAW);
  var vertAttribPtr;

  gc.vertexAttribPointer(viewQuad.vPosAttribPtr, 3, gc.FLOAT, false, 0,0);
  gc.enableVertexAttribArray(viewQuad.vPosAttribPtr);
  viewQuad.vertBuffer.itemSize = 3;

  viewQuad.vertBuffer.numItems = 4;

  let loopLength = frameMax;

}

