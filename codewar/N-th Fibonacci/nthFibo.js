const nthFibo = (n) =>{
  let fibo = [0,1]
    for(let i=2; i<n; i++){
      fibo[i] = fibo[i-1] + fibo[i-2]
  }
  return fibo[n-1]
}

console.log(nthFibo(4))
