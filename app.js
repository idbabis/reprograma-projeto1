const read = require('readline-sync')
const buscarlivros = require('./controllers/buscarLivros')
const listarRecomendados = require('./controllers/listarRecomendados')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

const resposta = read.question(`
============ Menu =============
1 - CATEGORIA: Buscar livros por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5- SAIR

Digite um numero[1-5]:

`)

console.log(resposta)

//Quando a pessoa escolher a opção 1, eu quero o js
//chame a função que vai estar no meu arquivo controllers/buscarlivros

switch (resposta) {
    case'1': 
    buscarlivros ()
    //chamar a função buscarlivros
    break
    case'2':
    listarLivrosOrdenados ()
    // chamar a função listarlivrosOrdenados
    break
    case '3':
    listarRecomendados ()
    // chamar a função listarRecomendados
    break
    case '4':
    listarLivrosNaoLidos ()
    // chamar a função listarLivrosNaoLidos 
    break
    case '5':
    console.log(`Saindo...`)
    break        
    default:
        console.log('Fim do algorismo')

}
