document.getElementById("click").addEventListener("mouseover", mouseOver);
document.getElementById("click").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("click").style.color = "blue";
}

function mouseOut() {
    document.getElementById("click").style.color = "black";
}