/*
=========================================
EBE Canvas Import Generator

Module:
Enrollment Generator

Purpose:
Generate Canvas enrollments.csv

=========================================
*/

function generateEnrollments(users, courses, metadata){

    const enrollments = [];

    users.forEach((user, index) => {

        const course = courses[index];

        enrollments.push({

            course_id:
                course.course_id,

            root_account:
                metadata.rootAccount,

            user_id:
                user.user_id,

            role:
                "Educator",

            role_id:
                "",

            section_id:
                "",

            status:
                "active",

            associated_user_id:
                "",

            limit_section_privileges:
                ""

        });

    });

    console.log("Enrollments Generated");

    console.table(enrollments);

    return enrollments;

}