function gameplay(){

  
 detectRect = createSprite(windowWidth/2,910,windowWidth,10)
  cannon.visible = true;
  cannon.depth = gif.depth+1
  pointer.visible = true;
  pointer.depth = gif.depth+1
  imageBall.depth=gif.depth+1
  
  if(score === 0){
    score = 1
  redBall();
  yellowBall();
  greenBall();
  blueBall();
    
  }else if(score === 22){
    feedback = "Bonus! + 1 Point"
    score = 23
    Level2();
  
}else if(score === 44){
  feedback = "Bonus! +7 Points"
  score = 51
  Level3();
}
  
  
  
  
  //moving bow
  cannon.pointTo(World.mouseX,World.mouseY)
  pointer.pointTo(World.mouseX,World.mouseY)
  
   // release arrow when space key is pressed
  if (mouseDown("leftButton")&&gamestate==="shoot"&&gamestate!="reload") {
    createBall();
    
    
    
  }
  
  
   
  //creating which shooter ball color
  if(frameCount%80===0 && mouseUp("leftButton")){
  
  
    if (gamestate==="reload") {
      
     
  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: 
        select = ysballimg;
        current = "Yellow"
        gamestate="shoot"
              break;
      case 2: 
        select = gsballimg
         current = "Green"
         gamestate="shoot"
              break;
      case 3: 
        select = bsballimg
        current = "Blue"
        gamestate="shoot"
              break;
      case 4: 
        select = rsballimg
        current = "Red"
        gamestate="shoot"
              break;
      default: break;
    }
  
 }
  }
  
  if(current === undefined){
    current = "loading..."
  }
  
  
  
  

  
  lvl1touching();
  lvl2touching();
  //lvl3touching();
  
  
  
  drawSprites();
  
  textSize(20)
  fill(rgb(57,255,0))
  text(feedback,windowWidth/2+300,300)
  textSize(30)
  fill("white")
  text("Score: "+ score, windowWidth/2+20,950);
  text("NextColor: ",windowWidth/2+300,950);
  fill("bold")
  if(gamestate ==="reload"){
    fill("red")
  }else{
    fill(rgb(57,255,0))
  }
  textSize(40)
  
  text(gamestate,windowWidth/2+150,900);
  
  if(current==="Red"){
    imageBall.addImage(rballimg)
    imageBall.visible=true
    imageBall.scale=0.1
  }
  else if(current==="Yellow"){
    imageBall.addImage(yballimg)
    imageBall.visible=true
    imageBall.scale=0.1
  }
  else if(current==="Blue"){
    imageBall.addImage(bballimg)
    imageBall.visible=true
    imageBall.scale=0.1
  }
  else if(current==="Green"){
    imageBall.addImage(gballimg)
    imageBall.visible=true
    imageBall.scale=0.1
  }else if(current==="loading..."){
    fill("white")
    textSize(30)
    text("Loading...",windowWidth/2+450,950)
  }
}