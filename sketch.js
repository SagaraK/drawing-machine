let setting = 0;
function  setup() {
createCanvas(400, 400);
background(200,50,133);
drawGrid();
keyTyped();
}

function draw() {
    console.log(mouseX);
    let r = random(50);
    if (mouseIsPressed && setting == 0){
      background(random(255),random(255),random(255),1);
      strokeWeight(5);
      stroke(map(mouseX,0,0,0,0,true));
      line(random(width) + mouseX, random(height) - mouseY, random(width) - pmouseX, random(height) + pmouseY);
    }
    else if(mouseIsPressed && setting == 1){
      background(random(255),random(255),random(255),1);
      strokeWeight(5);
      //stroke(map(mouseX,0,0,0,0,true));
      line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
      //line(mouseX - r , mouseY + r, pmouseX - r,  pmouseY + r);
    }
    else if(mouseIsPressed && setting == 2){
        background(random(255),random(255),random(255),1);
        strokeWeight(r);
        line(mouseX - r , mouseY + r, pmouseX - r,  pmouseY + r);
        //line(mouseX, mouseY, pmouseX, pmouseY);
    }


    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
}

function drawGrid(){
  strokeWeight(1);
  numCells = 20;

  for (let i = 0; i<= width; i+= width/numCells){
    for (let j = 0; j <= height; j += height / numCells){
      rect(i,j,width/numCells, height/ numCells);
    }
  }
}

/*function styleChange(){
  if(key === 'a'){
    setting += 1;
  }
  else{
    return false;
  }

}*/
function keyTyped(){
  if(key==='s'){
    saveCanvas('fileName','png');
  }
  else if(key === 'a'){
    if(setting == 2){
      setting = 0;
    }
    else{
      setting += 1;
    }
  }
  return false;
}
