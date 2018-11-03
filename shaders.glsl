//FRAGMENT SHADER
var frag_layout = `#version 300 es

precision highp float;

in vec2 fragCoords;

out vec4 comp;


//CONSTANTS AND DEFINES
const float FAR = 99999999.f;
const float VOLUME = 1.f;
const float NEIGH_SIZE = 5.f * VOLUME;
// CELLS PER UNIT UV
const int QUANT = 10;                
`;

var frag_body =`

//uniforms
uniform float iTime;
uniform vec2 iMouse;
uniform int pattern;
uniform float u_Zoom;
uniform vec2 u_nowView;
uniform vec2 u_viewPort;


void main(void){

  vec4 col = vec4(0.,0.,0.,1.);
  vec2 uv = fragCoords;
  //uv *= 2.0;
  uv *= u_Zoom; 
  uv += u_nowView/u_viewPort;

  vec2 pp = euc2pol(uv);


  // Old deCast setup code

  /* 
  vec2 cats[MAX_DEGREE+1];
  cats[0] = vec2(-1.,-1.);
  cats[1] = vec2(1.,-1.);
  cats[2] = vec2(1.,-0.);
  cats[3] = vec2(-1,0.);
  cats[4] = vec2(-1,1.);
  cats[5] = vec2(1.,1.);

  //col.r = fragCoords.x;
  //col.g = fragCoords.y;
  float vol = 1.0;
  float fa1=30. + 10.*sin(iTime/3.);
  float fa2=20. ;

  float fb1=30. + 10.*sin(iTime/5.);
  float fb2=20. ;

  float s1x = vol*sin(iTime+fa1*uv.x);
  float s1y = vol*sin(fa2*uv.y);
  float s2x = vol*sin(iTime+fb1*uv.x);
  float s2y = vol*sin(fb2*uv.y*fb2);

  float layer2 = (s1x+s1y+ s2x + s2y);  

  // Abs Boxing
  float hf = 4.;
  float vf = 2.;

  vol = + 0.5;
  float hd = vol*abs(fract(uv.x*hf)-0.5);
  float vd = vol*abs(fract(uv.y*vf)-0.5);

  float md = min(hd,vd);

#define DEG 4
#define fDEG 6.0

  //cats[MAX_DEGREE+1];
  cats[0] = vec2(-1.,-1.);
  cats[1] = vec2(1.,-1.);
  cats[2] = vec2(1.,-0.);
  cats[3] = vec2(-1,0.);
  cats[4] = vec2(-1,1.);
  cats[5] = vec2(1.,1.);

  for (int i=0; i < lineCount(DEG) ; i++){
    cats[i] = vec2(mod(float(i),3.) - 1.,  2.*mod(float(i),2.)-1.);
  }


  vec2 fdims = vec2(8,4)*0.5;
  vec2 fuv = uv*fdims; fuv = 2.*fract(fuv) - 1.0;

  vec2 cuv[9];
  cuv[0] = fuv; cuv[0].x-=2.; cuv[0].y-=2.;
  cuv[1] = fuv; cuv[1].x+=0.; cuv[1].y-=2.;
  cuv[2] = fuv; cuv[2].x+=2.; cuv[2].y-=2.;
  cuv[3] = fuv; cuv[3].x-=2.; cuv[3].y+=0.;
  cuv[4] = fuv; cuv[4].x+=2.; cuv[4].y-=0.;
  cuv[5] = fuv; cuv[5].x-=2.; cuv[5].y+=2.;
  cuv[6] = fuv; cuv[6].x+=0.; cuv[6].y+=2.;
  cuv[7] = fuv; cuv[7].x+=2.; cuv[7].y+=2.;
  cuv[8] = fuv;

  col = vec4(0.,0.,0.,1.);


#define DDIV DEG
  //TODO: Paramaterise Phases
  for (int j = 0 ; j < DEG/DDIV; j++ ){  // Integrate concurrent  phase
    for (int i = 0 ; i < 9; i++ ){  //Loop checks neighbours
      float lineds[MAX_LINE];
      vec2 bp =  deCast( lineds , 
          fract(float(iTime)+float(j*DDIV)/fDEG) * length(iMouse-uv),   // The main slider
          cats, 
          DEG, 
          cuv [i]); //bp = bezierPoint

      float bpl = length(bp-fuv);

      int lc = lineCount(DEG);
      for (int li = 0; li <  lc; li++){
        col.rgb = max( 
            col.rgb,
            ( 
             (1.-smoothstep(lineds[li],0.,0.01))
            )

            );

        col.rb +=  1./(float(1))*(1.-smoothstep(lineds[li],0.,0.01));

      }

      float pd = bpl;

    }
  }
*/


/*
////////////////////////// Stage 1
  //gather neighbors
  for (int i = 0; i < NEIGHCOUNT; i ++ ){
    the_voro_check.neighbors[i] = vec2(u_voro_ps[i*2],u_voro_ps[2*1]);
    //the_voro_check.neighbors[i] = vec2(0,1);

  }

  col.rgb = vec3(
      1. * voronoid ( uv *  2. ) 
      );
  col.b = 1.f * u_voro_ps[int(10.*iTime)%64];
*/


//////////////////////////   Stage 2

  float tileVoro = nearestEccentric(uv, NEIGH_SIZE,VOLUME, QUANT);

//  col += 100.f*tileVoro;

  //col.r += length(jitter(ivec2(uv*1000.f), VOLUME));
  col.br += 0.01*(jitter(ivec2(uv*100.f), VOLUME));

  //col.g += random2D( floor(vec2(uv*100.f)) );

  col.g += 10.f*tileVoro;
  
  comp = clamp(col,0.,1.);
}`;

