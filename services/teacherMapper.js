function mapTeachers(teacherRows) {

    return teacherRows

        .filter(row => {

            const first = (row["First Name"] || "").trim();
            const last = (row["Last Name"] || "").trim();

            return first !== "" || last !== "";

        })

        .map(row => ({

            firstName: row["First Name"] || "",
            lastName: row["Last Name"] || "",
            email: row["Email Address"] || "",
            gradeLevel: row["Grade Level"] || ""

        }));

}