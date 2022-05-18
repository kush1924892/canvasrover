var rover_x = 10;
var rover_y = 10;
var rover_height = 90;
var rover_width = 100;
background_img= "mars.gif";
rover_img= "rover.png"


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src =rover_img;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
 window.addEventListener("keydown", my_keydown);

 function my_keydown(e) {
     keyPressed = e.keyCode;
     console.log(keyPressed);
     if(keyPressed == '38')
     {
         up();
         console.log("up");
     }
     if(keyPressed == '40')
     {
         down();
         console.log("down");
     }
     if(keyPressed == '37')
     {
         left();
         console.log("down");
     }
     if(keyPressed == '39')
     {
         right();
         console.log("right");
     }
 }
 function up()
 {
     if(rover_y >=0)
     {
         rover_y = rover_y - 10;
         uploadBackground();
         uploadrover();
     }
 }
 function down()
 {
     if(rover_y <=0)
     {
         rover_y=rover_y+10;
         uploadBackground();
         uploadrover();
     }
 }
 function right()
 {
     if(rover_x <=500)
     {
         rover_x=rover_x-10;
         uploadBackground();
         uploadrover();
     }
 }
 function left()
 {
     if(rover_x >=0)
     {
         rover_x=rover_x+10;
         uploadBackground();
         uploadrover();
     }
 }