 
   // Define a getEmployee function that iterates over the employees list and displays it
   // Employees must be displayed after a timeout of 1 second.
   getEmployee = (employees,callback)=> {
       setTimeout(() => {        
           // Write code here to display the name of the employee and return a callback        
           return callback();           
       });
   }
   
   // Define a function that creates a new employee after 2 seconds.
   // and then makes a call to callback function to display the same.
   createEmployee = (employees,employee, callback) => {   
       setTimeout(()=>
       {
           // write your code here to push new employee to employees list and return a callback.           
           return callback();
       })
   }  

   module.exports = {getEmployee,createEmployee}
  


