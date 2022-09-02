const quoteText = document.querySelector(".quotes");
const linkButton = document.querySelector(".linkClick");

let ans;

linkButton.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((quote) => (ans = quote.quote));

  if (ans.length < 110) {
    quoteText.innerHTML = ans;
  } else {
    quoteText.innerHTML = "Kanye loves Kanye";
  }
});
