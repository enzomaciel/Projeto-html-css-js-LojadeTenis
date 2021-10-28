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
            document.getElementById("erroiEmail").innerHTML = "";
        } else{
            document.getElementById("erroiEmail").innerHTML = "Erro email";
            document.getElementById(n).style.backgroundColor = "red"
        }
}
function verificarCpf(){
    let aux = document.getElementById("iCpf").value;
    aux = aux.trim();
    document.getElementById("iCpf").value = aux;

    let aux2 = aux;
    let num = "0123456789"; 
    let letras = "abcdefghijklmnopqstuvxyz";

    for (let i = 0; i<num.length; i++){
        while(aux2.includes(num.charAt(i))){
            aux2 = aux2.replace(num.charAt(i), "");
        }
    }

    if(aux2.length==0 && aux.length==11){

        let cpfFormat = aux.substring(0, 3) + "." + aux.substring(3,6) + "." + aux.substring(6,9) + "-" + aux.substring(9);
        document.getElementById("iCpf").value = cpfFormat;
    }else{
        
    }
}
function verificarCpf2(){
    let aux = document.getElementById("iCpf").value;
    aux = aux.trim();
    document.getElementById("iCpf").value = aux;

    let aux2 = aux;
    let num = "0123456789"; 
    let letras = "abcdefghijklmnopqstuvxyz";

    for (let i = 0; i<num.length; i++){
        while(aux2.includes(num.charAt(i))){
            aux2 = aux2.replace(num.charAt(i), "");
        }
    }

    if(aux.length==14 && aux2.length==3){
        document.getElementById("erroiCpf2").innerHTML = "";
        document.getElementById("iCpf").style.backgroundColor = "#010326";
    }else{
        document.getElementById("erroiCpf2").innerHTML = "Erro no Cpf";
        document.getElementById("iCpf").style.backgroundColor = "red";
    }
}
function verificarRg(){
    let aux = document.getElementById("iRg").value;
    aux = aux.trim();
    document.getElementById("iRg").value = aux;

    let aux2 = aux;
    let num = "0123456789"; 

    for (let i = 0; i<num.length; i++){
        while(aux2.includes(num.charAt(i))){
            aux2 = aux2.replace(num.charAt(i), "");
        }
    }

    if(aux2.length==0 && aux.length==9){

        let rgFormat = aux.substring(0, 2) + "." + aux.substring(2,5) + "." + aux.substring(5,8) + "-" + aux.substring(8 , 8);
        document.getElementById("iRg").value = rgFormat;
    }else{
        
    }
}
function verificarRg2(){
    let aux = document.getElementById("iRg").value;
    aux = aux.trim();
    document.getElementById("iRg").value = aux;

    let aux2 = aux;
    let num = "0123456789"; 

    for (let i = 0; i<num.length; i++){
        while(aux2.includes(num.charAt(i))){
            aux2 = aux2.replace(num.charAt(i), "");
        }
    }
    


    if(aux.length==12 && aux2.length==3){
        document.getElementById("erroiRg2").innerHTML = "";
        document.getElementById("iRg").style.backgroundColor = "#010326";
    }else{
        document.getElementById("erroiRg2").innerHTML = "Erro no Rg";
        document.getElementById("iRg").style.backgroundColor = "red";
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
function verificarNumero2(n){
    let aux = document.getElementById(n).value;
    aux = aux.trim();
    document.getElementById(n).value = aux;

    let aux2 = aux;
    let num = "0123456789"; 
    let letras = "abcdefghijklmnopqstuvxyz";

    for (let i = 0; i<num.length; i++){
        while(aux2.includes(num.charAt(i))){
            aux2 = aux2.replace(num.charAt(i), "");
        }
    }

    if(aux.length==14 && aux2.length==3){
        document.getElementById("erro" + n).innerHTML = "";
        document.getElementById(n).style.backgroundColor = "#010326";
    }else{
        document.getElementById("erro" + n).innerHTML = "Erro nos Numeros";
        document.getElementById(n).style.backgroundColor = "red";
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
function registrar(){
    document.getElementById("ienviar").innerHTML = "ENVIADO COM SUCESSO"
    document.getElementById("ienviar").style.fontSize = "20px";
}