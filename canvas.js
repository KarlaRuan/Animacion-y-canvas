const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

let rectangle={
	x:0,
	y:0
}

function drawRectangle(){
	ctx.fillRect(rectangle.x,rectangle.y,100,100)
}
function clean(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
}
document.addEventListener('keydown',function(ev){
	if(ev.keyCode==38) //Tecla hacia arriba
		rectangle.y-=5;
	if(ev.keyCode==40) //Tecla hacia abajo
		rectangle.y+=5;
	if(ev.keyCode==37) //Tecla hacia la izquiera
		rectangle.x-=5;
	if(ev.keyCode==39) //Tecla hacia la derecha
		rectangle.x+=5;

	//clean();
	//drawRectangle();
})
function loop(){
	clean();
	drawRectangle();
	requestAnimationFrame(loop);
}
requestAnimationFrame(loop);