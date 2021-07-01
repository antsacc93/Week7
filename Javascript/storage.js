function save() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    try {
        storage.setItem(key, value);
    } catch (e) {
        alert("Impossibile salvare i dati richiesti");
    }
}


function getStorage() {
    //let storageName = "";
    //if (document.getElementById("local").checked == true) {
    //    storageName = "localStorage";
    //} else {
    //    storageName = "sessionStorage";
    //}
    let storageName = (document.getElementById("local").checked) ? "localStorage" : "sessionStorage";
    try {
        //if (storageName in window && window[storageName]) {
        //    return window[storageName];
        //} else {
        //    return null;
        //}
        return (storageName in window && window[storageName] != null) ? window[storageName] : null;
    } catch (e) {
        return null;
    }
}

function deleteAll() {
    let storage = getStorage();
    try {
        storage.clear();
    } catch (e) {
        alert("Impossibile cancellare le informazioni");
    }
}

function readAll() {
    let storage = getStorage();
    let elements = "";
    for (let i = 0; i < storage.length; i++) {
        let key = storage.key(i);
        let value = storage.getItem(key);
        let item = "chiave: " + key + " valore: " + value + " \n";
        elements += item;
    }
    alert(elements);
}

//cancellazione di un elemento data la chiave
function remove() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    storage.removeItem(key);
    document.getElementById("result").innerHTML = "Eliminato item con chiave " + key;
}

function notRefresh() {
    return false;
}

function getItem() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value = storage.getItem(key);
    document.getElementById("result").innerHTML = "Il valore con chiave " + key
        + " vale " + value;
}