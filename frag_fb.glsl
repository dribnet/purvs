var frag_mix_feedback=`

#define FADE 0.999
#define VOL 0.2 

void main(void){
  
  //COORD ADAPT

  vec2 uv = fragCoords;
  vec2 tuv = uv/2. + 0.5;

 // KERNEL SAMPLES
 
    // per pixel derivative
    float dx = 1./u_viewPort.x;
    float dy = 1./u_viewPort.y;

  vec2 sp0 = tuv+vec2(-dx,-dy);
  vec2 sp1 = tuv+vec2(-0, -dy);
  vec2 sp2 = tuv+vec2( dx,-dy);
  vec2 sp3 = tuv+vec2(-dx, -0);
  vec2 sp4 = tuv+vec2(-0,  -0);
  vec2 sp5 = tuv+vec2( dx, -0);
  vec2 sp6 = tuv+vec2(-dx, dy);
  vec2 sp7 = tuv+vec2(-0,  dy);
  vec2 sp8 = tuv+vec2( dx, dy);


  vec4 swap = texture(u_swap_tex,tuv);
  vec4 webcam = texture(u_webcam_tex,tuv);
  
  vec4 swap0 = texture(u_swap_tex,tuv+sp0);
  vec4 swap1 = texture(u_swap_tex,tuv+sp1);
  vec4 swap2 = texture(u_swap_tex,tuv+sp2);
  vec4 swap3 = texture(u_swap_tex,tuv+sp3);
  vec4 swap5 = texture(u_swap_tex,tuv+sp4);
  vec4 swap4 = texture(u_swap_tex,tuv+sp5);
  vec4 swap6 = texture(u_swap_tex,tuv+sp6);
  vec4 swap7 = texture(u_swap_tex,tuv+sp7);
  vec4 swap8 = texture(u_swap_tex,tuv+sp8);

  vec4 webcam0 = texture(u_webcam_tex,tuv+sp0);
  vec4 webcam1 = texture(u_webcam_tex,tuv+sp1);
  vec4 webcam2 = texture(u_webcam_tex,tuv+sp2);
  vec4 webcam3 = texture(u_webcam_tex,tuv+sp3);
  vec4 webcam4 = texture(u_webcam_tex,tuv+sp4);
  vec4 webcam5 = texture(u_webcam_tex,tuv+sp5);
  vec4 webcam6  = texture(u_webcam_tex,tuv+sp6);
  vec4 webcam7 = texture(u_webcam_tex,tuv+sp7);
  vec4 webcam8 = texture(u_webcam_tex,tuv+sp8);

  float last_neighborhood[9] = float[](
        texture(u_webcam_tex,sp0).a,
        texture(u_webcam_tex,sp1).a,
        texture(u_webcam_tex,sp2).a,
        texture(u_webcam_tex,sp3).a,
        texture(u_webcam_tex,sp4).a,
        texture(u_webcam_tex,sp5).a,
        texture(u_webcam_tex,sp6).a,
        texture(u_webcam_tex,sp7).a,
        texture(u_webcam_tex,sp8).a
        );

    float next_neighborhood[9] = float[](
       length(abs( webcam0.rgb - swap0.rgb)), 
       length(abs( webcam1.rgb - swap1.rgb)), 
       length(abs( webcam2.rgb - swap2.rgb)), 
       length(abs( webcam3.rgb - swap3.rgb)), 
       length(abs( webcam4.rgb - swap4.rgb)), 
       length(abs( webcam5.rgb - swap5.rgb)), 
       length(abs( webcam6.rgb - swap6.rgb)), 
       length(abs( webcam7.rgb - swap7.rgb)), 
       length(abs( webcam8.rgb - swap8.rgb)) 
    );

    float new_input_kernel[9] = float[](
       0.00,0.00,0.23,
       0.23,0.25,0.00,
       0.00,0.23,0.00
    );

    float kernel_corners[9] = float[](
       0.00,0.00,0.23,
       0.23,0.25,0.00,
       0.00,0.23,0.00
    );

  //COMPOSITION

  vec3 diff = abs( webcam.rgb - swap.rgb );
  float newdiff = length(diff);

  // Fade In the new derivative;
  float der = swap.a * FADE + VOL*newdiff;

  der *= 0.2;
  float conv_total = 0.;

  /*
  //Mix the convolution
//   for (int i=4 ; i<6 ; i++){
     conv_total += kernel_corners[0] * last_neighborhood[0];
     conv_total += kernel_corners[1] * last_neighborhood[1];
  //   conv_total += kernel_corners[2] * last_neighborhood[2];
     conv_total += kernel_corners[3] * last_neighborhood[2];
     conv_total += kernel_corners[3] * last_neighborhood[3];
     conv_total += kernel_corners[4] * last_neighborhood[4];
     conv_total += kernel_corners[8] * last_neighborhood[5];
    // conv_total += kernel_corners[6] * last_neighborhood[6];
  //   conv_total += kernel_corners[7] * last_neighborhood[7];
//     conv_total += kernel_corners[8] * last_neighborhood[8];
  // }
*/
    der+= conv_total;


    // update rgb with webcam
    comp.rgb = webcam.rgb;

    //Choose an alpha
    comp.a = der;

}`;
