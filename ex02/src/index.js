var myStr="Paragon is the best!";
var myReverse;
var countCharacters;
function useMethods(str){
    myReverse =myStr.split("").reverse().join('');
    countCharacters =myStr.map();
    return {
        myReverse, 
        countCharacters
    };
}

console.log(myReverse);
console.log(countCharacters);