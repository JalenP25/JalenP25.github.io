document.getElementById("click").addEventListener("mouseover", mouseOver);
document.getElementById("click").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("click").style.color = "blue";
}

function mouseOut() {
    document.getElementById("click").style.color = "black";
}

function wantMore() {

    alert("Scroll down and click where it says 'Through The Ages' to be redirected to my personal blog on medium.");

    const bio = document.createElement("footer");
    bio.setAttribute("id", "education");
    document.body.appendChild(bio);

    const header = document.createElement("h3");
    const title = document.createTextNode("Blog");
    header.appendChild(title);

    document.getElementById("education").appendChild(header);

    const para = document.createElement("p");
    const info = document.createTextNode("By clicking on the site link below called 'Through The Ages' you will be directed to my blog page on medium. I hope you enjoy the read!");
    para.appendChild(info);

    document.getElementById("education").appendChild(para);

    const blogBio = document.createElement("a");
    const text = document.createTextNode("Through The Ages");
    blogBio.setAttribute("href", "https://jalenpeeler.medium.com/through-the-ages-7d48c89f60b2");
    blogBio.appendChild(text);
    document.body.appendChild(blogBio);

    //document.getElementById("education").appendChild(para);
}

function alertFunction() {
    alert("You are being redirected! Thank You ! 🙏🏽");
}