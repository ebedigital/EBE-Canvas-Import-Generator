/*
=========================================
EBE Canvas Import Generator

Module:
Validation Panel

Purpose:
Update Validation Summary

=========================================
*/

function updateValidationPanel(validation) {

    document.getElementById("validTeachers").textContent =
        validation.validTeachers;

    document.getElementById("warnings").textContent =
        validation.warnings;

    document.getElementById("errors").textContent =
        validation.errors;

    document.getElementById("invalidEmails").textContent =
        validation.invalidEmails;

    document.getElementById("duplicateTeachers").textContent =
        validation.duplicateTeachers;

}