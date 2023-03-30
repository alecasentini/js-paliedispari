function gioca(){
    numberPlayer = parseInt (document.getElementById ("number-player").value);

    let sceltaPari = document.getElementById ("pari").checked;
    let sceltaDispari = document.getElementById ("dispari").checked;

    numberCpu = Math.floor((Math.random() * 5) + 1);

    let somma = numberPlayer + numberCpu;

    let risultatoPari = somma % 2 == 0;

    if ((risultatoPari && sceltaPari) || (!risultatoPari && sceltaDispari)){
        document.getElementById("final-result").innerHTML =`Hai vinto!`
    }

    else{
        document.getElementById("final-result").innerHTML =`Hai perso!`
    }
    
    document.getElementById("number-cpu").innerHTML = "Numero del computer: " + numberCpu;
    document.getElementById("somma").innerHTML = "Somma: " + somma;
}
