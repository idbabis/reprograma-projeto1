const livros = require('../database')
const read = require('readline-sync')

const buscarlivros = () => {
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N ').toLocaleUpperCase()

    if (opcaoInicial === 'S'){
       const categorias = livros.map(livros => livros.categoria)
       console.table(categorias)

       const inputCategoria = read.question(' Digite uma categoria conforme tabela acima: 1')

        const confirmacao = read.question('Tem certeza? S/N ').toLocaleUpperCase()

        if (confirmacao === 'S') {
            const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
            console.table(livrosFiltrados)
        }else {
            console.log('Até Logo')
        }

    } else {
        console.log('Até Logo')
    }

}

module.exports = buscarlivros


