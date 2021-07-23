function Level2(){
  
    //red1-2
    
  for(var i=0;i<100;i=i+15){
  var x = random(windowWidth/2-100,windowWidth/2+500)
  var y = random(-200,20)
  if(frameCount%100){
    
    var red = createSprite(x,y);
    red.addImage(rballimg);
    red.velocityY = 0.8;
    red.lifetime = 2000;
    red.scale = 0.1;
    rG2.add(red);
    
  }
}
  for(var i=0;i<100;i=i+30){
  var x = random(100,400)
  var y = random(-200,20)
  if(frameCount%100){
    
    var blue = createSprite(x,y);
    blue.addImage(bballimg);
    blue.velocityY = 0.8;
    blue.lifetime = 2000;
    blue.scale = 0.1;
    bG2.add(blue);
    
  }
}
  
  for(var i=0;i<100;i=i+50){
  var x = random(windowWidth/2+100,windowWidth/2+200)
  var y = random(-150,20)
  if(frameCount%100){
    
    var green = createSprite(x,y);
    green.addImage(gballimg);
    green.velocityY = 0.8;
    green.lifetime = 2000;
    green.scale = 0.1;
    gG2.add(green);
    
  }
}
  
  for(var i=0;i<100;i=i+50){
  var x = random(windowWidth/2+100,windowWidth/2+200)
  var y = random(-150,20)
  if(frameCount%100){
    
    var yellow = createSprite(x,y);
    yellow.addImage(yballimg);
    yellow.velocityY = 0.8;
    yellow.lifetime = 2000;
    yellow.scale = 0.1;
    yG2.add(yellow);
    
  }
}

  
  
}