var bordaX = 1650;
var bordaY = 880;

let x =(bordaX / 2)+400;
 
let y = (bordaY / 2);
let Xsus = (bordaX / 2)-400;
let Ysus = (bordaY / 2);

var aresta = 50;

function setup() {
    createCanvas(bordaX, bordaY);
}

function draw() {
    background(100);
    colideBordas()
    moveFleurins()
    checkColisao()
    moveSUS()
    
    //text('"', 724, 780);
    //text(key, 730, 780);
    //text('"', 795, 780);
    
    rect(x, y, aresta, aresta);
    
    rect(Xsus, Ysus, 50, 50);
    function moveFleurins(controle) {
        // var controle = controle;
        // while (controle != 1) {

        if (keyIsDown(LEFT_ARROW)) {
            x = x - 5;
        }
        else if (keyIsDown(RIGHT_ARROW)) {
            x = x + 5;
        }

        if (keyIsDown(UP_ARROW)) {
            y = y - 5;
        }
        else if (keyIsDown(DOWN_ARROW)) {
            y = y + 5;
        }
        // }
    }

    function colideBordas() {
        //FLEURINS
        if (x < 0) {
            x += 10;
        }
        if (x > (bordaX - aresta)) {
            x -= 10;
        }
        if (y < 0) {
            y += 10;
        }
        if (y > (bordaY - aresta)) {
            y -= 10;
        }

        //SUS
        if (Xsus < 0) {
            Xsus += 10;
        }
        if (Xsus > (bordaX - aresta)) {
            Xsus -= 10;
        }
        if (Ysus < 0) {
            Ysus += 10;
        }
        if (Ysus > (bordaY - aresta)) {
            Ysus -= 10;
        }

    }

    function checkColisao() {
        while (x > Xsus - aresta && x < Xsus + aresta && y > Ysus - aresta && y < Ysus + aresta) {
            fill(random(255), random(255), random(255));
            text('COLIDIU!', (bordaX / 2), 120);
            return

        }
    }

    function moveSUS() {
        if (keyIsDown(65)) {
            Xsus -= 5;
        }
        else if (keyIsDown(68)) {
            Xsus += 5;
        }
        if (keyIsDown(87)) {
            Ysus -= 5;
        }
        else if (keyIsDown(83)) {
            Ysus += 5;
        }
    }




}
