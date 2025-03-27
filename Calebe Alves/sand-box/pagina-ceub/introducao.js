var Eai  = "Eai ze! JS";

console.log(Eai);

function log(valor){
    console.log(valor);
}


var valor = 10
log (typeof valor);

var palavra = "zeze";
log(typeof palavra);

var isOK = true;
log(typeof isOK);

var meuObj = {};
var meuArray = {};
var nulo = null;
var variavelcruzeiro;

function compararEscopo() {
    if(true) {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Cosnt dentro do bloco";
        


        log(varDentro);
        log(letDentro);
        log(constDentro);

        
    }

    log(palavra);
    log(varDentro);
    //log(letDentro); 
    //log/(constDentro);
}
compararEscopo();

// Op simples
const n1 = 1; 
const n2 = 4;
const valorNumericoStr = "7";

log(n1 + n2);
log(n1 - n2);
log(n1 * n2);
log(n1 / n2);

log(n1 == n2);

//Manipulaçao de arrays

let frutas = ["Banana, Maracuja, Goiaba"];
log(frutas.length);
log(frutas[1]);


frutas.push("Mamão");

log(frutas);

frutas.pop();

log(frutas);


const idade = 17;
if(idade >= 17){
    log("Sou de menor");
    }else if(idade >= 2) {
        log("Sou uma criança");
    }else{
        log("Sou bebê");

    }


    const instituicao = "CEM10";

    switch(instituicao){
        case "CEM10" : 
         log("Escola");
        case "CIL":
         log("Escola de Línguas");  
            break;
        case"CEUB":
         log("FACULDADE");
         break;
         default:
         log("Não é Instituição");

    }

    for(let loop = 0; loop < 5; loop++  ) {
        log(`Meu valor no loop: ${loop}`);
    } 

    let valorWhile = 0;
    while (valorWhile < 5) {
        log(`Meu valor no loop: ${valorWhile}`);
      valorWhile++;      
    }
async function buscarDados() {
    return new Promise(resolve  => {
        setTimeout( () => resolve("Dados Recebidos") ,4*1000)

        });
}
async function executarBusca() {
    log("Buscando...");

    let resultado = await buscarDados();

    log (resultado);
}

executarBusca();    

const meuMetodo = function exemploMetodo() {
    log ("Executei por metodo normal");

};

log(meuMetodo);
const objTeste = {
    eai(){
        log("EAI");
    },
    tchau() {
        log("TCHAU");
      },
    };

objTeste.eai();
objTeste.tchau();

//Manipulação do DOM
//Aqui criamos um elemento dinamicamente e o adicionamos ao corpo da página
document.addEventListener("DOMContentLoaded", () => {
  let titulo = document.createElement("h2");
  titulo.innerText = "EAI DOM";
  document.body.appendChild(titulo);

});

function toggleImagem() {
    let img = document.getElementById("minhaImagem");
    img.style.display = img.style.display === "none" ? "block" :"none"
  }
  function mostrarValorCombo() {
    let combo = document.getElementById("meu combo");
    alert("Valor selecionado:" + combo.value);
  }


    function mostrarValorRadio() {
        let radios = document.getElementsByName("tamanho");
        
    for(let radio of radios){
        if(radio.checked){
            alert("Opçao selecionada:" + radio.value);
            break;
        }
    }
    
  }
  function mostrarValorCheckbox() {
    let checkboxs = document.getElementsByName("interesse");
    let selecionados = [];

    for(let checkbox of checkboxs) {
        if(checkbox.checked){
        selecionados.push(checkbox.value);
         }
    }
    alert(
        "Seleciondos:" + 
        (selecionados.length > 0 ? selecionados.join(" ,") :"Nenhum")
     );
}



