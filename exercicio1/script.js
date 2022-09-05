
//Crie um array vazio chamado `sacolao`
const sacolao = [];
//Crie três objetos que vão representar frutas do sacolão.
const fruta1 = {
    nome: "maça",
    preco: 8.99,
    disponibilidade: true,
}
const fruta2 = {
    nome: "banana",
    preco: 4.99,
    disponibilidade: true,
}
const fruta3 = {
    nome: "pera",
    preco: 11.99,
    disponibilidade: false,
}

//Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1,fruta2,fruta3)
//Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)
