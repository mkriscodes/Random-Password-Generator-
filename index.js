const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')
let clearButton = document.getElementById('clear')
let isGenerated = false

function getRandomChar () {
    for(let i = 0; i < characters.length; i++) {
        let char = Math.floor(Math.random() * characters.length)
        return characters[char]
    }
}

function generatePassword () {
    if(isGenerated === false) {
        let passwordLength = 15
        for(let i = 0; i < passwordLength; i++) {
            passwordOne.textContent += getRandomChar ()
            passwordTwo.textContent += getRandomChar ()
            isGenerated = true
        }
    }
}

clearButton.addEventListener('click', function () {
    passwordOne.textContent = ''
    passwordTwo.textContent = ''
    isGenerated = false
})
