//Código do Ator
let xAtor = 85;
let yAtor = 366;

let meuspontos = 0

let colisao = false

function mostraAtor(){
  
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
    if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
        
  }
    if (keyIsDown(LEFT_ARROW)){
      if(podeSeMover3()){
    xAtor -= 3;
  }
    }
      if (keyIsDown(RIGHT_ARROW)){
        if(podeSeMover2()){
    xAtor += 3;
  }
      }
  
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for(let i = 0; i < imagensDosCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
     voltaatorparaposicaoinicial()
      somDaColisao.play()
     if (pontosMaiorQueZero()){
      meuspontos -= 1
    }
    }
  }
}

function voltaatorparaposicaoinicial(){
  yAtor = 366
  
}

function incluipontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(60,179,113))
  text(meuspontos, width/5, 27)
   
}

function marcaospontos(){
  if (yAtor < 15){
    somDoPonto.play()
    meuspontos += 1
    voltaatorparaposicaoinicial()
  }
  }

function pontosMaiorQueZero(){
  return meuspontos > 0
  
}

function podeSeMover(){
  return yAtor < 366
}
function podeSeMover2(){
  return xAtor < 568
}
function podeSeMover3(){
  return xAtor > 10
}