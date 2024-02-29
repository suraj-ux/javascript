// here we learn some datatype(dataTypes are that in which store values) these are given below 

// number, bigInt, bollean, string,object, array, null,undefined 


// Here we start some conversion here

//const userId ="";
//const userLogIn = Boolean(userId);
//console.table([userLogIn]);

// Hii This is the series of conversion so we change number to string

// Here we go

const littleBitNumber = 'Hello Suraj';
const needString = Number(littleBitNumber);
const someMore = String(Number(littleBitNumber));
const littleMore = Object(String(Number(littleBitNumber)));
console.table([needString, someMore, littleMore]);

