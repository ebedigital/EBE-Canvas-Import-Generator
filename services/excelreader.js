/*
=========================================
EBE Canvas Import Generator

Module:
Excel Reader

Purpose:
Read Teacher Implementation Sheet

=========================================
*/

const appState = {

    files: []

};

/*
=========================================
Read Workbook
=========================================
*/

function readWorkbook(file) {

    console.log("VERSION 3");
    console.log("==========================");
    console.log("Workbook Received");
    console.log(file);
    console.log("==========================");

    const reader = new FileReader();

    reader.onload = function (e) {

        const data = new Uint8Array(e.target.result);

        const workbook = XLSX.read(data, {

            type: "array"

        });

        console.log("Workbook Loaded");

        const sheetName = workbook.SheetNames[0];

        console.log("Reading Sheet:");
        console.log(sheetName);

        const worksheet = workbook.Sheets[sheetName];

        const rows = XLSX.utils.sheet_to_json(worksheet, {

            header: 1

        });

        /*
        =========================================
        Find Teacher Header
        =========================================
        */

        let headerRow = -1;

        for (let i = 0; i < rows.length; i++) {

            const row = rows[i];

            if (!Array.isArray(row)) continue;

            if (

                row.includes("First Name") &&
                row.includes("Last Name")

            ) {

                headerRow = i;
                break;

            }

        }

        console.log("Teacher Header Row:", headerRow);

        if (headerRow === -1) {

            console.error("Teacher header not found.");

            return;

        }

        /*
        =========================================
        Read Teacher Rows
        =========================================
        */

        const teacherRows = XLSX.utils.sheet_to_json(

            worksheet,

            {

                range: headerRow,

                defval: "",

                blankrows: false

            }

        );

        const cleanRows = teacherRows.filter(row => {

            const first = (row["First Name"] || "").trim();

            const last = (row["Last Name"] || "").trim();

            return first !== "" || last !== "";

        });

        console.log("Teacher Rows:", cleanRows.length);

        console.table(cleanRows);

        /*
        =========================================
        Teacher Mapper
        =========================================
        */

        const teachers = mapTeachers(cleanRows);

        console.log("Mapped Teachers");

        console.table(teachers);

        /*
        =========================================
        Validation
        =========================================
        */

        const validation =

            validateTeachers(teachers);

        updateValidationPanel(validation);

        /*
        =========================================
        School Information
        =========================================
        */

        const schoolName =

            getSchoolName(file);

        /*
        =========================================
        Metadata

        (Will be filled after template selection)

        =========================================
        */

        const metadata = {};

        /*
        =========================================
        Empty Containers

        Generated AFTER selecting template

        =========================================
        */

        const users = [];

        const courses = [];

        const enrollments = [];

        /*
        =========================================
        School Summary
        =========================================
        */

        const fileSummary = {

            fileName: file.name,

            schoolName,

            template: "",

            teachers: teachers.length,

            status: "Waiting"

        };

        /*
        =========================================
        Store Current File
        =========================================
        */

        const currentFile = {

            workbook,

            metadata,

            fileSummary,

            teachers,

            users,

            courses,

            enrollments,

            validation

        };

        appState.files.push(currentFile);

        console.log("Application State");

        console.log(appState);

        renderSchoolsTable();

    };

    reader.readAsArrayBuffer(file);

}

/*
=========================================
Get School Name
=========================================
*/

function getSchoolName(file) {

    let schoolName = file.name;

    schoolName =

        schoolName.replace(".xlsx", "");

    schoolName =

        schoolName.replace(".xls", "");

    schoolName =

        schoolName.replace(

            "Top Score Teachers Digital Implementation Sheet - ",

            ""

        );

    return schoolName.trim();

}