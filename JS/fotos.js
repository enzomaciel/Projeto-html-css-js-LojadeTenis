var lista = [];
lista.push("../imagens/Produtos/Tenis Actvitta Esportivo/Tenis Actvitta Esportivo.jpg");
lista.push("../imagens/Produtos/Tenis Adidas Grand Court/Tenis Adidas Grand Court.jpg");
lista.push("../imagens/Produtos/Tenis Air Max 97/Tenis Air Max 97.jpg");
lista.push("../imagens/Produtos/Tenis bufallo domidona/Tenis bufallo domidona.jpg");
lista.push("../imagens/Produtos/Tenis de Malha Respirável/Tenis de Malha Respirável.jpg");
lista.push("../imagens/Produtos/Tenis Esportivo Moderno/Tenis Esportivo Moderno.jpg");
lista.push("../imagens/Produtos/tenis Fake Lace/tenis Fake Lace.png");
lista.push("../imagens/Produtos/tenis feminino chunky lettering/tenis feminino chunky lettering.jpg");
lista.push("../imagens/Produtos/Tenis Feminino Chunky Via Marte/Tenis Feminino Chunky Via Marte.jpg");
lista.push("../imagens/Produtos/tenis feminino Milano Pink/tenis feminino Milano Pink.jpg");
lista.push("../imagens/Produtos/Tenis Kanadia Tr7/Tenis Kanadia Tr7.jpg");
lista.push("../imagens/Produtos/Tenis Masculino Andrade Casual/Tenis Masculino Andrade Casual.jpg");
lista.push("../imagens/Produtos/Tenis quebec Madri Cinza/Tenis quebec Madri Cinza.jpg");
lista.push("../imagens/Produtos/Tenis saturn labellamafia/Tenis saturn labellamafia.jpg");
lista.push("../imagens/Produtos/Tênis Streetwear Colorido Chunky - Cano Alto/Tênis Streetwear Colorido Chunky - Cano Alto/Tênis Streetwear Colorido Chunky - Cano Alto/Tênis Streetwear Colorido Chunky - Cano Alto.jpg");
lista.push("../imagens/Produtos/Yeezy 450 white/Yeezy 450 white.jpg");
var p = [];
p.push("Tenis Actvitta Esportivo");
p.push("Tenis Adidas Grand Court");
p.push("Tenis Air Max 97");
p.push("Tenis bufallo domidona");
p.push("Tenis de Malha Respirável");
p.push("Tenis Esportivo Moderno");
p.push("tenis Fake Lace");
p.push("Tenis Air Max 97");
p.push("Tenis feminino chunky lettering");
p.push("Tenis Feminino Chunky Via Marte");
p.push("Tenis feminino Milano Pink");
p.push("Tenis Kanadia Tr7");
p.push("Tenis Air Max 97");
p.push("Tenis Masculino Andrade Casual");
p.push("Tenis quebec Madri Cinza");
p.push("Tenis saturn labellamafia");
p.push("Tênis Streetwear Colorido Chunky");
p.push("Tenis Yeezy 450 white");
var i = 0;
function anterior(){
    if(i<=0){
        i = lista.length-1;
    }else{
        i--; 
    }
    document.getElementById("img").src = lista[i];
    document.getElementById("titulo").innerHTML = p[i];
}
function proximo(){
    if(i == lista.length-1){
        i = 0;
    }else{
        i++;
    }
    document.getElementById("img").src = lista[i];
    document.getElementById("titulo").innerHTML = p[i];
    ;
}