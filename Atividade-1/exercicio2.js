const entrada = require('readline-sync')

const material = entrada.question("DIgite o nome do material: ")

const qtdAdquirida = entrada.questionInt("Digite a quantidade do material: ")

const precoUnitario = entrada.questionFloat("Digite o preco unitario do material: ")

const totalCompra = qtdAdquirida * precoUnitario
console.log(`O total da compra foi ${totalCompra}`)
