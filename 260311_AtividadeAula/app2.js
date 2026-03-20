const http = require("http");
const fs = require("fs");

function abrirArquivo(res, nomeArquivo, contentType) {
    fs.readFile(nomeArquivo, (erro, dados) => {
        if (erro) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Erro ao abrir o arquivo: " + nomeArquivo);
            return;
        }

        res.writeHead(200, { "Content-Type": contentType });
        res.end(dados);
    });
}

const servidor = http.createServer((req, res) => {
    const rota = new URL(req.url, "http://localhost:3000").pathname;

    if (rota === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Servidor Node</title>
            </head>
            <body>
                <h1>Servidor HTTP com rotas</h1>
                <p>Rotas disponíveis:</p>
                <ul>
                    <li><a href="/pdf">/pdf</a></li>
                    <li><a href="/jpeg">/jpeg</a></li>
                    <li><a href="/json">/json</a></li>
                    <li><a href="/html">/html</a></li>
                </ul>
            </body>
            </html>
        `);
    }
    else if (rota === "/pdf") {
        abrirArquivo(res, "arquivo.pdf", "application/pdf");
    }
    else if (rota === "/jpeg") {
        abrirArquivo(res, "arquivo.jpeg", "image/jpeg");
    }
    else if (rota === "/json") {
        abrirArquivo(res, "arquivo.json", "application/json; charset=utf-8");
    }
    else if (rota === "/html") {
        abrirArquivo(res, "arquivo.html", "text/html; charset=utf-8");
    }
    else if (rota === "/script.js") {
        abrirArquivo(res, "script.js", "application/javascript; charset=utf-8");
    }
    else if (rota === "/arquivo.jpeg") {
        abrirArquivo(res, "arquivo.jpeg", "image/jpeg");
    }
    else if (rota === "/arquivo.json") {
        abrirArquivo(res, "arquivo.json", "application/json; charset=utf-8");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Erro 404 - Rota não encontrada: " + rota);
    }
});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});