var tabuleiro = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var jogadores = ["X", "O"];
var jogadorAtual = jogadores[0];
var contador = 1;


function atualizaTabuleiro () {
    for(var i = 1; i<=tabuleiro.length; i++){
        $(".container div:nth-child(" + i + ")").html(tabuleiro[i-1]); 
    }
    contador++
    console.log(contador);
}
function computadorJoga(){
    for(var i = 0; i <= tabuleiro.length; i++){
        var aleatoria = Math.floor(Math.random()*2);
        if(tabuleiro[i] == " " && aleatoria == 1){
            tabuleiro[i] = jogadores[0];
             
            atualizaTabuleiro();
        
            if(verificaGanhador()){
                contador = 1;
                computadorJoga();
            }
            return;
        }
    }

    for(var i = 0; i< tabuleiro.length; i++){
        if(tabuleiro[i] == " "){
            tabuleiro[i] = jogadores[0];
            atualizaTabuleiro();

            if(verificaGanhador()){
                contador = 1;
                computadorJoga();
            }

            break;
        }
    }
}

function verificaGanhador(){

    var ganhou = vencedor();

    function verificaTabuleiro(a,b){
        if(a != " " && b != " "){
            return true;
        }
        return false;
    };

    const tabuleiroCheio = tabuleiro.reduce(verificaTabuleiro);


    if(tabuleiroCheio && ganhou == null){
        document.getElementById("velha").style.display = "block";
        tabuleiro = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        atualizaTabuleiro();
        contador =1;
        return computadorJoga();
    
    }

   
    if(ganhou) {

        document.getElementById("frase").innerHTML = (ganhou + " " + "ganhou!");
        document.getElementById("ganhou").style.display = "block";
        tabuleiro = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        atualizaTabuleiro();
        return true;
    } else {
        return false;
    }
}


function clicou(posicao){

    if(tabuleiro[posicao] != " " ){
        return;
    }
      
    if(contador % 2 != 0){
        return;
    }
    tabuleiro[posicao]= jogadores[1];
    atualizaTabuleiro();
    if(verificaGanhador()) {
        contador =1;
        computadorJoga();

    } else {
        setTimeout(computadorJoga, Math.floor(Math.random()* 1500));
    }
}    
computadorJoga();

function vencedor(){
    if(tabuleiro[0] == "X" && tabuleiro[3] == "X" && tabuleiro[6] == "X"){
        return "Computador";
    }
    if(tabuleiro[0] == "O" && tabuleiro[3] == "O" && tabuleiro[6] == "O"){
        return ("Você");
    }
    if(tabuleiro[1] == "X" && tabuleiro[4] == "X" && tabuleiro[7] == "X"){
        return ("Computador");
    }
    if(tabuleiro[1] == "O" && tabuleiro[4] == "O" && tabuleiro[7] == "O"){
        return ("Você");
    }
    if(tabuleiro[2] == "X" && tabuleiro[5] == "X" && tabuleiro[8] == "X"){
        return ("Computador");
    }
    if(tabuleiro[2] == "O" && tabuleiro[5] == "O" && tabuleiro[8] == "O"){
        return ("Você");
    }
    if(tabuleiro[0] == "X" && tabuleiro[1] == "X" && tabuleiro[2] == "X"){
        return ("Computador");
    }
    if(tabuleiro[0] == "O" && tabuleiro[1] == "O" && tabuleiro[2] == "O"){
        return ("Você");
    }
    if(tabuleiro[3] == "X" && tabuleiro[4] == "X" && tabuleiro[5] == "X"){
        return ("Computador");
    }
    if(tabuleiro[3] == "O" && tabuleiro[4] == "O" && tabuleiro[5] == "O"){
        return ("Você");
    }
    if(tabuleiro[6] == "X" && tabuleiro[7] == "X" && tabuleiro[8] == "X"){
        return ("Computador");
    }
    if(tabuleiro[6] == "O" && tabuleiro[7] == "O" && tabuleiro[8] == "O"){
        return ("Você");
    }
    if(tabuleiro[0] == "X" && tabuleiro[4] == "X" && tabuleiro[8] == "X"){
        return ("Computador");
    }
    if(tabuleiro[0] == "O" && tabuleiro[4] == "O" && tabuleiro[8] == "O"){
        return ("Você");
    }
    if(tabuleiro[2] == "X" && tabuleiro[4] == "X" && tabuleiro[6] == "X"){
        return ("Computador");
    }
    if(tabuleiro[2] == "O" && tabuleiro[4] == "O" && tabuleiro[6] == "O"){
        return ("Você");
    }
    return null;
}
