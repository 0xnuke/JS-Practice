const digPow = (n, p) => {
    let split = n.toString().split('');
    let sum = 0
    
    for (let i=0; i<split.length; i++){
      sum+=Math.pow(parseInt(split[i]), (p+i))
    }
    if((sum/n)%1==0){
      return sum/n
    }else{
      return -1
    }
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(695, 2))
console.log(digPow(46288, 3))
