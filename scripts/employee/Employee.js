export const Employee = (employeeObject) => {
    return `
    <article>
        <h4>Employee ${employeeObject.id}:</h4>
        <div>Name: ${employeeObject.firstName} ${employeeObject.lastName}</div>
        <div>Job Title: ${employeeObject.jobTitle}</div>
        <div>Hours Scheduled: ${employeeObject.hoursScheduled}</div> 
    </article>
    `
}