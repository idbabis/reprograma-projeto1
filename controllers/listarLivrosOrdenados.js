const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {

    const opcaoInicial = read.question('Deseja ver os livros ordenados por quantidade de paginas? S/N ').toUpperCase()
    if (opcaoInicial === 'S') {

        livros.sort((A, B) => {
            return A.paginas - B.paginas
        })

        console.table(livros)
    }else {
        console.log('Até Logo')
    }
}

module.exports = listarLivrosOrdenados

