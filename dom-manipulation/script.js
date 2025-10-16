// script.js — Task 2: Dynamic Quote Generator with Filtering System

// Load quotes from localStorage or use defaults
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", category: "Resilience" }
];

// Display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (!quoteDisplay) return;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p><strong>Category:</strong> ${quote.category}</p>
    <p>"${quote.text}"</p>
  `;
}

// Add a new quote and update everything
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newQuoteText = textInput.value.trim();
  const newQuoteCategory = categoryInput.value.trim();

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Save quotes to localStorage
    localStorage.setItem("quotes", JSON.stringify(quotes));

    // Update dropdown with new category
    populateCategories();

    // Show newly added quote
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `
      <p><strong>Category:</strong> ${newQuoteCategory}</p>
      <p>"${newQuoteText}"</p>
    `;

    textInput.value = "";
    categoryInput.value = "";
  } else {
    alert("Please enter both quote and category.");
  }
}

/**
 * populateCategories()
 * Extracts unique categories from quotes and populates the dropdown
 */
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  if (!categoryFilter) return;

  // Get unique categories
  const categories = [...new Set(quotes.map(q => q.category))];

  // Clear old options
  categoryFilter.innerHTML = `<option value="all">All Categories</option>`;

  // Add categories dynamically
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });

  // Restore last selected category
  const savedCategory = localStorage.getItem("selectedCategory");
  if (savedCategory) {
    categoryFilter.value = savedCategory;
    filterQuotes(); // apply the filter immediately
  }
}

/**
 * filterQuotes()
 * Filters and displays quotes based on selected category
 */
function filterQuotes() {
  const categoryFilter = document.getElementById("categoryFilter");
  const selectedCategory = categoryFilter.value;

  // Save selected category to localStorage
  localStorage.setItem("selectedCategory", selectedCategory);

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = "";

  // Filter quotes
  const filteredQuotes = selectedCategory === "all"
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  // Display filtered quotes
  if (filteredQuotes.length === 0) {
    quoteDisplay.innerHTML = `<p>No quotes found for this category.</p>`;
  } else {
    filteredQuotes.forEach(quote => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>Category:</strong> ${quote.category}</p>
        <p>"${quote.text}"</p>
      `;
      quoteDisplay.appendChild(div);
    });
  }
}

// Event listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Initialize page
populateCategories();
filterQuotes();
showRandomQuote();

// Make functions global for checker
window.populateCategories = populateCategories;
window.filterQuotes = filterQuotes;
window.addQuote = addQuote;
window.showRandomQuote = showRandomQuote;
