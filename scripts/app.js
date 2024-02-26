"use strict";

// Dilakshan T.S
// 100886716
// Date completed: 05-02-2024

(function() {

    function DisplayHomePage() {
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function() {
            location.href = "about.html";
        });

        // STEP 3
        let MainContent = document.querySelector("main");

        // STEP 4
        let MainParagraph = document.createElement("p");

        // STEP 5
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "We as a team are very thrilled to welcome you to our little website.";

        // STEP 6
        MainContent.appendChild(MainParagraph);

        // STEP 7
        let DocumentBody = document.body;
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";
    }

    function DisplayProjectsPage() {
        let DocumentBody = document.body;
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";
    }

    function DisplayServicesPage() {
        let DocumentBody = document.body;
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";
    }

    function DisplayAboutUsPage() {
        let DocumentBody = document.body;
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";
    }

    function DisplayContactPage() {
        let DocumentBody = document.body;
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";
    }

    function Start() {
        console.log("App Started!");
        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Projects":
                DisplayProjectsPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }

    window.addEventListener("load", Start);

})();
