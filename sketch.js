var canvas, backgroundImage;

var gameState = 0;
var allPlayers;
var database;

var form, player, game;

function preload(){
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  form = new Form()
      form.display();
  // game = new Game();
  // game.getState();
  // game.start();
}


function draw(){
  
}
