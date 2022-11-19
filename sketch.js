// Variaveis da Bolinha ------------------------------------------------------------
let xBolinha = 300; // vertical
let yBolinha = 200; // horizontal
let diametro = 15; // tamanho
let raio = diametro / 2;

// Velocidade da Bolinha --------------------------------------------

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

// ---------------------------------------------------------------------------------



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro); // circle (x,y,d);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  // += ou seja, X da bolinha será seu valor acrescido de sua velocidade.
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}
