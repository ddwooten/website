/**
  * Handles form submission and retreival from ec2 instance providing nlu
  */
function submit_to_ec2() {

	var data;

	url = "ec2-52-86-185-169.compute-1.amazonaws.com";

	url_test = "https://ipinfo.io/json";

	otherParam = {

		method: "POST"

		};

	fetch(url, otherParam)
		.then(response => response.json());
	
	document.getElementById("chatarea").placeholder = "Scooby Doo");

}
