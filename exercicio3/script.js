const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"

}
console.log(pokemon2)

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
pokemon1.ataques = []
const ataqueBasico = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}
pokemon1.ataques.push(ataqueBasico)
console.log(pokemon1)

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
//pokemon2.ataques = pokemon1.ataques.slice()
pokemon2.ataques = [...pokemon1.ataques]
console.log(pokemon2)

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques = [...pokemon1.ataques,
    {nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
    }
]
console.log(pokemon1)

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
pokemon2.ataques = [...pokemon2.ataques,
    {nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
    }
]
console.log(pokemon2)

//f) Imprima os dois objetos no console.

console.log(pokemon1, pokemon2)