const solve = (s) => {
  let str = s.replace(/[aeiou]/gi, ' ')
  let arr = []
  let sum = 0
  for(let i=0; i<str.length; i++){
    let num = str[i].charCodeAt(0)-96
    if(str[i] == ' '){
      num = 0
    }
    sum+=num
    arr.push(sum)
    if(arr[i]==arr[i-1]){
      sum=0
    }
    }
  return Math.max(...arr)
};

console.log(solve("strength"))
