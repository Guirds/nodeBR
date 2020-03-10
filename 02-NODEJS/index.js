/*
 0 - obter um usuario
 1- Obter numero de telefone do usuario a partir do seu id
 2 - Obter endereço do usuario pelo ID
*/


function getUser() {
  return new Promise(function resolvePromisse(resolve, reject) {
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
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return resolve({
        street: "Street of crazy",
        number: 0,
      })
    }, 2000);
  })
}

const UserPromise = getUser();

UserPromise
  .then(function (user) {
    return getPhone(user.id)
      .then(function resolvePhone(result) {
        return {
          user: {
            nome: user.name,
            id: user.id
          },
          phone: result
        }
      })
  })
  .then(function (result) {
    console.log('Resultado: ', result)
  }).catch(function (error) {
    console.error('Deu ruim: ', error)
  })



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