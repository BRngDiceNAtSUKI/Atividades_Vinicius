// Carrega os modulos necessarios:
const http = require('http');

// Função Callback para o servidor http:
var callback = function(request, response){
    // Define o cabeçalho (header) com o tipo de resposta:
    response.writeHead(200, {"Content-type": "text/plain"});
    // Mensagem de Retorno
    response.end("FATEC - Agora com chamada CallBack\n");
};

// Cria o servidor http:
var server = http.createServer(callback);

// Configura o servidor:
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000 ...")