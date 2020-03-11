/*
 0 - obter um usuario
 1- Obter numero de telefone do usuario a partir do seu id
 2 - Obter endereço do usuario pelo ID
*/

//Import de módulo interno do node.js
// const util = require('util');
// const getAdressAsync = util.promisify(getAdress);

function getUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "Aladin",
      })
    }, 1000);
  })

}

function getPhone() {
  return new Promise(function resolvePhone(resolve, reject) {
    setTimeout(() => {
      return resolve({
        ddd: "48",
        phone: "98546213",
      })
    }, 2000);
  })
}

function getAdress() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        street: "Street of crazy",
        number: 0,
      })
    }, 2000);
  })
}


main()

async function main() {
  try {
    console.time('execucao-promise');
    const user = await getUser();

    // Execução promise em 5s
    // const phone = await getPhone(user.id);
    // const adress = await getAdress(user.id);

    // Execução promise em 3s, as duas promises depende do usuario.
    const result = await Promise.all([
      getPhone(user.id),
      getAdress(user.id),
    ])
    const adress = result[1];
    const phone = result[0];
    console.log(`
      Nome: ${user.name},
      Telefone: (${phone.ddd}) ${phone.phone},
      Endereço: ${adress.street}, ${adress.number}
    `)
    console.timeEnd('execucao-promise');
  } catch (error) {
    console.error('Deu ruim', error);
  }
}



// Promisse 
// const UserPromise = getUser();

// UserPromise
//   .then(function (user) {
//     return getPhone()
//       .then(function resolvePhone(result) {
//         return {
//           user: {
//             nome: user.name,
//             id: user.id
//           },
//           phone: result
//         }
//       })
//   })
//   .then(function (result) {
//     return getAdress()
//       .then(function resolveAdress(res) {
//         return {
//           user: result.user,
//           phone: result.phone,
//           adress: res,
//         }
//       })
//   })
//   .then(function (result) {
//     console.log('Resultado:', result)
//   })
//   .catch(function (error) {
//     console.error('Deu ruim: ', error)

//   })



// getUser(function resolveUser(error, user) {
//   if (error) {
//     console.log("Deu ruim em usuario", error)
//     return;
//   }
//   getPhone(user.id, function resolvePhone(error1, phone) {
//     if (error1) {
//       console.log("Deu ruim em Phone", error1)
//       return;
//     }

//     getAdress(user.id, function resolveAdress(error2, adress) {
//       if (error2) {
//         console.log("Deu ruim em ADRESS", error2)
//         return;
//       }
//       console.log(`
//       ID: ${user.id},
//       Nome: ${user.nome},
//       Telefone: (${phone.ddd}) ${phone.phone},
//       Endereço: ${adress.street}, ${adress.number}.
//     `)
//     })
//   })
// })