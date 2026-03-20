// Carrega os modulos necessarios
var http = require('http');
var url  = require('url');
var fs = require('fs');

// Função para ler um arquivo e escreve-lo na response:
function readFile(response, file){
    // Faz a leitura do arquivo de forma assincrona
    fs.readFile(file, function(err, data){
        // Quando ler, escreve na response o contuedo:
        response.end(data);
    });
}

// Função CallBack
var callBack = function(request, response){
    // Define o cabeçalho (header) com o tipo de resposta:
    

    // Faz o Parse da URL separando o caminho (endpoint):
    var parts = url.parse(request.url);
    var path = parts.path;

    // Verifica Rotas:
    if(parts.path=="/rota1/cadastro"){
        response.writeHead(200, {"Content-type": "application/json; charset=utf-8"})
        readFile(response, "cadastro.json");
    }else if(parts.path == "/rota1/catalogo"){
        response.writeHead(200, {"Content-type": "application/json; charset=utf-8"})
        readFile(response, "catalogo.json")
    }else if(parts.path == "/rota1/dados"){
        response.writeHead(200, {"Content-type": "application/json; charset=utf-8"})
        readFile(response, "dados.json")
    }else if(parts.path == "/rota1/pdf"){
        response.writeHead(200, {"Content-type": "application/pdf"})
        readFile(response, "arquivo.pdf")
    }else{
        response.writeHead(404, {"Content-type": "text/plain; charset=utf-8"})
        response.end("Erro 404")
    }
}

// Cria o Servidor:
var server = http.createServer(callBack);

// Configura o Servidor:
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");