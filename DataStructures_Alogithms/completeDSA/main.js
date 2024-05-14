function sumOfNaturalNumber(num) {
  //sum of natural numbers: tổng số tự nhiên
  //   let sum = 0;
  //   for (let i = 1; i <= num; i++) {
  //     sum = sum + i;
  //   }
  return (num * (num + 1)) / 2;
}
console.log(sumOfNaturalNumber(5));
console.log(sumOfNaturalNumber(10));
console.log(
  "////////////////////////////////////////////////////////////////////"
);
//question 2: sum of digits of a number
//1287 1+2+8+7 = 18;
function sumOfDigits(num) {
  sum = 0;
  while (num > 0) {
    sum += num % 10; //cho ta chữ số cuối cùng của num
    num = Math.floor(num / 10);
    //Sau đó, loại bỏ chữ số cuối cùng của num bằng cách lấy phần nguyên của num khi chia cho 10 (Math.floor(num / 10)). Điều này làm giảm num xuống bằng cách loại bỏ chữ số cuối cùng.
    console.log(sum);
  }
  return sum;
}
console.log(sumOfDigits(1287));
console.log(
  "////////////////////////////////////////////////////////////////////"
);
//Palindrome number
var isPalindrome = function (x) {
  let copyNum = x,
    reverseNum = 0;
  while (copyNum > 0) {
    //121
    const lastDigit = copyNum % 10; //lấy chữ số cuối ví dụ 123 = 3
    // console.log(lastDigit); //3
    reverseNum = reverseNum * 10 + lastDigit;
    // console.log(reverseNum); //3
    copyNum = Math.floor(copyNum / 10); //12
    // console.log(copyNum);
  }
  if (x === reverseNum) {
    return true;
  } else return false;
};
console.log(isPalindrome(123));
console.log(
  "////////////////////////////////////////////////////////////////////"
);
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i < n; i++) {
    next = prev + curr;
    console.log(next);
    prev = curr;
    console.log(prev);
    curr = next;
    console.log(curr);
  }
  console.log(next);
  return next;
};
console.log(fib(5));
