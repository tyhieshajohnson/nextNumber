// Initial counter value
let counter = 0;

// Function to update the result paragraph
function updateResult() {
    document.getElementById("result").innerText = "Result: " + counter;
}

// Event listener for the "Next" button
document.getElementById("nextNumberBtn").addEventListener("click", function() {
    // Increment the counter
    counter += 1;
    updateResult();
});

// Event listener for the "Previous" button
document.getElementById("previousBtn").addEventListener("click", function() {
    // Decrement the counter
    counter -= 1;
    updateResult();
});