/*
=========================================
EBE Canvas Import Generator

Module:
School Details Modal

Purpose:
Display School Details
Display Teachers Preview
Display Users Preview

=========================================
*/

/*
=========================================
Global Variables
=========================================
*/

let activeSchool = null;


/*
=========================================
Open Modal
=========================================
*/

function openSchoolDetails(currentFile) {

    activeSchool = currentFile;

    const summary = currentFile.fileSummary;


    // ==========================
    // School Informations
    // ==========================

    document
        .getElementById("schoolDetailsModal")
        .classList.remove("hidden");

    document.getElementById("modalSchoolName").textContent =
        summary.schoolName;

    document.getElementById("detailSchoolName").textContent =
        summary.schoolName;

    document.getElementById("detailTeacherCount").textContent =
        summary.teachers;

    document.getElementById("detailTemplate").textContent =
        summary.template || "Not Selected";

    document.getElementById("detailStatus").textContent =
        summary.status;


        
        // ==========================
// ZIP Button
// ==========================

const zipButton =
    document.getElementById("btnGenerateZip");

if (zipButton) {

    zipButton.onclick = function () {

        generateCanvasZIP(activeSchool);

    };

}

    // ==========================
    // Teachers Preview
    // ==========================

    const teachersBody =
        document.getElementById("teachersTableBody");

    teachersBody.innerHTML = "";

    currentFile.teachers.forEach(teacher => {

        teachersBody.innerHTML += `

            <tr>

                <td>${teacher.firstName}</td>

                <td>${teacher.lastName}</td>

                <td>${teacher.email}</td>

                <td>${teacher.gradeLevel}</td>

            </tr>

        `;

    });

    // ==========================
    // Users Preview
    // ==========================

    const usersBody =
        document.getElementById("usersTableBody");

    usersBody.innerHTML = "";

    currentFile.users.forEach(user => {

        usersBody.innerHTML += `

            <tr>

                <td>${user.user_id}</td>

                <td>${user.login_id}</td>

                <td>${user.first_name}</td>

                <td>${user.last_name}</td>

                <td>${user.email}</td>

                <td>${user.status}</td>

            </tr>

        `;

    });

    /*
=========================================
Courses Preview
=========================================
*/

    const coursesBody =
            document.getElementById("coursesTableBody");

     coursesBody.innerHTML = "";

        currentFile.courses.forEach(course => {

            coursesBody.innerHTML += `

                <tr>

                    <td>${course.course_id}</td>

                    <td>${course.short_name}</td>

                    <td>${course.long_name}</td>

                    <td>${course.term_id}</td>

                    <td>${course.blueprint_course_id}</td>

                    <td>${course.status}</td>

                </tr>

            `;

        });       

        /*
=========================================
Enrollments Preview
=========================================
*/

    const enrollmentsBody =
            document.getElementById("enrollmentsTableBody");

        enrollmentsBody.innerHTML = "";

      currentFile.enrollments.forEach(enrollment => {

                enrollmentsBody.innerHTML += `

                    <tr>

                        <td>${enrollment.course_id}</td>

                        <td>${enrollment.user_id}</td>

                        <td>${enrollment.role}</td>

                        <td>${enrollment.status}</td>

                    </tr>

                `;

            });

    // ==========================
    // Reset Tabs
    // ==========================

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn => btn.classList.remove("active"));

    document
        .querySelector('[data-tab="teachers"]')
        .classList.add("active");

    document
        .querySelectorAll(".tab-panel")
        .forEach(panel => panel.classList.remove("active"));

    document
        .getElementById("teachersTab")
        .classList.add("active");

    // ==========================
    // Show Modal
    // ==========================

    document
        .getElementById("schoolDetailsModal")
        .classList.remove("hidden");

}

/*
=========================================
Close Modal
=========================================
*/

function closeSchoolDetails() {

    document
        .getElementById("schoolDetailsModal")
        .classList.add("hidden");

}

/*
=========================================
Tab Navigation
=========================================
*/

document.addEventListener("click", function (e) {


    // Close Header Button

    if (e.target.closest("#btnCloseModal")) {

        closeSchoolDetails();

        return;

    }

    // Close Footer Button

    if (e.target.closest("#btnCloseFooter")) {

        closeSchoolDetails();

        return;

    }

    // Tabs

    if (e.target.classList.contains("tab-btn")) {

        document
            .querySelectorAll(".tab-btn")
            .forEach(btn => btn.classList.remove("active"));

        e.target.classList.add("active");

        document
            .querySelectorAll(".tab-panel")
            .forEach(panel => panel.classList.remove("active"));

        const tab = e.target.dataset.tab;

        document
            .getElementById(tab + "Tab")
            .classList.add("active");

    }

});

/*
=========================================
ESC Key
=========================================
*/

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeSchoolDetails();

    }

});