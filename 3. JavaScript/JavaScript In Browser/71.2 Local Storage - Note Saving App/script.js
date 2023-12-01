localStorage.clear();

const newNote = () => {

    //Learning set method
    let noteTitle = document.querySelector(".inputTitle").value;
    localStorage.setItem("title", noteTitle);
  
    let inputDescription = document.querySelector(".inputDecription").value;
    localStorage.setItem("note", inputDescription);
  

    //Learning get method
    myNote = localStorage.getItem("note");
    myTitle = localStorage.getItem("title");
  
    document.querySelector(".Note_title").innerHTML = myTitle;  
    document.querySelector(".Note_description").innerHTML = myNote; 
};

document.querySelector(".inputTitle").addEventListener("input", newNote);
document.querySelector(".inputDecription").addEventListener("input", newNote);
