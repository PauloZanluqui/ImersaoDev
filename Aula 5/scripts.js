function adicionarFilme(){
    var campoFilme = document.querySelector('#filme')
    var filme = campoFilme.value
    if (filme.endsWith('.jpg')){
        listarFilme(filme)
    } else {
        alert("Imagem Inválida")
    }
    campoFilme.value = ""
}

function listarFilme(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
