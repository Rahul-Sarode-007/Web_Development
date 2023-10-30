//1. By - Tag Name

document.getElementsByTagName("li") //will return all li item collection
document.getElementsByTagName("li")[2].style.color = "red" //selecting 3rd li element as indexing start from 0

console.log(document.getElementsByTagName("li").length)


/*2. By - Class Name
even we have single element with btn class still it will return the HTML colletion */
document.getElementsByClassName("btn")[0].style.background = "blue"


/*3. By - ID
ID is unique and it only return signle element */
document.getElementById("title").innerHTML = "Bye"


/*4. querySelector, we can use query selector to choice the single item. (return only single (first) item even multiple query selectio rules satisfiled the condition)
This support all the selector combinations to just like CSS */

document.querySelector("#list a").style.background = "pink"


/*5. querySelectorAll
1.Where query selector only give signle element even multiple condtions(rule) satisfiled this will give all the elements which satisfiled the rule
2. Even signle element satisfield the condition but still it will return HTML collection
*/

document.querySelectorAll("#list a")[0].style.color = "yellow"