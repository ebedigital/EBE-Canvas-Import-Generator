function buildUserRow(teacher) {

    return {
        user_id: "",
        integration_id: "",
        login_id: teacher.email,
        password: "",
        first_name: teacher.firstName,
        last_name: teacher.lastName,
        full_name: `${teacher.firstName} ${teacher.lastName}`,
        sortable_name: `${teacher.lastName}, ${teacher.firstName}`,
        short_name: teacher.firstName,
        email: teacher.email,
        status: "active"
    };

}