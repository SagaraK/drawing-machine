let noiseOffset = 0.0;
let strokeWidth = 5;

function  setup() {
createCanvas(windowWidth, windowHeight);
background(200,50,133);
}

function draw() {
    background(220,50,133,5);
    strokeWeight(strokeWidth);
    noiseOffset =+ 0.05;
    strokeWidth = noise(noiseOffset) * 100;
    stroke(map(mouseX,0,600,0,255,true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
}


function keyTyped(){
  if(key==='s'){
    saveCanvas('fileName','png');
  }
  return false;
}
