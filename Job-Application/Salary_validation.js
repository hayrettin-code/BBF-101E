function isValidSalary(salaryInput) {
    let salary = Number(salaryInput);
    if (salary < 0) {
        return false;
    }
    return true;
}
