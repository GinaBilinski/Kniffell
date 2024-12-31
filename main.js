var resetButton = document.getElementById("button");
resetButton.addEventListener("click", function() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    var nameInputs = document.getElementsByClassName("name");
    for (var i = 0; i < nameInputs.length; i++) {
        nameInputs[i].value = "";
    }
});


let inputFieldsEins = document.querySelectorAll(".obereZahlenEins");
let inputFieldsZwei = document.querySelectorAll(".obereZahlenZwei");
let gesamtObenEins = document.getElementById("gesamtObenEins");
let gesamtObenZwei = document.getElementById("gesamtObenZwei");
let bonusEins = document.getElementById("bonusEins");
let ergebnisObenEins = document.getElementById("ergebnisObenEins");
let ergebnisObenZwei = document.getElementById("ergebnisObenZwei");

// Event listener for input fields
inputFieldsEins.forEach(input => {
    input.addEventListener("input", calculateSum);
});
inputFieldsZwei.forEach(input => {
    input.addEventListener("input", calculateSum);
});

// Function to calculate sum and update gesamtObenEins
function calculateSum() {
    let sumEins = 0;
    let sumZwei = 0;
    let filledEins = 0;
    let filledZwei = 0;
    //count filled fields
    inputFieldsEins.forEach(input => {
        if(input.value !== "") {
            filledEins++;
        }
    });
    inputFieldsZwei.forEach(input => {
        if(input.value !== "") {
            filledZwei++;
        }
    });
    //calculate sum
    inputFieldsEins.forEach(input => {
        sumEins += parseInt(input.value);
    });
    inputFieldsZwei.forEach(input => {
        sumZwei += parseInt(input.value);
    });
    //if all fields are filled, update gesamtObenEins and bonusEins, ergebnisObenEins
    if(filledEins === inputFieldsEins.length) {
        gesamtObenEins.innerHTML = sumEins;
        if(sumEins >= 63) {
            bonusEins.innerHTML = 35;
            ergebnisObenEins.innerHTML = sumEins + 35;
        } else {
            bonusEins.innerHTML = 0;
            ergebnisObenEins.innerHTML = sumEins;
        }
    }
    if(filledZwei === inputFieldsZwei.length) {
        gesamtObenZwei.innerHTML = sumZwei;
        if(sumZwei >= 63) {
            bonusZwei.innerHTML = 35;
            ergebnisObenZwei.innerHTML = sumZwei + 35;
        } else {
            bonusZwei.innerHTML = 0;
            ergebnisObenZwei.innerHTML = sumZwei;
        }
    }
}



// Get all cells with class "untereZahlenEins" and "untereZahlenZwei"
let untereZahlenEins = document.querySelectorAll(".untereZahlenEins");
let untereZahlenZwei = document.querySelectorAll(".untereZahlenZwei");

// Get the cells where the results should be displayed
let ergebnisUntenEins = document.getElementById("ergebnisUntenEins");
let ergebnisUntenZwei = document.getElementById("ergebnisUntenZwei");

// Add event listeners for input fields
untereZahlenEins.forEach(cell => {
    cell.addEventListener("input", calculateSumUnten);
});
untereZahlenZwei.forEach(cell => {
    cell.addEventListener("input", calculateSumUnten);
});

// Function to calculate sum and update the result cells
function calculateSumUnten() {
    let sumEins = 0;
    let sumZwei = 0;
    let filledEins = 0;
    let filledZwei = 0;
    //count filled fields
    untereZahlenEins.forEach(cell => {
        if(cell.value !== "") {
            filledEins++;
        }
    });
    untereZahlenZwei.forEach(cell => {
        if(cell.value !== "") {
            filledZwei++;
        }
    });
    //calculate sum
    untereZahlenEins.forEach(cell => {
        sumEins += parseInt(cell.value);
    });
    untereZahlenZwei.forEach(cell => {
        sumZwei += parseInt(cell.value);
    });
    //if all fields are filled, update ergebnisUntenEins and ergebnisUntenZwei
    if(filledEins === untereZahlenEins.length) {
        ergebnisUntenEins.innerHTML = sumEins;
    }
    if(filledZwei === untereZahlenZwei.length) {
        ergebnisUntenZwei.innerHTML = sumZwei;
    }
}



let x = document.getElementById('ergebnisObenEins').innerHTML;
let y = document.getElementById('ergebnisUntenEins').innerHTML;
let z = document.getElementById('ergebnisEins');


if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
  z.innerHTML = "Fehler: keine Zahl";
} else {
  z.innerHTML = parseFloat(x) + parseFloat(y);
}


document.addEventListener("DOMContentLoaded", function () {
    // Referenzen zu den Feldern
    let ergebnisObenEins = document.getElementById("ergebnisObenEins");
    let ergebnisObenZwei = document.getElementById("ergebnisObenZwei");
    let ergebnisUntenEins = document.getElementById("ergebnisUntenEins");
    let ergebnisUntenZwei = document.getElementById("ergebnisUntenZwei");
    let endsummeEins = document.getElementById("ergebnisEins");
    let endsummeZwei = document.getElementById("ergebnisZwei");

    // Funktion, um die Endsumme zu berechnen
    function calculateEndsumme() {
        let obenEins = parseInt(ergebnisObenEins.innerHTML) || 0;
        let untenEins = parseInt(ergebnisUntenEins.innerHTML) || 0;
        let obenZwei = parseInt(ergebnisObenZwei.innerHTML) || 0;
        let untenZwei = parseInt(ergebnisUntenZwei.innerHTML) || 0;

        endsummeEins.innerHTML = obenEins + untenEins;
        endsummeZwei.innerHTML = obenZwei + untenZwei;
    }

    // Event Listener für Veränderungen in den oberen und unteren Feldern
    [ergebnisObenEins, ergebnisUntenEins].forEach(field => {
        field.addEventListener("DOMSubtreeModified", calculateEndsumme);
    });

    [ergebnisObenZwei, ergebnisUntenZwei].forEach(field => {
        field.addEventListener("DOMSubtreeModified", calculateEndsumme);
    });

    // Automatisches Übertragen von "Gesamt oberer Teil" nach unten
    let ergebnisObenEinsUnten = document.getElementById("ergebnisObenEinsUnten");
    let ergebnisObenZweiUnten = document.getElementById("ergebnisObenZweiUnten");

    function transferObenToUnten() {
        ergebnisObenEinsUnten.innerHTML = ergebnisObenEins.innerHTML || "0";
        ergebnisObenZweiUnten.innerHTML = ergebnisObenZwei.innerHTML || "0";
    }

    // Event Listener für Änderungen im oberen Bereich
    ergebnisObenEins.addEventListener("DOMSubtreeModified", transferObenToUnten);
    ergebnisObenZwei.addEventListener("DOMSubtreeModified", transferObenToUnten);
});


