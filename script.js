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
    const title = document.createTextNode("Blog");
    header.appendChild(title);

    document.getElementById("education").appendChild(header);

    const blogBio = document.createElement("a");
    const text = document.createTextNode("Through The Ages");
    blogBio.setAttribute("href", "https://jalenpeeler.medium.com/through-the-ages-7d48c89f60b2");
    blogBio.appendChild(text);
    document.body.appendChild(blogBio);

    //document.getElementById("education").appendChild(para);
}