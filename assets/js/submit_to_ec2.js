/**
  * Handles form submission and retreival from ec2 instance providing nlu
  */
function submit_to_ec2() {

	var data;

	const httpObj = new XMLHttpRequest();

	url = "ec2-52-86-185-169.compute-1.amazonaws.com";

	url_test = "https://ipinfo.io/json";

	httpObj.open("GET", url_test);

	httpObj.send();

	httpObj.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){

			console.log(httpObj.responseText)

		}

	}

	document.getElementById("chatarea").placeholder = "Sonya is best girl";

}
