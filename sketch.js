function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 800 );
    frameRate( 5 );
    background( 'rgb(45, 60, 60)' );

}
let x_pos = 0;


function draw() {
    noFill();
    stroke( 255 );
// blinking circles
    let circle_size = random( 20, width-30 );
    ellipse( width/3, height/2, circle_size );
    ellipse( width/1, height/4, circle_size);
    ellipse( width/1, height/2, circle_size);
    ellipse( width/5, height/2, circle_size);

        eSize = 25;
        x1 = mouseX;
        y1 = height * 0.8;
        x2 = sqrt(x1);
        y2 = height * 0.2;
// mouse-following circles
        line(0, y1, width, y1);
        ellipse(x1, y1, eSize, eSize);

        line(0, y2, width, y2);
        ellipse(x2, y2, eSize, eSize);

        let y_pos = height - ((x_pos / width) ** 2) * height;
// moving yellow circle
        noStroke();
        console.log( x_pos );
        console.log( y_pos );

        noStroke();
        fill( 'yellow' );
        ellipse( x_pos, y_pos, 60 );

        x_pos =+ 100;
        x_pos %= width;

var x1 = map(mouseX, 0, width, 0, 100, true);
ellipse(x2, 75, 25, 25);
}
