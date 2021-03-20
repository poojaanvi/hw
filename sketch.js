var housewife;
var gameState="start";
var button,setReminder;
var form;
var button1;
var button2;
var button3;
var backgroundImg;
var time1
var hour=0;
var state=0 ;

function preload(){
 // housewife = loadImage("housewife_img.jpg");
  
 jumpSound = loadSound("beep.mp3")
 // homepageimage = loadImage("HomepageImage.jpg");
 // kitchentips = loadImage("KitchenTips.jpg");
 BackgroundImg();
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  button = createButton("Let's continue")
  button.position(width/2-20,height/2+20)
  
  button1 = createButton("Health Tips")
  button1.position(100,200)

  button2 = createButton("Games To Play")
  button2.position(200,200)
  pausebutton=createButton("pause")
  pausebutton.position(10,200);

  button3 = createButton("Kitchen Tips")
  button3.position(320,200)
  button1.hide();
  button2.hide();
  button3.hide()

  setReminder = createButton("Set Reminder");
  setReminder.position(10,10)
  form = new Form();
  
}

function draw() {
  //console.log(form.time1);
  //console.log(status)
  if(time1===hour )
  {
    if(state==0)
    {
     console.log("hi1")
    // if(status==="play")
    // {
    //   console.log("hi")
    
     jumpSound.play();
    // }
    
    }
  }
  
  
  pausebutton.mousePressed( ()=> {
    jumpSound.pause();
    state=1;

    

  })

  if(backgroundImg)
   background(backgroundImg);
  if (gameState==="start"){
 //// background(housewife);


  textSize(20)
  fill("#C70039")
  text("WELCOME TO Mumma's Menu, The Helping Hand",width/2-220, height/2);
  
  setReminder.mousePressed(function () {
    button.hide();
    //clear()

    form.display()
    

  })
  button.mousePressed(function () {
    button.hide();
    //clear()
    gameState= "homepage"

  })
}


 if (gameState==="homepage"){
  //clear ();
 // background(homepageimage);

 //if(time1)
// console.log("time1" +time1)
  button1.show()
  button2.show()
  button3.show()
  button1.mousePressed(function () {
    button1.hide();
    button2.hide();
    button3.hide();

    //clear()
   gameState= "Health Tips"
})
   button2.mousePressed(function () {
     button2.hide();
   } )
setReminder.mousePressed(function (){
   gameState= "showform"
 })
 button3.mousePressed(function () {
  button3.hide();
} )
 }//closing if



 if (gameState==="showform"){
  form.display();
}
  
if(gameState==="Health Tips"){
//clear()
//background(kitchentips)

//button1.hide();
//button2.hide();
//button3.hide();
textSize(40)
text("hello welcome to tips",200,200)
}
  drawSprites();
}

async function BackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJSON = await response.json();
  console.log(responseJSON);
  
  var datetime = responseJSON.datetime;
  
   hour = datetime.slice(11,13);
  console.log("hour"+hour)
  
  
  if(hour>=06 && hour<=19){
    backgroundImg = loadImage("housewife_img.jpg"
    );
 }
 else{
  backgroundImg = loadImage( "HomepageImage.jpg");
  }

  //backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
}