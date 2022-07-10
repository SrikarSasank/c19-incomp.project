var road, roadImg
var theif,theifImg
var theif_caught
var cop, copImg
var game_overImg
var PLAY
var END
var gameState

var invisible_ground
var max_height_of_theif
var score
var rockImg
var barricadeImg
var dogImg
var obstaclesGroup
var coinGroup
var gold_coinImg


function preload(){

  pathImg = loadImage("path.png");
  copImg = loadImage("cop.png")
  theifImg = loadImage("theif.png")
  rockImg = loadImage("stone.png")
  barricadeImg = loadImage("barricade.png")
  dogImg = loadImage("dog.png")
  game_overImg = loadImage("gameOver.png")
  theif_caught = loadImage("game_over.png")
  gold_coinImg = loadImage("coin.png")

}

function setup(){

  createCanvas(1440,800);

  path=createSprite(675,400);
  path.addImage(pathImg);
  path.scale = 4.165
  path.velocityX = -4;

  cop = createSprite(220,715)
  cop.addImage(copImg)
  cop.scale = 0.49

  theif = createSprite(1000,650)
  theif.addImage(theifImg)
  theif.scale = 0.5

  invisible_ground = createSprite(720,755,1440,0.000000000000000000000000000000000000000000001)
  invisible_ground2 = createSprite(990,720,200,0.00000000000000000000000000000000000000000001)
  max_height_of_theif = createSprite(1000,100,325,0.000000000000000000000000000000000000000000001)

  score = 0

  obstaclesGroup = new Group();

  coinGroup = new Group();

}



function draw(){

  
  if (path.x < 0.9){
    path.x = path.width/1;
  }


cop.setCollider("rectangle",2,5,590,530)
theif.setCollider("rectangle",0,10,310,220)

  if(keyDown("space") && theif.y >= 159) {
    theif.velocityY = -20;



  }

  textSize(30)
  fill("black")
  text("Score: "+score,1000,200)

  theif.velocityY = theif.velocityY + 0.9
  theif.collide(invisible_ground2)
  cop.collide(invisible_ground)
  theif.collide(max_height_of_theif)


edges = createEdgeSprites()
theif.collide(edges)

spawnObstacles()
spawnCoins()

if(theif.isTouching(obstaclesGroup)){
  path.velocityX = 0
  obstacleGroup.velocityX = 0

  theif.destroyEach() = true

}

if(cop.isTouching(obstaclesGroup)){

cop.velocityY = -23

}

if(coinGroup.isTouching(theif)){
  score = score + 5
 coinGroup.destroyEach()

}



cop.velocityY = cop.velocityY + 0.9

drawSprites()
}

function spawnObstacles(){
  if(frameCount % 140 === 0) {
  obstacle = createSprite(1500,700,0.1,0.1)
  obstacle.scale = 0.15
  var rand = Math.round(random(1,3));
  switch(rand) {
    case 1: obstacle.addImage(rockImg);
            break;
    case 2: obstacle.addImage(barricadeImg);
            break;
    case 3: obstacle.addImage(dogImg);
            break;
    default: break;
  }
  obstacle.velocityX = -4

  obstaclesGroup.add(obstacle);


}

}

function spawnCoins(){
  if(frameCount % 300 === 0) {

 var gold_coin = createSprite(1880,315)

 gold_coin.scale = 0.1
  
  var rand = Math.round((1));
  switch(rand) {
    case 1: gold_coin.addImage(gold_coinImg)
            break;
    default: break;
  }
   gold_coin.velocityX = -4

   coinGroup.add(gold_coin)
}

}





