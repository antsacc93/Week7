// JavaScript source code
function changeImage() {
    let summerImage = document.getElementById("summer");
    //console.log(summerImage);
    let srcImage = summerImage.getAttribute("src");
    if (srcImage == "images/piscina.jpg") {
        summerImage.setAttribute("src", "images/polonord.jpg");
    } else {
        summerImage.setAttribute("src", "images/piscina.jpg");
    }
}

function changeFont() {
    let paragrafi = document.getElementsByTagName("p");
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.fontFamily = "Arial";
        paragrafi[i].innerHTML += "<br /><br />";
    }
}

function changeVisibility() {
    let hiddenTable = document.getElementById("tabellaNascosta");
    hiddenTable.style.visibility = "hidden";
}

function welcomeMessage() {
    alert("Benvenuto!");
}

function changeTextColor() {
    let inputTag = document.getElementsByTagName("input");
    if (inputTag[0].style.color == "") {
        inputTag[0].style.color = "red";
    } else {
        inputTag[0].style.color = "";
    }
}

function changeText() {
    let cellTable = document.querySelectorAll("td");
    for (let i = 0; i < cellTable.length; i++) {
        cellTable[i].innerText += "ni";
    }
}

function changeSingleCell() {
    let cell = document.querySelector("td");
    cell.align = "center";
}

function checkTrueOrFalse() {
    let checkBoxes = document.querySelectorAll("input.selection");
    for (let i = 0; i < checkBoxes.length; i++) {
        console.log(checkBoxes[i].checked);
    }
}
