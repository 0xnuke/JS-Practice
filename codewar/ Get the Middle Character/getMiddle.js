const getMiddle = (s) => {
  let middleIndex = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return s[middleIndex];
  }
}

console.log(getMiddle("test"));     
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));  
