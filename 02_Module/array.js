// Here we learn about Array

const employeeData =['suraj', 29, 'surajjha228@gmail.com', 'married'];
 const employeeIds =[2561, 54321, 4456];
 const specification =['Discipline','Hardwork', 'intelligent'];
//   const employeePlace = employeeIds.concat(employeeData)
//   .concat(specification);// we use concat for this merge two or more arrays

// here we use opponent of concat
 const employeePlace =[... employeeData, ... employeeIds, ... specification];

  console.log(employeePlace);
// const employeeData =[1,5,9,7];
// console.log(typeof employeeData);
// let index=20;
// Here we use at in array

// employeeData.push('white'); //here we use push method
// employeeData.pop(2); //here we use pop method
// console.log(employeeData);

// here we use concat prototype in array

