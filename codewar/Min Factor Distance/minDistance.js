const minDistance = (n) => {
  let factor = [];
  let sum = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      factor.push(i);
    }
  }
  for (let i = 0; i < factor.length - 1; i++) {
    sum.push(factor[i + 1] - factor[i]);
  }
  return Math.min(...sum);
};

console.log(minDistance(13013));
