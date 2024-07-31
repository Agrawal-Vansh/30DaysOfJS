// Task 1: Select an HTML element by its ID and change its text content
document.getElementById('greet').innerHTML = 'Namaste Duniya !!';

// Task 2: Select an HTML element by its class and change its background color
document.querySelector('.container').style.backgroundColor = 'beige';

// Task 3: Create a new div element with some text content and append it to the body
const div2 = document.createElement('div');
div2.textContent = 'This is a new div element';
document.body.appendChild(div2);

// Task 4: Create a new li element and add it to an existing ul list
let linew=document.createElement('li');
linew.textContent="Blue";
document.querySelector(".existingList").appendChild(linew);

// Task 5: Select an HTML element and remove it from the DOM

linew.parentNode.removeChild(linew);

// Task 6: Remove the last child of a specific HTML element

const parentElement = document.getElementsByClassName('existingList')[0];
parentElement.removeChild(parentElement.lastElementChild);

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
document.querySelector('img').setAttribute('alt', 'AlternateText_via_js.jpg');

// Task 8: Add and remove a CSS class to/from an HTML element
const element = document.getElementById('list');
element.classList.add('listChild');
element.classList.remove('listChild');

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
let bt=document.querySelector('button')
bt.addEventListener('click',()=> bt.innerHTML="You have clicked");


// Task 10: Add a mouseover event listener to an element that changes its border color
bt.addEventListener('mouseover',()=>this.style.textcolor="red");

