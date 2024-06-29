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

if(displayValue==""||memoryValue==""){return null}
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
const clearButton = document.getElementById("clear")
clearButton.addEventListener("click",()=>{
    clearVariables()
} )

const decimalButton = document.getElementById("decimal")
decimalButton.addEventListener("click",()=>{
    display.textContent+='.'
    displayValue+='.'
})

const display = document.getElementById("display")
const populateDisplay = function(digit){
    display.textContent+=`${digit}`
    
}

//trying how to fix the issue where i press equals multiple times
const equalsButton = document.getElementById("equals")
equalsButton.addEventListener("click",()=>{
    //this resolves the problem where = is clicked continusly before the solution is defined(idk how tofix)(fixed)
    if(!displayValue==""&&memoryValue==""&&solution==""){
        display.textContent=displayValue
        
        
    }

    //this resolves the probelm where = is clicked continuously after the solution is defined(this qwould result in all variables
    //being defined tho....)
    //unless we reset the operator everytime we press equals which creates the state where operator is ""//
    //but this would affect the above case ahhhh

    else if(operator==""){

    }
    //this resolves the problem where = is clicked early, equals just performs same function as clear, actually u dont need to clear it lol
    else if(displayValue==""||memoryValue==""){
    
    }

    //default operation with all variables defined
    else{solution = Math.round(operate(Number(memoryValue),Number(displayValue),`${operator}`) *10000)/10000
        display.textContent = solution
    memoryValue = solution
    displayValue=""
    
}
operator=""//keep this
})

const clearVariables = function(){
    display.textContent = "0"
    displayValue =""
    memoryValue=""
    operator=""
    solution=""
    runOnCalculation= false
}




let numberArray = ["zero","one","two","three","four","five","six","seven","eight","nine"
    
]

const createEventListener = function(){
    
    for (let i=0;i<10;i++){
        
    
      
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
        

        
        
    }
}

createEventListener()





//when operator is clicked./
const operatorArray = ["add","subtract","multiply","divide"]
const createOperatorEventListener= function(){
    
    for (let i=0;i<4;i++){
        
    
        
        const elementId = `${operatorArray[i]}`
        const elementSelect = document.getElementById(`${elementId}`);
        elementSelect.addEventListener("click",()=>{
            
            
            operationFunction()
            operator= elementId
            display.textContent=solution//this is the problem
            //how to i prevent the number from dissapoearing the first timei press an operator aghg
            //(this case is displayevalue is defined only before i press the operator)
            
        })
    }
}

createOperatorEventListener()


const operationFunction = function(){
    //this performs the operation in the even that displayvalue,memory value and operator are defined
if (displayValue && memoryValue) {
    
  solution = Math.round(operate(Number(memoryValue),Number(displayValue),`${operator}`) *10000)/10000
  display.textContent=solution  
  memoryValue = solution
    displayValue =""
    runOnCalculation = true
} 
//this reolves the empty disply on the first operation
//else if(displayValue&&!memoryValue){


//this resolves continuoils pressing of a single operator eg" 10 +++++
//if display value is empty but memory value is defined
//assign memory value to display value and perform the operation (done, great!)
else if(displayValue=="" && !memoryValue==""&& operator){
    displayValue=memoryValue
    solution= Math.round(operate(Number(memoryValue),Number(displayValue),`${operator}`) *10000)/10000
    memoryValue = solution
    displayValue =""
    runOnCalculation = true
}
//the below tries to resolve the continuos pressing of = after solution is defined, allowing for operators to be used even after pressing "=,="
else if(displayValue=="" && !memoryValue==""&& operator==""){
runOnCalculation=true
}



//WHAT DOES THIS DO 
//this jus passes on display value to memvalue when memoryvalue is yet to be defined(occurs at the beginning of use)
else {
    solution=displayValue
   memoryValue=displayValue
    displayValue=""
    runOnCalculation=true
}
}

const checkRunOnCalc = function(){
    if(runOnCalculation==false){}
    else{
        display.textContent=''
        
}
}

        

        
        
    
