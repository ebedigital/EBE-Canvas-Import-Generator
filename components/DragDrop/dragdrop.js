/*
=========================================
EBE Canvas Import Generator

Module:
Drag & Drop

Purpose:
Upload Single or Multiple
Teacher Implementation Sheets

=========================================
*/

function initializeDragDrop() {

    console.log("=== initializeDragDrop called ===");

    const dropZone =
        document.querySelector(".drop-zone");

    console.log(dropZone);

    if (!dropZone) {

        console.error("Drop Zone not found.");

        return;

    }

    // =====================================
    // Prevent Browser Default
    // =====================================

    document.addEventListener("dragover", function(e){

        e.preventDefault();

    });

    document.addEventListener("drop", function(e){

        e.preventDefault();

    });

    // =====================================
    // Drag Over
    // =====================================

    dropZone.addEventListener("dragover", function(e){

        e.preventDefault();
        e.stopPropagation();

        dropZone.classList.add("drag-over");

    });

    // =====================================
    // Drag Leave
    // =====================================

    dropZone.addEventListener("dragleave", function(){

        dropZone.classList.remove("drag-over");

    });

    // =====================================
    // Drop Files
    // =====================================

    dropZone.addEventListener("drop", function(e){

        e.preventDefault();
        e.stopPropagation();

        dropZone.classList.remove("drag-over");

        const files =
            Array.from(e.dataTransfer.files);

        if(files.length === 0){

            return;

        }

        console.log("Files Dropped");

        console.table(files);

        files.forEach(file => {

            // Excel only

            if(

                file.name.endsWith(".xlsx") ||

                file.name.endsWith(".xls")

            ){

                console.log("Reading:");

                console.log(file.name);

                readWorkbook(file);

            }

        });

    });

}