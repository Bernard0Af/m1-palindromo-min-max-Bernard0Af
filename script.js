function isPalindrome(text){
    let result = "";
    let textLowerCase = text.toLowerCase().replaceAll(" ","")
    for(let i = textLowerCase.length -1; i >= 0; i--){
        result += textLowerCase[i]
    }
    if(result == textLowerCase){
        return true
    }
    return false
}

function arrayMaxMin(arr){
    let maxNum = 0;
    let minNum = 0;
    let secundNum = arr[0];
    let MaxMin = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] <= secundNum){
            secundNum = arr[i]
            minNum = arr[i]
        }
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
    }
        }   

    MaxMin =[minNum, maxNum] 
    return MaxMin
}

let arr = [3, 2, 1, 4, 5, 6, 7, 11, 9, 10]
console.log(arrayMaxMin(arr))