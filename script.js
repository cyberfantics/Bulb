var h1 = document.querySelector("h1");
function action() {
    var number = document.getElementById("number").value;
    var body = document.getElementsByClassName("bulb")[Number(number) - 1];
    if (number <= 3 || number >= 6) {
        h1.style.color = "white";
        h1.style.marginLeft = '1%';
        h1.style.fontSize = '39px';
        h1.innerText = "Please enter bulb number which you want to turn on/off within the range of 1-5";
    }

    if (body.style.background == "yellow") {
        body.style.background = "azure";
        body.style.boxShadow = "yellow 0px 0px 0px";
        h1.style.color = "gold";
        h1.style.marginLeft = '32%';
        h1.style.fontSize = '40px';
        h1.innerText = "This page is created by";
    }

    else {
        body.style.background = "yellow";
        body.style.boxShadow = "yellow 0px 60px 60px";
        h1.style.color = "red";
        h1.style.fontSize = '40px';
        h1.style.marginLeft = '33.5%';
        h1.innerText = "Mansoor ul Hassan";
    }
}