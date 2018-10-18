
function setup() {
  createCanvas( windowWidth, 600 );
}

function draw() {
  background( 'pink');
  strokeWeight( 6 );

for (var x = 0; x <= mouseX; x += 40){
  for(var y = 10; y<= mouseY; y += 20){
  fill( random(255), 0, random(255));
  ellipse (x + y, y, 8-y/6, 8-y/6);
  }
}

fill('purple');
ellipse(200, mouseX, 60);
fill(200);
ellipse(40, mouseY, 60);
fill('blue');
ellipse(400, mouseX, 60);
fill('pink');
ellipse(600, mouseY, 60);
fill('yellow');
ellipse(mouseX, mouseY, 50, 50);
fill(0);
ellipse(900, mouseX, 60);
ellipse(mouseX, mouseY, 20, 20);
}
