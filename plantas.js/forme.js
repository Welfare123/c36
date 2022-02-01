class Forme{
 constructor(){

 }
 display(){
 var titulo=createElement('h2');
 titulo.html("jogo");   
titulo.position(130,0);

var entrada=createInput("name");
var botao=createButton('play');
var greeting=createElement('h3');
entrada.position(130,160);
botao,position(250,200);
botao.mousePressed(function(){
entrada.hide();
botao.hide();   
var nome=entrada.value(); 
playerCount+=1;
player.update(nome);
player.updateCount(playerCount);
greeting.html("olá "+nome);
greeting.position(130,160);
})
 }   
}