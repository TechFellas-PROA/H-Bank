let activeColor = "#06d39a", 
    innactiveColor = "#8d9292";

function ano_2014(){
    document.getElementById("camada1").style.visibility="visible";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden";
    document.getElementById("camada4").style.visibility="hidden";
    document.getElementById("camada5").style.visibility="hidden";
    document.getElementById("ano_2014").style.backgroundColor = activeColor;
    document.getElementById("ano_2016").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2018").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2020").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2023").style.backgroundColor = innactiveColor;
}
function ano_2016(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="visible";
    document.getElementById("camada3").style.visibility="hidden";
    document.getElementById("camada4").style.visibility="hidden";
    document.getElementById("camada5").style.visibility="hidden";
    document.getElementById("ano_2014").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2016").style.backgroundColor = activeColor;
    document.getElementById("ano_2018").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2020").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2023").style.backgroundColor = innactiveColor;
}
function ano_2018(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="visible";
    document.getElementById("camada4").style.visibility="hidden";
    document.getElementById("camada5").style.visibility="hidden";
    document.getElementById("ano_2014").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2016").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2018").style.backgroundColor = activeColor;
    document.getElementById("ano_2020").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2023").style.backgroundColor = innactiveColor;
}
function ano_2020(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden";
    document.getElementById("camada4").style.visibility="visible";
    document.getElementById("camada5").style.visibility="hidden";
    document.getElementById("ano_2014").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2016").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2018").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2020").style.backgroundColor = activeColor;
    document.getElementById("ano_2023").style.backgroundColor = innactiveColor;
}
function ano_2023(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden";
    document.getElementById("camada4").style.visibility="hidden";
    document.getElementById("camada5").style.visibility="visible";
    document.getElementById("ano_2014").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2016").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2018").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2020").style.backgroundColor = innactiveColor;
    document.getElementById("ano_2023").style.backgroundColor = activeColor;
}