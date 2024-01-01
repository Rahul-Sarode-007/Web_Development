const subtitles = [
    "Web Developer",
    "Web Designer",
    "Software Engineer",
    "UI/UX Enthusiast",
  ];

let currentSubtitleIndex = 0

const SubtitleElement = document.querySelector(".subtitle h2")
let curser =  document.querySelector(".curser")
curser.style.backgroundColor = "red"
curser = curser.textContent

const typeSubtitle = (subtitle) =>{
    currentindex = 0
    const typingSubtitle = setInterval(()=>{
        SubtitleElement.textContent = subtitle.substring(0,currentindex) + curser;
        currentindex ++

        if (currentindex > subtitle.length){
            clearInterval(typingSubtitle)
            eraseSubtitle(subtitle)
        }
        
    },100)
}


const eraseSubtitle = (subtitle)=>{
    let currentindex = subtitle.length
    // console.log(currentindex)

    const erasingSubtitle = setInterval(()=>{
        SubtitleElement.textContent = subtitle.substring(0,currentindex) + curser;
        currentindex --
        // console.log(currentindex)

        if (currentindex === 0){
            clearInterval(erasingSubtitle)

            if (currentSubtitleIndex === subtitles.length-1){
            currentSubtitleIndex = 0
            } 
            else{
                currentSubtitleIndex = currentSubtitleIndex + 1
                // console.log(currentSubtitleIndex, (subtitles.length-1))
            }

            updateSubtite(currentSubtitleIndex)
        }
    },50)

}

const updateSubtite = (currentSubtitleIndex) =>{
    typeSubtitle(subtitles[currentSubtitleIndex])
}

updateSubtite(currentSubtitleIndex)
