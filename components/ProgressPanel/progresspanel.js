function initializeProgressPanel() {

    console.log("Progress Panel Initialized");

    const progressFill = document.getElementById("progressFill");

    const progressPercent = document.getElementById("progressPercent");

    const currentStatus = document.getElementById("currentStatus");

    const currentSchool = document.getElementById("currentSchool");

    if (
        !progressFill ||
        !progressPercent ||
        !currentStatus ||
        !currentSchool
    ) {
        console.error("Progress Panel elements not found.");
        return;
    }

    progressFill.style.width = "45%";

    progressPercent.textContent = "45%";

    currentStatus.textContent =
        "Reading Teacher Implementation Sheets";

    currentSchool.textContent =
        "Spanish Fort Elementary";

}