console.log('Hello World!');

function pegaInput() {
        // Tab to edit
var senhaForm = document.getElementById('inputSenha');
const senha = senhaForm.value;
console.log( "a senha é",  senha);
palavras(senha);
}

function palavras(senha){
       
        var palavraSeparada = senha.split("");
        console.log(palavraSeparada)
        var meuNome = "Rayza"
        
        if (senha == meuNome) {
              console.log("É meu nome") 
              escoderElementos();
              revelarElementos();
        } else {
            console.log("não é meu nome");
            alert('voce errou tente novamente')   
        }
}

function escoderElementos() {
    var escoder = document.getElementById('form');
    escoder.style.display="none";
} 
function revelarElementos() {
    var revelar = document.getElementById('h2');
    
    revelar.style.display="block";
}