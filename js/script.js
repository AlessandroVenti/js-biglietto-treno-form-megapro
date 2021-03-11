console.log("hello");

var generaBtn = document.getElementById("genera");
var annullaBtn = document.getElementById("annulla");
var prezzoCorrente = 0.21;
var prezzoTotale = 0;

generaBtn.addEventListener('click', function() {

    var name = document.getElementById("name").value;
    var distanza = document.getElementById("distanza").value;
    var eta = document.getElementById("età").value;
    var randomCp = Math.round(Math.random() * (100000 - 90000)+ 90000);
    var randomCarriage = Math.round(Math.random() * (20 - 1) + 1);
    console.log(name, distanza, eta);

    document.getElementById("thename").innerHTML = name;

    if(name !== "" && distanza > 0 && eta !== "") {
        // console.log("ok");
        prezzoTotale = prezzoCorrente * distanza;
        console.log(prezzoTotale);
        
        //Blocco else-if per applicazione di sconto

        if (eta == 0) {
            // console.log("minorenne", età);
            var sconto = prezzoTotale * 0.2;
            prezzoTotale -= sconto;
            document.getElementById("offerta").innerHTML = "sconto-minorenne";

            
        } else if (eta == 2) {
            console.log("over65", eta);
            var sconto = prezzoTotale * 0.4;
            prezzoTotale -= sconto;
        }
    }

    //fine blocco else-if per applicazione sconto

    document.getElementById("costo-totale").innerHTML = prezzoTotale.toFixed(2) + "€";

    document.getElementById("cp").innerHTML = randomCp;

    document.getElementById("carriage").innerHTML = randomCarriage;

});

annullaBtn.addEventListener('click', function() {
    console.log("Ho cliccato annulla!")
});

