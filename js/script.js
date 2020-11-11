/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'Your greatest awakening comes, when you are aware about your infinite nature.',
    source: 'Amit Ray, Meditation: Insights and Inspirations', 
    year: '1980'
  }, 
  {
    quote: `I give no sources, because it is indifferent to me
            whether what I have thought has already been
            thought before me by another.`,
    source: 'Ludwig Wittgenstein, Tractatus Logico-Philosophicus'
  }, 
  {
    quote: `Most folks are about as happy as they make up their minds to be.`,
    source: `Abraham Lincoln`
  }, 
  {
    quote: `The secret of happiness is to make others believe they are the cause of it.`,
    source: `Al Batt`
  }, 
  {
    quote: `Happiness is nothing more than good health and a bad memory.`,
    source: `Albert Schweitzer`
  }, 
  {
    quote: `The happiness of a man in this life does not consist in the absence but in the mastery of his passions.`,
    source: `Alfred Lord Tennyson`
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
 // between zero and the last index in the `quotes` array
  let randomNumber = Math.floor(Math.random() * Math.floor(quotes.length));

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomQuote = quotes[randomNumber];

  // 3. Return the variable storing the random quote object
  return randomQuote
}




/***
 * `printQuote` function
***/

function printQuote(){

  let printQuoteObj = getRandomQuote();
  let printQuote = printQuoteObj['quote'];
  let printQuoteSource = printQuoteObj['source'];
  let printQuoteYear;
  if(printQuoteObj['year']){
    printQuoteYear = printQuoteObj['year'];
  } else {
    printQuoteYear = 'No body knows'
  }
  
  let print = `
        <p class="quote">${printQuote}</p>
        <p class="source">${printQuoteSource}<span class="citation">Twitter</span><span class="year">Year: ${printQuoteYear}</span></p>
  `;
  return document.getElementById("quote-box").innerHTML = print;

}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//document.getElementById("load-quote").addEventListener("click", alert, false);
document.getElementById('load-quote').addEventListener("click", printQuote, false);