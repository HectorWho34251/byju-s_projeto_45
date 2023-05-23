var bg_img, lander_img;  
var lander;
var g = 0.05;
var vy = 0;

function preload() {
 bg_img = loadImage("bg_sur.png");
 lander_img = loadImage("normal.png");
}

function setup() {
  createCanvas(1000, 700);

  frameRate(80);

  lander = createSprite(100, 50, 30, 30);
  lander.addImage(lander_img);
  lander.scale = 0.2;

  rectMode(CENTER);
  textSize(15);

}

function draw() {
  background(51);
  image(bg_img, 0, 0);

  push();
  fill(255);
  text("Velocidade Vertical: "+round(vy), 800, 75);
  pop();

  //descida
  vy += g;
  lander.position.y += vy;


  drawSprites();
}


