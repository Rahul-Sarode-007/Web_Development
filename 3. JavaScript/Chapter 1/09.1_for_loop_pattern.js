/*        OUTPUT:
          *
          * *
          * * *
          * * * *
          * * * * *         

*/

for (let j = 0; j < 5; j++) {
  for (let i = 0; i <= j; i++) {
    if (i < j) {
      process.stdout.write("*" + " "); //i=0    j=1
    } else {
      process.stdout.write("*" + "\n"); //i=0    j=1
    }
  }
}

// ************************************************************************

/*      OUTPUT:
        * * * * *
        * * * *
        * * *
        * *
        *
        
*/

console.log("**************************************************");

for (let i = 0; i < 5; i++) {
  //i=0
  for (let j = 5; j > i; j--) {
    //j=5
    if (j > i + 1) process.stdout.write("*" + " ");
    else {
      process.stdout.write("*" + "\n"); //i=5    j=4
    }
  }
}

// ************************************************************************


/*


 OUTPUT:
            *
          * *
        * * *
      * * * *
    * * * * *

*/

console.log("**************************************************");

for (let j = 4; j >= 0; j--) {
    for (let i = 0; i < 5; i++) {
        
        // console.log(i)
        if (i < j) {
          process.stdout.write(" " + " ");
        } 
        
        else {
          process.stdout.write("*" + " ");
          if (i==4){
            process.stdout.write(" \n");
          }
        }

      }
}

// ************************************************************************

/*

OUTPUT:
* * * * *
  * * * *
    * * *
      * *
        *

*/
console.log("**************************************************");

for(let j=0; j<5; j++){
  for (let i=0; i<5 ; i++){
  if(i>=j){
    process.stdout.write("*" + " ");
    if(i==4){
      process.stdout.write(" \n");
    }
  }
  else{
    process.stdout.write("  ");

  }
}
}

/* ***********************************************************************
OUTPUT:


    *
   ***
  *****
 *******
*********

*/


    

// Partially Done
// console.log("**************************************************");

// let num = 5;

// for(let j=0; j<10; j+=2){
//   for(let i = 1; i<=9; i++){
    
//     if(i!=num)
//     process.stdout.write(i + " ");
//     else{
//     process.stdout.write("*" + " ");
//       for(let k=0; k<2; k++){

//       }
//     }
//     if(i==9){
//     process.stdout.write("\n");
  
//     }
    
//   }
// }

