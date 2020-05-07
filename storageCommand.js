//To add a file to IPFS and return the CID
async function addContentToIPFS(){ //create an async function
    for await (const result of node.add(contentToAdd)) { //wait for the result of adding the content, then save the result as "result"
        if (result && result.cid) { //If we successfully reveived a result and the result has a CID available
            return(result.path); //return the IPFS CID of the content we added
            //console.log("CID of content added to IPFS" + result.path) //for debugging
            //console.log('successfully stored', file.cid) //not needed - for if we want that CID within the promise
        }
    }
}
const contentToAdd = "This is a test"; //Some dummy text. Replace with what you want to store.
addContentToIPFS(contentToAdd).then(function(hash){ //Input the content to add, run the async function, and when we get a response push the CID/hash into the following function 
console.log(hash); //share the hash in the console.
});


//Or, try this simpler one:
for await (const result of node.add("Here's a simple test")) {
  console.log(result.path)
}


~~~~~~~~~~~~~~~~~~~~~~
//To retrieve a file at a CID from IPFS and return its content
var receivedBuffer = []
for await (const chunk of node.cat("QmdrRpsuyRWyAVwtkNLViAENqEbB8iC6szFzbwxGuhSVWB")) {
  receivedBuffer.push(chunk)
}
console.log(receivedBuffer.join().toString());
