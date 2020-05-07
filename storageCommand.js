//Place this into the JS console on the html webpage to send a string to IPFS
async function store () {
    const toStore = "This is a test, and only a test!"

    for await (const file of node.add(toStore)) {
      if (file && file.cid) {
        console.log('successfully stored', file.cid)
      }
    }
  }
