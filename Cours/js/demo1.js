let alreadyClicked = false;
let domComplet = document.documentElement.innerHTML; // Sauvegarde du DOM complet
function onclickBtn() {
    if (alreadyClicked) {
        document.documentElement.innerHTML = domComplet;
    }
    else {
        centerElements("h1");
        souligneElements("h1");
        souligneElements("h2");
        alternateDivsColor();
        alternateRowTable();
        addNumbers();
        numberedParagraphs();
        setColorToElements("p", "red");
        colorP();
        setBackGroundColorByTag("body", "yellow");
        setBackGroundColorById("container", "lightgrey");
        resetBtn();
        showSecretDiv();
    }
    alreadyClicked = !alreadyClicked;
}

function showSecretDiv() {
    let secretDiv = document.getElementById("secretDiv");
    secretDiv.style.display = "block";
}

function resetBtn() {
    let btn = document.getElementById("btngo");
    btn.innerHTML = "Reset";
}

function setBackGroundColorByTag(tagName, color) {
    let elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
}

function setBackGroundColorById(id, color) {
    let element = document.getElementById(id);
    element.style.backgroundColor = color;
}

function alternateRowTable() {
    let table = document.getElementsByTagName("table")[0];
    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        if (i % 2 == 0) {
            rows[i].style.backgroundColor = "red";
        } else {
            rows[i].style.backgroundColor = "darkgreen";
        }
    }
}

function numberedParagraphs() {
    let pElements = document.getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].innerHTML = i + 1 + ". " + pElements[i].innerHTML;
    }
}

function addNumbers() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let resultat = parseInt(number1) + parseInt(number2);
    if (isNaN(resultat)) {
        resultat = "Erreur dans les valeurs saisies";
    }
    document.getElementById("resultat").innerHTML = resultat;
}

function colorP() {
    let element = document.getElementById("divP");
    let pElements = element.getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].style.color = "blue";
    }
}

function alternateDivsColor() {
    let divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].id != "container") {
            if (i % 2 == 0) {
                divs[i].style.backgroundColor = "lightblue";
            } else {
                divs[i].style.backgroundColor = "lightgreen";
            }
        }
    }
}

function setColorToElements(tagName, color) {
    let elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
    }
}

function centerElements(tagName) {
    let elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.textAlign = "center";
    }
}

function souligneElements(tagName) {
    let elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.textDecoration = "underline";
    }
}