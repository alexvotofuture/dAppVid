async function addContentToIPFS(){
    for await (const result of node.add(contentToAdd)) {
        if (result && result.cid) {  
            return(result.path); //return the IPFS hash of the content we added
            //console.log("CID of content added to IPFS" + result.path)
            //console.log('successfully stored', file.cid) //not needed
        }
    }
}
const contentToAdd = "This is a test";
addContentToIPFS(contentToAdd).then(function(hash){
console.log(hash);
});


//Or, try this simpler one:
for await (const result of node.add("Here's a simple test")) {
  console.log(result.path)
}


~~~~~~~~~~~~~~~~~~~~~~
//To retrieve
var receivedBuffer = []
for await (const chunk of node.cat("QmdrRpsuyRWyAVwtkNLViAENqEbB8iC6szFzbwxGuhSVWB")) {
  receivedBuffer.push(chunk)
}
console.log(receivedBuffer.join().toString());
