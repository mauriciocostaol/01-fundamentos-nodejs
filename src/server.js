import http from 'node:http'

const server = http.createServer((req,res)=>{

  const { method, url} = req;

  console.log(method,url);

  if(method === 'GET' && url === '/users'){
    return res.end('Listagem de usuários');
  }

  if(method === 'POST' && url === '/users'){
    return res.end('Criação de Usuário');
  }

return res.end("Hello World");
})



server.listen(3333);