const add =function(a,b){

    return a+b
    

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

let displayValue = ''
let memoryValue = ''
let operator = ''
let solution = ''

const operate = function (firstNum,secondNum,operator){
switch(operator){
    case "add":
        return add(firstNum,secondNum)
        break;
    case "subtract":
        return subtract(firstNum,secondNum)
        break;
    case "multiply":
        return multiply(firstNum,secondNum)
        break;
    case "divide":
        return divide(firstNum,secondNum)
        break;
        
}

}

const equalsButton = document.getElementById("equals")
equalsButton.addEventListener("click",()=>{
    solution = operate(Number(displayValue),Number(memoryValue),operator)
    display.textContent = solution
    memoryValue = solution
    displayValue=""
})

//somethings wrong with the equals button
//i thinkits cuz the display and memory vlaues are calcualted as strings
//fixed

const clearButton = document.getElementById("clear")
clearButton.addEventListener("click",()=>{
    display.textContent = ""
    displayValue =""
    memoryValue=""
    operator=''
    solution=""
} )

const display = document.getElementById("display")
const populateDisplay = function(digit){
    display.textContent+=digit
    
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
            displayValue+=i+1
        })
        

        
        
    }
}

createEventListener()





//when operator is clicked./
const operatorArray = ["add","subtract","multiply","divide"]
const createOperatorEventListener= function(){
    
    for (let i=0;i<3;i++){
        
    
        //need array for one-nine
        //get the id of the element from the array
        //use the id to define a variable in js
        //add the event listener
        const elementId = `${operatorArray[i]}`
        const elementSelect = document.getElementById(`${elementId}`);
        elementSelect.addEventListener("click",()=>{
            //when clicked, change operator variable 
            //update first and second number
        
            operator= elementId
            operationFunction()

            display.textContent=solution
        })
    }
}

createOperatorEventListener()
//when an operator is clicked with existing values under display and memory,
//operator variable is updated
//the operate function is carried out on those values first "what if its empty variable"
//solution is then stored under memory
//display value is returned to blank

//if operator is clicked when there is no existing memory value.
//operator value is updated
//memory is updated to that of display value
//display value is cleared for new incoming number
//NO OPERATION IS PERFORMED


//operator event listenr not wokring properly uhgugh

let runOnCalculation = false
const operationFunction = function(){
if (displayValue && memoryValue) {
    
  solution = operate(Number(displayValue),Number(memoryValue),`${operator}`)
  display.textContent=solution  
  memoryValue = solution
    displayValue =""
    runOnCalculation = true
} 
else {
   memoryValue=displayValue
    displayValue=""
}
}

const checkRunOnCalc = function(){
    if(runOnCalculation==false){}
    else{//on clicking new digit, display is replaced with numeber}
        //
}
}

//when an operator is clicked, any following number clicked should
//replace and show upon the display whilst the previous number is stored
//under memory
// to fix this, create a true/false runOnCalualtion variable?

        

        
        
    
