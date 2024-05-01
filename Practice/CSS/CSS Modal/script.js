let hideModal = document.querySelector(".hide-modal-logo")

hideModal.addEventListener("click",()=>{
    document.querySelector(".container").style.display = "none"
})

let showModal = document.querySelector(".show-modal")
showModal.addEventListener("click",()=>{
    document.querySelector(".container").style.display = "flex"
})