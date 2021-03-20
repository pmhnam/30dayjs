// Create an index.html file and put four p elements as above: 
//Get the first paragraph by using document.querySelector(tagname) and tag name
console.log('in ra thẻ p đầu tiên: ', document.querySelector('p'));
console.log('in ra thẻ p đầu tiên: ', document.getElementsByTagName('p')[0]);


// Get get each of the the paragraph using document.querySelector('#id') and by their id
console.log('in ra thẻ p bằng id: ', document.querySelector('#paragraph'));
console.log('in ra thẻ p bằng id: ', document.getElementById('paragraph'));


// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
console.log('in ra các thẻ p: ', document.querySelectorAll('p'));
console.log('in ra các thẻ p: ', document.getElementsByTagName('p'));


// Loop through the nodeList and get the text content of each paragraph
const nodeList = document.querySelectorAll('p')
// console.log('test vòng lặp', nodeList);
nodeList.forEach(val => console.log('forEach:', val.textContent))


// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// const nodeList = document.querySelectorAll('p')
nodeList[3].textContent = 'Fourth Paragraph'
console.log('text content của nodeList[3]:', nodeList[3].textContent);


// Set id and class attribute for all the paragraphs using different attribute setting methods
nodeList.forEach(val => val.className = 'useClassName')
let id=0;
nodeList.forEach(val => {val.id = id;id++})


// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
nodeList.forEach(val => {
    val.style.color = 'yellow'
    val.style.background = 'gray'
    val.style.border = '1px solid #000' 
    val.style.fontSize = '20px' 
    val.style.fontFamily = 'arial' 
})



// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, 
//and the second and the fourth paragraph a red color
nodeList.forEach(val => {val.id % 2 == 0 ? val.style.color = 'red':val.style.color = 'green'})


// Set text content, id and class to each paragraph
//done


// Develop the following application, use the following HTML elements to get started with. 
// You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red



