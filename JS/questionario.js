
var nota = 0;

function questaoUm(n){
    let aux = document.getElementById(n).value;
    console.log(aux);
    if(aux == 20){
        nota = aux + nota; 
        document.getElementById("erro"+n).style.backgroundColor = "green";
    }else{
        nota = 0;
        document.getElementById("erro"+n).style.backgroundColor = "red";
        document.getElementById("erroiA1").style.backgroundColor = "green";
    }
}
function questaoDois(n){
    let aux = document.getElementById(n).value;
    console.log(aux);
    if(aux == 20){
        nota = aux + nota; 
        document.getElementById("erro"+n).style.backgroundColor = "green";
    }else{
        nota = 0; 
        document.getElementById("erro"+n).style.backgroundColor = "red";
        document.getElementById("erroiB2").style.backgroundColor = "green";
    } 
}
function questaoTres(n){
    let aux = document.getElementById(n).value;
    console.log(aux);
    if(aux == 20){
        nota = aux + nota; 
        document.getElementById("erro"+n).style.backgroundColor = "green";
    }else{
        nota = 0; 
        document.getElementById("erro"+n).style.backgroundColor = "red";
        document.getElementById("erroiB3").style.backgroundColor = "green";
    } 
}
function questaoQuatro(n){
    let aux = document.getElementById(n).value;
    console.log(aux);
    if(aux == 20){
        nota = aux + nota; 
        document.getElementById("erro"+n).style.backgroundColor = "green";
    }else{
        nota = 0; 
        document.getElementById("erro"+n).style.backgroundColor = "red";
        document.getElementById("erroiA4").style.backgroundColor = "green";
    }   
}
function questaoCinco(n){
    let aux = document.getElementById(n).value;
    console.log(aux);
    if(aux == 20){
        nota = aux + nota; 
        document.getElementById("erro"+n).style.backgroundColor = "green";
    }else{
        nota = 0; 
        document.getElementById("erro"+n).style.backgroundColor = "red";
        document.getElementById("erroiA5").style.backgroundColor = "green";
    }   
}