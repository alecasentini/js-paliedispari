function controlla(){

let parola = document.getElementById('parola').value;


let parolaDivisa = parola.split('');


let lettereAlContrario =  parolaDivisa.reverse();


let parolaAlContrario = lettereAlContrario.join('');

if (parola == parolaAlContrario){
    document.getElementById("risultato").innerHTML ="la parola è palindroma 😄"
    document.getElementById("contrario").innerHTML =`anche al contrario si legge ${parolaAlContrario} 😎`

}
else {
    document.getElementById("risultato").innerHTML ="la parola NON è palindroma 😕"
    document.getElementById("contrario").innerHTML =`al contrario si legge ${parolaAlContrario} 😨`


}
}
