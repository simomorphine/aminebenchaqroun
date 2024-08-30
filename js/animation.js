// Get all elements with the class 'item-left'
const items = document.querySelectorAll('.item-left');

// Function to pause all items
function pauseAllItems() {
    items.forEach(item => {
        item.style.animationPlayState = 'paused';
    });
}

// Function to resume all items
function resumeAllItems() {
    items.forEach(item => {
        item.style.animationPlayState = 'running';
    });
}

// Loop through each item and add event listeners
items.forEach(item => {
    // Pause all animations on mouseover of any item
    item.addEventListener('mouseover', () => {
        pauseAllItems();
    });

    // Resume all animations on mouseout of any item
    item.addEventListener('mouseout', () => {
        resumeAllItems();
    });
});
