let ultimoAno = "ano_2014"
let ultimaCamada = "camada1"
let corAtiva = "#06d39a";
let corInativa = "#8d9292";

function mudarAno(ano, camada){
    if (ultimoAno != ano){
        document.getElementById(ultimaCamada).style.visibility="hidden";
        document.getElementById(camada).style.visibility="visible";
        document.getElementById(ultimoAno).style.backgroundColor = corInativa;
        document.getElementById(ano).style.backgroundColor = corAtiva;
        ultimoAno = ano;
        ultimaCamada = camada;
    }
}