    // the callbacks are in the test script

   getEmployee = (employees,callback)=> {
       /**
        * iterates over the employees list and displays it after a timeout of 1 second.
        */
       setTimeout(() => {
           let employeesNames = employees.map(employee => employee.name);
           const error = undefined;
           return callback(error, employeesNames);
       }, 1000);
   }
   

   createEmployee = (employees,employee, callback) => {
       /**
        * creates a new employee after 2 seconds then, makes a call to callback function to display the same.
        */
       setTimeout(()=>
       {
           employees.push(employee);
           const error = undefined;
           return callback(error, employees);
       }, 2000)
   }  

   module.exports = {getEmployee,createEmployee}
  


