// const numbers=[0,1,2,3,4,5,6,7,8,9]; 
// console.log(document.getElementById('1').innerHTML);

let lockSimbols=[];
let firstNumber=[];
let secondNumber=[];
let i=0, fnCounter=0, snCounter=0; 

function addNumber(id){
    let valueClick = document.getElementById(id).innerHTML;
    let numberConverted = parseFloat(valueClick); //repetir depois

    document.getElementById('operation').innerHTML += valueClick;

    if((valueClick === '+') || (valueClick === '-') || (valueClick === '*') || (valueClick === '/')){
        i++;
        lockSimbols[i] = valueClick;
        console.log(lockSimbols[i]);
    }

    if((valueClick===".") && (lockSimbols[i]==undefined)){
        firstNumber[fnCounter] = valueClick;
        console.log(firstNumber[fnCounter]);
        fnCounter++;
    }else if((valueClick===".") && (lockSimbols[i]==='+' || lockSimbols[i]==='-' || lockSimbols[i]==='*' || lockSimbols[i]==='/')){
        secondNumber[snCounter] = valueClick;
        console.log(secondNumber[snCounter]);
        snCounter++;
    }

    if(((numberConverted >=0) && (numberConverted <=9) && (lockSimbols[i]===undefined))){
        firstNumber[fnCounter] = numberConverted;
        console.log(firstNumber[fnCounter]);
        fnCounter++;    
    }else if(((numberConverted >=0) && (numberConverted <=9) && (lockSimbols[i]==='+' || lockSimbols[i]==='-' || lockSimbols[i]==='*' || lockSimbols[i]==='/'))){
        secondNumber[snCounter] = numberConverted;
        console.log(secondNumber[snCounter]);
        snCounter++;
    }

    console.log("Numero 1: "+ firstNumber);
    console.log("Numero 2: "+ secondNumber);
}

function cleanDisplay(){
    document.getElementById('operation').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    i=0;
    for (let j=fnCounter;fnCounter==0;j--){
        fnCounter[j]=null;
    }
    for (let j=snCounter;snCounter==0;j--){
        snCounter[j]=null;
    }
}