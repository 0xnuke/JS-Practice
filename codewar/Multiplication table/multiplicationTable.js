const multiplicationTable = (num) =>{
  const arr = [];

for (let i = 1; i <= num; i++) {
  const temp = [];
  for (let j = 1; j <= num; j++) {
    temp.push(i * j);
  }
  arr.push(temp);
}
    return arr;
}

console.log(multiplicationTable(3))
