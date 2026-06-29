const templateRow = usersSheet[1];

const newRow = [...templateRow];

newRow[firstNameColumn] = teacher.firstName;
newRow[lastNameColumn] = teacher.lastName;
newRow[emailColumn] = teacher.email;

users.push(newRow);