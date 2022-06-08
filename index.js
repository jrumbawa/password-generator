let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')
let passwordThree = document.getElementById('password-three')
let passwordFour = document.getElementById('password-four')
let generateBtn = document.getElementById('generate-btn')
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

function setPasswords() {
  passwordOne.textContent = generatePassword()
  passwordTwo.textContent = generatePassword()
  passwordThree.textContent = generatePassword()
  passwordFour.textContent = generatePassword()
}
