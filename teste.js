// let x = 100;
// let y = 100;

// function setup() {
//     createCanvas(800, 800);
// }

// function draw() {
//     background(100);
//     rect(x, y, 100, 100);
//     text(key, 33, 65);
//     describe(' ');

//     var c = color(255);
//     fill(c);

//     if (keyIsDown(LEFT_ARROW)) {
//         x = x - 10;
//     }
//     else if (keyIsDown(RIGHT_ARROW)) {
//         x = x + 10;
//     }

//     if (keyIsDown(UP_ARROW)) {
//         y = y - 10;
//     }
//     else if (keyIsDown(DOWN_ARROW)) {
//         y = y + 10;
//     }
//     if (key === ' ') {
//         var controle = 0;
//         while (controle < 1) {
//             var c = color(random(255), random(100), random(50));
//             controle += 1;
//         }
//         fill(c);
//     }
// }



var bordaX = 800;
var bordaY = 800;


let x = 500;
let y = 500;

let Xsus = 500;
let Ysus = 500;

var aresta = 50;
function setup() {
    createCanvas(bordaX, bordaY);
    // Square = new Square(100, 100, 50, color(255, 0, 0));
}


function draw() {
    background(100);
    colideBordas()
    moveFleurins()
    checkColisao()
    moveSUS()

    text('"', 724, 780);
    text('"', 795, 780);
    text(key, 730, 780);
    fill(255, 0, 0);
    rect(Xsus, Ysus, 50, 50);
    fill(800);
    
    
    rect(x, y, aresta, aresta);

    function colideBordas() {
        if (x < 0) {
            x = x + 10;
        }
        if (x > (bordaX - aresta)) {
            x = x - 10;
        }
        if (y < 0) {
            y = y + 10;
        }
        if (y > (bordaY - aresta)) {
            y = y - 10;
        }
    }

    function moveFleurins() {
        if (keyIsDown(LEFT_ARROW)) {
            // x = x - (x*0.02);
            x = x - 5;
        }
        else if (keyIsDown(RIGHT_ARROW)) {
            // x = x + (x*0.02);
            x = x + 5;
        }

        if (keyIsDown(UP_ARROW)) {
            // y = y - (x*0.02);
            y = y - 5;
        }
        else if (keyIsDown(DOWN_ARROW)) {
            // y = y + (x*0.02);
            y = y + 5;
        }
    }

    function moveSUS() {
        if (keyIsDown(65)) {
            // x = x - (x*0.02);
            Xsus = Xsus - 5;
        }
        else if (keyIsDown(68)) {
            // Xsus = Xsus + (Xsus*0.02);
            Xsus = Xsus + 5;
        }

        if (keyIsDown(87)) {
            // Y = Y - (x*0.02);
            Ysus = Ysus - 5;
        }
        else if (keyIsDown(83)) {
            // Ysus = Ysus + (x*0.02);
            Ysus = Ysus + 5;
        }
    }

    function checkColisao() {
        if (x > Xsus - aresta && x < Xsus + aresta) {
            fill(random(255), random(255), random(255));
            text("aaaaaaaaaaa", 500, 500);
        }
        if (y > Ysus - aresta && y < Ysus + aresta) {
            fill(random(255), random(255), random(255));
            text("aaaaaaaaaaa", 500, 500);
        }

    }






}