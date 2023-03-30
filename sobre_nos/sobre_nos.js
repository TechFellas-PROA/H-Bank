let ultimoAno = "ano_2014";
let ultimaCamada = "camada1";
let corAtiva = "#06d39a";
let corInativa = "#8d9292";
let lastTheme = "#fff";
let white = "#fff";
let black = "#262626";
let i = 0;

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

function mudarTema(){
    switch(lastTheme){
        case "#fff":
            document.querySelector("body").style.cssText="background-color: #262626; color: #fff";
            document.querySelector(".trajetoria").style.cssText="background-color: #262626; color:#fff";
            for (i=0; i<=3; i++){
                document.getElementsByClassName("linha")[i].style.cssText="border-color: #fff";
            }
            document.querySelector(".plus").style.backgroundColor="#262626";
            document.querySelector("#footerSuperior").style.backgroundColor="#262626";
            lastTheme = "#262626";
            break;

        case "#262626":
            console.log("teste")
            document.querySelector("body").style.cssText="background-color: #fff; color: #000";
            document.querySelector(".trajetoria").style.cssText="background-color: #fff; color:#000";
            for (i=0; i<=3; i++){
                document.getElementsByClassName("linha")[i].style.cssText="border-color: #000";
            }
            document.querySelector(".plus").style.backgroundColor="#fff";
            document.querySelector("#footerSuperior").style.backgroundColor="#ececec";
            lastTheme = "#fff";
            break;
    }
}