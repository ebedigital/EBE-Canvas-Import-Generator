/*
=========================================
EBE Canvas Import Generator

Module:
Users Generator

Purpose:
Generate Canvas users.csv

=========================================
*/

function generateUsers(teachers, metadata){

    const users = [];

    teachers.forEach(teacher => {

        users.push({

            user_id:
                createUserID(
                    teacher,
                    metadata
                ),

            integration_id:
                "",

            login_id:
                teacher.email,

            password:
                "topscore123",

            first_name:
                teacher.firstName,

            last_name:
                teacher.lastName,

            full_name:
                fullName(teacher),

            sortable_name:
                "",

            short_name: "",

            email:
                teacher.email,

            status:
                teacher.email ? "active" : ""

        });

    });

    console.log("Users Generated");

    console.table(users);

    return users;

}