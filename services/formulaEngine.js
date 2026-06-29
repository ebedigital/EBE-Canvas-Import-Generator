/*
=========================================
EBE Canvas Import Generator

Module:
Formula Engine

Purpose:
Official Top Score Formula Engine

=========================================
*/

/*
=========================================
Excel LEFT(text,3)
=========================================
*/

function left3(text){

    if(!text) return "";

    return String(text)
        .trim()
        .substring(0,3)
        .replace(/\s+/g,"");

}

/*
=========================================
Format Grade

1  -> G1
2  -> G2
PK -> PK
K  -> K

=========================================
*/

function formatGrade(grade){

    grade = String(grade).trim().toUpperCase();

    if(grade === "PK") return "PK";

    if(grade === "K") return "K";

    return "G" + grade;

}

/*
=========================================
Full Name

Elino Escultura

=========================================
*/

function fullName(teacher){

    return `${teacher.firstName} ${teacher.lastName}`;

}

/*
=========================================
User ID

UID-FLH-Esc-Eli-2027

=========================================
*/

function createUserID(teacher, metadata){

    return `${metadata.userPrefix}-${metadata.schoolCode}-${left3(teacher.lastName)}-${left3(teacher.firstName)}-${metadata.year}`;

}

/*
=========================================
Course ID

CID-FLH-Esc-Eli-G1-2027

=========================================
*/

function createCourseID(teacher, metadata){

    return `${metadata.coursePrefix}-${metadata.schoolCode}-${left3(teacher.lastName)}-${left3(teacher.firstName)}-${formatGrade(teacher.gradeLevel)}-${metadata.year}`;

}

/*
=========================================
Blueprint Course ID

BP-TSWFL-G1-2027

=========================================
*/

function createBlueprintID(teacher, metadata){

    return `${metadata.blueprintPrefix}-${formatGrade(teacher.gradeLevel)}-${metadata.year}`;

}

/*
=========================================
Short Name

Escultura Grade 1 Florida 26-27

=========================================
*/

function createShortName(teacher, metadata){

    return `${teacher.lastName} Grade ${teacher.gradeLevel} ${metadata.state} ${metadata.schoolYear}`;

}

/*
=========================================
Long Name

Escultura Grade 1 Florida

=========================================
*/

function createLongName(teacher, metadata){

    return `${teacher.lastName} Grade ${teacher.gradeLevel} ${metadata.state}`;

}

/*
=========================================
Term

26-27 Default

=========================================
*/

function createTerm(metadata){

    return metadata.term;

}