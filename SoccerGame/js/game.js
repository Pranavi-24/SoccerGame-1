class Game {
    constructor(){
  
    }
  
    getState(){
      database = firebase.database()
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
       // if(playerCountRef.exists()){
         // playerCount = playerCountRef.val();
          player.getCount();
        //}
        form = new Form()
        form.display();
              
  limit1 = createSprite(260,285,5,570)
  limit1.shapeColor = "yellow"
  limit2 = createSprite(1020,285,5,570)
  limit2.shapeColor = "magenta"
  limit3 = createSprite(480,285,5,570)
  limit3.shapeColor = "cyan"
  limit4 = createSprite(790,285,5,570);
  limit4.shapeColor = "blue"
  
  red1 = createSprite(165,285)
  red1.addAnimation("Goali", red1Img)
  red1.scale = 0.17
  red1.setCollider("circle",0,0,100)
  red1.debug = true;
 
  red2 = createSprite(340,120)
  red2.addAnimation("redPlayerTwo", red2Img)
  red2.scale = 0.15
  red2.setCollider("circle",0,0,100)
  red2.debug = true;

  red3 = createSprite(340,280)
  red3.addAnimation("redPlayerTwo", red3Img)
  red3.scale = 0.17
  red3.setCollider("circle",0,0,90)
  red3.debug = true;

  red4 = createSprite(340,450)
  red4.addAnimation("redPlayerFour", red4Img)
  red4.scale = 0.16
  red4.setCollider("circle",0,0,98)
  red4.debug = true;

  red5 = createSprite(530,200)
  red5.addAnimation("redPlayerFive", red5Img)
  red5.scale = 0.17
  red5.setCollider("circle",0,0,78)
  red5.debug = true;

  red6 = createSprite(537,380)
  red6.addAnimation("redPlayerSix", red6Img)
  red6.scale = 0.13
  red6.setCollider("circle",0,0,110)
  red6.debug = true;

  red7 = createSprite(833,130)
  red7.addAnimation("redPlayerSeven", red7Img)
  red7.scale = 0.047
  red7.setCollider("circle",0,0,300)
  red7.debug = true;

  red8 = createSprite(834,285)
  red8.addAnimation("redPlayerEight", red8Img)
  red8.scale = 0.16
  red8.setCollider("circle",0,0,90)
  red8.debug = true;
  
  red9 = createSprite(842,450)
  red9.addAnimation("redPlayerNine", red9Img)
  red9.scale = 0.14
  red9.setCollider("circle",0,0,100)
  red9.debug = true;

  blue1 = createSprite(1120,285)
  blue1.addAnimation("Goali", blue1Img)
  blue1.scale = 0.15

  blue2 = createSprite(960,130)
  blue2.addAnimation("bluePlayerTwo", blue2Img)
  blue2.scale = 0.15

  blue3 = createSprite(960,285)
  blue3.addAnimation("bluePlayerTwo", blue3Img)
  blue3.scale = 0.12

  blue4 = createSprite(960,450)
  blue4.addAnimation("bluePlayerFour", blue4Img)
  blue4.scale = 0.14

  blue5 = createSprite(750,200)
  blue5.addAnimation("bluePlayerFive", blue5Img)
  blue5.scale = 0.17

  blue6 = createSprite(750,380)
  blue6.addAnimation("bluePlayerSix", blue6Img)
  blue6.scale = 0.18

  blue7 = createSprite(425,120)
  blue7.addAnimation("bluePlayerSeven", blue7Img)
  blue7.scale = 0.12

  blue8 = createSprite(425,280)
  blue8.addAnimation("bluePlayerEight", blue8Img)
  blue8.scale = 0.052
  
  blue9 = createSprite(403,440)
  blue9.addAnimation("bluePlayerNine", blue9Img)
  blue9.scale = 0.065

  rect1 = createSprite(33,355)
  rect1.addAnimation("pole",rect1Img)
  rect1.scale = 0.6

  rect2 = createSprite(33,215)
  rect2.addAnimation("pole",rect2Img)
  rect2.scale = 0.6

  rect3 = createSprite(3,285)
  rect3.addAnimation("pole",rect3Img)
  rect3.scale = 1.67

  green1 = createSprite(34,285)
  green1.addAnimation("ground1",green1Img)
  green1.scale = 0.73

  rect4 = createSprite(1250,355)
  rect4.addAnimation("pole",rect4Img)
  rect4.scale = 0.6

  rect5 = createSprite(1250,215)
  rect5.addAnimation("pole",rect5Img)
  rect5.scale = 0.6

  rect6 = createSprite(1280,285)
  rect6.addAnimation("pole",rect6Img)
  rect6.scale = 1.67

  green2 = createSprite(1245,285)
  green2.addAnimation("ground2",green2Img)
  green2.scale = 0.73
  
  ball = createSprite(640,285)
  ball.addAnimation("ball", ballImg)
  ball.scale = 0.078
  
  
  net1 = createSprite(39,283,45,100)
  net1.addAnimation("net",net1Img)
  net1.scale = 0.9

  net2 = createSprite(1270,284,45,100)
  net2.addAnimation("net",net2Img)
  net2.scale = 0.9

  text("Score: "+ score, 500,50);

  redTeam = [red1, red2, red3, red4, red5, red6, red7, red8, red9 ]
  blueTeam = [blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9]
    
    }
  
    play(){
  
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background("brown")

        this.showLeaderboard();
        
    var index = 0;
    for(var plr in allPlayers){
      index = index+1
      var x = mouseX
      var y = mouseY
      blueTeam[index-1].position.x = x
      blueTeam[index-1].position.y = y
      redTeam[index-1].position.x = x
      redTeam[index-1].position.y = y

      if(index===player.index){
        ellipse(x,y,60,60)
      }
    }
    this.playerControls()
    drawSprites()
    }
  
    showLeaderboard(){
    var leader1, leader2;
    var players = Object.values(allPlayers)

    if(player[0].rank === 1){
      leader1 = players[0].rank + "&emsp;" + players[0].name + "&emsp;" + player[0].score
      leader2 = players[1].rank + "&emsp;" + players[1].name + "&emsp;" + player[1].score
    }

    if(player[1].rank === 1){
      leader2 = players[0].rank + "&emsp;" + players[0].name + "&emsp;" + player[0].score
      leader1 = players[1].rank + "&emsp;" + players[1].name + "&emsp;" + player[1].score
    }

    this.leader1.html(leader1)
    this.leader1.html(leader2)

    }

    playerControls(){

      if (keyCode === 49){
        red1.position.x = mouseX;
        red1.position.y = mouseY;
        player.update();}
    
        
        if (keyCode === 50){
          red2.position.x = mouseX;
          red2.position.y = mouseY;
          player.update();}
          
        if (keyCode === 51){
          red3.position.x = mouseX;
          red3.position.y = mouseY;
          player.update();}
          
        if (keyCode === 52){
          red4.position.x = mouseX;
          red4.position.y = mouseY;
          player.update();}
          
        if (keyCode === 53){
          red5.position.x = mouseX;
          red5.position.y = mouseY;
          player.update();}
          
        if (keyCode === 54){
          red6.position.x = mouseX;
          red6.position.y = mouseY;
          player.update();}
          
        if (keyCode === 55){
          red7.position.x = mouseX;
          red7.position.y = mouseY;
          player.update();}
          
        if (keyCode === 56){
          red8.position.x = mouseX;
          red8.position.y = mouseY;
          player.update();}
          
        if (keyCode === 57){
          red9.position.x = mouseX;
          red9.position.y = mouseY;
          player.update();}
    
        if (ball.isTouching(green1)||ball.isTouching(green2)){
          score = score+1
        }
        
        
        ball.bounce(red1)
        ball.bounce(red2)
        ball.bounce(red3)
        ball.bounce(red4)
        ball.bounce(red5)
        ball.bounce(red6)
        ball.bounce(red7)
        ball.bounce(red8)
        ball.bounce(red9)
        
        ball.bounce(blue1)
        ball.bounce(blue2)
        ball.bounce(blue3)
        ball.bounce(blue4)
        ball.bounce(blue5)
        ball.bounce(blue6)
        ball.bounce(blue7)
        ball.bounce(blue8)
        ball.bounce(blue9)
        
        ball.display()
        
        if(red1.isTouching(limit1)||red1.isTouching(limit2)||red1.isTouching(limit3)||red1.isTouching(limit4)){
          keyCode = 32;
        }
        
        /*if(red2.isTouching(limit1)||red2.isTouching(limit3)){
          keyCode = 32;
        }
        
        if(red3.isTouching(limit1)||red3.isTouching(limit3)){
          keyCode = 32;
        }
        
        if(red4.isTouching(limit1)||red4.isTouching(limit3)){
          keyCode = 32;
        }*/
        
        if(red5.isTouching(limit3)||red5.isTouching(limit4)){
          keyCode = 32;
        }
        
        if(red6.isTouching(limit3)||red6.isTouching(limit4)){
          keyCode = 32;
        }
        
        if(red7.isTouching(limit4)||red7.isTouching(limit2)){
          keyCode = 32;
        }
        
        if(red8.isTouching(limit4)||red8.isTouching(limit2)){
          keyCode = 32;
        }
        
        if(red9.isTouching(limit4)||red9.isTouching(limit2)){
          keyCode = 32;
        }
            
         }
        
         /* if (player.distance>3600){
            gamtState = 2
          } */
    }

    end(){
      textSize(20)
      text("Game Over",200, 50)
      console.log("gameOver")
    }
  
  
  }
  