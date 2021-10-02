canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


greencarWidth=75;
greencarHeight=100;

greencarx= 5;
greencary=225;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	backgroundimg= new Image();
    backgroundimg.onload= uploadBackground;
    backgroundimg.src= background_image;
    
    greencarimg= new Image();
    greencarimg.onload= uploadGreenCar;
    greencarimg.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);


}

function uploadGreenCar() {
	ctx.drawImage(greencarimg, greencarx, greencary, greencarWidth, greencarHeight);


	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
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
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if(greencary>=10){
        greencary=greencary-10;
        uploadBackground();
        uploadGreenCar();
    }
	
}

function down(){
	if(greencary<=500){
        greencary=greencary+10;
        uploadBackground();
        uploadGreenCar();
    }	
}

function left(){
	if(greencarx>=10){
        greencarx=greencarx-10;
        uploadBackground();
        uploadGreenCar();
}
}

function right(){
	if(greencarx<=690){
        greencarx=greencarx+10;
        uploadBackground();
        uploadGreenCar();
    }
}

