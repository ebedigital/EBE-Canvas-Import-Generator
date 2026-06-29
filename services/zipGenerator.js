/*
=========================================
EBE Canvas Import Generator

Module:
ZIP Generator

Purpose:
Generate Canvas Import ZIP

=========================================
*/

async function generateCanvasZIP(currentFile){

    const zip = new JSZip();

    // ==========================
    // Create CSV
    // ==========================

    const usersCSV =
        generateCSV(currentFile.users);

    const coursesCSV =
        generateCSV(currentFile.courses);

    const enrollmentsCSV =
        generateCSV(currentFile.enrollments);

    // ==========================
    // Add Files
    // ==========================

    zip.file(
        "users.csv",
        usersCSV
    );

    zip.file(
        "courses.csv",
        coursesCSV
    );

    zip.file(
        "enrollments.csv",
        enrollmentsCSV
    );

    // ==========================
    // Generate ZIP
    // ==========================

    const content =
        await zip.generateAsync({

            type:"blob"

        });

    // ==========================
    // Download
    // ==========================

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(content);

    link.download =
        `CanvasImport-${currentFile.fileSummary.schoolName}.zip`;

    link.click();

    URL.revokeObjectURL(link.href);

    console.log("ZIP Generated");
}