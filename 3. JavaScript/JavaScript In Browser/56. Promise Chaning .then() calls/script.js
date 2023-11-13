// "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"

// callback Hell

const loadScript = (url, callback) => {
  script = document.createElement("script");
  script.src = url;

  script.onload = function () {
    console.log("Script loaded");
    callback(null, url);
  };


  script.onerror = () =>{
    let err = new Error ("new erro")
    callback(err,null)
  }
  document.body.append(script);
};

//main load script call
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
  function hello(err, url) {
      console.log("This is URL: ", url);
      if (err) {
          console.log(err);
        }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
      function hello(err, url) {
          if (err) {
              console.log(err);
              return
            }
            console.log("This is URL: ", url);
        
      }
    );
  }
);

/******************************************************/

//Using Promises to solve same issue

const loadScript1 = (url) => {
    let script = document.createElement("script");
    script.src = url;
    document.body.append(script)
    return new Promise((resolve, reject) => {
    
    script.onload = () => {
      resolve(url);
    };

    script.onerror = () => {
      reject("Error Occured");
    };

});
};

loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")


.then((url)=>{
    console.log("Promises - Script One Sucessfully loaded", url);
    return loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
   
})

.then((value)=>{
    console.log("Promises - second script loaded", value)
})

.catch((err)=>{
    console.log("Promises - Error Occuredd: ", err);

})