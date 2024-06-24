const add =function(a,b){
    return a+b
    num

}

const subtract =function(a,b){
    return a-b

}

const multiply = function(a,b){
    return a*b

}

const divide =function(a,b){
return a/b
}

let firstNum = ''
let secondNum = ''
let operator = ''

const operate = function (firstNum,secondNum,operator){
switch(operator){
    case "+":
        return add(firstNum,secondNum)
        break;
    case "-":
        
}

}

let displayValue = ''

const display = document.getElementById("display")

const populateDisplay = function(digit){
    display.textContent=digit
    
}
let numberArray = ["one","two","three","four","five","six","seven","eight","nine"
    
]

const createEventListener = function(){
    //use a loop to iterate 9 times
    // each iteration create an event listener for 
    //each digit
    for (let i=0;i<9;i++){
        
    
        //need array for one-nine
        //get the id of the element from the array
        //use the id to define a variable in js
        //add the event listener
        const elementId = `${numberArray[i]}`
        const elementSelect = document.getElementById(elementId);
        elementSelect.addEventListener("click",()=>{
            populateDisplay(i+1);
        })
        displayValue=i+1

        
        
    }
}

createEventListener()
