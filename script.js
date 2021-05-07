let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let body = document.body.children;
console.log(body);
//canvas setup
let midX = canvas.width / 2;
context.font = '20px sans-serif';
context.textAlign = "center";
let nodesLevelHeight = 80;
let linesLevelHeight = 150;
let radius = 40;

function drawRoot() {
    context.arc(midX, nodesLevelHeight, radius, 0, Math.PI * 2);
    context.stroke();
    context.fillText("body", midX, nodesLevelHeight, 50);
}
function drawLineRight() {
    context.moveTo(midX, radius * 3);
    context.lineTo(midX - radius * 2, radius * 2 + linesLevelHeight);
    context.stroke();

}

function drawLineLeft() {
    context.moveTo(midX, radius * 3);
    context.lineTo(midX + radius * 2, radius * 2 + linesLevelHeight);
    context.stroke();
}

function drawTree() {
    drawRoot();
    let a = [];
    drawLineRight()
    drawLineLeft()
}
drawTree();