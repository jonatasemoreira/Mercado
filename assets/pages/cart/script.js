atualizarCarrinho = () => {
    var containerCarrinho = document.querySelector('#carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=> {
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += 
        `
            <div class="carrinho-single"> 
                <p>`+val.nome+` | Quantidade: `+val.quantidade+`</p><hr>
            </div>
            
        `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){

        //mensagem dizendo que adicionou o item

        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho()
        return false;
    })
}