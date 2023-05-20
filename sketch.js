function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  
  mostraAtor()
  mostraCarro()
  movimentaCarro()
  movimentaAtor()
  voltaPosicaoInicialDoCarro()
  verificaColisao()
  incluipontos()
  marcaospontos()
}


function mostraCarro(){
  
    image(imagemDoCarro, xCarros, yCarros, 50, 40)

}

function movimentaCarro(){

    xCarros -= 2
}