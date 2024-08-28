
const CorrectResposnes = [];
const IncorrectResponses = [];
const Total = 10;

class Quote {
    constructor({ person, quote, id }) {
        this.person = person;
        this.quote = quote;
        this.id = id;
    }
}

class QuoteGuess {
    constructor({ quoteId, guessedPerson }) {
        this.quoteId = quoteId;
        this.guessedPerson = guessedPerson;
    }
}


function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
            ];
    }
}


function selectQuizQuotes(total) {
    let rfkPotentialIndices = [...RfkQuotes.keys()];
    let macPotentialIndices = [...MacQuotes.keys()];


    if (total > rfkPotentialIndices.length || total > macPotentialIndices.length) { throw new Error("Total too large"); }

    const numRfkQuotes = Math.floor(Math.random() * total);
    const numMacQuotes = total - numRfkQuotes; 

    const choices = [];

        // Choose RFK quotes
    for (let i = 0; i < numRfkQuotes; ++i) {
        const choiceIdx = Math.floor(Math.random() * rfkPotentialIndices.length);
        choices.push(RfkQuotes[rfkPotentialIndices[choiceIdx]]);
        rfkPotentialIndices.splice(choiceIdx, 1);
    }

        // Choose Mac quotes
    for (let i = 0; i < numMacQuotes; ++i) {
        const choiceIdx = Math.floor(Math.random() * macPotentialIndices.length);
        choices.push(MacQuotes[macPotentialIndices[choiceIdx]]);
        macPotentialIndices.splice(choiceIdx, 1);
    }

    shuffle(choices);

    return choices;
}


function displayRandomQuotes() {
    const quoteContainerEl = document.getElementById('quoteContainer');
    const quotes = selectQuizQuotes(Total);

    let idx = 1;
    quotes.forEach((quote) => {
        quoteContainerEl.appendChild(makeQuoteDisplayEl(idx++, quote));
    });
}

function displayScore() {

}

function pick(id, opt) {
     const quote = AllQuotes.find(quote => quote.id === opt);
     if (quote === undefined) { return; }
     const chosenPerson = (id === 1) ? 'Mac' : 'RFK';
     if (chosenPerson === quote.person) {
        CorrectResposnes.push(quote);
     } else {
        IncorrectResponses.push(quote);
     }
}

displayRandomQuotes();