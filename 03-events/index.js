const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

};

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

// meuEmissor.on(nomeEvento, function (click) {
//   console.log('usuario clicou', click);
// });

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok');

// let count = 0;
// setInterval(function () {
//   meuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)


// Fica monitorando sem parar(contínuo/constante). Bom para monitoramento de cliques, arquivos e outros tipos de informações.
const stdin = process.openStdin(); // Variavel interna do node para lidar com eventos
// stdin.addListener('data', function (value) { // verificar outros valores como o data de addlistener na documentacao do node
//   console.log(`Você digitou: ${value.toString().trim()}`)
// });


// Por ser uma promise, o resultado será capturado apenas uma única vez.
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener('data', function (value) { // verificar outros valores como o data de addlistener na documentacao do node
      // console.log(`Você digitou: ${value.toString().trim()}`)
      return resolve(value);
    });
  })
}

main().then(function (resultado) {
  console.log('resultado', resultado.toString());
})


