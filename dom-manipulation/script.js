// Array of quote objects
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", category: "Resilience" }
];

// Function to display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p><strong>Category:</strong> ${randomQuote.category}</p>
    <p>"${randomQuote.text}"</p>
  `;
}

// ✅ Function to add a new quote
function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  // Logic to add a new quote to the array and update DOM
  if (quoteText && quoteCategory) {
    const newQuote = { text: quoteText, category: quoteCategory };
    quotes.push(newQuote);

    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `
      <p><strong>Category:</strong> ${quoteCategory}</p>
      <p>"${quoteText}"</p>
    `;

    // Clear fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  }
}

// ✅ Event listener on the “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// ✅ Event listener for “Add Quote” button
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Display a random quote when the page loads
showRandomQuote();
