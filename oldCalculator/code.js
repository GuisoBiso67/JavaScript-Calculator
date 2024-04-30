// const numbers=[0,1,2,3,4,5,6,7,8,9]; 
// console.log(document.getElementById('1').innerHTML);

var lockSimbols=[];
var firstNumber=[];
var secondNumber=[];
let i=0;
let fnCounter=0;
let snCounter=0; 

function addNumber(id){
    let valueClick = document.getElementById(id).innerHTML;
    let numberConverted = parseFloat(valueClick); //repetir depois

    document.getElementById('operation').innerHTML += valueClick;

    if((valueClick === '+') || (valueClick === '-') || (valueClick === '*') || (valueClick === '/')){
        i++;
        lockSimbols[i] = valueClick;
        console.log("Operation: " + lockSimbols[i]);
    }

    if((valueClick===".") && (lockSimbols[i]==undefined)){
        firstNumber[fnCounter] = valueClick;
        // console.log(firstNumber[fnCounter]);
        fnCounter++;
    }else if((valueClick===".") && (lockSimbols[i]==='+' || lockSimbols[i]==='-' || lockSimbols[i]==='*' || lockSimbols[i]==='/')){
        secondNumber[snCounter] = valueClick;
        // console.log(secondNumber[snCounter]);
        snCounter++;
    }

    if(((numberConverted >=0) && (numberConverted <=9) && (lockSimbols[i]===undefined))){
        firstNumber[fnCounter] = numberConverted;
        // console.log(firstNumber[fnCounter]);
        fnCounter++;    
    }else if(((numberConverted >=0) && (numberConverted <=9) && (lockSimbols[i]==='+' || lockSimbols[i]==='-' || lockSimbols[i]==='*' || lockSimbols[i]==='/'))){
        secondNumber[snCounter] = numberConverted;
        // console.log(secondNumber[snCounter]);
        snCounter++;
    }

    console.log("Number 1: "+ firstNumber);
    console.log("Number 2: "+ secondNumber);
}

var firstNumberComplete;
var secondNumberComplete;
let fnCounter2=0;
let snCounter2=0;

function showResult(){
    
    console.log(firstNumber[fnCounter2]);
    console.log(secondNumber[snCounter2]);

    for (fnCounter2=0;fnCounter2<firstNumber.length;fnCounter2++){
        firstNumberComplete += firstNumber[fnCounter2];
        console.log(firstNumberComplete);
    }
    console.log(firstNumber[firstNumber.length-1]);
    
    for (snCounter2=0;snCounter2<secondNumber.length;snCounter2++){
        secondNumberComplete += secondNumber[snCounter2];
        console.log(secondNumberComplete);
        
    }
    console.log(secondNumber[secondNumber.length-1]);
    
    console.log(firstNumberComplete);
    console.log(secondNumberComplete);
}

function cleanDisplay(){
    
    window.location.reload();
    
    /*document.getElementById('operation').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    i=0;
    for (let j=fnCounter;fnCounter>-1;j--){
        fnCounter[j]=undefined;
        fnCounter--;
    }
    for (let j=snCounter;snCounter>-1;j--){
        snCounter[j]=undefined;
        snCounter--;
    }
    fnCounter=0;
    snCounter=0;*/
}