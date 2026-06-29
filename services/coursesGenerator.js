/*
=========================================
EBE Canvas Import Generator

Module:
Courses Generator

Purpose:
Generate Canvas courses.csv

=========================================
*/

function generateCourses(teachers, metadata){

    const courses = [];

    teachers.forEach(teacher => {

        courses.push({

            course_id:
                createCourseID(
                    teacher,
                    metadata
                ),

            short_name:
                createShortName(
                    teacher,
                    metadata
                ),

            long_name:
                createLongName(
                    teacher,
                    metadata
                ),

            account_id:
                "",

            term_id:
                createTerm(
                    metadata
                ),

            status:
                "active",

            start_date:
                "",

            end_date:
                "",

            course_format:
                "",

            blueprint_course_id:
                createBlueprintID(
                    teacher,
                    metadata
                )

        });

    });

    console.log("Courses Generated");

    console.table(courses);

    return courses;

}