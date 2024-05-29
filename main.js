let newArray = [];
let numbers = [43,38,29,22,44,56,34,23,22,12,99,69,95]
for(a = 0; a < numbers.length; a++){
    if(numbers[a] % 2 == 0){
        newArray.push(numbers[a]);
    }
}console.log(newArray);