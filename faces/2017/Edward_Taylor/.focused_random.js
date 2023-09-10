function resetFocusedRandom() {
  return Math.seedrandom(arguments);
}

function focusedRandom(min, max, focus, mean, source) {
  // console.log("hello")
  if(source){
    var randomUniform = d3.randomUniform.source(source)
    var randomNormal = d3.randomNormal.source(source)
  } else{
    var randomUniform = d3.randomUniform
    var randomNormal = d3.randomNormal
  }

  if(max === undefined) {
    max = min;
    min = 0;
  }
  if(focus === undefined) {
    focus = 1.0;
  }
  if(mean === undefined) {
    mean = (min + max) / 2.0;
  }
  if(focus == 0) {
    return randomUniform(min, max)();
  }
  else if(focus < 0) {
    focus = -1 / focus;
  }
  sigma = (max - mean) / focus;
  val = randomNormal(mean, sigma)();
  if (val > min && val < max) {
    return val;
  }
  return randomUniform(min, max)();
}
