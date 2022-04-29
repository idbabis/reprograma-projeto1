const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
   const opcaoInicial = read.question('Deseja ver os livros recomendados e lidos? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
        const livrosRecomendados = livros.filter(livro => livro.recomenda === true && livro.leu === true)
        console.table(livrosRecomendados)
        
    } else {
        console.log('Até Logo')
    }
}


module.exports = listarRecomendados

