let liczba = 1;
let oczekujeKlikniecia = false;
let id;

document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#obrazek").addEventListener("click", klikniecieDzika);
    document.querySelector("#start").addEventListener("click", reset);
});

function reset(){
    liczba = 1;
    oczekujeKlikniecia = false;
    document.querySelector("#liczba").innerText = liczba;
    document.querySelector("#koniec-gry").innerText = "";
    if(id){
        clearInterval(id);
        id = null;
    }else{
        id = setInterval(tick, 500);
    }
}

function tick(){
    if(!oczekujeKlikniecia){
        document.querySelector("#liczba").innerText = liczba;
        if((liczba % 7 == 0) || (liczba.toString().indexOf("7") > -1)){
            oczekujeKlikniecia = true;
        }
        liczba++;
    }else{
       liczba = 0;
       document.querySelector("#koniec-gry").innerText = "Koniec gry, nie kliknięte we właściwym momencie!";
       clearInterval(id);
       id = null;
    }
}

function klikniecieDzika(){
    if(oczekujeKlikniecia){
        oczekujeKlikniecia = false;
    }else{
        clearInterval(id);
        id = null;
        document.querySelector("#koniec-gry").innerText = "Koniec gry, kliknięte w niewłaściwym momencie!";
    }
}