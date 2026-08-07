const characters = ["A","B","C","D","E","F","G","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7",
    "8","9","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",":","|",";","?","/",".",",",">","<"
]

const charactersMinusSymbols = ["A","B","C","D","E","F","G","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7",
    "8","9"
]

const charactersMinusNumbers = ["A","B","C","D","E","F","G","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",":","|",";","?","/",".",",",">","<"
]

const charactersMinusBoth = ["A","B","C","D","E","F","G","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]


let symbolCheckbox = document.getElementById("symbol-checkbox")
let numberCheckbox = document.getElementById("number-checkbox")
let wantSymbols = false
let wantNumbers = false

symbolCheckbox.addEventListener("change",(e)=>{
    if(e.target.checked){
        wantSymbols = true
        console.log("clicked Symbols")
        console.log(passwordLength.value)
    }else{
        wantSymbols = false
        console.log("unclicked Symbols")
    }
})

numberCheckbox.addEventListener("change",(e)=>{
    if(e.target.checked){
        wantNumbers = true
        console.log("clicked Numbers")
    }else{
        wantNumbers = false
        console.log("unclicked Numbers")
    }
})

function characterGenerator(){
    if (wantSymbols && wantNumbers){
        let randomNo = Math.floor(Math.random()*characters.length)
        return characters[randomNo]
    }
    else if (wantNumbers){
        let randomNo = Math.floor(Math.random()*charactersMinusSymbols.length)
        return charactersMinusSymbols[randomNo]
    }
    else if (wantSymbols){
        let randomNo = Math.floor(Math.random()*charactersMinusNumbers.length)
        return charactersMinusNumbers[randomNo]
    }
    else{
        let randomNo = Math.floor(Math.random()*charactersMinusBoth.length)
        return charactersMinusBoth[randomNo]
    }
}

function reset(){
    passwordOne = ""
    passwordTwo = ""
    document.getElementById("empty-error-msg").textContent = ""
}

let passwordOne = ""
let passwordTwo = ""
let actionButton = document.getElementById("action-btn")
let displayBoxOne = document.getElementById("display-box-one")
let displayBoxTwo = document.getElementById("display-box-two")
let passwordLength = document.querySelector("#password-length-input")
function passwordGenerator(){
    if (passwordLength.value){
        for(let i=0; i<(passwordLength.value) ; i++){
        passwordOne += characterGenerator()
        passwordTwo += characterGenerator()
    }
    
    displayBoxOne.textContent = passwordOne
    displayBoxTwo.textContent = passwordTwo
    reset() 
    }
    else{
        document.getElementById("empty-error-msg").textContent = "select password length!"
    }
    
}


function copy(txt){
    if (passwordLength.value){
        navigator.clipboard.writeText(txt.textContent)
        alert("Password Copied!")
        console.log("copied") 
    }  
}

actionButton.addEventListener("click",passwordGenerator)
displayBoxOne.addEventListener("click",() => copy(displayBoxOne))
displayBoxTwo.addEventListener("click", () => copy(displayBoxTwo))

