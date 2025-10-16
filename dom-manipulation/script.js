// Array of quote objects with text and category properties
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", category: "Resilience" }
];

// Function to display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  // Select a random quote from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Update the DOM
  quoteDisplay.innerHTML = `
    <p><strong>Category:</strong> ${quote.category}</p>
    <p>"${quote.text}"</p>
  `;
}

// Function to add a new quote
function addQuote() {
  // Get input values
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  // Check that both fields have values
  if (newQuoteText !== "" && newQuoteCategory !== "") {
    // Add new quote to quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Update the DOM to show the newly added quote
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `
      <p><strong>Category:</strong> ${newQuoteCategory}</p>
      <p>"${newQuoteText}"</p>
    `;

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  } else {
    alert("Please enter both quote text and category.");
  }
}

// Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Event listener for "Add Quote" button
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Display one random quote when the page loads
showRandomQuote();
