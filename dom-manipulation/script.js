// Quotes array with objects containing text and category
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", category: "Resilience" }
];

// Function to display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  // Select a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Update DOM
  quoteDisplay.innerHTML = `
    <p><strong>Category:</strong> ${quote.category}</p>
    <p>"${quote.text}"</p>
  `;
}

// Function to add a new quote
function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (quoteText !== "" && quoteCategory !== "") {
    // Add the new quote to the array
    quotes.push({ text: quoteText, category: quoteCategory });

    // Update the DOM directly after adding
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `
      <p><strong>Category:</strong> ${quoteCategory}</p>
      <p>"${quoteText}"</p>
    `;

    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  } else {
    alert("Please enter both a quote and category!");
  }
}

// Event listener for “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Event listener for “Add Quote” button
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Show one quote on page load
showRandomQuote();
