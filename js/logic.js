const QuoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector("button"),
  auth = document.querySelector(".author .name"),
  soundBtn = document.querySelector(".sound"),
  copyBtn = document.querySelector(".copy");

function RandomQuote() {
  quoteBtn.innerText = "Loading Quote...";
  quoteBtn.classList.add("loading");
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      QuoteText.innerText = result.content;
      auth.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
  let utter = new SpeechSynthesisUtterance(
    `${QuoteText.innerText} by ${auth.innerText}`
  );
  speechSynthesis.speak(utter);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(QuoteText.innerText);
});

quoteBtn.addEventListener("click", RandomQuote);
