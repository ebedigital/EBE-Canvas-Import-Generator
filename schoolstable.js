/*
=========================================
EBE Canvas Import Generator

Module:
Schools Table

Purpose:
Render Files To Process

=========================================
*/

function renderSchoolsTable() {

    const tbody = document.getElementById("schoolTableBody");

    tbody.innerHTML = "";

    appState.files.forEach((currentFile, index) => {

        const summary = currentFile.fileSummary;

        tbody.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${summary.fileName}</td>

            <td>${summary.schoolName}</td>

            <td>

                <select
                    class="template-select"
                    data-index="${index}">

                    <option value=""
                        ${summary.template === "" ? "selected" : ""}>
                        Select Template
                    </option>

                    <option value="Florida"
                        ${summary.template === "Florida" ? "selected" : ""}>
                        Florida
                    </option>

                    <option value="Nationwide"
                        ${summary.template === "Nationwide" ? "selected" : ""}>
                        Nationwide
                    </option>

                </select>

            </td>

            <td>${summary.teachers}</td>

            <td>

                <span class="status ${summary.status.toLowerCase()}">
                    ${summary.status}
                </span>

            </td>

            <td>

                <button
                    class="view-btn"
                    data-index="${index}"
                    ${summary.template === "" ? "disabled" : ""}>

                    View

                </button>

            </td>

        </tr>

        `;

    });

    /*
    =========================================
    View Button
    =========================================
    */

    document
        .querySelectorAll(".view-btn")
        .forEach(button => {

            button.addEventListener("click", function () {

                const index = Number(this.dataset.index);

                openSchoolDetails(appState.files[index]);

            });

        });
        /*
                =========================================
                Clear Button
                =========================================
                */

                const clearButton =
                    document.getElementById("btnClearAll");

                if(clearButton){

                    clearButton.disabled =
                        appState.files.length === 0;

                    clearButton.onclick = clearAll;

        }
     /*
=========================================
Clear All
=========================================
*/

function clearAll() {

    if (!confirm("Clear all loaded files?")) {

        return;

    }

    // ==========================
    // Clear Application State
    // ==========================

    appState.files = [];

    // ==========================
    // Refresh Table
    // ==========================

    renderSchoolsTable();

    // ==========================
    // Reset Validation Panel
    // ==========================

    updateValidationPanel({

        totalTeachers: 0,
        validTeachers: 0,
        invalidEmails: 0,
        duplicateIDs: 0,
        warnings: 0,
        errors: 0

    });

    // ==========================
    // Reset Progress Panel
    // ==========================

    document.getElementById("progressFill").style.width = "0%";
    document.getElementById("progressPercent").textContent = "0%";

    document.getElementById("currentStatus").textContent =
        "Waiting...";

    document.getElementById("currentSchool").textContent =
        "-";

    // ==========================
    // Close School Details
    // ==========================

    const modal =
        document.getElementById("schoolDetailsModal");

    if (modal) {

        modal.classList.add("hidden");

    }

    // ==========================
    // Reset File Input
    // ==========================

    const input =
        document.getElementById("excelInput");

    if (input) {

        input.value = "";

    }

    console.log("Application Reset");
}

            // Close Modal

            const modal =
                document.getElementById("schoolDetailsModal");

            if (modal) {

                modal.classList.add("hidden");

            }

            console.log("Application Reset");

        }
      

    /*
    =========================================
    Template Selection
    =========================================
    */

    document
        .querySelectorAll(".template-select")
        .forEach(select => {

            select.addEventListener("change", function () {

                try {

                    const index = Number(this.dataset.index);

                    const currentFile =
                        appState.files[index];

                    console.clear();

                    console.log("========================");
                    console.log("Template Changed");
                    console.log(this.value);
                    console.log("========================");

                    // ==========================
                    // Save Selected Template
                    // ==========================

                    currentFile.fileSummary.template =
                        this.value;

                    // ==========================
                    // Reset if no template
                    // ==========================

                    if (this.value === "") {

                        currentFile.metadata = {};

                        currentFile.users = [];

                        currentFile.courses = [];

                        currentFile.enrollments = [];

                        currentFile.fileSummary.status =
                            "Waiting";

                        renderSchoolsTable();

                        return;

                    }

                    // ==========================
                    // Load Metadata
                    // ==========================

                    currentFile.metadata = {

                        ...TEMPLATE_CONFIG[this.value],

                        schoolName:
                            currentFile.fileSummary.schoolName

                    };

                    console.log("Metadata");
                    console.log(currentFile.metadata);

                    // ==========================
                    // Generate Users
                    // ==========================

                    currentFile.users =
                        generateUsers(

                            currentFile.teachers,

                            currentFile.metadata

                        );

                    // ==========================
                    // Generate Courses
                    // ==========================

                    currentFile.courses =
                        generateCourses(

                            currentFile.teachers,

                            currentFile.metadata

                        );

                    // ==========================
                    // Generate Enrollments
                    // ==========================

                    currentFile.enrollments =
                        generateEnrollments(

                            currentFile.users,

                            currentFile.courses,

                            currentFile.metadata

                        );

                    currentFile.fileSummary.status =
                        "Ready";

                    console.table(currentFile.users);

                    console.table(currentFile.courses);

                    console.table(currentFile.enrollments);

                    renderSchoolsTable();

                }

                catch (error) {

                    alert(error.message);

                    console.error(error);

                }

            });

        });

