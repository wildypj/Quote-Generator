//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [ 
    {
        quote: `"My mama always said life was like a box of chocolates. You never know what you're gonna get."` ,
        person: ` Forrest Gump `
    },
    {
        quote: `"You're gonna need a bigger boat. "`,
        person: `Jaws, 1975`
    },
    {
        quote: `"Houston, we have a problem."`,
        person: `Apollo 13, 1995 `
    },
    {
        quote: `"You can't handle the truth!"`,
        person: `A Few Good Men, 1992`
    },
    {
        quote: `"Magic Mirror on the wall, who is the fairest one of all?"`,
        person: `Snow White and the Seven Dwarfs, 1937 `
    },
    {
        quote: `"Keep your friends close, but your enemies closer."`,
        person: `The Godfather Part II, 1974`
    },
    {
        quote: `"Hasta la vista, baby."`,
        person: `Terminator 2: Judgment Day, 1991 `
    },
    {
        quote: `"Bond. James Bond"`,
        person: `Dr. No, 1962`
    },
    {
        quote: `"To infinity and beyond!"`,
        person: `Toy Story, 1995`
    },
    {
        quote: `"Toto, I've a feeling we're not in Kansas anymore."`,
        person: `he Wizard of Oz, 1939`
    },
    {
        quote: `"It's alive! It's alive!"`,
        person: `Frankenstein, 1931`
    },
    {
        quote: `"I'm the king of the world!"`,
        person: `Titanic, 1997`
    },
    {
        quote: `"May the Force be with you"`,
        person: `Star Wars, 1977`
    },
    {
        quote: `"Elementary, my dear Watson."`,
        person: `The Adventures of Sherlock Holmes, 1939`
    },
    {
        quote: `"Here's looking at you, kid."`,
        person: `Casablanca, 1942`
    },
    {
        quote: `"A martini. Shaken, not stirred."`,
        person: `Goldfinger, 1964`
    },
];

//function to get quote 
const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

//function to update the quote and person elements
const updateQuote = (newQuote) => {
    quote.innerText = newQuote.quote;
    person.innerText = newQuote.person;
}

//add event listener
btn.addEventListener('click', function() {
   const newQuote = getRandomQuote();
   updateQuote(newQuote);
})