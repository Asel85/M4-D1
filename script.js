function exercise1(){
let input1 = document.getElementById("1_1");
let input2 = document.getElementById("1_2");
if(input1.value == 50 || input2.value == 50 || parseInt(input1.value) + parseInt(input2.value)===50){
    console.log(true);
}else{
    console.log(false);
}
}

/*Esercizio 2*/

function myString(string){
    let splitSring = string.split("");
    splitSring.splice(1,1);
    let newString = splitSring.join("");
   // console.log(newString);
       
    }

myString("epicode");

/*Esercizio 3*/
function myNumbers(num1,num2){
    if(num1>40 && num2<60){
       return true
    }if(num1>70 && num2<100){
        return true
    }else{
        return false
    }

}
//console.log(myNumbers (65, 66))

/*Esercizio 4*/
function cityName(string){
if(string.startsWith("los")||string.startsWith("New")){
    return true
}else{
    return false
}
}
//console.log(cityName("New york"));

/*Esercizio 5*/

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
//console.log(sum)

/*Esercizio 6*/
let myArray = [2,3,8,9];
    if(myArray.includes(1) || myArray.includes(3)){
        console.log (true);
    }else{
        console.log (false);
    }

