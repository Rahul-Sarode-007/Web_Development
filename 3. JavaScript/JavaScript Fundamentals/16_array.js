let student_marks = [91, 84, 64, 79, "not present", null, false]

console.log(student_marks) //prenting array

console.log(student_marks[3]) // retrieving array item

student_marks[0] = 96 //modifying existing array item, array counting start with 0

console.log(student_marks) // printing modified array

console.log(student_marks.length) // printing length of array, length counting start with 1

student_marks [7] = "100"  // adding new item to array

console.log(student_marks) // printing modified array


/********************************************************
Printing Array Item Using For Loop.
********************************************************/

for (let i = 0; i<student_marks.length; i++){
    console.log(student_marks[i])
}
