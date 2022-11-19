// Variaveis da Bolinha ------------------------------------------------------------
let xBolinha = 300; // vertical
let yBolinha = 200; // horizontal
let diametro = 15; // tamanho
let raio = diametro / 2;

// Velocidade da Bolinha --------------------------------------------

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

// ---------------------------------------------------------------------------------

// Variaveis da Raquete ------------------------------------------------------------

let xRaquete = 5 // vertical
let yRaquete = 150 //  horizontal
let larguraRaquete = 10 // largura
let alturaRaquete = 90 // altura



// ---------------------------------------------------------------------------------




// Funções Principais --------------------------------------------------------


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
}


// Funções da Bolinha --------------------------------------------------------


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


// Funções da Raquete --------------------------------------------------------

function mostraRaquete() {
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete); // x, y, w, h

}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete +=10; 
  }
  
  // o número 10 será a velocidade do movimento
  
}
