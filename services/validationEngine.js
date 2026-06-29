/*
=========================================
EBE Canvas Import Generator

Module:
Validation Engine

Purpose:
Validate Teachers
(Canvas Validation v2)

=========================================
*/

function validateTeachers(teachers) {

    const result = {

        totalTeachers: teachers.length,

        validTeachers: 0,

        invalidEmails: 0,

        warnings: 0,

        errors: 0,

        duplicateIDs: 0,

        details: []

    };

    const emailOwners = new Map();

    teachers.forEach((teacher, index) => {

        let hasError = false;

        const firstName = (teacher.firstName || "").trim();

        const lastName = (teacher.lastName || "").trim();

        const email = (teacher.email || "").trim().toLowerCase();

        const grade = String(teacher.gradeLevel || "").trim();

        // =====================================
        // First Name
        // =====================================

        if(firstName === ""){

            result.errors++;

            hasError = true;

            result.details.push({

                row:index+1,

                type:"Missing First Name",

                teacher

            });

        }

        // =====================================
        // Last Name
        // =====================================

        if(lastName === ""){

            result.errors++;

            hasError = true;

            result.details.push({

                row:index+1,

                type:"Missing Last Name",

                teacher

            });

        }

        // =====================================
        // Grade
        // =====================================

        if(grade === ""){

            result.errors++;

            hasError = true;

            result.details.push({

                row:index+1,

                type:"Missing Grade",

                teacher

            });

        }

        // =====================================
        // Email
        // =====================================

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){

            result.invalidEmails++;

            result.errors++;

            hasError = true;

            result.details.push({

                row:index+1,

                type:"Invalid Email",

                teacher

            });

        }

        // =====================================
        // Same Email
        // Different Teacher
        // =====================================

        if(emailOwners.has(email)){

            const existing =
                emailOwners.get(email);

            if(

                existing.firstName !== firstName ||

                existing.lastName !== lastName

            ){

                result.errors++;

                hasError = true;

                result.details.push({

                    row:index+1,

                    type:"Email Used By Different Teacher",

                    teacher

                });

            }

        }else{

            emailOwners.set(email,{

                firstName,

                lastName

            });

        }

        // =====================================
        // Valid
        // =====================================

        if(!hasError){

            result.validTeachers++;

        }

    });

    console.log("Validation Result");

    console.table(result);

    return result;

}