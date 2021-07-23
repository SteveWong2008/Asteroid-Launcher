function yellowBall() {
  //yellow1
  var yellow1 = createSprite(windowWidth/2-20,20);
  yellow1.addImage(yballimg);
  yellow1.velocityY = 0.5;
  yellow1.lifetime = 2500;
  yellow1.scale = 0.09;
  yG.add(yellow1);
  //yellow2
  var yellow2 = createSprite(windowWidth/2-20,60);
  yellow2.addImage(yballimg);
  yellow2.velocityY = 0.5;
  yellow2.lifetime = 2500;
  yellow2.scale = 0.09;
  yG.add(yellow2);
  //yellow3
  var yellow3 = createSprite(windowWidth/2-60,60);
  yellow3.addImage(yballimg);
  yellow3.velocityY = 0.5;
  yellow3.lifetime = 2500;
  yellow3.scale = 0.09;
  yG.add(yellow3);
  //yellow4
  var yellow4 = createSprite(windowWidth/2-60,100);
  yellow4.addImage(yballimg);
  yellow4.velocityY = 0.5;
  yellow4.lifetime = 2500;
  yellow4.scale = 0.09;
  yG.add(yellow4);
  //yellow5
  var yellow5 = createSprite(windowWidth/2+20,60);
  yellow5.addImage(yballimg);
  yellow5.velocityY = 0.5;
  yellow5.lifetime = 2500;
  yellow5.scale = 0.09;
  yG.add(yellow5);
}
