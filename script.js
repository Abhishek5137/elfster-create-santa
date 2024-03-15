
const mapInput = document.getElementById("mapinput");
const btn = document.getElementById("btn1");
let placeholderCount = 4;

// Function to create and append a new input
function addNewInput() {
    console.log("Adding new input...");

    
    
    
    const newInput = document.createElement("input");
    newInput.type = "text";

    placeholderCount++;
    newInput.placeholder = `Enter Name ${placeholderCount}`;

    // Append the new input to the mapinput container
    mapInput.appendChild(newInput);
    

}

// Add event listener to the last input (for flexibility)

mapInput.addEventListener("keyup", function (event) {
    if (event.key) {
        const lastInput = mapInput.lastElementChild;
        if (lastInput.value.trim()) {
            addNewInput();
        }
    }
});
 

btn.addEventListener("click", function() {
    event.preventDefault(); // Prevent default form submission
  
    addNewInput();
  });



