var canvas = document.getElementById("Myclock");
var ctx = canvas.getContext("2d");
var raio = canvas.height/2;
ctx.translate(raio, raio);
raio = raio * 0.95;

setInterval(Clock, 1000);

function Clock(){
    drawingClock(ctx, raio);
    drawingNumber(ctx, raio);
    drawingTime(ctx, raio);
}

function drawingClock(ctx, raio){
    ctx.beginPath();
    ctx.arc(0, 0, raio, 0, 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    var gradiente = ctx.createRadialGradient(0, 0, raio*0.95, 0, 0, raio*1.05);
    gradiente.addColorStop(0, "#2b2b2b");
    gradiente.addColorStop(0.5, "white");
    gradiente.addColorStop(1, "#2b2b2b");
    ctx.strokeStyle = gradiente;
    ctx.lineWidth = raio * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, raio*0.1, 0, 2*Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();
}

function drawingNumber(){
    var angulo;
    var number;
    ctx.fillStyle = "black";
    ctx.font = raio*0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    
    for (number = 1; number < 13; number++){
        angulo = number*Math.PI/6;
        ctx.rotate(angulo);
        ctx.translate(0, -raio*0.85);
        ctx.rotate(-angulo);
        ctx.fillText(number.toString(), 0,0);   
        ctx.rotate(angulo);    
        ctx.translate(0, raio*0.85);
        ctx.rotate(-angulo);    
    }
}
function drawingTime(ctx, raio){
    var nowDate = new Date();

    //Hour
    var nowHour = nowDate.getHours();
    nowHour = nowHour%12;
    nowHour = (nowHour*Math.PI/6);
    drawingPointer(ctx, nowHour, raio*0.5, raio*0.07);

    //Minutes
    var nowMinutes = nowDate.getMinutes();
    nowMinutes = (nowMinutes*Math.PI/30);
    drawingPointer(ctx, nowMinutes, raio*0.8, raio*0.03);

    //Seconds
    var nowSeconds = nowDate.getSeconds();
    nowSeconds = nowSeconds*Math.PI/30;
    drawingPointer(ctx, nowSeconds, raio*0.9, raio*0.02);

}
function drawingPointer(ctx, position, sizeP, wid){
    ctx.beginPath();
    ctx.lineWidth = wid;
    ctx.moveTo(0, 0);
    ctx.rotate(position);
    ctx.lineTo(0, - sizeP);
    ctx.stroke();
    ctx.rotate(-position);
    
}



