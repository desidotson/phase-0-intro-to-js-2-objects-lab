const employee = {
    name: "Tom",
    streetAddress: "123 Main St",
  };
function updateEmployeeWithKeyAndValue (name, key, value) {
    return {...employee, [key]: value};
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Tom");
console.log(updatedEmployee);
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}