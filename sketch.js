var ball , rG,  bG, gG,yG,sBallG,shooterball ,cannon ,ballimg,cannonimg,shooterballimg,rballimg,rsballimg,yballimg,ysballimg,bballimg,bsballimg,gballimg,gsballing,bg, gif;
var pointer,pointerimg;
var cannonball
var edges;
var score =-1;
var level=1;
var detectRect
var current;
var select= "ysballimg";
var gamestate = "reload";
var imageBall;
var hitsound;
var losesound;
var music;
var feedback = "Start";
var setstate = "Intro";
var win = 0;
function preload(){
  //background img
  bg = loadImage("download.png");
  //red shooter ball
  rsballimg = loadImage("RedShooter.png");
  //blue shooter ball
  bsballimg = loadImage("BlueShooter.png");
  //green shooter ball
  gsballimg = loadImage("GreenShooter.png");
  //yellow shooter ball
  ysballimg = loadImage("YellowBallShooterImg.png");
  //cannon img
  cannonimg = loadImage("CannonImg.png");
  //red ball
  rballimg = loadImage("RBall.png");
  //green ball
  gballimg = loadImage("GBall.png");
  //yellow ball
  yballimg = loadImage("YBall.png");
  //blue ball
  bballimg = loadImage("BBall.png");
  //pointer
  pointerimg = loadImage("Pointer.png")
  //hit sound
  hitsound = loadSound("mixkit-falling-hit-757.wav")
  //lose sound
  losesound = loadSound("mixkit-retro-arcade-game-over-470.wav")
  //music
  music = loadSound("dramatic-intense-trailer-5062 (1).mp3")
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  

  
  // creating bow to shoot arrow
  cannon = createSprite(windowWidth/2+200,800);
  cannon.addImage(cannonimg); 
  cannon.scale = 0.3;
  cannon.visible = false;
  
  pointer = createSprite(cannon.x,cannon.y);
  pointer.addImage(pointerimg);
  pointer.visible = false;
  
  imageBall = createSprite(windowWidth/2+470,940);
  imageBall.visible=false
  
  
  imageMode(CENTER)
  gif = createSprite(400,500)
  gif.addImage(bg)
  gif.scale = windowWidth/250
  gif.visible = false;
  
   score = 0  
  rG= new Group();
  rG2= new Group();
  gG= new Group();
  gG2= new Group();
  bG= new Group();
  bG2= new Group();
  yG= new Group();
  yG2= new Group();
  sBallGroup= new Group();
  
  
  music.play(true)
  frameRate = 10000;
  
}

function draw() {
 if(setstate === "Intro"){
   background("black")
   gif.visible = true;
   gif.velocityY = 4;
   console.log(gif.y)
   if (gif.y > 500) {
    gif.y = gif.height/2+150
  }
   if(keyDown("Space")){
     setstate = "play"
   }
   drawSprites();
   
   textSize(40);
   fill("White");
   textFont("Permanant ")
   text("Asteroid Launcher Game",windowWidth/2,200);
   textSize(30);
   textFont("Comic Sans Ms")
   text("Instructions",windowWidth/2+100,375);
   textSize(20);
   text("Aim the Pointer to change direction of the ball",windowWidth/2-25,450)
   text("Left Click to shoot the ball.",windowWidth/2+60,500)
   text("Press SpaceBar To Begin",windowWidth/2+70,550);
   
   
 }else if(setstate === "play"){
   gameplay();
    gif.velocityY = 4;
   console.log(gif.y)
   if (gif.y > 500) {
    gif.y = gif.height/2+150
  }
   
   if(win === 8){
     setstate = "win"
     
     
   }
 }else if(setstate === win){
   
     text("Good Job You Win",200,500)
   
   
 }else{
   gif.visible = false;
   cannon.visible = false;
   imageBall.visible = false;
   pointer.visible = false;
   if(keyDown("Space")){
     setstate = "Intro"
   }
   textSize(40)
    fill("Red")
    text("You Lose!",300,500);
 }

  
  
}

if(setstate === "lose"){
   sBallGroup.destroyEach();
  
  yG.destroyEach();
  rG.destroyEach();
  gG.destroyEach();
  bG.destroyEach();
  score=0;
  fill("red")
  textSize(40)
  text("YouLose!",300,500)
  music.stop();
 }

function lvl1touching(){
  if (sBallGroup.isTouching(rG) && current==="Red") {
    sBallGroup.destroyEach();
    rG.destroyEach();
    hitsound.play(false)
     score=score+5;
    feedback = "Good Shot :D"
}else if(sBallGroup.isTouching(rG)&&current!="Red"){
         sBallGroup.destroyEach();
  feedback = "Why u Miss D:"
         }




 if (sBallGroup.isTouching(gG) && current==="Green") {
   sBallGroup.destroyEach();
   gG.destroyEach();
   hitsound.play(false)
  score=score+6;
   feedback = "Nice!"
}else if(sBallGroup.isTouching(gG)&&current!="Green"){
         sBallGroup.destroyEach();
  feedback = "Try Again..."
         }



 if (sBallGroup.isTouching(bG) && current==="Blue") {
  sBallGroup.destroyEach();
   hitsound.play(false)
  bG.destroyEach();
  score=score+5;
   feedback= "You Got IT!"
}else if(sBallGroup.isTouching(bG)&&current!="Blue"){
         sBallGroup.destroyEach();
  feedback = "Almost"
         }



if (sBallGroup.isTouching(yG)&& current==="Yellow") {
  sBallGroup.destroyEach();
  hitsound.play(false)
  yG.destroyEach();
  score=score+5;
  feedback = "Almost There!"
}else if(sBallGroup.isTouching(yG)&&current!="Yellow"){
         sBallGroup.destroyEach();
  feedback = "Why.."
         }
  
  
if (detectRect.isTouching(rG) || detectRect.isTouching(gG) || detectRect.isTouching(bG) || detectRect.isTouching(yG)) {
  setstate = "lose"
  losesound.play(false)
}
 
}
if(setstate === "lose"){
    sBallGroup.destroyEach();
    yG2.destroyEach();
    rG2.destroyEach();
    gG2.destroyEach();
    bG2.destroyEach();
    score=0;
    textSize(40)
    fill("Red")
    text("You Lose!",300,500);
    music.stop();
    losesound.stop();
  }

//pause


function lvl2touching(){
  if (sBallGroup.isTouching(rG2) && current==="Red") {
    sBallGroup.destroyEach();
    rG2.destroyEach();
    hitsound.play(false)
     score=score+5;
    feedback = "Good Shot :D"
    win++
}else if(sBallGroup.isTouching(rG2)&&current!="Red"){
         sBallGroup.destroyEach();
          feedback = "Why u Miss D:"
         }




 if (sBallGroup.isTouching(gG2) && current==="Green") {
   sBallGroup.destroyEach();
   gG2.destroyEach();
   hitsound.play(false)
  score=score+6;
   feedback = "Nice!"
   win++
}else if(sBallGroup.isTouching(gG2)&&current!="Green"){
         sBallGroup.destroyEach();
  feedback = "Try Again..."
         }



 if (sBallGroup.isTouching(bG2) && current==="Blue") {
  sBallGroup.destroyEach();
   hitsound.play(false)
  bG2.destroyEach();
  score=score+5;
   feedback = "Yess!!"
   win++
}else if(sBallGroup.isTouching(bG2)&&current!="Blue"){
         sBallGroup.destroyEach();
  feedback = "Noooo"
         }



if (sBallGroup.isTouching(yG2)&& current==="Yellow") {
  sBallGroup.destroyEach();
  hitsound.play(false)
  yG2.destroyEach();
  score=score+5;
  feedback ="Great!"
  win++
}else if(sBallGroup.isTouching(yG2)&&current!="Yellow"){
         sBallGroup.destroyEach();
  feedback ="Not Enough Effort"
         }
  
  
if (detectRect.isTouching(rG2) || detectRect.isTouching(gG2) || detectRect.isTouching(bG2) || detectRect.isTouching(yG2)) {
  setstate = "lose"
  losesound.play(false);
}
  
  

}