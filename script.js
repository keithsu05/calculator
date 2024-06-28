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

let displayValue = ""
let memoryValue = ""
let operator = ""
let solution = ""
let runOnCalculation = false

//for some reason, = followd by 10x3 gives me probelms
const operate = function (firstNum,secondNum,operator){

if(displayValue==""||memoryValue==""){return "0"}
else{

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
}

const equalsButton = document.getElementById("equals")
equalsButton.addEventListener("click",()=>{
    solution = Math.round(operate(Number(memoryValue),Number(displayValue),`${operator}`) *10000)/10000
    display.textContent = solution
    memoryValue = solution
    displayValue=""
})



const clearButton = document.getElementById("clear")
clearButton.addEventListener("click",()=>{
    display.textContent = "0"
    displayValue =""
    memoryValue=""
    operator=""
    solution=""
    runOnCalculation= false
} )

const display = document.getElementById("display")
const populateDisplay = function(digit){
    display.textContent+=digit
    
}


let numberArray = ["zero","one","two","three","four","five","six","seven","eight","nine"
    
]

const createEventListener = function(){
    //use a loop to iterate 9 times
    // each iteration create an event listener for 
    //each digit
    for (let i=0;i<10;i++){
        
    
        //need array for one-nine
        //get the id of the element from the array
        //use the id to define a variable in js
        //add the event listener
        const elementId = `${numberArray[i]}`
        const elementSelect = document.getElementById(elementId);
        elementSelect.addEventListener("click",()=>{
            
            if(memoryValue==""&&displayValue==""){
                display.textContent=""
                populateDisplay(i)
                displayValue+=i
            }
            else{
            checkRunOnCalc();
            populateDisplay(i);
            displayValue+=i
            }
        })
        
//now probelms are coming up because variables are no longetr 
//saved in strings but in numbers cuz we start with null
//haiz
//lets stick with saving the strings in the variables
//before converting them to numbers
//done
        
        
    }
}

createEventListener()





//when operator is clicked./
const operatorArray = ["add","subtract","multiply","divide"]
const createOperatorEventListener= function(){
    
    for (let i=0;i<4;i++){
        
    
        //need array for one-nine
        //get the id of the element from the array
        //use the id to define a variable in js
        //add the event listener
        const elementId = `${operatorArray[i]}`
        const elementSelect = document.getElementById(`${elementId}`);
        elementSelect.addEventListener("click",()=>{
            //when clicked, change operator variable 
            //update first and second number
        
            
            operationFunction()
            operator= elementId
            display.textContent=solution
            //theres a problem with the sequencing of the operator(fixed)
            
        })
    }
}

createOperatorEventListener()
//when an operator is clicked with existing values under display and memory,
//operator variable is updated
//1.the operate function is carried out on those values first "what if its empty variable"
//2.solution is then stored under memory
//display value is returned to blank

//if operator is clicked when there is no existing memory value.
//operator value is updated
//memory is updated to that of display value
//display value is cleared for new incoming number
//NO OPERATION IS PERFORMED


//operator event listenr not wokring properly uhgugh


const operationFunction = function(){
if (displayValue && memoryValue) {
    
  solution = Math.round(operate(Number(memoryValue),Number(displayValue),`${operator}`) *10000)/10000
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
    else{
        display.textContent=''
        
}
}

//when an operator is clicked, any following number clicked should
//replace and show upon the display whilst the previous number is stored
//under memory
// to fix this, create a true/false runOnCalualtion variable?

        

        
        
    
