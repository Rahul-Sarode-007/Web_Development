/*
Note: 1 .Error block the code execution flow
2. We can use catch method to catch that error so our program will run the next opertaion(task)
3. but when even "catch" block throw error, we can use "finally", to execute the further code.
4. "finally" will run regardless what happing in privious code.
*/


try {
    console.log(program) //  ReferenceError: program is not defined,  jump to catch block.
    console.log("Task 1") // This line won't be reached
} catch (error) {
    console.log(error)
    console.log("Task 2")
    throw new Error("Simulating error after task 2")//if catch block also throw error then further code will not execute.
}
finally{
    //Finnaly clause will run, even catch throw error
    console.log("Task 3")
    console.log("Task 3 running in finally clause, even after error thrown by catch")





/***********************************************************************/


const myFunction = () =>{
    
    try {
        
        let a = 10
        console.log(a)
        // Even though the return statement is here, finally will run before actually returning.
        return a
    } 
    
    
    catch (error) {
        console.log(error)
    }



    finally{
        /*
        Note:
        1. As we know after "return" keyword code is not reachable
        2. But "finally" block code will run after return keyword too
        3. Technically the code is executing just before "return", even we write it after "return" keyword.
         */
        console.log("I am running...")
        
    }
}


myFunction()

}// ***IMP*** Closing "finally" block here so our "myFunction" function runs


/*
Note: if catch throws error, we can write "finally" clause and whatever code we write in finally will run.
2. But whatever is outside finally will not run, as our previous catch block error blocking the code excetion after finally.
3. We need to wrap the entire code in finally to execute further code.
*/