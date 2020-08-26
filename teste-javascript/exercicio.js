const fs = require("fs")
const path = require('path')
let nomeSemExtensao

function listarArquivosDoDiretorio (diretorio, filtro, nomeOuExtensao) {
    fs.readdir(diretorio, (err, arquivos) => {
        if (err) return console.error(err)
        arquivos.forEach(arquivo => {
            nomeSemExtensao = arquivo.replace(/.\w+$/,"")
            if ((filtro == 'extensao') && (path.extname(arquivo) == nomeOuExtensao)) {
                console.log(arquivo)
            } 
            else if ((filtro == 'nome') && (nomeSemExtensao == nomeOuExtensao)) {
                 console.log(arquivo)
            } 
        })  
    })
}
listarArquivosDoDiretorio('./filesDirectory', 'nome', 'documento')
// -------------------------INSTRUÇÕES-------------------------------
// - Todos os parâmetros da função devem ser preenchidos como String
// - O parâmetro 'diretorio' deve ser preenchido com o caminho do diretório desejado
// - O parâmetro filtro deve ser preenchido com as opções 'extensao' ou 'nome'
// - Caso o filtro escolhido tenha sido 'extensao', o parâmetro "nomeOuExtensao" deve ser preenchido com o '.' antes do tipo da extensao (ex: '.txt')
// - Caso o filtro escolhido tenha sido nome, o parâmetro 'nomeOuExtensao' deve ser preenchido com o nome do arquivo sem a extensao do mesmo


