//Simulação de APi
const items = [
    {
        id: 0,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 1,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    },
    {
        id: 2,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/03.webp',
        quantidade: 0
    },
    {
        id: 3,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/04.webp',
        quantidade: 0
    },
    {
        id: 0,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 1,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    },
    {
        id: 2,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/03.webp',
        quantidade: 0
    },
    {
        id: 3,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/04.webp',
        quantidade: 0
    },
    {
        id: 0,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 1,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    },
    {
        id: 2,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/03.webp',
        quantidade: 0
    },
    {
        id: 3,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/04.webp',
        quantidade: 0
    },
    {
        id: 0,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 1,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    },
    {
        id: 2,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/03.webp',
        quantidade: 0
    },
    {
        id: 3,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/04.webp',
        quantidade: 0
    },
    {
        id: 0,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 1,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    }
]

inicializarLoja = () => {
    var containerProdutos = document.querySelector('#produtos');
    items.map((val)=> {
        containerProdutos.innerHTML += 
        `
            <ul class="li-produtos">
                <li>
                    <img src="`+val.img+`">
                    <p class="nome-produto">`+val.nome+`</p>
                    <a class="btn-produto" key="`+val.id+`">Adicionar</a>
                </li>
            </ul>
        `;
    })
}
inicializarLoja();

//Filtro
const cardElement = document.querySelector("");

const filterElement = document.querySelector("text-search");