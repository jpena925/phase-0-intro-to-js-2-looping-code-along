// Code your solutions in this file
function writeCards(arr, event){
    const namesArr = [];

    for(let i = 0; i < arr.length; i++){
        namesArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }

    return namesArr;
}

function countDown(posNum){
    while(posNum >= 0){
        console.log(posNum);
        posNum--;
    }
}