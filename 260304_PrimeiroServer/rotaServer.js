// Carrega os modulos necessarios:
var http = require('http');
var url  = require('url');

// Função Callback para os servidor:
var callBack = function(request, response){
    // Define o cabeçalho (Header) com o tipo de resposta:
    response.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});

    // Faz o parse da URL  (separando o caminho - endpoint / rotas):
    var parts = url.parse(request.url);

    // Verifica a rota (endpoint):
    if(parts.path == "/"){
        response.end("Abre arquivo index.html");
    } else if(parts.path == "/rota1"){
        response.end("Abre arquivo rota1.html");
    } else if(parts.path == "/rota2"){
        response.end("Abre arquivo rota2.html");
    } else {
        response.end("Erro 404 .... \n" + "\nNão encontrado: " + parts.path
            + "\n Abre arquivo 404.html"
        );
    };    
}

// Cria o Servidor http:
var server = http.createServer(callBack);

// Configuração do servidor:
server.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000");