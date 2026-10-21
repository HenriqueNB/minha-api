const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    mensagem: 'Minha API está funcionando!',
    ambiente: 'Node.js em container Docker'
  }));
});

const PORT = process.env.PORT || 3000;

// 0.0.0.0 permite que a aplicação seja acessada de fora do container.
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});