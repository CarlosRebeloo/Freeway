//Imagens e Sons do Jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaTrilha;
let somDoPonto;
let somDaColisao;

function preload(){
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage ("imagens/ator-1.png");
  imagemDoCarro = loadImage ("imagens/carro-1.png");
  imagemDoCarro2 = loadImage ("imagens/carro-2.png");
  imagemDoCarro3 = loadImage ("imagens/carro-3.png");
  
  imagensDosCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
}
