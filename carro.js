//Código do Carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [ 39, 96, 150, 210, 270, 318];
let velocidadeCarros = [4, 2.5, 3.5, 5, 3.3, 2.4];
let alturaCarro = 50
let comprimentoCarro = 40

function mostraCarro(){
  for(let i = 0; i < imagensDosCarros.length; i++){

  image(imagensDosCarros[i], xCarros[i], yCarros[i], alturaCarro, comprimentoCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i++){

    xCarros[i] -= velocidadeCarros[i];
}
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagensDosCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 700;
  }
}
}

function passouTodaTela(xCarros){
  return xCarros < -42;
  
}