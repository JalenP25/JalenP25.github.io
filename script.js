document.getElementById("click").addEventListener("mouseover", mouseOver);
document.getElementById("click").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("click").style.color = "blue";
}

function mouseOut() {
    document.getElementById("click").style.color = "black";
}

function wantMore() {
    const bio = document.createElement("footer");
    bio.setAttribute("id", "education");
    document.body.appendChild(bio);

    const header = document.createElement("h3");
    const title = document.createTextNode("Education");
    header.appendChild(title);

    document.getElementById("education").appendChild(header);

    const para = document.createElement("p");
    const text = document.createTextNode("I went to UNC Charlotte to study Psychology and computer science.");
    para.appendChild(text);

    document.getElementById("education").appendChild(para);
}