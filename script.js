var yoff = 0.0
var mouseCoord;
var change = 245;
var song; 



var v = 0;

//follow mouse
var f = 300
var easing = 0.04;






//clouds
var cloud1 = {
  x: 0,
  y: 200,
  diameter: 50 // clouds 
};
var cloud2 = {
  x: 10,
  y: 250,
  diameter: 100 //clouds
};
var cloud3 = {
  x: 33,
  y: 230,
  diameter: 80 //clouds
};
var cloud4 = {
  x: 70,
  y: 30,
  diameter: 80 //clouds
}; 

  var cloud5 = {
  x: 0,
  y: 40,
  diameter: 50 // clouds 
};
var cloud6 = {
  x: 10,
  y: 50,
  diameter: 60 //clouds
};
var cloud7 = {
  x: 33,
  y: 30,
  diameter: 80 //clouds
};
var cloud8 = {
  x: 70,
  y: 40,
  diameter: 80 //clouds
};


  
//titanic body
var titanicbody = {
x: 300,
y: 370,
body3: 220,
body4: 80
};
//titatnic top
var titanictop = {
x1: 300,
y1: 370,
top1: 220,
top2: 20
};
//steam engine
var steam = {
x1: 320,
y1: 300,
top1: 20,
top2: 80
};

//steam engine
var steam2 = {
x1: 380,
y1: 300,
top1: 20,
top2: 80
};

//steam engine
var steam3 = {
x1: 440,
y1: 300,
top1: 20,
top2: 80
};



function setup (){
createCanvas(windowWidth, windowHeight);

  song = loadSound('Ocean_Waves-Mike_Koenig-980635527.mp3');
}



 



  function mouseClicked() {
  if (change == 0) {
    change = 144,10,125;
  } else {
    change = 0;
  }
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }

  } 





function draw (){
background(51);
fill(15,14,125);
  // We are going to draw a polygon out of the wave points
  beginShape();
var xoff=0
 
for (var x = 0; x <= width; x += 10) {

var y = map(noise(xoff, yoff), 0, 1, 550,300);
background(63,217,255);
vertex(x, y); 

 xoff += 0.05;
  }
  
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  fill(255,249,0)
  noStroke()

  ellipse(1000, 150, 110, 100)
 
  
  //ellipse clouds
  fill(245,260,260);
  ellipse(cloud1.x,cloud1.y,cloud1.diameter,cloud1.diameter);
  cloud1.x = cloud1.x + 0.4;
  
  fill(260,260,260);
  ellipse(cloud2.x,cloud2.y,cloud2.diameter,cloud2.diameter);
  cloud2.x = cloud2.x + 0.4;
  
  fill(260,260,260);
  ellipse(cloud3.x,cloud3.y,cloud3.diameter,cloud3.diameter);
  cloud3.x = cloud3.x + 0.4;
  
  fill(260,280,260);
  ellipse(cloud4.x,cloud4.y,cloud4.diameter,cloud4.diameter);
  cloud4.x = cloud4.x + 0.4;
  
  fill(260,280,260);
  ellipse(cloud5.x,cloud5.y,cloud5.diameter,cloud5.diameter);
  cloud5.x = cloud5.x + 0.2;
  
  fill(260,280,260);
  ellipse(cloud6.x,cloud6.y,cloud6.diameter,cloud6.diameter);
  cloud6.x = cloud6.x + 0.2;
  
  fill(260,280,260);
  ellipse(cloud7.x,cloud7.y,cloud7.diameter,cloud7.diameter);
  cloud7.x = cloud7.x + 0.2;
  
  fill(260,280,260);
  ellipse(cloud8.x,cloud8.y,cloud8.diameter,cloud8.diameter);
  cloud8.x = cloud8.x + 0.2;

  //rect titanic body
  fill( 41,41,61);
  rect(titanicbody.x,titanicbody.y, titanicbody.body3,titanicbody.body4);
    
  //rect titanic top
  fill(change)
  rect(titanictop.x1,titanictop.y1, titanictop.top1,titanictop.top2);
  
  //rect steam
  fill(change)
  rect(steam.x1,steam.y1, steam.top1,steam.top2);
    
 //rect steam2
  fill(change)
  rect(steam2.x1,steam2.y1, steam2.top1,steam2.top2);
  
  //rect steam3
  fill(change)
  rect(steam3.x1,steam3.y1, steam3.top1,steam3.top2);
  
   mouseCoord=map(mouseX,0,width,-5,5);
 
  //mouseX follow
  print("mouseX= "+mouseX);
  if(mouseX!=0) {
  
  titanicbody.x+=mouseCoord;
  titanictop.x1+=mouseCoord;
  steam.x1+=mouseCoord;
  steam2.x1+=mouseCoord;
  steam3.x1+=mouseCoord;
  

  
  
  
  
  
  
  }

  
  
  }


