//VARIABLES
/* grabs the id of the first modal and set it equal to modal */
var modal = document.getElementById("modal");
/* this grabs the button witht the id "change"
this allows us to call a function with a click later */
var changeBtn = document.getElementById("change");
// grabs the preview
var preview = document.getElementById("preview");

//FUNCTIONS

/*Sets the preview box color in the modal to the currently selected color*/
function Preview() {
    /* gets the currently selected colors value and sets it equal to color*/
    color = document.querySelector('input[name="colors"]:checked').value;
    // Log what color
    console.log("The color is " + color);
    //Change preview color
    preview.style.background = color;
}

// Function to change color
// Changes the color
function changeColor() {
    //Log what the color was changed to
    console.log("The color is: " + color);
    // Change the background color
    document.body.style.background = color;
}

// Function to open modal
// Open color changing modal
changeBtn.onclick = function() {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

// Function to close modal when user clicks close button
function Close() {
    // close modal

    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    // reset preview
    preview.style.background = "#1a1a1a";
    //Deselect any currently selected color

    document.querySelector('input[name="colors"]:checked').checked = false;
}

// closes model on window click
window.onclick = function(event) {
    if (event.target == modal) {
        // close modal
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        //resets preview
        preview.style.background = "#1a1a1a";
        //Deselect any currently selected color

        document.querySelector('input[name="colors"]:checked').checked = false;
    }
}