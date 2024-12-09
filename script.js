document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-container img");
    
    // Adding mouse events
    galleryImages.forEach((image, index) => {
        image.addEventListener("mouseover", () => {
            console.log("Mouse over image at index: " + index);
            image.style.border = "5px solid blue";
        });

        image.addEventListener("mouseleave", () => {
            image.style.border = "none";
        });

        // Adding focus and blur events
        image.addEventListener("focus", () => {
            console.log("Focused on image at index: " + index);
            image.style.border = "5px solid green";
        });

        image.addEventListener("blur", () => {
            image.style.border = "none";
        });
    });

    // Adding onload event
    window.onload = function() {
        console.log("Gallery loaded");
        addTabFocus();
    };

    // Function to add tabfocus attribute
    function addTabFocus() {
        galleryImages.forEach((image) => {
            image.setAttribute("tabindex", "0");
            console.log("Tabindex added to image: " + image.alt);
        });
    }

    // Testing keyboard access
    galleryImages.forEach((image) => {
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                console.log("Enter pressed on: " + image.alt);
                // Additional functionality can be added here
            }
        });
    });
});
