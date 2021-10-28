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
function registrar(){
    document.getElementById("ienviar").innerHTML = "RESGISTRADO COM SUCESSO <br> Entraremos em contato."
    document.getElementById("ienviar").style.fontSize = "20px";
}
