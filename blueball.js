function blueBall() {
   //blue1
  var blue1 = createSprite(windowWidth/2-100,20);
  blue1.addImage(bballimg);
  blue1.velocityY = 0.5;
  blue1.lifetime = 2500;
  blue1.scale = 0.09;
  bG.add(blue1);
  //blue2
  var blue2 = createSprite(windowWidth/2-100,60);
  blue2.addImage(bballimg);
  blue2.velocityY = 0.5;
  blue2.lifetime = 2500;
  blue2.scale = 0.09;
  bG.add(blue2);
  //blue3
  var blue3 = createSprite(windowWidth/2-140,100);
  blue3.addImage(bballimg);
  blue3.velocityY = 0.5;
  blue3.lifetime = 2500;
  blue3.scale = 0.09;
  bG.add(blue3);
  //blue4
  var blue4 = createSprite(windowWidth/2-100,100);
  blue4.addImage(bballimg);
  blue4.velocityY = 0.5;
  blue4.lifetime = 2500;
  blue4.scale = 0.09;
  bG.add(blue4);
  //blue5
  var blue5 = createSprite(windowWidth/2-60,20);
  blue5.addImage(bballimg);
  blue5.velocityY = 0.5;
  blue5.lifetime = 2500;
  blue5.scale = 0.09;
  bG.add(blue5);
}