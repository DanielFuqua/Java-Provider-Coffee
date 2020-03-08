import { useEmployee } from "./employeeDataProvider.js";
import { Employee } from "./Employee.js";

const contentTarget = document.querySelector(".container__employee")
export const EmployeeList = () => {
    contentTarget.innerHTML = "<h2>Employees</h2>"
    const employeeArray = useEmployee()
    for (const employeeObject of employeeArray) {
        const employeeHTML = Employee(employeeObject)
        contentTarget.innerHTML += employeeHTML
    }
}

