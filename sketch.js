var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var invisibleclimber,invisibleclimbersGroup


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("jump.mp3");
  endsound = loadSound("PEW.mp3")
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
 

ghost = createSprite(300,300)
ghost.addImage("ghost",ghostImg)
ghost.scale = 0.3

doorsGroup = createGroup()
climbersGroup = createGroup()
invisibleclimbersGroup = createGroup()




}

function draw() {
  background(200);
  
if(gameState == 'play'){

  if(tower.y > 400){
    tower.y = 300
  }
  if(keyDown ("space")){
    ghost.velocityY = -10
  
    spookySound.play()
    spookySound.setVolume(0.1)  
  
  }

  if(climbersGroup.isTouching(ghost)){

    ghost.velocityY = 0
    
    
    }
    
    ghost.velocityY = ghost.velocityY+1
    
    
    if(keyDown ("right_arrow")){
    
    ghost.x+=5
    
    
    }
    
    if(keyDown ("left_arrow")){
    
    ghost.x-=5
    
    
    }
    spawndoors()

    drawSprites()

    if(invisibleclimbersGroup.isTouching(ghost)){

      ghost.velocityY = 0
      
    
    gameState = 'end'

    endsound.play()
      }

if(ghost.y >= 600){

  ghost.velocityY = 0
      
    
  gameState = 'end'

  endsound.play()

}

}

  if(gameState == "end"){
drawSprites()
    textSize(24)
    stroke("blue")
  text ("GAME OVER",250,300)
  
  tower.velocityY=0
ghost.visible = false
doorsGroup.setVelocityYEach(0)
climbersGroup.setVelocityYEach(0)
invisibleclimbersGroup.setVelocityYEach(0)
  }






















}

function spawndoors(){

if(frameCount % 200==0){
  door = createSprite(300,50)
  door.velocityY = 1
  door.addImage("door",doorImg)

 door.x= Math.round(random(100,400))

 invisibleclimber = createSprite(door.x,125)
 invisibleclimber.addImage("climber",climberImg)
 invisibleclimber.velocityY = 1
 invisibleclimber.visible = false;


climber = createSprite(door.x,100)
climber.addImage("climber",climberImg)
climber.velocityY = 1

doorsGroup.add(door)
climbersGroup.add(climber)
invisibleclimbersGroup.add(invisibleclimber)





ghost.depth=climber.depth+1





}

}