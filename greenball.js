function greenBall() {
   //green1
  var green1 = createSprite(windowWidth/2+20,20);
  green1.addImage(gballimg);
  green1.velocityY = 0.5;
  green1.lifetime = 2500;
  green1.scale = 0.09;
  gG.add(green1);
  //green2
  var green2 = createSprite(windowWidth/2+60,20);
  green2.addImage(gballimg);
  green2.velocityY = 0.5;
  green2.lifetime = 2500;
  green2.scale = 0.09;
  gG.add(green2);
  //green3
  var green3 = createSprite(windowWidth/2+60,60);
  green3.addImage(gballimg);
  green3.velocityY = 0.5;
  green3.lifetime = 2500;
  green3.scale = 0.09;
  gG.add(green3);
  //green4
  var green4 = createSprite(windowWidth/2+60,100);
  green4.addImage(gballimg);
  green4.velocityY = 0.5;
  green4.lifetime = 2500;
  green4.scale = 0.09;
  gG.add(green4);
  //green5
  var green5 = createSprite(windowWidth/2+20,100);
  green5.addImage(gballimg);
  green5.velocityY = 0.5;
  green5.lifetime = 2500;
  green5.scale = 0.09;
  gG.add(green5);
  //grean6
  var green6 = createSprite(windowWidth/2-20,100);
  green6.addImage(gballimg);
  green6.velocityY = 0.5;
  green6.lifetime = 2500;
  green6.scale = 0.09;
  gG.add(green6);
}