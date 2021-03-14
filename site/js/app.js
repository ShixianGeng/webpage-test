// Create a root reference
var storageRef = firebase.storage().ref();
var name;

var nameinput = document.getElementById("nameinput");
nameinput.addEventListener('submit',updateName);

var form = document.getElementById("form");
form.addEventListener('submit', uploadVideo());



function uploadVideo(){
	return function curried_function(event){
		if(name === ""){
			alert("You must input a name!");
		}else{
			var file = document.getElementById("vid").files[0];
			var ref = storageRef.child(name+'/');
			var upload = document.getElementById("upload");
			upload.innerText = "Uploading... Please Wait."
			ref.put(file).then((snapshot) =>{
			alert("Submitted video. Thank you very much!");
			upload.innerText = "Uploaded"
			});
			event.preventDefault();

		}


	}
}

function updateName(event){
	name = document.getElementById("username").value;
	if(name === ""){
		alert("You must input a name!");
	}else{
		alert("Name updated!");
	}
	event.preventDefault();
}


