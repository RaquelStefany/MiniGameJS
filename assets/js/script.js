var areaJogo = document.querySelector("#jogo");
const jogos = ["assets/img/jogos/mario-super.gif", "assets/img/jogos/pokemon.gif", "assets/img/jogos/dragon-ball.gif", "assets/img/jogos/zelda.gif", "assets/img/jogos/pac-man.gif", "assets/img/jogos/doom.webp"];
const nomeJogo = ["Super Mario", "Pokemon", "Dragon Ball", "Zelda", "Pac-Man", "Doom"];
var posicao = jogos.length - 1;

on();

document.addEventListener('keydown', function(e){
    if(e.key == "ArrowRight"){
        right();
    }
    else if(e.key == "ArrowLeft"){
        left();
    }
    else if(e.key == "ArrowUp"){
        up();
    }
    else if(e.key == "ArrowDown"){
        down();
    }
    else if(e.key == "Enter"){
        ok();
    }
    else if(e.key == "Escape"){
        off();
    }
    else if(e.key == "Backspace"){
        on();
    }
}, false);

function right(){
    if(posicao != "off"){
        areaJogo.innerHTML = `<img src="${jogos[posicao]}" alt="Jogos" class="jogos">
                                <span>
                                    ${nomeJogo[posicao]}
                                </span>`;
        posicao++;
        
        if(posicao > jogos.length - 1){
            posicao = 0;
        }
    }
}

function left(){
    if(posicao != "off"){
        areaJogo.innerHTML = `<img src="${jogos[posicao]}" alt="Jogos" class="jogos">
                                <span>
                                    ${nomeJogo[posicao]}
                                </span>`;
        posicao--;

        if(posicao < 0){
            posicao = 0;
        }
    }
}
function up(){
    if(posicao != "off"){
        areaJogo.innerHTML = `<img src="${jogos[posicao]}" alt="Jogos" class="jogos">
                                <span>
                                    ${nomeJogo[posicao]}
                                </span>`;
        posicao++;
        
        if(posicao > jogos.length - 1){
            posicao = 0;
        }
    }
}

function down(){
    if(posicao != "off"){
        areaJogo.innerHTML = `<img src="${jogos[posicao]}" alt="Jogos" class="jogos">
                                <span>
                                    ${nomeJogo[posicao]}
                                </span>`;
        posicao--;

        if(posicao < 0){
            posicao = 0;
        }
    }
}

function off(){
    areaJogo.innerHTML = `<video autoplay muted>
                                <source src="assets/movie/desligando.mp4" type="video/mp4">
                            </video>
                            <span>
                                <br>
                            </span>`;
    posicao = "off";
}

function on(){
    areaJogo.innerHTML = `<video autoplay muted>
                                <source src="assets/movie/ligando.mp4" type="video/mp4">
                            </video>
                            <span>
                                <br>
                            </span>`;
    posicao = 0;
    setTimeout(function(){
        areaJogo.innerHTML = `<img src="${jogos[posicao]}" alt="Jogos" class="jogos">
                                <span>
                                    ${nomeJogo[posicao]}
                                </span>`;
    }, 2500);
}

function ok(){
    if(posicao != "off"){
        areaJogo.innerHTML = `<img src="assets/img/jogos/carregando.gif" alt="Jogos" class="jogos">
                                <span>
                                    <br>
                                </span>`;
    }
}