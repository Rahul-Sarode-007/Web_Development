const sendPostRequest = async(postData) => { 
  
  let postOptions = {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: postData,
  };

  //post request - posting above data to server
  const p = fetch("https://jsonplaceholder.typicode.com/posts", postOptions)
  
  //retriving same posted data from server
  let postResponse = (await p).json()
  return await postResponse
};



//get resquest
const sendGetRequest = async(id)=>{
  let getResponse = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
  
  //retriving data from server
  return await getResponse.json()
 
}

const main = async()=>{
  // Prepare the data for the POST request
  let postData = JSON.stringify({
    title: "Learning post method with fetch API",
    body: "Page body",
    userId: 7,
  })

  //call sendPostRequest function
  //need to write await as sendPostRequest is async function and return promise
  let postRequestData = await sendPostRequest(postData)
  console.log(postRequestData)


  //call sendGetRequest function
  //need to write await as sendGetRequest is async function and return promise
  let getRequestData = await sendGetRequest(5)
  console.log(getRequestData)
}
 
main()
