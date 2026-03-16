
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x += p.vx;
p.y += p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fill();

particles.forEach(p2=>{
const dx=p.x-p2.x;
const dy=p.y-p2.y;
const dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){
ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);
ctx.stroke();
}
});
});

requestAnimationFrame(draw);
}

draw();
