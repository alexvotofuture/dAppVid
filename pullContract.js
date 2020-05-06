const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/4b34a3b5325d483eb92b3a9c5dc159c9')); //Use the Infura project endpoint as the Web3 provider, allowing us to use it as a node.

var stringFromContract; // Set up a variable to store the strong we'll pull from the smart contract

var stringContract = new web3.eth.Contract([ //Create an object that represents the smart contract and lets us interact with it using Web3JS. First argument is the smart contract's ABI (in brackets).
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerSet",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retreive",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "phraseIn",
				"type": "string"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
],'0xa33A40D291172b138C1870330b8489D2779ce69b'); //This second argument (after the ABI) is the address where the contract is deployed.
//console.log(stringContract); //Print out the entire contract object (for debugging purposes).

stringContract.methods.retreive().call(function(err,result){ //Make a call to the smart contract using the contract object we created
	if(!err){ //If there was no error, and the smart contract call successfully returned something...
		stringFromContract = result; //Set the global "stringFromContract variable to the string we retrieved by calling the smart contract
		console.log("Received this string from the contract: " + stringFromContract); //debug by sending the string retrieved from the smart contract to the console.
		document.getElementById("content").innerHTML = stringFromContract;
		document.getElementById("videoContainer").innerHTML = "<video controls><source src=\"http://gateway.ipfs.io/ipfs/"+stringFromContract+"\" type=\"video/mp4\">Your browser does not support the video tag.</video>;"; //take the hash we got as a string from the smart contract and inject it into a video tag, which we then push into the HTML file.

	}else{ //If an error was received...
		console.log("Error received: " + err); //Print the error
	}
});

