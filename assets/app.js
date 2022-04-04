let quotes = ['a', 'b', 'c', 'd', 'e', 'f'];
let generate  = quotes[Math.floor(quotes.length * Math.random())];

document.getElementById("output").innerHTML = generate;