const { getPeople } = require('./service');

async function main() {
  try {
    const { results } = await getPeople(`a`);
    const familyLars = results.filter(function (item) {
      // Criar um novo array. não exclui as informações do BD, nem altera o array.
      // Por padrão precisa retornar um booleano
      // para informar se deve manter ou remover da lista
      // false remove da lista
      // true mantem
      // não encontrou = -1
      // encontrou = posicao no array
      // const result = item.name.toLowerCase().indexOf(`lars`) === -1;
      const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
      return result;
    });
    const names = familyLars.map(people => people.name)
    console.log(names);

  } catch (error) {
    console.error('Deu ruim', error);
  }
}

main();