//Place this into the JS console on the html webpage to send a string to IPFS
async function store () {
    const toStore = "This is a test, and only a test!"

    for await (const file of node.add(toStore)) {
      if (file && file.cid) {
        console.log('successfully stored', file.cid)
      }
    }
  }

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
