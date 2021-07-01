function calcolaPrezzo() {
    let items = document.querySelectorAll("input.choice");
    let plate = document.querySelectorAll("td.price")
    let total = 0.0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked == true) {
            total += parseInt(plate[i].innerHTML);
        }
    }
    let element = document.getElementById("conto");
    element.innerHTML += "\n Il menù scelto costa " + total + " euro";
}

function prenota() {
    let items = document.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        if (items[0].innerText == "") {
            return alert("Inserire tutti i campi!");
        }
    }
    alert("Prenotazione effettuata con successo!");
}