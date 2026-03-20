// Carrega os modulos necessarios:
var http = require('http');
var url  = require('url')
var fs   = require('fs');

// Função para ler arquivo e escrever na responde:
function readFile(response, file){
    // Faz a leitura do arquivo de forma assincrona
    fs.readFile(file, function(err, data){
        if(err){
            response.writeHead(500, {"Content-type":"text/plain; charset=utf-8"});
            response.end("Ero ao abrir o arquivo: " + file);
        }else{
            response.end(data);
        }
    });
}

// Função CallBack para o servidor
var callBack = function(request, response){

    // Faz o parse da URL (separando o caminho):
    var parts = url.parse(request.url);
    var path = parts.path;

    if(path == "/"){
        response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
        response.end(
            "<h1> Servidor HTTP - Rotas Disponiveis </h1>" +
            "<p> Rotas Disponiveis: </p>" +
            "<ul>" +
                "<l1><a href='/pdf'>Arquivo PDF<a><li>" +
                "<l1><a href='/jpeg'>Arquivo JPEG<a><li>" +
                "<l1><a href='/json'>Arquivo JSON<a><li>" +
                "<l1><a href='/html'>Arquivo HTML<a><li>" +
            "</ul>"
        );
    }else if(path == "/pdf"){
        response.writeHead(200, {"Content-type":"application/pdf"});
        readFile(response, "arquivo.pdf");
    }else if(path == "/jpeg"){
        response.writeHead(200, {"Content-type":"image/jpeg"});
        readFile(response, "arquivo.jpeg");
    }else if(path == "/json"){
        response.writeHead(200, {"Content-type":"application/json; charset=utf-8"});
        readFile(response, "arquivo.json");
    }else if(path == "/html"){  
        response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
        readFile(response, "arquivo.html");
    }else{
        response.writeHead(404, {"Content-type":"text/plain; charset=utf-8"});
        response.end("Erro 404 - Rota não encontrada: " + path);
    }

}

// Criar e Configura o Servidor
var server = http.createServer(callBack);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");