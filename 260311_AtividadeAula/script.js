fetch("/arquivo.json")
    .then(function(resposta) {
        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }
        return resposta.json();
    })
    .then(function(dados) {
        var div = document.getElementById("conteudoJson");
        var html = "<ul>";

        for (var i = 0; i < dados.length; i++) {
            html += "<li>ID: " + dados[i].id +
                    " | Desc: " + dados[i].desc +
                    " | Qtda: " + dados[i].qtd +
                    "</li>";
        }

        html += "</ul>";
        div.innerHTML = html;
    })
    .catch(function(erro) {
        var div = document.getElementById("conteudoJson");
        div.innerHTML = "Erro ao carregar JSON.";
        console.log(erro);
    });