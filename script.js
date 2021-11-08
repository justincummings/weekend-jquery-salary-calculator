$(document).ready(onReady);

let employees = [];
let totalSalary = 0;


function onReady() {
    console.log("DOM Constructed");
    renderForm(employees)
    renderTotalSalary(employees);
    $('#submit-button').on('click', employeeForm)
    $('#employee-table').on('click', '#delete-button', deleteAddedEmployee)
}

function employeeForm(){
    let fName = $('#fName-input').val();
    let lName = $('#lName-input').val();  
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#salary-input').val();

let addEmployee = {
    firstName: fName,
    lastName: lName,
    id: id,
    title: title,
    salary:Number(salary),
} 
employees.push(addEmployee);
$('#fName-input').val('');
$('#lName-input').val('');
$('#id-input').val('');
$('#title-input').val('');
$('#salary-input').val('');

calculateTotalSalary(totalSalary)
renderForm(employees)
renderTotalSalary()

}

function renderForm(dataToRender){
    $('#employee-table').empty();
    for (let employee of dataToRender){
        let newTableRow = `
        <tr>
          <td>${employee.firstName}</td>
          <td>${employee.lastName}</td>
          <td>${employee.id}</td>
          <td>${employee.title}</td>
          <td>${employee.salary}</td>
        <td><button id='delete-button'>Delete</button></td>
        </tr>
        `;

        $('#employee-table').append(newTableRow);
    }
}

function renderTotalSalary() {
    let totalSalary = calculateTotalSalary();
    $('#total-monthly').text(`${totalSalary}`);
}

function calculateTotalSalary() {
    let totalSalary = 0;
    for (employee of employees) {
        totalSalary += (employee.salary / 12);
        if (totalSalary > 20000) {
        $('h5').css('background-color', 'red');
        }
    }
    totalSalary = totalSalary.toFixed(2)
    return totalSalary;
}






