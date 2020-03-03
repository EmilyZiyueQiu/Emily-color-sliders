
let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;


function setup() {
	createCanvas(windowWidth, windowHeight);
	slider1=createSlider(0,255);	
	slider2=createSlider(0,255);
	slider3=createSlider(0,255);
	slider4=createSlider(0,windowWidth);
	slider5=createSlider(0,windowHeight);
	slider6=createSlider(100,500);	
}

function draw() {	
	background(slider1.value(),slider2.value(),slider3.value());
	fill(slider3.value(),slider2.value(),slider1.value());
	noStroke();
	ellipse(slider4.value(),slider5.value(),slider6.value());

}


