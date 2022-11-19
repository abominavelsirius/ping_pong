let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

let velocidadeXBolinha = 5
let velocidadeYBolinha = 5

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha,yBolinha,diametro); // circle (x,y,d); 
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
  // += ou seja, X da bolinha será seu valor acrescido de sua velocidade.
}