let values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()'
let arrayOfValues = values.split('')

function generatePassword() {
  let password = ''
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * arrayOfValues.length)
    password += arrayOfValues[randomIndex]
  }
  return password
}

console.log(generatePassword())
