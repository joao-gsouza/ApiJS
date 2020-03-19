let mensagem = document.getElementById("mensagem"); //pega o Id da div mensagem

let spanmsg = document.createElement("span"); //cria a tag span

spanmsg.textContent = "Carregando"; // define a mensagem dentro do span

spanmsg.classList.add("carregando"); //coloca a classe carregando no span

mensagem.appendChild(spanmsg); //informa que a spanmsg é filho da div mensagem

fetch('https://api.myjson.com/bins/oi83g') //busca os dados da api
.then(function(response) {

    response.json().then(function(livros){ //pega a resposta da api e converte em json

        

        let tabelaHead = document.getElementById("tabelaHead"); // Pega o Id da head da tabela

        // cria as TD no HTML
        Object.keys(livros[0]).forEach(function (key){ // Pega somente as keys do json que vem da API e passa por todos os elementos do json

            var livroTh = document.createElement("th"); // cria para cada key encontrada um TH

            livroTh.textContent = key; //coloca a key dento do th
    
            tabelaHead.appendChild(livroTh); //informa que o th é filho da head da tabela
            

        });


        let tabelaBody = document.getElementById("tabelaBody"); // Pega o Id do body da tabela

        // cria as TD no HTML
        livros.forEach(function (livro){ //passa por todos os elemento dentro do json livros

            let livroTr = document.createElement("tr"); // cria um tr para cada livro

            var dadosLivro = { //separa os dados do json e coloca dentro de um objeto
                id: livro.id,
                nome: livro.nome,
                preco: livro.preco,
                paginas: livro.paginas,
                codigo: livro.codigo,
                categoria: livro.categoria.nome
            }
        
            for(var chave in dadosLivro){ //passa por todos os atributos do livro
        
                var livroTd = document.createElement("td"); //cria uma td para cada atributo do livro
        
                livroTd.textContent = dadosLivro[chave]; // coloca o texto coletado dentro do td
        
                livroTr.appendChild(livroTd); // informa que o td é filho da tr
        
            }

            tabelaBody.appendChild(livroTr); // informa que o tr é filho do body da tabela

        });

        spanmsg.textContent = ""; //remove a mensagem carregando

        mensagem.appendChild(spanmsg); //informa que a spanmsg é filho da div mensagem

    })

}).catch(function(erro){ // verifica se ouve erro
    console.log("Erro: ", erro) // exibe o erro no console

    spanmsg.textContent = "Erro ao coletar os dados, mais informações no console"; //define a mensagem 

    spanmsg.classList.add("erro"); //coloca a classe erro dentro do span

    mensagem.appendChild(spanmsg); //informa que a spanmsg é filho da div mensagem
})