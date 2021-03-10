console.log("hello");

var generaBtn = document.getElementById("genera");
var annullaBtn = document.getElementById("annulla");
var prezzoCorrente = 0.21;
var prezzoTotale = 0;

generaBtn.addEventListener('click', function() {

    var name = document.getElementById("name").value;
    var distanza = document.getElementById("distanza").value;
    var età = document.getElementById("età").value;
    console.log(name, distanza, età);

    if(name !== "" && distanza > 0 && età !== "") {
        // console.log("ok");
        prezzoTotale = prezzoCorrente * distanza;
        console.log(prezzoTotale);
        
        //Blocco else-if per applicazione di sconto

        if (età === 1) {
            // console.log("minorenne", età);
            var sconto = prezzoTotale * 0.2;
            prezzoTotale -= sconto;
            
        } else if (età === 3) {
            console.log("over65", età);
            var sconto = prezzoTotale * 0.4;
            prezzoTotale -= sconto;
        }
    }

    //fine blocco else-if per applicazione sconto

    document.getElementById("costo-totale").innerHTML = prezzoTotale;

    var randomCp = Math.round(Math.random() * (100000 - 90000)+ 90000);
    document.getElementById("cp").innerHTML = randomCp;

});

annullaBtn.addEventListener('click', function() {
    console.log("Ho cliccato annulla!")
});

