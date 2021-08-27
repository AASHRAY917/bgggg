var boy,boyImg;
var path,pathImg;
var coin,coinImg;
var gameState = "play";




function preload()
{
  pathImg = loadImage("path.jpg"); 
  coinImg = loadImage("coin.jpg");
  boyImg  = loadImage("Boy.jpg");
}

function setup() 
{
 createCanvas(600,600);


 path = createSprite(300,300);
 path.addImage("pathImg",path);
 path.velocityX = 1;

}

function draw() 
{
  background(0);
  
  drawSprites();
  spawnCoins();
}

function spawnCoins ()
{
  if(frameCount % 240 === 0)
  {
    coin = createSprite (200,-50);
    coin.addImage("coinImg");
    coin.x = Math.round(random(120,400));
  }
}