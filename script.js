//your JS code here. If required.
// Select the element with the id 'level'
const targetElement = document.getElementById('level');

// Initialize the level count starting with the target element itself
let levelCount = 0;
let currentElement = targetElement;

// Traverse upwards through the DOM tree until reaching the root <html> element
while (currentElement) {
    levelCount++;
    currentElement = currentElement.parentElement;
}

// Display the result using alert
alert(`The level of the element is: ${levelCount}`);
