function redBall() {
  if(level === 1){
  //red1
  var red1 = createSprite(windowWidth/2-180,20);
  red1.addImage(rballimg);
  red1.velocityY = 0.5;
  red1.lifetime = 2000;
  red1.scale = 0.1;
  rG.add(red1);
  //red2
  var red2 = createSprite(windowWidth/2-140,20);
  red2.addImage(rballimg);
  red2.velocityY = 0.5;
  red2.lifetime = 2000;
  red2.scale = 0.1;
  rG.add(red2);
  //red1
  var red3 = createSprite(windowWidth/2-180,60);
  red3.addImage(rballimg);
  red3.velocityY = 0.5;
  red3.lifetime = 2000;
  red3.scale = 0.1;
  rG.add(red3);
  //red4
  var red4 = createSprite(windowWidth/2-140,60);
  red4.addImage(rballimg);
  red4.velocityY = 0.5;
  red4.lifetime = 2000;
  red4.scale = 0.1;
  rG.add(red4);
  //red5
  var red5 = createSprite(windowWidth/2-180,100);
  red5.addImage(rballimg);
  red5.velocityY = 0.5;
  red5.lifetime = 2000;
  red5.scale = 0.1;
  rG.add(red5);
  }
  
}