document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.getElementById("sign-up-btn");
    const shortTourBtn = document.getElementById("short-tour-btn");
    const signUpSection = document.getElementById("signup");
    const tutorialSection = document.getElementById("tutorial");
    const landingSection = document.getElementById("landing");

    // Function to hide all sections
    function hideAllSections() {
        signUpSection.classList.add("hidden");
        tutorialSection.classList.add("hidden");
        landingSection.classList.add("hidden");
    }

    // Function to show a specific section
    function showSection(section) {
        hideAllSections();
        section.classList.remove("hidden");
    }

    // Event listener for "Sign-Up" button
    signUpBtn.addEventListener("click", function () {
        showSection(signUpSection);
    });

    // Event listener for "Short-Tour" button
    shortTourBtn.addEventListener("click", function () {
        showSection(tutorialSection);
    });

    // Function to handle tutorial step transitions
    function handleNextStep() {
        const currentStep = document.querySelector(".tutorial-step.active");
        const nextStepId = currentStep.querySelector(".next-step").getAttribute("data-next");
        const nextStep = document.getElementById(nextStepId);
        
        if (nextStep) {
            currentStep.classList.remove("active");
            nextStep.classList.add("active");
        }
    }

    // Event listener for "Next" buttons in tutorial
    tutorialSection.addEventListener("click", function (event) {
        if (event.target.classList.contains("next-step")) {
            handleNextStep();
        }
    });

    // Optionally, handle the "Finish" button
    tutorialSection.addEventListener("click", function (event) {
        if (event.target.classList.contains("complete-tutorial")) {
            hideAllSections();
            landingSection.classList.remove("hidden");
        }
    });
});
