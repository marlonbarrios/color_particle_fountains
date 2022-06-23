//Color Particles Fountains: a particle  system is created in the canvas 
//and the particles are programmed to be attracted by the mouse.
//On mouse click, more  emitters are created in the clicked location of the canvas.
//All particles are indiviadually attacted by the 'gravity' programmed in mouse location.
//pressing the space bar deletes the 'emiters' one by one.
//"e" resets the canvas.



//MIT License 2022
let emitters = [];

let emitter;

function keyPressed() {
  if (key == ' ')
    emitters.splice(0, 1);
  if (key == "e") 
    emitters.splice(0, emitters.length);
}

function setup() {
 

  createCanvas(windowWidth, windowHeight);
  

  emitters.push(new Emitter(width / 2, 150));
}

function draw() {
  background(0);

  for (let emitter of emitters) {
    emitter.emit(2);
    emitter.show();
    emitter.update();
  }
 
}


function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
 }
