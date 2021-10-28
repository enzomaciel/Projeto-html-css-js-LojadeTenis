function tratarNome(n){
    let aux = document.getElementById(n).value; 
    aux = aux.trim();
        if(aux == null || aux == ""){
            document.getElementById(n).placeholder = "Não possui nada escrito";
            document.getElementById(n).style.backgroundColor = "red";
        }else{
            document.getElementById(n).style.backgroundColor = "#010326";
            document.getElementById(n).innerHTML = "";

            while(aux.includes("  "))
            {
                aux = aux.replace("  ", " ");
            }
            while(aux.includes("1") || aux.includes("2") || aux.includes("3") || aux.includes("4") || aux.includes("5") || aux.includes("6") || aux.includes("7") || aux.includes("8") || aux.includes("9") || aux.includes("0"))
            {
                aux = aux.replace("1", "");
                aux = aux.replace("2", "");
                aux = aux.replace("3", "");
                aux = aux.replace("4", "");
                aux = aux.replace("5", "");
                aux = aux.replace("6", "");
                aux = aux.replace("7", "");
                aux = aux.replace("8", "");
                aux = aux.replace("9", "");
                aux = aux.replace("0", "");
            }
            while(aux.includes("@") || aux.includes("!")||aux.includes("?") || aux.includes(".") || aux.includes("$") || aux.includes("#") || aux.includes("&") || aux.includes(",") || aux.includes("/"))
            {
                aux = aux.replace("@", "");
                aux = aux.replace("!", "");
                aux = aux.replace("?", "");
                aux = aux.replace(".", "");
                aux = aux.replace("$", "");
                aux = aux.replace("#", "");
                aux = aux.replace("&", "");
                aux = aux.replace(",", "");
                aux = aux.replace("/", "");
            }
                aux2 = aux;
                document.getElementById(n).value = aux2;
            }   
}
function tratarEmail(n){
    let aux = document.getElementById(n).value; 
    if(aux == null || aux == ""){
        document.getElementById(n).placeholder = "Não possui nada escrito";
        document.getElementById(n).style.backgroundColor = "red";
    }else{
        document.getElementById(n).style.backgroundColor = "#010326";
        document.getElementById(n).innerHTML = "";
            aux = aux.trim();
        while(aux.includes(" "))
        {
            aux = aux.replace(" ", "");
        }
        while(aux.includes("!")||aux.includes("?")  || aux.includes("#") || aux.includes(",") || aux.includes("/"))
        {
            aux = aux.replace("!", "");
            aux = aux.replace("?", "");
            aux = aux.replace("#", "");
            aux = aux.replace(",", "");
            aux = aux.replace("/", "");
        }
            aux2 = aux;
        }  
        if(aux.includes("@") && aux.includes(".com")){
            document.getElementById(n).value = aux2;
            document.getElementById("erroEmail").innerHTML = "";
        } else{
            document.getElementById("erroEmail").innerHTML = "Erro email";
            document.getElementById(n).style.backgroundColor = "red"
        }
}
var senha;
function verificarSenha(){
    let aux = document.getElementById("senha").value; 
    aux = aux.trim();
    document.getElementById("senha").value = aux;

    if(aux.length>=6){
        document.getElementById("quant").style.backgroundColor = "green";
    }else{
        document.getElementById("quant").style.backgroundColor = "red";
    }

    //colocando numero

    let num = "0123456789";
    let cont=0; 
    
    for (let i=0; i<num.length; i++){
        if(aux.includes(num.charAt(i))){
            cont++;
        }
    }

    if(cont != 0){
        document.getElementById("num").style.backgroundColor = "green";
    }else{
        document.getElementById("quant").style.backgroundColor = "red";
    }

    //analisando letra
    let aux2 = aux.toLowerCase();
    let letras = "abcdefghijklmnopqstuvxyzw";
    let cont2 =0;

    for (let u=0; u<letras.length; u++){
        if(aux2.includes(letras.charAt(u))){
            cont2++;
        }
    }
    if(cont2 != 0){
        document.getElementById("letra").style.backgroundColor = "green";
    }else{
        document.getElementById("letra").style.backgroundColor = "red";
    }
    //analisando simbolo
let simb = "@#$%&._-!+-/";
let cont3 =0;

for (let j=0; j<simb.length; j++){
    if(aux.includes(simb.charAt(j))){
        cont3++;
    }
}
if(cont3 != 0){
    document.getElementById("symb").style.backgroundColor = "green";
}else{
    document.getElementById("symb").style.backgroundColor = "red";
}
senha = aux; 
}
function confimarSenha(){
    let aux4 = document.getElementById("rsenha").value; 
    if(aux4 == senha){
        document.getElementById("conf").style.backgroundColor = "green";
        document.getElementById("conf").innerHTML = "Senha confirmada";
    }else{
        document.getElementById("conf").style.backgroundColor = "red";
        document.getElementById("conf").innerHTML = "senha errada";
    }

}
function endereco(n){
    let aux = document.getElementById(n).value; 
    aux = aux.trim();
        if(aux == null || aux == ""){
            document.getElementById(n).placeholder = "Não possui nada escrito";
            document.getElementById(n).style.backgroundColor = "red";
        }else{
            document.getElementById(n).style.backgroundColor = "#010326";
            document.getElementById(n).innerHTML = "";
        }
}
function verificarNumero(n){
    let aux = document.getElementById(n).value;
    aux = aux.trim();
    document.getElementById(n).value = aux;

    let aux2 = aux;
    let num = "0123456789"; 

    for (let i = 0; i<num.length; i++){
        while(aux2.includes(num.charAt(i))){
            aux2 = aux2.replace(num.charAt(i), "");
        }
    }
    if(aux2.length==0 && (aux.length==11 || aux.length==10) ){

        let cpfFormat = "("  + aux.substring(0, 2) + ")" + aux.substring(2,7) + "-" + aux.substring(7);
        document.getElementById(n).value = cpfFormat;
    }
}
function registrar(){
    document.getElementById("ienviar").innerHTML = "REGISTRADO COM SUCESSO"
    document.getElementById("ienviar").style.fontSize = "20px";
}
