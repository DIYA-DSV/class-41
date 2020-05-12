var database;
var gameState=0;
var form,player,game;
var playerCount;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1I
var car2I
var car3I
var car4I
var track;

function preload(){

 car1I = loadImage("images/car1.png");
 car2I = loadImage("images/car2.png");
 car3I = loadImage("images/car3.png");
 car4I = loadImage("images/car4.png");
 track = loadImage("images/track.jpg");
}


function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-130);
  game= new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  } 

  if(gameState===2){
     game.end();
  }
     }

   
  



