const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordOneEl = document.getElementById("password-one")
const passwordTwoEl = document.getElementById("password-two")
const generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", function() {
  passwordOneEl.textContent = createPassword()
  passwordTwoEl.textContent = createPassword()
})

function createPassword() {
  let password = ''

  for (let i = 0; i < 16; i++) {
    rand = Math.floor(Math.random() * characters.length)
    password+= characters[rand]
  }
  return password
}