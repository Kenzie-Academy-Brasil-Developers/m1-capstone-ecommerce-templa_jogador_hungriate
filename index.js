const listItens = [
    {
    id: 1,
    img: "./img/PlacasDeVideo/rtx-2060.jpg",
    tipo: "Placa de video",
    titulo: "RTX-2060",
    descricao: "a melhor custo beneficio da categoria",
    preco: 2500
    },

    {
    id: 2,
    img: "./img/PlacasDeVideo/rtx-3060.jpg",
    tipo: "Placa de video",
    titulo: "RTX-3060",
    descricao: "uma das melhores placas da atualidade",
    preco: 2800
    },

    {
    id: 3,
    img: "./img/PlacasDeVideo/rtx-3060ti.jpg",
    tipo: "Placa de video",
    titulo: "RTX-3060-ti",
    descricao: "ideal pra jogar em Full hd e 2k com boa qualidade",
    preco: 3500
    },

    {
    id: 4,
    img: "./img/Processadores/core_i9.jpg",
    tipo: "processador",
    titulo: "core_i9",
    descricao: "Um processador muito forte rapido e sem dor de cabeça",
    preco: 5000
    },

    {
    id: 5,
    img: "./img/Processadores/intel-core-i5.jpg",
    tipo: "processador",
    titulo: "intel-core-i5",
    descricao: "O melhor processador custo beneficio.",
    preco: 1500
    },

    {
    id: 6,     
    img: "./img/Processadores/ryzen-9-5900x.jpg",
    tipo: "processador",
    titulo: "ryzen-9-5900x",
    descricao: "o processador mais forte da atualidade",
    preco: 6000
    },

    {
    id: 7,
    img: "./img/PlacasMae/placa-mae-asrock.jpg",
    tipo: "Placa mãe",
    titulo: "placa-mae-asrock",
    descricao: "Uma das melhores do mercado.",
    preco: 400
    },

    {
    id: 8,
    img: "./img/PlacasMae/placa-mae-asus-tuf.jpg",
    tipo: "Placa mãe",
    titulo: "placa-mae-asus-tuf",
    descricao: "Apropiada pra jogos",
    preco: 600
    },

    {
    id: 9,
    img: "./img/PlacasMae/placa-mae-gigabyte.jpg",
    tipo: "Placa mãe",
    titulo: "placa-mae-gigabyte",
    descricao: "peças da melhor qualidade",
    preco: 630
    },
]

const listTotalItens = []

let quantiaCarrinho = 0
let somando = 0



//criando lista de arrey

function criaLista(){

    for(i = 0 ; i < listItens.length ; i++){ 
        listTotalItens.push(listItens[i])
        
    }

    totalItensCard()
}
criaLista()



// renderiza todos os cards
function totalItensCard(){

    let lista = document.querySelector("#lista_produtos") // acesso ao ul
        lista.innerHTML = ""

    for(let i = 0 ; i < listTotalItens.length ; i++){ 

        let card = document.createElement("li") // lista
            card.id = listTotalItens[i].id
            card.className = "card_produtos"

            // if(listTotalItens[i].tipo == "Placa de video"){
            //     console.log(listTotalItens[i])
            // }
           

        let img = document.createElement("img") // img
            img.id = "img_card"
            img.className = "img_card"
            img.src = listItens[i].img

        let div = document.createElement("div") // div da descrição
            div.id = "div_descricao_card"
            div.className = "div_descricao_card"
        

        let tipo = document.createElement("span") // tipo do produto
            tipo.id = "tipo"
            tipo.className = "tipo"
            tipo.innerHTML = listTotalItens[i].tipo

        let titulo = document.createElement("h3") // titulo
            titulo.id = "titulo"
            titulo.className = "titulo"
            titulo.innerHTML = listTotalItens[i].titulo

        let descricao = document.createElement("p") // descricão
            descricao.id = "descricao"
            descricao.className = "descricao"
            descricao.innerHTML = listTotalItens[i].descricao

        let preco = document.createElement("span") // preço
            preco.id = "preco"
            preco.className = "preco"
            preco.innerHTML =  listTotalItens[i].preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        let addCarrinho = document.createElement("button") // adicionar ao carrinho
            addCarrinho.id = "add_" + listTotalItens[i].id
            addCarrinho.className = "add_carrinho"
            addCarrinho.innerHTML = "ADICIONAR AO CARRINHO"


        lista.appendChild(card)
        card.appendChild(img)
        div.appendChild(tipo)
        div.appendChild(titulo)
        div.appendChild(descricao)
        div.appendChild(preco)
        div.appendChild(addCarrinho)
        card.appendChild(div)

    }
 
    enviaCard()
}


// pegando id da lista e mandando pra function responsavel
function enviaCard(){
   
   for(i = 1 ; i <= listTotalItens.length ; i++){

    let eventoClick = document.querySelector("#add_"+ i)

        eventoClick.addEventListener("click" , function (e){

            addCarrinho(e.target.id[4] - 1) 
            somar(e.target.id[4] - 1)
            contadorItensCarrinho()
            
        })

    }
    
}


function addCarrinho(id){

    let carrinho = document.querySelector("#lista_carrinho")

    let cardCarrinho = document.createElement("li")
        cardCarrinho.id = "carrinho_" + quantiaCarrinho
        cardCarrinho.className = "card_carrinho"

    let img = document.createElement("img")
        img.src = listTotalItens[id].img

    let titulo = document.createElement("h3")
        titulo.innerHTML = listTotalItens[id].titulo

    let preco = document.createElement("p")
        preco.innerHTML = "R$ " + listTotalItens[id].preco.toFixed(2)

    let retiraCarrinho = document.createElement("button")
        retiraCarrinho.innerText = "Retirar do carrinho"
        retiraCarrinho.className = "button_retira_carrinho"
        retiraCarrinho.id = "id_" + listTotalItens[id].id

   

    cardCarrinho.appendChild(img)
    cardCarrinho.appendChild(titulo)
    cardCarrinho.appendChild(preco)
    cardCarrinho.appendChild(retiraCarrinho)
    carrinho.appendChild(cardCarrinho)


     // removendo carrinho
     cardCarrinho.addEventListener("click" ,  function(e){


        cardCarrinho = document.querySelector("#carrinho_" + (quantiaCarrinho - 1))

        // Subtrai valor do item retirado
        let pegandoValor = cardCarrinho.childNodes[2].innerText
        let format = parseInt(pegandoValor.slice(3))
        let somaTotal = document.querySelector("#somaTotal")
        console.log(format)
        somando = somando - format
        somaTotal.innerText = somando.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        console.log(somando)
        
        //remove quantidade de itens
        let quantidadeCarrinho = document.querySelector("#quantidadeCarrinho")
        quantiaCarrinho --
        quantidadeCarrinho.innerHTML = quantiaCarrinho
        
        cardCarrinho.remove()
    })
    
}

//somando valor total

function somar(valor){
    let somaTotal = document.querySelector("#somaTotal")
        somando += listTotalItens[valor].preco
        somaTotal.innerText =  somando.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        
}

        //contando a quantidade de itens ao carrinho

function contadorItensCarrinho(){
    let quantidadeCarrinho = document.querySelector("#quantidadeCarrinho")
        quantiaCarrinho++
        quantidadeCarrinho.innerHTML = quantiaCarrinho
    
        console.log(quantiaCarrinho)
}


function finalizar(){
    if(quantiaCarrinho > 0){
    alert("O seu pedido esta finalizado com sucesso !")
    location.reload()
    }else{
    alert("Carrinho vazio")
    }

    
}