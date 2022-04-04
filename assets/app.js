let quotes = ['It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.', 'The secret of getting ahead is getting started.', 'Never put off till tomorrow what you can do the day after tomorrow.', 'If its your job to eat a frog, its best to do it first thing in the morning. And If its your job to eat two frogs, its best to eat the biggest one first.', 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.', 'Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.'];
// let generate  = quotes[Math.floor(quotes.length * Math.random())];

// document.getElementById("output").innerHTML = generate;

// generate = addEventListener('click', output);

function display(){
 let generate  = quotes[Math.floor(quotes.length * Math.random())];
 document.getElementById('output').innerHTML=generate;

}

function save(){
document.getElementById('savedq').innerHTML= display(   ) ;
}