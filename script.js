
const itens = [

    {
        imagem : "./assets/img/actions/animewoman.jpg",
        nome : "Anime Woman",
        preco : 130.00,
        tipo : "action",
    
    },

    {
        imagem : "./assets/img/actions/dragonballpersonagem.jpg",
        nome : "Dragon Ball",
        preco : 130.00,
        tipo : "action",
    },

    {
        imagem : "./assets/img/actions/dragonballpersonagem.jpg",
        nome : "Dragon Ball",
        preco : 130.00,
        tipo : "action",
    },
    {
        imagem : "./assets/img/actions/dragonballpersonagem.jpg",
        nome : "Dragon Ball",
        preco : 130.00,
        tipo : "action",
    },


    {
        imagem :"./assets/img/actions/starwarspersonagem.jpg",
        nome :"Star Wars",
        preco : 130.00,
        tipo : "action",
    },


    {

        imagem: "./assets/img/painting/clock.jpg",
        nome : "Clock",
        preco : 140.00,
        tipo : "paintings"
        
    },

    {
        imagem : "./assets/img/painting/gamepad.jpg",
        nome : " Gamepad",
        preco : 10.00,
        tipo : "paintings",
    },


    {
        imagem :"./assets/img/painting/personagem.jpg",
        nome : "Personagem",
        preco : 25.00,
        tipo : "paintings"
    },

    
    {
        imagem : "./assets/img/painting/gamepad.jpg",
        nome : "Gamepad",
        preco : 10.00,
        tipo : "paintings",
    },


    {

        imagem: "./assets/img/painting/clock.jpg",
        nome : "Clock",
        preco : 140.00,
        tipo : "paintings"
        
    },

    

 
]

let listPainting = [];
let listAction = [];


function seperarItens(listItem){ 

    for(let i = 0 ; i < listItem.length ; i++){

        if(listItem[i].tipo == "paintings"){
            listPainting.push(listItem[i])
        }

        else if(listItem[i].tipo == "action"){
            listAction.push(listItem[i])
        }
    }
}


seperarItens(itens);

console.log(listPainting)
console.log(listAction)


function criar(item){

console.log(item)


let li = document.createElement('li')
let img = document.createElement('img')
let h3 = document.createElement('h3')
let p = document.createElement('p')



li.classList = 'card'
img.classList = 'img'
img.src = item.imagem
h3.innerText = item.nome
p.innerText = `R$ ${item.preco}`

li.append(img , h3 ,p)

return li
}

let ulPainting = document.querySelector(".paintings")
let ulAction = document.querySelector(".action")


function juntar(list, ul){

    
    
    for(let i = 0 ; i < list.length ; i++){
        let elemento = list[i]
        ul.append(criar(elemento))
    }
}


juntar(listPainting ,ulPainting )


juntar(listAction , ulAction)


















    












































    








