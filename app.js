var btnCriptografar = document.querySelector(".botao_criptografar");
var btnDescriptografar = document.querySelector(".botao_descriptografar");
var imgDetetive = document.querySelector(".conteudo_direita_imagem");
var resultado = document.querySelector(".resultado_direita");
var texto = document.querySelector(".conteudo_direita_texto");
var paragrafo = document.querySelector(".conteudo_direita_paragrafo");

btnCriptografar.onclick = criptografar;

function criptografar(){
    ocultarItensDireita();
    var mensagemUser = textoUsuario();
    resultado.textContent = criptografarTexto(mensagemUser);
}

function textoUsuario(){
    var mensagemUser = document.querySelector(".mensagem.textarea");
    return mensagemUser.value;
}
 
function ocultarItensDireita(){
    imgDetetive.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
    texto.classList.add("ocultar")
}

function criptografarTexto(){


}