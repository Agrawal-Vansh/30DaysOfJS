// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
bt=document.getElementById('change');
bt.addEventListener('click',()=>document.querySelector('p').textContent="Para Changed")

// Task 2: Add a double-click event listener to an image that toggles its visibility.
bt2=document.getElementById('toggle');
bt2.addEventListener('dblclick', () => document.querySelector('img').classList.toggle('visible'));


// Task 3: Add a mouseover event listener to an element that changes its background color.
let p = document.querySelector('p');
p.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'beige';
});


// // Task 4: Add a mouseout event listener to an element that resets its background color.
p.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

document.getElementById('key').addEventListener('keydown', (e)=>console.log('Key pressed:', e.key));

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('key').addEventListener('keyup', function() {
    document.getElementById('display').textContent = this.value;
});

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData.entries()));
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById('mySelect').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = this.value;
});

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('parentElement').addEventListener('click', function(event) {
    if (event.target && event.target.matches('.childElement')) {
        console.log('Dynamically added child element clicked:', event.target.textContent);
    }
});

