/**
  * Handles form submission and retreival from ec2 instance providing nlu
  */
function submit_to_ec2() {

	const httpObj = new XMLHttpRequest();

	url = "https://ec2-52-86-185-169.compute-1.amazonaws.com:5000/chatbot/?passValue=puppies";

	httpObj.open("POST", url);

	httpObj.setRequestHeader('Content-type', 'text/plain')

	httpObj.send("passValue:penguin");

	httpObj.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){

			console.log(httpObj.responseText);

			document.getElementById("chatarea").placeholder = httpObj.responseText;

		}

	}


}
