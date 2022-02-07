const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bgImg, ball, ballImg;
var form, database;
var red1, red2, red3, red4, red5, red6, red7, red8, red9;
var blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9;
var red1Img, red2Img, red3Img, red4Img, red5Img, red6Img, red7Img, red8Img, red9Img;
var blue1Img, blue2Img, blue3Img, blue4Img, blue5Img, blue6Img, blue7Img, blue8Img, blue9Img;
var net1, net2, net1Img, net2Img;
var rect1, rect1Img, rect2, rect2Img, rect3, rect3Img, rect4, rect4Img, rect5, rect5Img, rect6, rect6Img;
var green1, green1Img, green2, green2Img;
var limit1, limit2, limit3, limit4;
var database, gameState = 0, playerCount = 0;
var player, redTeam, blueTeam, allPlayers;
var score = 0;


function preload(){
  bg = loadImage("Images/soccerField.png");
  bg.scale = 0.6

  red1Img = loadImage("Images/goalKeeper.png");
  red2Img = loadImage("Images/redTeam/redTwo.png");
  red3Img = loadImage("Images/redTeam/redThree.png");
  red4Img = loadImage("Images/redTeam/redFour.png");
  red5Img = loadImage("Images/redTeam/redFive.png");
  red6Img = loadImage("Images/redTeam/redSix.png"); 
  red7Img = loadImage("Images/redTeam/redSeven.png");
  red8Img = loadImage("Images/redTeam/redEight.png");
  red9Img = loadImage("Images/redTeam/redNine.png");

  blue1Img = loadImage("Images/goalKeeper.png");
  blue2Img = loadImage("Images/blueTeam/blueTwo.png");
  blue3Img = loadImage("Images/blueTeam/blueThree.png");
  blue4Img = loadImage("Images/blueTeam/blueFour.png");
  blue5Img = loadImage("Images/blueTeam/blueFive.png");
  blue6Img = loadImage("Images/blueTeam/blueSix.png"); 
  blue7Img = loadImage("Images/blueTeam/blueSeven.png");
  blue8Img = loadAnimation("Images/blueTeam/blueEight.png");
  blue9Img = loadImage("Images/blueTeam/blueNine.png");

  ballImg = loadImage("Images/soccerBall.png")

  net1Img = loadImage("Images/net.png")
  net2Img = loadImage("Images/net.png")
  green1Img = loadImage("Images/green.jpg")
  green2Img = loadImage("Images/green.jpg")

  rect1Img = loadImage("Images/whiteRect2.jpg")
  rect2Img = loadImage("Images/whiteRect2.jpg")
  rect3Img = loadImage("Images/whiteRect1.jpg")
  rect4Img = loadImage("Images/whiteRect2.jpg")
  rect5Img = loadImage("Images/whiteRect2.jpg")
  rect6Img = loadImage("Images/whiteRect1.jpg")

}

function setup() {
  createCanvas(1280,570);

  var database = firebase.database()

  engine = Engine.create();
  world = engine.world;

  game = new Game()
  game.getState()
  game.start()

  score = 0;
    
 }

function draw() {
  //Engine.update(engine)
  bg.scale = 0.6

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end()
  }

background(bg)

drawSprites()

}