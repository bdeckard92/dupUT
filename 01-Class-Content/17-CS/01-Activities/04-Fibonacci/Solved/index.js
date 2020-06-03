// Recursive Approach
function recursive(num) {
  if (num <= 2) return 1;

  return recursive(num - 1) + recursive(num - 2);
}

const x = recursive(10);
console.log(x);

// Linear Approach
function linear(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

const y = linear(10);
console.log(y);
