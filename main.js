canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "racing.png"

function add() {
    backround_imgTag = new Image();
    backround_imgTag.onload = uploadBackground;
    backround_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car1_image;
}

function uploadBackground() {
    ctx.drawImage(backround_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);}
    if (keyPressed == '38') {
        car1_up(); {
            if (car1_y >= 0) {
                car1_y = car1_y - 10;
                console.log("When up arrow key pressed, x = " + car1_x + " y = " + car1_y);
                uploadBackground();
                uploadcar1();
                uploadcar2();
            }

        }
        if (keyPressed == '40') {
            car1_down(); {

            }
            if (car1_y <= 500)


        car1_y = car1_y + 10;
        console.log("When down arrow key pressed, x = " + car1_x + " y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

        if (keyPressed == '83') {
            car2_right();
            console.log("key s")
            if (car1_y <= 500)

        
        car1_y = car1_y + 10;
        console.log("When down arrow key pressed, x = " + car1_x + " y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

        if (keyPressed == '87') {
            car2_left();
            console.log("key w")
            if (car1_x >= 0) {

                car1_x = car1_x - 10;
                console.log("When left arrow is pressed, x=" + car1_x + " y = " + car1_y);
                uploadBackground();
                uploadcar1();
                uploadcar2();
            }
        }
    }
if(car1_x>700)
{
    console.log("Car1 Won");
    document.getElementById('game_status').innerHTML="Car 1 won!!";
