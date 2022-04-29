const livros = require('../database')
const read = require('readline-sync')


const listarLivrosNaoLidos = () => {
   const opcaoInicial = read.question('Deseja ver os livros que ainda nao foram lidos? S/N').toUpperCase()
   
    if (opcaoInicial === 'S') {
        const livrosNaoLidos = livros.filter(livro => livro.leu === false)
        console.table(livrosNaoLidos)
        
    } else {
        console.log('Até Logo')
    }

}
module.exports = listarLivrosNaoLidos
