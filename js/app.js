let input = document.querySelector("#userInput");
let btn = document.querySelector("#inputBtn");
let display = document.querySelector("#output");
btn.addEventListener("click", () => {
  let beforeReverse = String(input.value);
  let reverseInString = Array.from(input.value).reverse();

  let afterReverse = reverseInString.join().replaceAll(",", "");

  if (beforeReverse.toLowerCase() == afterReverse.toLowerCase()) {
    display.innerHTML = `Yes "${beforeReverse.toLowerCase()}" is a palindrome`;
  } else {
    display.innerHTML = `No "${beforeReverse.toLowerCase()}" is Not a palindrome`;
  }
});
