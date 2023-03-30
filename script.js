let lastTheme = "#fff";
let white = "#fff";
let black = "#262626";
let i = 0;

function mudarTema(){
    switch(lastTheme){
        case "#fff":
            document.querySelector("body").style.cssText="background-color: #262626; color: #fff";
            document.getElementById("redondoCima").style.backgroundColor="#262626";
            document.getElementById("redondoBaixo").style.backgroundColor="#262626";
            document.getElementById("cabecalho").style.backgroundColor="#00000000";
            for (i=0; i<=3; i++){
                document.getElementsByClassName("linksHeader")[i].style.cssText="color: #fff";
            }
            for (i=0; i<=4; i++){
                document.getElementsByClassName("icones")
            }
            lastTheme = "#262626"
            break
        
        case "#262626":
            document.querySelector("body").style.cssText="background-color: #fff; color: #000";
            document.getElementById("redondoCima").style.backgroundColor="#fff";
            document.getElementById("redondoBaixo").style.backgroundColor="#fff";
            document.getElementById("cabecalho").style.backgroundColor="#e5e5e5"
            for (i=0; i<=3; i++){
                document.getElementsByClassName("linksHeader")[i].style.cssText="color: #000";
            }
            lastTheme = "#fff"
            break
    }
}