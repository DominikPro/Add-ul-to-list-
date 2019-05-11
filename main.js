let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let linumber = 1;
let moduloLi = "";


btn.addEventListener("click", function () {
    console.log("Function - ok ")
    moduloLi = linumber % 3;
    let creatLi = document.createElement('li');
    creatLi.textContent = linumber;
    ul.appendChild(creatLi);

    if (moduloLi == 0) {
        console.log("if - ok")
        creatLi.classList.add("big");
    }
    linumber++;


});