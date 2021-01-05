const server = require('./src/app.js');

server.listen(process.env.PORT || 3001, () => {
  console.log('Estamos ready' + process.env.PORT || 3001); 
});

