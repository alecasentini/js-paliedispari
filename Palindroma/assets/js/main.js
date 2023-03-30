function controlla(){

let parola = document.getElementById('parola').value;


let parolaDivisa = parola.split('');


let lettereAlContrario =  parolaDivisa.reverse();


let parolaAlContrario = lettereAlContrario.join('');
console.log(parolaAlContrario)

if (parola == parolaAlContrario){
    document.getElementById("risultato").innerHTML ="la parola è palindroma"
    console.log ("la parola è palindroma")
}
else {
    document.getElementById("risultato").innerHTML ="la parola NON è palindroma"
    console.log ("la parola NON è palindroma")
}
}
