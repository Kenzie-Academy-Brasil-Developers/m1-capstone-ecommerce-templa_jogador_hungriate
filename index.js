const listItens = [
    {
    id: 1,
    img: "./img/PlacasDeVideo/rtx-2060.jpg",
    tipo: "Placa de video",
    titulo: "rtx-2060",
    descricao: "a melhor custo beneficio",
    preco: 2500
    },

    {
    id: 2,
    img: "./img/PlacasDeVideo/rtx-3060.jpg",
    tipo: "Placa de video",
    titulo: "rtx-3060",
    descricao: "uma das melhores placas da atualidade",
    preco: 2800
    },

    {
    id: 3,
    img: "./img/PlacasDeVideo/rtx-3060ti.jpg",
    tipo: "Placa de video",
    titulo: "rtx-3060ti",
    descricao: "ideal pra jogar em 2k",
    preco: 3500
    },

    {
    id: 4,
    img: "./img/Processadores/core_i9.jpg",
    tipo: "processador",
    titulo: "core_i9",
    descricao: "Um processador muito forte.",
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
const listPlacasDeVideo = []
const listProcessadores = []
const listPlacasMae = []

function criaLista(){

    for(i = 0 ; i < listItens.length ; i++){
        
        listTotalItens.push(listItens[i])

        if(listItens[i].tipo == "Placa de video"){
            listPlacasDeVideo.push(listItens[i])
        }

        if(listItens[i].tipo == "Placa mãe"){
            listPlacasMae.push(listItens[i])
        }

        if(listItens[i].tipo == "processador"){
            listProcessadores.push(listItens[i])
        }

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
        preco.innerHTML = "R$ " + listTotalItens[i].preco

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

}


// Filtro Placas de video
function totalPlacasDeVideo(){

    let lista = document.querySelector("#lista_produtos") // acesso ao ul
    lista.innerHTML = ""

    for(let i = 0 ; i < listPlacasDeVideo.length ; i++){

        let card = document.createElement("li") // lista
        card.className = "card_produtos"
        card.id = listPlacasDeVideo[i].id

        let img = document.createElement("img") // img
        img.id = "img_card"
        img.className = "img_card"
        img.src = listPlacasDeVideo[i].img

        let div = document.createElement("div") // div da descrição
        div.id = "div_descricao_card"
        div.className = "div_descricao_card"
        

        let tipo = document.createElement("span") // tipo do produto
        tipo.id = "tipo"
        tipo.className = "tipo"
        tipo.innerHTML = listPlacasDeVideo[i].tipo

        let titulo = document.createElement("h3") // titulo
        titulo.id = "titulo"
        titulo.className = "titulo"
        titulo.innerHTML = listPlacasDeVideo[i].titulo

        let descricao = document.createElement("p") // descricão
        descricao.id = "descricao"
        descricao.className = "descricao"
        descricao.innerHTML = listPlacasDeVideo[i].descricao

        let preco = document.createElement("span") // preço
        preco.id = "preco"
        preco.className = "preco"
        preco.innerHTML = "R$ " + listPlacasDeVideo[i].preco

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
}


// Filtro de processadores
function totalProcessadores(){

    let lista = document.querySelector("#lista_produtos") // acesso ao ul
    lista.innerHTML = ""

    for(let i = 0 ; i < listProcessadores.length ; i++){

        let card = document.createElement("li") // lista
        card.className = "card_produtos"
        card.id = listProcessadores[i].id

        let img = document.createElement("img") // img
        img.id = "img_card"
        img.className = "img_card"
        img.src = listProcessadores[i].img

        let div = document.createElement("div") // div da descrição
        div.id = "div_descricao_card"
        div.className = "div_descricao_card"
        

        let tipo = document.createElement("span") // tipo do produto
        tipo.id = "tipo"
        tipo.className = "tipo"
        tipo.innerHTML = listProcessadores[i].tipo

        let titulo = document.createElement("h3") // titulo
        titulo.id = "titulo"
        titulo.className = "titulo"
        titulo.innerHTML = listProcessadores[i].titulo

        let descricao = document.createElement("p") // descricão
        descricao.id = "descricao"
        descricao.className = "descricao"
        descricao.innerHTML = listProcessadores[i].descricao

        let preco = document.createElement("span") // preço
        preco.id = "preco"
        preco.className = "preco"
        preco.innerHTML = "R$ " + listProcessadores[i].preco

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
}


// Filtro Placas Mãe
function totalPlacasMae(){

    let lista = document.querySelector("#lista_produtos") // acesso ao ul
    lista.innerHTML = ""

    for(let i = 0 ; i < listPlacasMae.length ; i++){

        let card = document.createElement("li") // lista
        card.className = "card_produtos"
        card.id = listPlacasMae[i].id
        

        let img = document.createElement("img") // img
        img.id = "img_card"
        img.className = "img_card"
        img.src = listPlacasMae[i].img

        let div = document.createElement("div") // div da descrição
        div.id = "div_descricao_card"
        div.className = "div_descricao_card"
        

        let tipo = document.createElement("span") // tipo do produto
        tipo.id = "tipo"
        tipo.className = "tipo"
        tipo.innerHTML = listPlacasMae[i].tipo

        let titulo = document.createElement("h3") // titulo
        titulo.id = "titulo"
        titulo.className = "titulo"
        titulo.innerHTML = listPlacasMae[i].titulo

        let descricao = document.createElement("p") // descricão
        descricao.id = "descricao"
        descricao.className = "descricao"
        descricao.innerHTML = listPlacasMae[i].descricao

        let preco = document.createElement("span") // preço
        preco.id = "preco"
        preco.className = "preco"
        preco.innerHTML = "R$ " + listPlacasMae[i].preco

        let addCarrinho = document.createElement("button") // adicionar ao carrinho
        addCarrinho.id = "add_" + listTotalItens[i].id
        addCarrinho.className = "add_carrinho"
        addCarrinho.innerHTML = "ADICIONAR AO CARRINHO"
        addCarrinho.value = 

        lista.appendChild(card)
        card.appendChild(img)
        div.appendChild(tipo)
        div.appendChild(titulo)
        div.appendChild(descricao)
        div.appendChild(preco)
        div.appendChild(addCarrinho)
        card.appendChild(div)

    }
}




let ListaCarrinho = []



let add_carrinho = []

for(i = 1 ; i <= listTotalItens.length ; i++){
    let  eventoClick = document.querySelector("#add_"+[i])

    eventoClick.addEventListener("click" , function (e){
    let idElemento = e.target.id.slice(-1) 
    console.log(idElemento)  
    })
}



function addCarrinho(){

    
    let carrinho = document.querySelector("#lista_carrinho")

    let cardCarrinho = document.createElement("card_carrinho")
    cardCarrinho.id = "card_carrinho"
    cardCarrinho.className = "card_carrinho"

    let img = document.createElement("img")
    img.src = listTotalItens[0].img

    let titulo = document.createElement("h3")
    titulo.innerHTML = listTotalItens[0].titulo

    let preco = document.createElement("p")
    preco.innerHTML = "R$ " + listTotalItens[0].preco

    let retiraCarrinho = document.createElement("button")
    retiraCarrinho.innerText = "Retirar do carrinho"


    cardCarrinho.appendChild(img)
    cardCarrinho.appendChild(titulo)
    cardCarrinho.appendChild(preco)
    cardCarrinho.appendChild(retiraCarrinho)
    carrinho.appendChild(cardCarrinho)

}






/* 
<li class="card_carrinho">
<img src="./placa-de-video-gigabyte-geforce-rtx-3060-gaming-oc-12g-12-gb-gddr6-rev-2-0-ray-tracing-gv-3060gaming_1626461646_m.jpg" alt="img_carrinho">
<h3>Placa de video</h3>
<span class="preco">R$ 100</span>
<button class="remove_carrinho" >Retirar do carrinho</button>
</li>
 */