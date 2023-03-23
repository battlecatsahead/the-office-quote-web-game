const quotes = [
    {
        quote: "Bears, beets, Battlestar Galactica.",
        speaker: "Jim"
    },
    {
        quote: "That's what she said.",
        speaker: "Michael"
    },
    {
        quote: "I declare bankruptcy!",
        speaker: "Michael"
    },
    {
        quote: "I'm not superstitious, but I am a little stitious.",
        speaker: "Michael"
    },
    {
        quote: "Dwight, you ignorant slut!",
        speaker: "Michael"
    },
    {
        quote: "Identity theft is not a joke, Jim!",
        speaker: "Dwight"
    }
];

function displayQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteContainer = document.querySelector(".quote");
    quoteContainer.textContent = randomQuote.quote;
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
    const guess = document.querySelector("#guess").value;
    const randomQuote = quotes.find(quote => quote.quote === document.querySelector(".quote").textContent);
    if (guess.toLowerCase() === randomQuote.speaker.toLowerCase()) {
        alert("You're correct!");
    } else {
        alert(`Sorry, it was ${randomQuote.speaker}.`);
    }
    document.querySelector("#guess").value = "";
    displayQuote();
});

window.addEventListener("load", displayQuote);