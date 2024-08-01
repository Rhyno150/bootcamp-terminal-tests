 
// const yearsAgo = require('../yearsAgo.js');
 function yearsAgo(year) {
    const currentYear = new Date().getFullYear();
     return currentYear - year;
   }
  
//   // example //
  console.log(yearsAgo(1990));

 // yearsAgo.js
export  default yearsAgo; 

  
