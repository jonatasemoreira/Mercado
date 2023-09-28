//Simulação de API
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
        id: 4,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 5,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    },
    {
        id: 6,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/03.webp',
        quantidade: 0
    },
    {
        id: 7,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/04.webp',
        quantidade: 0
    },
    {
        id: 8,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 9,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    },
    {
        id: 10,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/03.webp',
        quantidade: 0
    },
    {
        id: 11,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/04.webp',
        quantidade: 0
    },
    {
        id: 12,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 13,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    },
    {
        id: 14,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/03.webp',
        quantidade: 0
    },
    {
        id: 15,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/04.webp',
        quantidade: 0
    },
    {
        id: 16,
        nome: "Gorro Unissex Em Tricô - Preto",
        img: './assets/img/01.webp',
        quantidade: 0
    },
    {
        id: 17,
        nome: "Blusão Básico Feminino Moletom",
        img: './assets/img/02.webp',
        quantidade: 0
    }
]
// Inicializador da Loja
const inicializarLoja = () => {
    const containerProdutos = document.querySelector('#produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `
            <ul class="li-produtos">
                <li>
                    <img src="${val.img}">
                    <p class="nome-produto">${val.nome}</p>
                    <a class="btn-produto" href="#" data-id="${val.id}">Adicionar</a>
                </li>
            </ul>
        `;
    });

    // Adicionar items no carro
    const botoesAdicionar = document.querySelectorAll('.btn-produto');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarItem);
    });

    // Exibir quantidade inicial no carrinho
    exibirQuantidadeCarrinho();
};

const filtrarItens = () => {
    const itens_de_pesquisa = document.getElementById("text-search").value;
    
    // Filtra os itens com base no valor digitado
    const filteredItems = items.filter((item) => {
        return item.nome.toLowerCase().includes(itens_de_pesquisa.toLowerCase());
    });

    // Limpa a lista de itens exibidos no front-end
    const containerProdutos = document.querySelector('#produtos');
    containerProdutos.innerHTML = '';

    filteredItems.map((val) => {
        containerProdutos.innerHTML += `
            <ul class="li-produtos">
                <li>
                    <img src="${val.img}">
                    <p class="nome-produto">${val.nome}</p>
                    <a class="btn-produto" href="#" data-id="${val.id}">Adicionar</a>
                </li>
            </ul>
        `;
    });

    // Adicionar items no carro
    const botoesAdicionar = document.querySelectorAll('.btn-produto');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarItem);
    });
};

const adicionarItem = (event) => {
    event.preventDefault();
    const itemId = event.target.getAttribute('data-id');

    // Lógica de adicionar o item ao carrinho
    let total = localStorage.getItem("total") || 0; 
    total = parseInt(total) + 1;
    localStorage.setItem("total", total);

    // Enviar para o front
    exibirQuantidadeCarrinho();
};

const zerarCarrinho = () => {
    // Resetar o valor do carrinho para 0
    localStorage.setItem("total", 0);
    // Atualizar a exibição no carrinho
    exibirQuantidadeCarrinho();
};

const exibirQuantidadeCarrinho = () => {
    const total = localStorage.getItem("total") || 0;
    document.getElementById("itens-no-carro").innerHTML = `
        <p class="card-itens">${total}</p>
    `;
};

// Variável para armazenar a quantidade de itens dentro do carrinho
const numero_de_items = localStorage.getItem("total") || 0;
localStorage.setItem("total", numero_de_items);

// Input de pequisa com o evento filtrar
document.getElementById("text-search").addEventListener("input", filtrarItens);
inicializarLoja();

// Função click de adicionar itens no carrinho
const botoesAdicionar = document.querySelectorAll('.btn-produto');
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', adicionarItem);
});

// Botão para zerar o carrinho
const botaoZerar = document.getElementById("zerar-carrinho");
botaoZerar.addEventListener("click", zerarCarrinho);